import React, { useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import './UserPosts.css'


function UserPosts({post,setPost}) {
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${id}/posts`).then(res=>{
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err=>{
        console.log(err)
        console.log('ERROR')
      })
    },[id])

    const deleteUser = (e)=>{
          e.preventDefault();
          axios.delete(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${id}`)
          .then(()=>{
            console.log("User Deleted");
            setPost(null)
          });
    }



  return (
    <div className='postsBG'>
      <div className='order'>
        <p className='posts'>POSTS of user {id}</p>
        <div className='editDel'>
          <div className='edit'>
          <Link to={`/user/updateUser/${id}`}>
          <EditRoundedIcon/>
          </Link>
          </div>
          <div className='delete'>
            <DeleteRoundedIcon onClick={deleteUser}/>
          </div>
        </div>
      </div>
      <div className='chat_body'>
      {post?
          post.map((p)=>(
            <div key={p.id} className='userPost'>
             <p className='bold'>{p.Title}</p>
             <div className='cont'>
                {p.content}
             </div>
             <div className='updel'>
             <div className='upmsg'>
             <Link to={`/user/updatePost/${id}/${p.id}`}>
               <EditRoundedIcon/>
             </Link>
             </div>
             <div className='delmsg'>
             <Link to={`/user/${id}/posts/${p.id}`}>
             <DeleteRoundedIcon/>
             </Link>
             </div>
             </div>
            
             
            </div> 
        )):(
          <div className='popup'>
          <p className='pp'>User Deleted</p>
          </div>
          )
      }
        
      </div>
      
    </div>
  )
}

export default UserPosts
