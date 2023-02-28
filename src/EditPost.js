import React from 'react'
import UserBar from './UserBar'
import EditPostP from './EditPostP'
import Blank from './Blank'
import './EditPost.css'
function EditPost() {
  return (
    <div className='editp'>
       <UserBar/>
       <EditPostP/>
       <Blank/>
    </div>
  )
}

export default EditPost
