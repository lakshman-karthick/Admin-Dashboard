import React, { useState } from 'react'
import NewPosts from './NewPosts'
import UserBar from './UserBar'
import UserPosts from './UserPosts'
import './Show.css'
function Show() {
  const [post,setPost] = useState([]);
  
  return (
    <div className='show'>
      <UserBar/>
      <UserPosts post={post} setPost = {setPost}/>
      <NewPosts post1={post} setPost1 = {setPost}/>
    </div>
  )
}

export default Show
