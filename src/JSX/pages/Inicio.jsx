import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

function Inicio() {
    //Redireccionamiento TEMPORAL al cargar Inicio
    const navigateTo = useNavigate();

    useEffect(()=>{
        (()=>{
            navigateTo('/portfolio');
            //     scrollTo(x, y)
            window.scrollTo(0, 0);
        })();
    },[]);
    
    const handleClick = () => {
        navigateTo('/portfolio');
        //     scrollTo(x, y)
        window.scrollTo(0, 0);
    }

    return (
        <>
        <main className='home'>
            <img src="./img/proximamente.png"></img>
            <button className='temporal-btn' onClick={handleClick}>Ver Portfolio <RxDoubleArrowRight/></button>
            <h1>Inicio: Álvaro está trabajando en ello, probablemente, ahora mismo.</h1>
        </main>
        </>
    )
}

export default Inicio