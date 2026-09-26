const authConfig = require("@/config/auth");
const authService = require("@/services/auth.service");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.register(email, password);
  const accessToken = authService.generateAccessToken(user);

  res.success({
    accessToken,
    accessTokenTTL: authConfig.accessTokenTTL,
  });
};

module.exports = { register };
