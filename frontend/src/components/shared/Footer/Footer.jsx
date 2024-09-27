import React from 'react';
import './Footer.css'
import logo from './assets/logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter-alt.png';
import linkedin from './assets/linkedin.png';

const CommerceName = "WordMark";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sb_footer section_padding">
                <hr></hr>

                <div className="sb_footer-links">
                    <div className="sb_footer-logo">
                        <img alt="" src={logo} className="footer-logo"/>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Discovery</h4>
                        <a href="/new-season">
                            <p>New Season</p>
                        </a>
                        <a href="/most-searched">
                            <p>Most Searched</p>
                        </a>
                        <a href="/new-selled">
                            <p>Most Selled</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>About</h4>
                        <a href="/help">
                            <p>Help</p>
                        </a>
                        <a href="/shipping">
                            <p>Shipping</p>
                        </a>
                        <a href="/afilliate">
                            <p>Afilliate</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Info</h4>
                        <a href="/contact-us">
                            <p>Contact Us</p>
                        </a>
                        <a href="/privacy">
                            <p>Privacy Policies</p>
                        </a>
                        <a href="/terms-and-conditions">
                            <p>Terms & Conditions</p>
                        </a>
                    </div>
                    <div className="sb_footer-social-div">
                        <h5>Follow us</h5>
                        <div className="socialmedia">
                            <p>
                                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt=""/></a>
                            </p>
                            <p>
                                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""/></a>
                            </p>
                            <p>
                                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=""/></a>
                            </p>
                            <p>
                                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p className="copyright">&copy;{new Date().getFullYear()} {CommerceName} All Rights Reserverd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;