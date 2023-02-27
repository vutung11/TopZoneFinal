import React, { useEffect, useState } from 'react'
import User from '../components/User'

const Users = () => {
    const [users, setUsers] = useState(null)
   
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const responseJSON = await response.json();
            setUsers(responseJSON)
        }
        fetchData()
    },[])

    const deleteUser = (id) =>{
      setUsers(users.filter((user)=> user.id !== id))
    }

   
    
  return (
    <div>
      <p>User App</p>
        {users && users.map((user) => <User key={user.id} {...user} handleDelete={deleteUser}/> )}
    </div>
  )
}

export default Users