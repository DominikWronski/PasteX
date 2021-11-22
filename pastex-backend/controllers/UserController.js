let User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    // @desc Register new user account
    // @route GET /api/v1/users/
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
}