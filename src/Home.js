import React from 'react'
import NewPosts from './NewPosts'
import UserBar from './UserBar'
import UserPosts from './UserPosts'
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <UserBar/>
      <UserPosts/>
      <NewPosts/>
    </div>
  )
}

export default Home
