import React, { useState } from 'react';

import { Redirect } from "react-router-dom";

export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const data = await fetch('http://localhost:5555/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        });

        const res = await data.json();

        console.log(res);
        return <Redirect to="/login" />
    }

  return (
    <div>
        <h2>Registrar usuario</h2>
        <form onSubmit={handleSubmit}>
            <label for="username">Username</label><br/>
            <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} /><br/><br/>

            <label for="password">password</label><br/>
            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} /><br/><br/>

            <input type="submit"  value="Iniciar sesión" />
        </form>
    </div>
  )
}