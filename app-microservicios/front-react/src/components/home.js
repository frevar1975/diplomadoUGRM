import React, { useEffect, useState } from 'react';
import useToken from './usetokem';

export default function Home() {

    const { token, setToken } = useToken();
    
    const [user, setUser] = useState({});
    const [books, setBooks] = useState([]);
    const [test, setTest] = useState('');


    useEffect( async () =>{
        let userinfo = await getUserInfo();
        setUser(userinfo);

        if(userinfo){
            let books = await getBooksInfo();
            setBooks(books);
        }
     },[]);

    const getUserInfo = async () =>{
        try{
            console.log('token:', token);
            const url = `http://localhost:5555/get-user-info?token=${token}`;
            const data = await fetch(url);
    
            const res = await data.json();

            console.log('getUserInfo',res);
            return res;

        }catch(err){
            console.log(err);
        }
    }

    const getBooksInfo = async () => {
        const url = `http://localhost:8080/api/get_all/${user.id}/${token}`;
        console.log(url);
        const data = await fetch(url);

        const res = await data.json();
        console.log('getBooksInfo', res, 'userid', user.id);
        return res;
    }

    return (
        <div>
            <h2>Bienvenido {user.username} {user.id}</h2>

            <div>
                {books.map(book => <div key={book.id}>{book.title}</div>)}
            </div>
        </div>
    );
}