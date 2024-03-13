import {React, useState} from 'react';
import { Redirect } from 'react-router';

import useToken from './usetokem';


export default function Login({ setAccessToken }) {

    const { token, setToken } = useToken();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const data = await fetch('http://localhost:5555/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        });

        const res = await data.json();
        if(!res.token){
            console.error('Usuario y/o contraseña incorrecta');
        }else{
            console.log('correcto');
            localStorage.setItem('token', res.token);
            setToken(res.token);
    
            console.log(res);
        }

    }

    if(setAccessToken != undefined) return <Redirect to="/home" />

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label><br/>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} /><br/><br/>

                <label for="password">password</label><br/>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} /><br/><br/>

                <input type="submit"  value="Iniciar sesión" />
            </form>
        </div>
    );
}