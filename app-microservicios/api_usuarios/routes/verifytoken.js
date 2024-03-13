const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('auth-token') || req.query.token;
    
    if(!token) res.status(401).json({message: 'Access denied'});

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        console.log('req.user', req.user);
        next();
    }catch(err){

    }
}