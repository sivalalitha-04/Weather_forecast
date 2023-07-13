import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from './Registration';
import Home from './Home';
import Login from './Login';
import Weatherrep from './weatherrep';
import World from './World';
import DynamicInputs from './Addrem';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route index element={<Home/>}/>
    //     <Route path='/home' element={<Home/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/register' element={<RegistrationForm/>}/>
    //     <Route path='/world' element={<World/>}/>
    //     <Route path='/report' element={<Weatherrep/>}/>
    //   </Routes>
    //   </Router>
    <DynamicInputs/>
  );
}

export default App;
