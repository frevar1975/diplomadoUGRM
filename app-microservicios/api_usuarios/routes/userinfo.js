const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    
    console.log(req.user.id);
    User.findOne( {_id: req.user.id}, (err, user) => {
        if(err){
            res.json({
                message: 'Error al buscar al usuario'
            });
        }else if(!user){
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