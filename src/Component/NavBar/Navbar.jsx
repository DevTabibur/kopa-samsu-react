import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <div className="nav">
                <h1 className="logo">Gun Store</h1>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">CONTACT US</a></li>
                    <li><a href="#">LOGIN</a></li>
                    <li><a href="#">CART <sup>0</sup> </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;