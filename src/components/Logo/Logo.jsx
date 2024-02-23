import React from 'react'
import './logo.css'
import { NavLink } from 'react-router-dom'

const Logo1 = () => {
    return (
        <>
            <div className="flex lg:flex-1">
                <NavLink to={'/'} className='logo -m-1.5 p-1.5'>
                    <span className="h-8 w-auto"><i className='bx fs-4 bxs-smile'></i>SHOPEE</span>
                </NavLink>
            </div>
        </>
    )
}

export default Logo1