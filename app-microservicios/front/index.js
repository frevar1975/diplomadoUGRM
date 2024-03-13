require('dotenv').config();
const express           = require('express');
const app               = express();
const cors              = require('cors');
const axios             = require('axios');
const PORT              = process.env.PORT || 3000;

let tokenAccess = undefined;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', express.static('./public'));
app.use('/register', express.static('./public/register.html'));
app.use('/home', validate, express.static('./public/home.html'));

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    
    try {
        const data = await axios.post(process.env.AUTH_URI, {username, password});
        const token = data.data.token;
        console.log('usuario logueado exitosamente', token);
        tokenAccess = token;

        res.cookie('auth', token);
        res.redirect('/home');
    } catch (error) {
        res.send(error);
    }
});

function validate(req, res, next){
    if(tokenAccess){
        next();

    }else{
        res.send(403);
    }
}

app.listen(PORT, () => {
    console.log(`Server front iniciado en puerto ${PORT}...`);
});