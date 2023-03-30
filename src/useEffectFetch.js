import React from 'react';
import './App.css';
import { useState,useEffect} from "react";

const url = 'https://api.github.com/users';
const UseEffectFetch = () => {
    const [users,setUser]= useState ([]);
    const getUsers=async()=>{
     const response = await fetch(url);
     console.log(response);
     const users = await response.json();
     setUser(users);
     console.log(users);
    };
    useEffect(()=>{
        getUsers();
    },[]);
 
//  useEffectFetch();
  return (
    <>
    <div className='content'>
        <div className='head'>
        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
     alt='hii'
     />
    <h1>Github Users</h1>
        </div>
    <ul className='users'>
        {users.map((user)=>{
            const {id,login,avatar_url,url}= user;
            return (
                <>
            <li key={id} className='list'>
            <img
            src = {avatar_url}
            alt = {avatar_url}/>

            <div className='about' >
                <h4 className='name'>
                    {login}
                </h4>
                <a href={url} className='anger'>profile</a>
            </div>
            </li>
            </>
            )
        })}
    </ul>
    </div>
    
    </>
  );
}

export default UseEffectFetch;