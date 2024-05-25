import React from 'react'
import { useSelector } from 'react-redux'


function PageDate() {

  const user = useSelector (state => state)

  console.log(user);
  return (
    <h2>

      u name: {user.name}, 
      <hr />
      u age: {user.age}, 
      <hr />
      u profile: {user.profile}, 
      <hr />
      u gender: {user.gender}
      
    </h2>
  )
}

export default PageDate