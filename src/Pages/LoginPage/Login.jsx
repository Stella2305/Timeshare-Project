import { faFacebookF, faGoogle, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const nav = useNavigate();

    const linkHome=()=>{
        nav(`/`);
    }

    const linkRegister=()=>{
        nav(`/register`);
    }
  return (
    <div>
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className='sign-in-form'>
                        <h2 className='title'>Sign in</h2>
                        <div className="input-field">
                            <span className='awesome-icon'>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input type="text" placeholder='Username' />
                        </div>
                        <div className="input-field">
                            <span className='awesome-icon'>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" placeholder='Password' />
                        </div>
                        <input type="submit" value="Login" className='btn solid' onClick={linkHome}/>

                        <p className="social-text">Or Sign with social flatforms</p>
                        <div className="social-media">
                            <a href="#" className='social-icon'>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </a>
                            <a href="#" className='social-icon'>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="#" className='social-icon'>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className='social-icon'>
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>Join us to experience your vacation fully and meaningfully.</p>
                        <button className='btn transparent' 
                                id="sign-up-btn"
                                onClick={linkRegister}>
                            Sign up
                        </button>
                    </div>
                    <img src="/assets/Draw/log1.svg" className='image' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

