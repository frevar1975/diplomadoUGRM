const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    
    console.log('get user info: *',req.user.id+'*');
    User.findOne( {_id: req.user.id}, (err, user) => {
        if(err){
            console.log('Error al buscar al usuario: ' + err);
            res.json({
                message: 'Error al buscar al usuario'
            });
        }else if(!user){
            console.log('Usuario no encontrado');
            res.json({
                message: 'User not found'
            });
        }else{
            res.json({
                id: user['_id'],
                username: user.username
            });
        }
    });    
}