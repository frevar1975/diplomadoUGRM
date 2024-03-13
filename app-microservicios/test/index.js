require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');



const registerRoute = require('./routes/register');
const authRoute = require('./routes/auth');
const getUserInfoRoute = require('./routes/userinfo');
const userexistsRoute = require('./routes/userexists');
const verifyToken = require('./routes/verifytoken');
const postsRoute = require('./routes/posts');


app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect('mongodb://dev:dev@mongo/libritos', err => {
    if(err) {
        throw new Error(err);
    }
    
    console.log('Connected to database...');
} );

app.get('/', (req, res) => {
    res.send('Hola mundo desde Docker!!');
});


app.post('/register', registerRoute);
app.post('/auth', authRoute);
app.get('/get-user-info', verifyToken, getUserInfoRoute);
app.get('/posts', verifyToken, postsRoute);



app.listen(5555, () => {
    console.log('servidor test iniciado...');
});
