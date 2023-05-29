import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

function Devtests() {
    const navigateTo = useNavigate();
    const handleClick = () => {
        navigateTo('/portfolio');
        //     scrollTo(x, y)
        window.scrollTo(0, 0);
        // hide burguer nav
        setBar('nav__burguer-btn');
        setBurguerClass('nav__burguer-cont');
    }

    return (
        <>
        <main className='home'>
            <img src="./img/proximamente.png"></img>
            <button className='temporal-btn' to='/portfolio' onClick={handleClick}>Ver Portfolio <RxDoubleArrowRight/></button>
            <h1>DevTests: Álvaro está trabajando en ello, probablemente, ahora mismo.</h1>
        </main>
        </>
    )
}

export default Devtests