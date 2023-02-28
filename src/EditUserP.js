import axios from 'axios';
import React ,{useState}from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import './EditUserP.css'
function EditUserP() {
    const {id} = useParams();
    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const updateUser= (e)=>{
           e.preventDefault();
           axios.put(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${id}`,{
                createdAt:new Date().toLocaleString(),
                name : name,
                avatar : avatar,
           })
           .then(()=>console.log('response'));
           setName("");
           setAvatar("");
    }
  return (
    <div className='editup'>
      <p className='newCr'>EDIT USER</p>
      <div className='backk'>
      <Link to={`/user/${id}`}>
        <ArrowBackIosNewOutlinedIcon/>
      </Link>
      </div>
      
     <div className='newUser'>
      <form className='form-group'>
          <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)}  height="50" placeholder='enter username' type="text" name="name"/>
          <input className='form-control' value={avatar} onChange={(e)=>setAvatar(e.target.value)} height='100px' placeholder='enter avatar url' type="text" name="message"/>
          <button type="submit" onClick={updateUser} class="btn btn-danger">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default EditUserP
