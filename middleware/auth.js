const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  //get token

  const token = req.header('x-auth-token');

  //chek if not token

  if (!token) {
    return res.status(401).json({ msg: 'No token , authorization denied' });
  }

  // Verify token

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user; // decoded est un objet
    console.log(req.user);
    next();
  } catch (error) {
    res.send(401).json('Token is not valid');
  }
};
