const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    
    User.findOne( {'_id': req.user.id}, (err, user) => {
        if(err){
            res.status(500).json({
                message: 'Error al buscar al usuario'
            });
        }else if(!user){
            res.status(500).json({
                message: 'User not found'
            });
        }else{
            res.send('El usuario existe y se llama ' + user.username);
        }
    });
}