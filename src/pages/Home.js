import React from 'react'; 
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Galaxy from '../assets/galaxy.jpeg'
import Weather from '../components/Weather';

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${Galaxy})`}}>
            <div className="headerContainer" >
                <h1>Hi, I'm Brandon Banuelos</h1>
                <p>I'm a computer science and engineering student
                    at the University of Nevada, Reno 
                    with a minor in mathematics</p>
                <Link to="/about">
                <button>Learn more</button>
                </ Link>
            </div>
                <Weather />
        </div>
        
    );
}

export default Home;