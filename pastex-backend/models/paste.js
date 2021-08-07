let mongoose = require('mongoose');

let pasteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

let Paste = module.exports = mongoose.model('Paste', pasteSchema);