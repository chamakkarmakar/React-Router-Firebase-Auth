import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
import './Header.css';

const Header = () => {

    const { user, handleSignOut } = useFirebase();

    return (
        <div className='header-container'>
            <h2>Router-Firebase</h2>
            <nav className='header'>
                <Link to='/'>HOME</Link>
                <Link to='/products'>PRODUCTS</Link>
                <Link to='/orders'>ORDERS</Link>
                {
                    user?.uid ? <span className='display-name'>{user.displayName}</span> : <Link to='/register'>SIGN UP</Link>
                }
                {
                    user?.uid ? <Link to='/' onClick={handleSignOut} >SIGN OUT</Link> : <Link to='/login'>SIGN IN</Link>
                }
            </nav>
        </div>
    );
};


export default Header;