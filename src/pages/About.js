import React, {useState, useRef, useEffect}from 'react';
import Galaxy from '../assets/galaxy.jpeg';
import '../styles/About.css';
import Beat from '../assets/audio.mp3';

function About () {

    const audio = useRef(new Audio(Beat));

    const [isPlaying, setPlayStatus] = useState(false)

    const [buttonText, setButtonText] = useState("Play")

    const toggleButton = (text) => {
        setButtonText(text)
    }

    const togglePlay = () => {
        setPlayStatus(!isPlaying)
    }

    const start = () => {
        if (isPlaying) {
            audio.current.pause();
            toggleButton("Play")
            togglePlay();
        }
        else {
            audio.current.play();
            toggleButton("Pause")
            togglePlay();
        }
    }

    useEffect(() => {
        return () => {
          audio.current.pause();
          toggleButton("Pause")
          togglePlay();
        };
    }, []);

    return (
        <div className = "about">
            <div className = "aboutTop" style={{backgroundImage: `url(${Galaxy})`}}></div>
            <div className = "aboutBottom">
                <h1>About Me</h1>
                <p>I'm currently a computer science and engineering major
                    with a minor in mathematics at the University of Nevada, Reno! 
                    My expected graduation is December 2022 (one semester early).
                    I'm originally from Las Vegas.
                </p>
                <p>Most of my coding experience is in Python, C, and C++, 
                    but I've worked with a variety of languages including
                    Java, and even Scheme and Prolog. This website is written in
                    HTML and CSS of course with Javascript and React. I have a 
                    big interest in machine learning, and I have experience with machine learning libraries
                    in Python such as PyTorch, Tensorflow, Keras, and Pandas. My first experience with
                    machine learning came in Summer of 2021 when I helped with research
                    with a professor and a graduate student regarding the use
                    of machine learning in counterfeit prevention.
                </p>
                <p>I also have an interest in internet security, and I have experience with
                    Nmap, iptables, and Snort along with a good understanding of the 
                    TCP/IP Protocol stack.
                </p>
                <p>Since my major includes computer engineering, I am also proficient
                    with circuits. I have experience with many IC chips and building 
                    complex ciruits with these. I also have experience working with Raspberry
                    Pis and Arduinos including using I/O pins and programming Arduinos in C.
                </p>
                <p>I'm known to get fixated on things, so I'm always very open to 
                    learning new things! Outside of my professional life I'm into
                    making music and lifting weights. Check out a song I made below
                    using FL Studio.
                </p>
                <button className = "playButton" onClick = {start}>{buttonText}</button>
            </div>
        </div>
    );
}

export default About;