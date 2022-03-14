// This website heavily draws from 
// https://github.com/machadop1407/react-website-tutorial

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/projects' element={<Projects />} />
        <Route path= '/about' element={<About />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
