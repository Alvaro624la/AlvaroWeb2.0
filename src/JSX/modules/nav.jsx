import React from 'react'
import {NavLink} from 'react-router-dom';

function nav() {

    return (
        <>
        <nav class='nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/devtests'>DevTests</NavLink>
            <NavLink to='/devestudio'>DevEstudio</NavLink>
        </nav>
        </>
    )
}

export default nav