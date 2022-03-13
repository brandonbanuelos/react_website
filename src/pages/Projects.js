import React, {useRef} from 'react';
import { ProjectsList } from '../helpers/ProjectsList';
import '../styles/Projects.css';
import ProjectItem from '../components/ProjectItem';
import PySynthImage from "../assets/pysynth.png";
import InstaBotImage from "../assets/instabot.svg";
import I3DDemoImage from "../assets/i3d.png";
import PatrolBotV1Image from "../assets/patrolbotv1.png";
import PatrolBotV2Image from "../assets/patrolbotv2.png";
import PatrolBotV3Image from "../assets/patrolbotv3.png";

function Projects() {

    const PySynth = useRef(null);  
    const InstaBot = useRef(null);
    const PatrolBotV1 = useRef(null);
    const PatrolBotV2 = useRef(null);
    const I3DDemo = useRef(null);
    const PatrolBotV3 = useRef(null);

    const refArray = [PySynth, InstaBot, PatrolBotV1, PatrolBotV2, I3DDemo, PatrolBotV3]

    const scroll = (ref) => {
        if(ref.current){
            ref.current.scrollIntoView({behavior: "smooth"})
        }
    } 

    return (
        <div className="projects">
            <h1 className="projectsTitle">My Projects</h1>
            <div className="projectsList">{ProjectsList.map((projectItem, key) => {
                return <button onClick={() => scroll(refArray[key])}>< ProjectItem 
                key = {key}
                image={projectItem.image} 
                name ={projectItem.name} 
                year ={projectItem.year}/></button>
                
            })}
            </div>
            <div className="projectsText">
                <h1 ref={PySynth} className="PySynth">PySynth</h1>
                    <img src ={PySynthImage}></img>
                    <p>This project was term project for my first semester at
                        university in 2019. It acted as a virtual analog
                        synthesizer. I programmed this in Python using PyAudio,
                        Tkinter, NumPy, and MatPlotLib. This project uses a crude
                        form of UI, but it was my first real project using code. It
                        was based on additive synthesis and had two oscillators that
                        generated different types of sound waves based on NumPy functions.
                        Click below to find my source code and my video presentation of it!
                    </p>
                    <div className="buttonContainer">
                        <button type="button" 
                        onClick = {(e) => { e.preventDefault();
                        window.location.href="https://youtu.be/OitXpHwO8Ho";}}
                        className="PySynthVideo">View Video</button>
                        <button 
                        onClick = {(e) => { e.preventDefault();
                            window.location.href="https://github.com/brandonbanuelos/PySynth";}}
                        className="PySynthCode">View Code</button>
                     </div>
                <h1 ref={InstaBot} className="InstaBot">InstaBot</h1>
                    <img src ={InstaBotImage}></img>
                    <p>This project was something I did using Python and Selenium.
                        It uses Selenium to access the HTML elements inside of Instagram's
                        website, so it automates the browsing experience. Instagram is
                        full of bots these days, so I wondered how difficult it would be 
                        for me to make one. This specific one logs in, goes to a specific hashtag,
                        and likes and/or comments on posts depending on your user settings.
                    </p>
                    <button 
                    onClick = {(e) => { e.preventDefault();
                        window.location.href="https://github.com/brandonbanuelos/InstaBot";}}
                    className="InstaBotCode">View Code</button>
                <h1 ref={PatrolBotV1} className="PatrolBotV1">PatrolBotV1</h1>
                    <img src ={PatrolBotV1Image}></img>
                    <p>This project marked the beginning of my senior project with a team of
                        four other students. This
                        is an ambitious attempt to combine, software, robotics, and 
                        machine learning, to detect bike theft. This version was dubbed V1 after the fact
                        because it was a prototype. It used primitive graphics and ran 
                        locally as a desktop software with only one machine learning 
                        model. It was programmed in Python using PyTorch, PyQt5, and
                        NumPy. It was meant to be ran locally on a Raspberry Pi 
                        which controlled the robot, and the Pi
                        would be VNC'd in order to view the feed. The machine learning model
                        was trained on images of bikes, humans, bolt cutters, and angle grinders.
                        If objects were detected, they would be placed into the logs, so
                        the user could view any potentially dangerous threats. The repository for this one
                        has been transformed into the the 1.5 version, so I will include the link
                        in the next section.
                    </p>
                <h1 ref={PatrolBotV2} className="PatrolBotV2">PatrolBotV2</h1>
                    <img src ={PatrolBotV2Image}></img>
                    <p>This version of the project marked the next step into the final product.
                        This version was still ran locally, but it added a state-of-the-art
                        Slow Fast Model trained on Kinetics 400 to detect actions through
                        live video. This meant the robot could now detect aggressive actions
                        coupled with the use of object detection to get a fuller picture of 
                        possible bike theft. This also added the use of IOU (intersection 
                        over union) of objects such as bolt cutters or angle grinders on
                        top of bikes in order to provide a type of threat model algorithm
                        Additionally, this version marked an increase in the UI components of 
                        the software. This time the UI was customized using CSS. The link below
                        contains the 1.5 version of PatrolBot. This means it has the action detection
                        model and algorithm, but it doesn't have the upgraded UI. This is because
                        version 2 was still part of the prototype development.
                    </p>
                    <button 
                    onClick = {(e) => { e.preventDefault();
                        window.location.href="https://github.com/banuelos-brandon/PatrolBot";}}
                    className="PatrolBotV1.5">View Code</button>
                <h1 ref = {I3DDemo} className="I3DDemo">I3D Demo</h1>
                    <img src ={I3DDemoImage}></img>
                    <p>This demo was created to show of my novel solution to a problem
                        my group encountered during the development of PatrolBotV3. The issue
                        was that the action detection model ran on mp4 files rather than lists
                        or arrays of frames. PatrolBotV3 was the transformation from a locally-ran
                        application to a web application, so saving and loading mp4 files would have
                        added too much complication. Instead I decided to find a way to save a series
                        of frames from the webcam and format them into a way that was readable by the 
                        Slow Fast or Inflated 3D models for action detection. This demo also
                        shows off the training on this model done by my team. We trained this model
                        to detect if behavior is aggressive or not. This demo takes
                        webcam input and stores it during the duration of running time 
                        in the code, and predicts whether or not behavior from the video clip 
                        is agressive or not.
                    </p>
                    <button
                    onClick = {(e) => { e.preventDefault();
                        window.location.href="https://github.com/brandonbanuelos/I3DDemo";}} 
                    className="I3DCode">View Code</button>
                <h1 ref = {PatrolBotV3} className="PatrolBotV3">PatrolBotV3</h1>
                    <img src ={PatrolBotV3Image}></img>
                    <p>This version of PatrolBot is still in development as of March 2022. 
                        This is the full webapp version of the software. The robot was now 
                        provided to us by a robotics professor at the University of Nevada, Reno, and 
                        the web application controls the frontend and backend. We are using Django with
                        HTML, CSS, and Javascript, on an elastic beanstalk instace. Video data
                        is streamed from a Raspberry Pi on the robot to the Django app where both machine
                        learning models are ran. Commands from the website's frontend are sent to
                        a separate Raspberry Pi on the robot which takes the commands and interprets them
                        as ROS code before sending it to the robot. The repository is currently private.
                    </p>
                </div>
        </div>

    );
}

export default Projects;