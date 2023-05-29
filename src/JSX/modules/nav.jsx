import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logoADP from '/img/logo-adp.png';

function nav() {
    //burguer Nav in - on and bars move functions
    const [bar, setBar] = useState('nav__burguer-btn');
    const [burguerClass, setBurguerClass] = useState('nav__burguer-cont');
    const burguerNavIn = () => {
        bar === 'nav__burguer-btn' ? setBar('nav__burguer-btn burguer-nav-bars-to-X') : setBar('nav__burguer-btn');
        burguerClass === 'nav__burguer-cont' ? setBurguerClass('nav__burguer-cont burguer-in') : setBurguerClass('nav__burguer-cont');
    }
    const scrollAndHideBrgNav = (e) => {
    // console.log(navWAIARIA.current.childNodes);

        //     scrollTo(x, y)
        window.scrollTo(0, 0);
        // hide burguer nav
        setBar('nav__burguer-btn');
        setBurguerClass('nav__burguer-cont');
    };

    return (
        <>
        <nav className='nav'>
            <NavLink to=''>
                <img aria-label='Logo Alvaro de Prado' alt='Logo Alvaro de Prado' src={logoADP}/>
            </NavLink>
            <article className={burguerClass}>
                <NavLink className='nav__link' to='' onClick={scrollAndHideBrgNav}>Inicio</NavLink>
                <NavLink className='nav__link' to='/portfolio' onClick={scrollAndHideBrgNav}>Portfolio</NavLink>
                <NavLink className='nav__link' to='/blog' onClick={scrollAndHideBrgNav}>Blog</NavLink>
                <NavLink className='nav__link' to='/devtests' onClick={scrollAndHideBrgNav}>DevTests</NavLink>
                <NavLink className='nav__link nav__link__last' to='/contacto' onClick={scrollAndHideBrgNav}>Contacto</NavLink>
            </article>
            <article className={bar} onClick={burguerNavIn}>
                <section></section>
                <section></section>
                <section></section>
            </article>
        </nav>
        </>
    )
}

export default nav