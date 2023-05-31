import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const Github = () => {
    
    const [user, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("https://api.github.com/users/arhmAli")
        .then(res=>{
            setUsers(res.data);
        }).catch(err=>{
            console.log(err);
        })
    })
    return (
        <> 
        <h3>User requested Info from the api:</h3>
        <img src={user.avatar_url} alt={`${user.login}'s Avatar`} />
         <p>Name: {user.name}</p>
         <p>Followers: {user.followers}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Account creation date: {user.created_at}</p>
        <p>Last updated account:{user.updated_at}</p>
        </>        
    )
}
export default Github;