import React, { useState,useEffect } from 'react'
import './UserBar.css'
import { Avatar } from '@material-ui/core'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import axios from 'axios';
import {Link} from "react-router-dom";
function UserBar({user,setUser}) {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
      axios.get('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users').then(res=>{
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },[])
    
    return (
      <div className='usersBG'>
      <div className='f'> 
        <p className='users'>USERS</p>
        <div className='icon'>
        <Link to={'/userCreate'}>
        <AddCircleRoundedIcon/>
        </Link>
        
        </div>
      </div>
      
      
      <div className='marginn'>
        {
           posts.map((user1)=>(
            <Link to={`/user/${user1.id}`}>
            <div key={user1.id} className='userr'>
            <div className='avat'>
            <Avatar src={user1.avatar} />
            </div>
            <p>{user1.name}</p>
            </div>
            </Link>
        ))}
      </div>
        
      </div>
    )
}

export default UserBar
