import React from 'react'
import UserBar from './UserBar'
import EditUserP from './EditUserP'
import './EditUser.css'
import Blank from './Blank'
function EditUser() {
  return (
    <div className='editu'>
      <UserBar/>
      <EditUserP/>
      <Blank/>
    </div>
  )
}

export default EditUser
