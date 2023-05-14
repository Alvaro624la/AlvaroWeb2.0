import React, { useContext, useState, useRef, useEffect } from 'react';
import { ContextADPC } from './context/Context';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

function Proyectos() {

    //Project laptop viewer
    const {Proyectos} = useContext(ContextADPC);
    const arr = Object.entries(Proyectos);
    const [i, setI] = useState(0);
    const nextProject = () => i < arr.length - 1 ? setI(i+1) : setI(0);
    const prevProject = () => i > 0 ? setI(i-1) : setI(arr.length-1);

    //animate btns when scrollY arrives ==> when element is intersecting on intersectionObserver
    const [pcBtnsClass, setPcBtnsClass] = useState('proyectos__pc-screen-cont__pc-viewer__btns__ico');
    const [isIntersecting, setIsIntersecting] = useState(false);
    const box = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
        );
        // console.log(isIntersecting);
        observer.observe(box.current);
    
        return () => observer.disconnect();
    }, [isIntersecting]);
    
    useEffect(() => {
        if (isIntersecting) {
            setPcBtnsClass('proyectos__pc-screen-cont__pc-viewer__btns__ico anim-botiRueda');
        } else {
            setPcBtnsClass('proyectos__pc-screen-cont__pc-viewer__btns__ico');
        }
    }, [isIntersecting]);

    return (
        <>
        <main className='proyectos'>
            <article className='proyectos__pc-screen-cont'>
                <h3 className='proyectos__pc-screen-cont__nombre'>{arr[i][1].nombre}</h3>
                <section className='proyectos__pc-screen-cont__subnombre'>
                    <p className='proyectos__pc-screen-cont__subnombre__p'>{arr[i][1].subnombre}</p>
                </section>
                <section ref={box} className='proyectos__pc-screen-cont__pc-viewer'>
                    <button className='proyectos__pc-screen-cont__pc-viewer__btns' onClick={()=>prevProject()}>
                        <HiArrowCircleLeft className={pcBtnsClass}/>
                    </button>
                    <img className='proyectos__pc-screen-cont__pc-viewer__relative-div' src='/img/portfolio/pc-screen1.png' style={{backgroundImage: `url(${arr[i][1].img})`}}/>
                    <button className='proyectos__pc-screen-cont__pc-viewer__btns' onClick={()=>nextProject()}>
                        <HiArrowCircleRight className={pcBtnsClass}/>
                    </button>
                </section>
                <section className='proyectos__pc-screen-cont__descripcion'>
                    <p className='proyectos__pc-screen-cont__descripcion__p'>{arr[i][1].descripcion}</p>
                </section>
                <p className='proyectos__pc-screen-cont__lenguaje'>Lenguaje: {arr[i][1].lenguaje}</p>
                <a href={arr[i][1].url} target='_blank' rel="noreferrer" className='proyectos__pc-screen-cont__enlace'>Enlace aquí</a>
            </article>
            <article className='proyectos__title-cont'>
                <h1 className='proyectos__title-cont__p'>Proyectos</h1>
            </article>
        </main>
        </>
    )
}

export default Proyectos