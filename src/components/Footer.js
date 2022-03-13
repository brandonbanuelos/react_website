import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {

    return (
    <div className="footer">
        <div className="socialMedia">
        <InstagramIcon onClick = {(e) => { e.preventDefault();
                        window.location.href="https://instagram.com/brandonbanuelos";}}/>
        <GithubIcon onClick = {(e) => { e.preventDefault();
                        window.location.href="https://github.com/brandonbanuelos";}}/>
        </div>
        <p> &copy; 2022 brandonbanuelos.com</p>
        <p>brandonmb2000@gmail.com</p>
    </div>
    );
}

export default Footer;