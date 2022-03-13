// This website heavily draws from 
// https://github.com/machadop1407/react-website-tutorial

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path= {process.env.PUBLIC_URL + '/'} element={<Home />} />
        <Route path= {process.env.PUBLIC_URL + "/projects"} element={<Projects />} />
        <Route path= {process.env.PUBLIC_URL + "/about"} element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
