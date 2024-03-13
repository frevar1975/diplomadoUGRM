require('dotenv').config()

console.log('Hola!!!');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const registerRoute = require('./routes/register');
const authRoute = require('./routes/auth');
const getUserInfoRoute = require('./routes/userinfo');
const userexistsRoute = require('./routes/userexists');
const verifyToken = require('./routes/verifytoken');
const postsRoute = require('./routes/posts');


app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING, err => {
    if(err) {
        console.log('ERROR DE CONEXIÓN: ' + Err.message);
        throw new Error(err);
    }

    console.log('Connected to database...');
} );


app.post('/register', registerRoute);
app.post('/auth', authRoute);
app.get('/get-user-info', verifyToken, getUserInfoRoute);
app.get('/posts', verifyToken, postsRoute);

console.log("Holi!!!");

app.listen('3001', () => {
    console.log('Server Usuarios iniciado...');
});