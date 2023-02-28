import Titlebar from './Titlebar';
import DeletePost from './DeletePost';
import Home from './Home';
import Show from './Show';
import User from './User';
import EditUser from './EditUser';
import EditPost from './EditPost';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Titlebar/>
      <div className="Body">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id" element={<Show/>}/>
        <Route path="/usercreate" element={<User/>}/>
        <Route path="/user/:userid/posts/:id" element={<DeletePost/>}/>
        <Route path="/user/updateUser/:id" element={<EditUser/>}/>
        <Route path="/user/updatePost/:userid/:id" element={<EditPost/>}/>
      </Routes>
      </div>
    </Router>
   
    
    </div>
  );
}

export default App;
