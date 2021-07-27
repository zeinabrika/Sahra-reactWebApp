import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
 return (
     <div className='footer-container'>
         <section className="footer-subscription">
          <p className="footer-subscription-heading">
              Join the Advanture newsletter to receive our best
              vacation deals.
          </p>
          <p className="footer-subscription-text">
              You can unsubcribe at any time
          </p>
          <div className="input-areas">
              <form>
               <input type="email" name="email" placeholder="Your Email"
               className="footer-input" />
               <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
          </div>
         </section>
         <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
                 
             </div>
         </div>
         <section className="social-media">
             <div className="social-media-wrap">
                <div className="footer-logo">
                  <Link to="/" className="social-logo">
                      SAHRA <i className='fab fa-typo3' />
                  </Link>
                </div>
                <small className="website-rights"></small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i className="fab fa-facebook" />
                    </Link>
                    <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i className="fab fa-instagram" />
                    </Link>
                    <Link className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i className="fab fa-twitter" />
                    </Link>
                    <Link className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'
                        >
                        <i className="fab fa-linkedin" />
                    </Link>
                </div>
             </div>
         </section>
     </div>
 )
}

export default Footer;