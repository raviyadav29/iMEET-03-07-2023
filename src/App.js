import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Skill from './Component/Skill';
import Nav from './Component/Navbar/Nav';

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skill' element={<Skill />} />
      </Routes>
    </div>
  );
}

export default App;
