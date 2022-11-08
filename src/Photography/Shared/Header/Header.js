import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/service'>Service</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold">RH-<p className='text-red-500'>PHOTOGRAPHY</p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/all-service'>Services</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><button className="btn btn-active btn-primary font-bold">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;