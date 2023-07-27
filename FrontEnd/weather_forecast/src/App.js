import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from './Registration';
import Home from './Home';
import Login from './Login';
import Weatherrep from './weatherrep';
import World from './World';
import SelectWithOptions from './Addrem';
import InputWithOptions from './Addrem';
import Aboutus from './Aboutus';
import Admin from './Admin';
import Adminlog from './Adminlog';
import PostDetails from './Postdetails';
import Feedback from './Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/world' element={<World/>}/>
        <Route path='/report' element={<Weatherrep/>}/>
        <Route path='/adminlog' element={<Adminlog/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/adhome' element={<Admin/>}/>
        <Route path='/adminpost' element={<PostDetails/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
      </Router>
    // <InputWithOptions/>
  );
}

export default App;
