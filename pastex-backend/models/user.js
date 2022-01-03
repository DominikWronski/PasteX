const mongoose = require('mongoose');
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

// userSchema.methods.comparePassword = function(password, callback) {
//     bcrypt.compare(password, this.password, function(err, isMatch) {
//         if (err) return callback(err);
//         callback(null, isMatch);
//     });
// };

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

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