import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
            <NavLink to="/portfolio" activeClassName="selected"> Portfolio </NavLink>
            <NavLink to="/contact"  activeClassName="selected"> Contact </NavLink>
            </div>
    )
};

export default Header;