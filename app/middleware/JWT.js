const jwt = require('jsonwebtoken');
const secret = require('../config/config.js');

const jwtMakeHash = (id) => {
const token = jwt.sign({ id }, secret.JWT_SECRET,{ expiresIn: 86400});
}