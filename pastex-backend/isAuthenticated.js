module.exports = function (req, res, next) {
    // passport.authenticate('jwt', function (err, user) {
    //     if (err || !user) {
    //     res.status(403).send('You don\'t have access to this resource.')
    //     } else {
    //     req.user = user
    //     next()
    //     }
    // })(req, res, next)
    try {
        console.log(req.headers);
    } catch (error) {
        
    }
}