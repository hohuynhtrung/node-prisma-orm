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
    const tokenPayload = {
      sub: user.id,
      exp: expiresAt,
    };
    const accessToken = jwt.sign(tokenPayload, authConfig.jwtSecret);
    return accessToken;
  }

  async getUserById(id) {
    const user = await prisma.user.findUnique({
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        avatar: true,
        isVerified: true,
        emailVerifiedAt: true,
      },
      where: { id },
    });
    return user;
  }
}

module.exports = new AuthService();
