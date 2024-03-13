const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    console.log('auth route');

    const {username, password} = req.body;

    console.log({username, password});

    if(!username || !password) res.status(200).json({statuscode: 400, message: 'Introduce usuario y contraseña'});

    User.findOne( {username}, (err, user) => {
        if(err){
            console.log('Error al buscar al usuario');
            res.status(500).json({
                message: 'Error al buscar al usuario'
            });
        }else if(!user){
            console.log('Usuario no encontrado');
            res.status(500).json({
                message: 'User not found'
            });
        }else{
            user.isCorrectPassword(password, function(err, result){
                if(err){
                    console.log('Error al comparar passwords');
                    console.log(err);
                    res.status(500).json({message: 'Error al comparar passwords'});
                }else if(result){
                    // crear token
                    console.log('autenticado');
                    const token = jwt.sign({id:user.id}, process.env.TOKEN_SECRET);
                    res.header('auth-token', token).json({message: 'Usuario autenticado', token: token});
                }else{
                    console.log('Error al comparar passwords 2');
                    res.status(500).json({message: 'Error al comparar passwords'});
                }
            });
        }
    });    
}