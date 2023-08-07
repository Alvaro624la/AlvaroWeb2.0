import React, { useContext, useState, useRef, useEffect } from 'react';
import { ContextADPC } from './context/ContextPortfolio';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import laptopImg from '../../../../src/img/portfolio/pc-screen1.png'; // 67 - 176 KB
import laptopImgFallback1 from '../../../../src/img/portfolio/loading-laptop.svg'; // 7 KB
import laptopImgFallback2 from '../../../../src/img/portfolio/solid_white.svg'; // 1 KB

function Proyectos() {
    //Project laptop viewer
    const {Proyectos} = useContext(ContextADPC);
    const arr = Object.entries(Proyectos);

    const [iPrev, setIPrev] = useState(arr.length - 1);
    const [i, setI] = useState(0);
    const [iProx, setIProx] = useState(1);

    const slider = useRef();

    // To not load the next project image in the slider if the current img in change is not finished yet
    const [availableToChange, setAvailableToChange] = useState(true);

    const nextProject = () => {
        if(availableToChange){
            setAvailableToChange(false);
            slider.current.style.transition = 'all .75s';
            slider.current.style.marginLeft = '-200%';
            // 1s dejar actuar a la animacion de slider para luego cambiar las img del arr.
            setTimeout(()=>{
                iPrev   < arr.length - 1 ? setIPrev(iPrev+1)    : setIPrev(0);
                i       < arr.length - 1 ? setI(i+1)            : setI(0);
                iProx   < arr.length - 1 ? setIProx(iProx+1)    : setIProx(0);
                slider.current.style.transition = '0s';
                slider.current.style.marginLeft = '-100%';
                setAvailableToChange(true);
            },800);
        };
    };
    const prevProject = () => {
        if(availableToChange){
            setAvailableToChange(false);
            slider.current.style.transition = 'all .75s';
            slider.current.style.marginLeft = '0%';
            // 1s dejar actuar a la animacion de slider para luego cambiar las img del arr.
            setTimeout(()=>{
                iPrev   > 0 ? setIPrev(iPrev-1) : setIPrev(arr.length-1);
                i       > 0 ? setI(i-1)     : setI(arr.length-1);
                iProx   > 0 ? setIProx(iProx-1) : setIProx(arr.length-1);
                slider.current.style.transition = '0s';
                slider.current.style.marginLeft = '-100%';
                setAvailableToChange(true);
            },800);
        };
    };
    
    //slider
    const fotoI = arr[iPrev][1].img;
    const fotoC = arr[i][1].img;
    const fotoD = arr[iProx][1].img;

    const sliderArr = [fotoI, fotoC, fotoD];

    // botones guia/rápidos del slider.
    const skipSliderBtns = () => arr.map((e) => {
        //Añado tantos botones como proyectos contenga el arr, combinando los resultados del return cuando sea true como false el condicional if.
        //Si coinciden los títulos de los proyectos añado clase skip-on al boton para un background-color negro, si no la clase skip-off, sin background-color
        if(arr[i][1].nombre === e[1].nombre){
            return <button key={e[1].nombre} className='proyectos__pc-screen-cont__skip-slider-btns-cont__skip-on'></button>
        } else {
            return <button key={e[1].nombre} className='proyectos__pc-screen-cont__skip-slider-btns-cont__skip-off' 
            // los botones sin seleccionar, los proyecos no mostrados, incluir funcionalidad de clic para cambiar de proyecto:
            onClick={()=>{
                // obtengo el indice del proyecto dentro de "arr" cuando clico en x punto...
                const projectIndex = arr.indexOf(e);
                // ...para mostrar el proyecto con dicho indice cambiando los setI, setIPrev y setIProx (el setI no hace falta ponerle condición ya que como los botones se muestran haciendo un .map a "arr" siempre mostrará la cantidad justa de botones, sin importar cuantos proyectos hayan)
                setI(projectIndex);
                projectIndex - 1 < 0 ? setIPrev(arr.length-1)   : setIPrev(projectIndex - 1);
                projectIndex + 1 > arr.length - 1 ? setIProx(0) : setIProx(projectIndex + 1);
            }}
            ></button>
        };
    })


    //animate btns when scrollY arrives ==> when element is intersecting on intersectionObserver
    const [pcBtnsClass, setPcBtnsClass] = useState('proyectos__pc-screen-cont__pc-viewer__btns__ico');
    const [isIntersecting, setIsIntersecting] = useState(false);
    const box = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-30px" }
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
            <section className='proyectos__pc-screen-cont'>
                <h3 className='proyectos__pc-screen-cont__nombre'>{arr[i][1].nombre}</h3>
                <article className='proyectos__pc-screen-cont__subnombre'>
                    <p className='proyectos__pc-screen-cont__subnombre__p'>{arr[i][1].subnombre}</p>
                </article>
                <article ref={box} className='proyectos__pc-screen-cont__pc-viewer'>
                    <button className='proyectos__pc-screen-cont__pc-viewer__btns' onClick={()=>prevProject()}>
                        <HiArrowCircleLeft className={pcBtnsClass} aria-label='izq/left-btn'/>
                    </button>
                    <a href={arr[i][1].url} target='_blank' rel="noreferrer">
                        <div className='proyectos__pc-screen-cont__pc-viewer__relative-div'>
                            <div ref={slider} className='proyectos__pc-screen-cont__pc-viewer__relative-div__inside'>
                                <img className='proyectos__pc-screen-cont__pc-viewer__relative-div__inside__foto-izq' src={sliderArr[0]}></img>
                                <img className='proyectos__pc-screen-cont__pc-viewer__relative-div__inside__foto-cent' src={sliderArr[1]}></img>
                                <img className='proyectos__pc-screen-cont__pc-viewer__relative-div__inside__foto-dcha' src={sliderArr[2]}></img>
                            </div>
                        </div>
                    </a>
                    <button className='proyectos__pc-screen-cont__pc-viewer__btns' onClick={()=>nextProject()}>
                        <HiArrowCircleRight className={pcBtnsClass} aria-label='dcha/right-btn'/>
                    </button>
                </article>
                <article className='proyectos__pc-screen-cont__skip-slider-btns-cont'>
                    {skipSliderBtns()}
                </article>
                <article className='proyectos__pc-screen-cont__descripcion'>
                    <p className='proyectos__pc-screen-cont__descripcion__p'>{arr[i][1].descripcion}</p>
                </article>
                <p className='proyectos__pc-screen-cont__lenguaje'>Lenguaje: {arr[i][1].lenguaje}</p>
                <a href={arr[i][1].url} target='_blank' rel="noreferrer" className='proyectos__pc-screen-cont__enlace'>Enlace aquí</a>
            </section>
            <section className='proyectos__title-cont'>
                <h1 className='proyectos__title-cont__p'>Proyectos</h1>
            </section>
        </main>
        </>
    )
}

export default Proyectos