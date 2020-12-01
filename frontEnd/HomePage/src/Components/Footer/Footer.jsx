import React from 'react';
import './Footer.css'
import {AiFillGithub} from "react-icons/ai";

const Footer = () => 
{

    return(
        <footer className="footer">
            <p>Powered By <a href="https://github.com/victalmeida/Reciclagem"> <b style={{color:'rgb(41, 41, 41)'}}> SPUTNIK  <AiFillGithub className="ml-1" style={{color:'white'}} size={25}/> </b> </a></p>
        </footer>
    );
}

export default Footer;