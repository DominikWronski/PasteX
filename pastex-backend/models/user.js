let mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

userSchema.pre('save', function(next) {
    return bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            return next();
        })
        .catch(err => {
            throw new Error();
        })
})

let User = module.exports = mongoose.model('User', userSchema);