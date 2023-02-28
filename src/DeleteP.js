import axios from 'axios';
import React from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link, useParams } from 'react-router-dom'
import './DeleteP.css'
function DeleteP() {
    const {userid,id} = useParams();
    const deletePosts =()=>{
        console.log(`${userid}`);
        console.log(`${id}`);
        axios.delete(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${userid}/posts/${id}`)
        .then(()=>{
            console.log('Deleted Success');
        })
    }
  return (
    <div className='delp'>
    <div className='box'>
    <div className='back'>
        <Link to={`/user/${userid}`}>
        <ArrowBackIosNewOutlinedIcon/>
        </Link>
    </div>
   
      
      <p>Delete the post</p>
      <div>
      <button type="submit" onClick={deletePosts} class="btn btn-danger">Submit</button>
      </div>
    </div>
     

    </div>
  )
}

export default DeleteP
