import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer(){
    return (
        <footer className="footer">
            <h5>Connect with me socially</h5>
            <ul>
                <li>
                <a href="https://www.instagram.com/sruthi_codes"><InstagramIcon/></a>
                </li>
                <li>
                <a href="https://twitter.com/CodesSruthi" target="_blank"><TwitterIcon/></a>
                </li>
                <li>
                <a href="https://github.com/sruthiragupathy" target="_blank"><GitHubIcon/></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/sruthi-ragupathy-7740ab172/" target="_blank"><LinkedInIcon/></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;