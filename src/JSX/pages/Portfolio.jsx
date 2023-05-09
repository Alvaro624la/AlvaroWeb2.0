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
        <aside id="scroll-up-btn" className={claseBtnUpScroll} onClick={()=>window.scroll(0, 0)}>
            <div className="scroll-up__stick"></div>
            <div className="scroll-up__arrow"></div>
        </aside>
        </>
    );
}

export default Portfolio;