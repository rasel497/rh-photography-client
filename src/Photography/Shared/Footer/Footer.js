import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div data-theme="dark">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='text-white'>
                    <img className='rounded-xl' src="/footerlogo.PNG" alt="" />
                    <p>RH-PHOTOGRAPHY<br />Providing reliable photoshot since 2020</p>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Wedding Photoshot</Link>
                    <Link className="link link-hover">Birthday Photoshot</Link>
                    <Link className="link link-hover">Modeling Photoshot</Link>
                    <Link className="link link-hover">Traveling Photoshot</Link>
                    <Link className="link link-hover">Food Ads Photoshot</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Reviews</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <p className='text-center text-red-500'>Copyright by rh-photography@2022</p>
            </footer>

        </div>
    );
};

export default Footer;