import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Weater  from './Weater'
import Github from './Github'
function App() {
  //Fetching and Rendering a List of Users
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setUsers(res.data)
    })
  },[])
  return (
    <>
      <ul>
        <h3>Users From the api</h3>
        {users.map(user=>(
          <li
          key={user.id}>
            {user.name}-{user.email}
          </li>
        ))}
      </ul>
      <Weater/>
      <Github/>
    </>
  )
}

export default App
