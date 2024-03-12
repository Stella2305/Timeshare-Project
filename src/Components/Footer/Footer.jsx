import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>
        <footer>
            <div className="row">
                <div className="col">
                    <img src="/assets/react.svg" className='logo' />
                    <p>The website is not owned by any company. This is a test project for learning, all information here is inaccurate.</p>
                </div>
                
                <div className="col">
                    <h3>ABOUT <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Features</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>TIMESHARES FOR SALE <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="#">Find Timeshares for Sale</a></li>
                        <li><a href="#">Buy Timeshare Points</a></li>
                        <li><a href="#">Sell My Timeshare</a></li>
                    </ul>
                </div>
                <div className="col">
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebook} className='fab facebook'/>
                        <FontAwesomeIcon icon={faInstagram} className='fab instagram'/>
                        <FontAwesomeIcon icon={faTwitter} className='fab twitter' />
                        <FontAwesomeIcon icon={faPinterest} className='fab pinterest'/>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>FPT University &copy; 2024 </p>
        </footer>
    </div>
  )
}
