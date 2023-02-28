import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import './EditPostP.css'
function EditPostP() {
    const {userid,id} = useParams();
    const [Title,setTitle] = useState('');
    const [post,setPost] = useState('');
    const putPost = (e)=>{
          e.preventDefault();
          axios.put(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${userid}/posts/${id}`,{
            createdAt:new Date().toLocaleString(),
            Title:Title,
            content:post,
            userId:userid,
          }).then(()=>console.log('Successful Edit'));
          setTitle("");
          setPost("");
    }
  return (
    <div className='editpos'>
    <div className='order1'>
    <p className='new'>EDIT POST</p>
      <div className='backk'>
      <Link to={`/user/${userid}`}>
        <ArrowBackIosNewOutlinedIcon/>
      </Link>
      </div>
    </div>
      
      
      <div className='newPost'>
        <form className='form-group'>
            <input className='form-control' value={Title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter title' size="50" height="50"  type="text" name="name"/>
            <textarea className='form-control' value={post} onChange={(e)=>setPost(e.target.value)} placeholder='enter content' height='100px' name="message"/>
            <button type="submit" onClick={putPost} class="btn btn-danger">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditPostP
