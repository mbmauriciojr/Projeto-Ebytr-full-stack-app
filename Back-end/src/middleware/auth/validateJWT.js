const jwt = require('jsonwebtoken');
const model = require('../../models/userModel');

const secret = process.env.SECRET_TOKEN;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await model.findByEmail(decoded.data.email);

    if (!user) {
      return res.status(401).json({ message: 'jwt malformed' });
    }

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
