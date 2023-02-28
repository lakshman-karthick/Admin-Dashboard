import React from 'react'
import NewPosts from './NewPosts'
import UserBar from './UserBar'
import DeleteP from './DeleteP'
import './DeletePost.css'
function DeletePost() {
  return (
    <div className='delpost'>
      <UserBar/>
      <DeleteP/>
      <NewPosts/>
    </div>
  )
}

export default DeletePost
