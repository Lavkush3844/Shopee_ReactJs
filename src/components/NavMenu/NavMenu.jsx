import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav-menu.css'


const NavMenu = () => {

    const allSideMenu = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Mobile',
            path: '/about',

        },
        {
            title: 'Laptop',
            path: '/pages',

        },
        {
            title: 'Speakers',
            path: '/contact',

        },

    ];
    return (
        <>
            <div className='nav-menu flex min-[320px]:flex-col lg:flex-row'>
                {allSideMenu.map((menu, index) => (
                    <NavLink key={index} to={menu.path}>
                        <span>{menu.title}</span>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default NavMenu;