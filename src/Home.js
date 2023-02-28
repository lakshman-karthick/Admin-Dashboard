import React from 'react'
import NewPosts from './NewPosts'
import UserBar from './UserBar'
import Blank1 from './Blank1'
import './Home.css'
import Blank from './Blank'
function Home() {
  return (
    <div className='home'>
      <UserBar/>
      <Blank1/>
      <Blank/>
    </div>
  )
}

export default Home
