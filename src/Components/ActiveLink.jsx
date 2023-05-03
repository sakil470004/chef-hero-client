import React from 'react';
import { NavLink } from 'react-bootstrap';

const ActiveLink = ({ to, children }) => {
    console.log(to)
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;