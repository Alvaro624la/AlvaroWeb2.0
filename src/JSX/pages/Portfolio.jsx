import { useState } from 'react';
import Inicio from './portfolio_components/Inicio';
import Conocimientos from './portfolio_components/Conocimientos';
import Proyectos from './portfolio_components/Proyectos';
import ContextoADPC from './portfolio_components/context/Context';
import Certificaciones from './portfolio_components/Certificaciones';

function Portfolio() {

    const [claseBtnUpScroll, setClaseBtnUpScroll] = useState('scroll-up');

    window.addEventListener('scroll', ()=>{
        window.scrollY > 1000 
        ? setClaseBtnUpScroll('scroll-up scroll-up-in')
        : setClaseBtnUpScroll('scroll-up');
    });

    return (
        <>
        <ContextoADPC>
        <Inicio/>
        <Conocimientos/>
        <Proyectos/>
        <Certificaciones/>
        </ContextoADPC>
        <article id="scroll-up-btn" className={claseBtnUpScroll} onClick={()=>window.scroll(0, 0)}>
            <section className="scroll-up__stick"></section>
            <section className="scroll-up__arrow"></section>
        </article>
        </>
    );
}

export default Portfolio;