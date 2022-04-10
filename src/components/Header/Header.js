import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Router-Firebase</h2>
            <nav className='header'>
                <Link to='/'>HOME</Link>
                <Link to='/products'>PRODUCTS</Link>
                <Link to='/orders'>ORDERS</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to='/registration'>REGISTRATION</Link>
            </nav>
        </div>
    );
};

export default Header;