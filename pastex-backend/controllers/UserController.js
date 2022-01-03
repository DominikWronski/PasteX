let User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    // @desc Register new user account
    // @route GET /api/v1/users/register
    // @access Public
    async register (req, res) {
        const userExists = await User.findOne({ email: req.body.email});
        if(!userExists) {
            const usernameExists = await User.findOne({ username: req.body.username});
            if(!usernameExists) {
                if(req.body.username.length < 3 || req.body.password.length < 3) {
                    res.status(500).send('Username or password is too short.')
                } else {
                    //Create account
                    const user = await User.create({
                        username: req.body.username,
                        password: req.body.password,
                        email: req.body.email
                    })
                    res.status(201).send({user, res: 'Account has been created successfully.'})
                }
            } else {
                res.status('409').send('This username is taken.');
            }
        } else {
            res.status('409').send('This user already exists.')
        }
    },
    // @desc Login to a user account
    // @route GET /api/v1/users/login
    // @access Public
    async login (req, res) {
        try {
            const user = await User.findOne({ username: req.body.username});
            if(!user) {
                // res.status('404').send('There is no such user.')
                res.status('403').send('Username or password is wrong.');
            } else {
                const isPasswordValid = await user.comparePassword(req.body.password);
                if(!isPasswordValid) {
                    res.status('403').send('Username or password is wrong.');
                } else {
                    const token = jwt.sign({ id: user._id, username: user.username, isAdmin: user.isAdmin}, process.env.TOKEN_SECRET, {expiresIn: 86400})
                    // res.status('200').send('Successfully logged in.');
                    res.status('200').send(token);
                }
            }
        } catch (err) {
            
        }
    },


}