let Paste = require('../models/paste');

module.exports = {
    // @desc Get all pastes
    // @route GET /api/v1/pastes/
    // @access Public
    async getPastes (req, res) {
        try {
            let pastes = await Paste.find({});
            if(pastes) {
                res.status(200).send(pastes);
            } else {
                res.status(404).send('There are no pastes.')
            }
        } catch (err) {
            res.status(500).send('Something went wrong.')
            console.log(err);
        }
    },
    // @desc Get specific paste
    // @route GET /api/v1/pastes/:id
    // @access Public
    async getPaste (req, res) {
        try {
            let paste = await Paste.findById(req.params.id);
            if(paste) {
                res.status(200).send(paste);
            } else {
                res.status(404).send('There is no paste with this id.')
            }
        } catch (err) {
            res.status(500).send('Something went wrong.')
            console.log(err);
        }
    },
}