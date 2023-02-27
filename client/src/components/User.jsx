import React from 'react'

const User = ({id,name,email, handleDelete}) => {
  return (
    <div>
        <p>{name} - {email}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default User