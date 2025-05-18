const jwt = require('jsonwebtoken')
const { unAuthError } = require('../errors');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new unAuthError('No token provided.');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, userName } = decoded;
        req.user = { id, userName };
        next()
    } catch (error) {
        throw new unAuthError('Authorization denied.');
    }

}

module.exports = authMiddleware;