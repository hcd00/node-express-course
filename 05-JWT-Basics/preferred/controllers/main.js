const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors')

const login = async (req, res) => {

    const { userName, password } = req.body
    if (!userName || !password) {
        throw new BadRequestError("Please provide email and password");
    }
    //mock id
    const id = new Date().getDate();

    //keep payload size small
    const token = jwt.sign({ id, userName }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: ' User created. Heres your token:', token })
}

const dashboard = async (req, res) => {
    const luckyNum = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Welcome ${req.user.userName}`, secret: `JWT: ${luckyNum}` })
}

module.exports = { login, dashboard }
