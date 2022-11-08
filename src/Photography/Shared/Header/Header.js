import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        return logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 semibold text-md shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/service'>Service</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='/Gallary'>Gallary</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold"><FaCamera className='mr-2 text-xl'></FaCamera>RH-<p className='text-red-500'>PHOTOGRAPHY</p></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-md font-semibold p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/all-service'>Services</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/Gallary'>Gallary</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                </ul>
            </div>


            {/* Thsi only for naver loign & logout Conditonal rendering */}
            <div className="navbar-end px-2">
                <Link className='flex'>
                    {
                        user?.uid ?
                            <>
                                <div className="navbar">
                                    <span> {user?.displayName} </span>
                                    <Link className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                        {user?.photoURL ?
                                            <img className='rounded-full ml-3'
                                                style={{ width: '40px' }}
                                                src={user.photoURL} alt="" />
                                            :
                                            <FaUserCircle className='text-3xl'></FaUserCircle>
                                        }
                                    </Link>
                                </div>

                                <button onClick={handleLogOut} className="btn px-4 m-2">Log Out</button>
                            </>
                            :
                            <>
                                <div className="navbar">
                                    <button className="btn px-4 m-2"> <Link to='/login'>Login</Link></button>
                                </div>
                            </>
                    }

                </Link>

                {/* <Link to='/login' className="btn px-4 m-2">Login</Link> */}
            </div>
        </div>
    );
};

export default Header;