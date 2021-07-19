import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { SiQzone} from 'react-icons/si';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Who are we</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to=''>Phone: 416-719-1234</Link>
            <Link to=''>Email: info@prozone.com</Link>
            <Link to=''>Adress: 85 Carl Hall Rd, Toronto</Link> 
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <SiQzone className='navbar-icon' />
              PROZONE
            </Link>
          </div>
          <small className='website-rights'>by <i>KD~D∃$</i></small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='https://www.facebook.com/TorontoRaptors/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='https://www.instagram.com/torontofcacademy/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                'https://www.youtube.com/user/overtimeathletes'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='https://twitter.com/raptors905?lang=en'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;