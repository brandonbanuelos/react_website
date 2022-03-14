// This website heavily draws from 
// https://github.com/machadop1407/react-website-tutorial

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path= '/' element={<Home />} />
        <Route exact path= '/projects' element={<Projects />} />
        <Route exact path= '/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
