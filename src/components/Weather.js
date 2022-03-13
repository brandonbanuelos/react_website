// code adpated from https://levelup.gitconnected.com/weather-app-in-react-js-ca668ae86b14

import React, {useState, useEffect} from 'react';
import "../styles/Weather.css"

function Weather () {
    const key = '2862a6c33d53b07969c9c582ad230fcc';
    const [feelsLike, setFeelsLike] = useState('');
    const[mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather/?q=Reno&units=imperial&APPID=' + key)
        .then(res=>res.json())
        .then(data=>{
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            setIcon(data.weather[0].icon);
        })
    }, [])

    return (
        <div className="weather">
            <h1>What's the weather like in Reno right now?</h1>
            <p>Feels like: {feelsLike}</p>
            <p>Acutal temperature: {mainTemp}</p>
            <p>Description: {description}</p>
            <img src= {"http://openweathermap.org/img/wn/" + icon + "@2x.png"}></img>
        </div>
    );
}

export default Weather;