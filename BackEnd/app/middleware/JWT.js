const jwt = require('jsonwebtoken');
const secret = require('../config/config.js');

const jwtMakeHash = (id) => {
return jwt.sign({ id }, secret.JWT_SECRET,{ expiresIn: 86400});
}

module.exports = jwtMakeHash;