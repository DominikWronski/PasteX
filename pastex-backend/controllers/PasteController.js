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
                res.status(404).send('There are no pastes')
            }
        } catch (err) {
            res.status(500).send('Something went wrong.')
            console.log(err);
        }
    },
}