import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './NewPosts.css'
function NewPosts({post1,setPost1}) {

    const [Title,setTitle] = useState('');
    const [post,setPost] = useState('');
    
    const {id} = useParams(); 
    useEffect(()=>{
        axios.get(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${id}`).then(res=> console.log(res.data))
    },[id])
    const postPost = (e)=>{
            e.preventDefault();
            axios.post(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${id}/posts`,{
              createdAt:new Date().toLocaleString(),
              Title:Title,
              content:post,
              userId:id,
            }).then((res)=>setPost1([...post1,res.data]));
            setTitle("");
            setPost("");
           
            
  }
  return (
    <div className='newBG'>
      <p className='new'>NEW POST</p>
      <div className='newPost'>
        <form className='form-group'>
            <input className='form-control' value={Title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter title' size="50" height="50"  type="text" name="name"/>
            <textarea className='form-control' value={post} onChange={(e)=>setPost(e.target.value)} placeholder='enter content' height='100px' name="message"/>
            <button type="submit" onClick={postPost} class="btn btn-danger">Submit</button>
        </form>
      </div>
    </div>
  )
}


export default NewPosts
