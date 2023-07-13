import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from './Registration';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>
      </Routes>
      </Router>
    // <Home/>
  );
}

export default App;
