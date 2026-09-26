const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("@/libs/prisma");
const authConfig = require("@/config/auth");

class AuthService {
  async register(email, password) {
    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });
    return user;
  }

  generateAccessToken(user) {
    const expiresAt = Math.floor(Date.now() / 1000) + authConfig.accessTokenTTL;
    const accessToken = jwt.sign(
      {
        sub: user.id,
        exp: expiresAt,
      },
      authConfig.jwtSecret,
    );
    return accessToken;
  }
}

module.exports = new AuthService();
