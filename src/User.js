import React from 'react'
import UserBar from './UserBar'
import UserCreate from './UserCreate'
import Blank from './Blank'
import './User.css'
function User() {
  return (
    <div className='user'>
      <UserBar />
      <UserCreate />
      <Blank/>
    </div>
  )
}

export default User
