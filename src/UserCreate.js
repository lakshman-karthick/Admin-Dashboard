import React,{useState} from 'react'
import './UserCreate.css'
import axios from 'axios';
function UserCreate() {
    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const postUser = (e)=>{
        e.preventDefault();
        axios.post(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users`,{
          createdAt:new Date().toLocaleString(),
          name:name,
          avatar:avatar,
        }).then((res)=>console.log(res.data));
        setName("");
        setAvatar("");
}
  return (
    <div className='userCr'>
    <p className='newCr'>NEW USER</p>
    <div className='newUser'>
      <form className='form-group'>
          <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)}  height="50" placeholder='enter username' type="text" name="name"/>
          <input className='form-control' value={avatar} onChange={(e)=>setAvatar(e.target.value)} height='100px' placeholder='enter avatar url' type="text" name="message"/>
          <button type="submit" onClick={postUser} class="btn btn-danger">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default UserCreate
