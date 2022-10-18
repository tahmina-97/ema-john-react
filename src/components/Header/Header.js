import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Contexts/UserContext';

import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Order</Link>
                <Link to='/inventory'>Manage Inventory</Link>
                {
                    user?.uid ?
                        <button onClick={logOut} className='btn-logout'>Log Out</button>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </>
                }
                <span className='color'>{user?.email}</span>

            </div>


        </nav>
    );
};

export default Header;