const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {

    const {username, password} = req.body;
    
    
    const usermodel = new User({username, password});

    usermodel.save( err =>{
        if(err){
            console.log(err);
            res.status(500).json({message: 'Error al registrar usuario...'});
        }else{
            res.status(200).json({
                message: 'Usuario creado con éxito...'
            });
        }


    });
}