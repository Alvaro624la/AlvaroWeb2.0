import React, { useContext } from 'react';
import { ContextADPC } from './context/Context';
import { VscFoldDown } from "react-icons/vsc";

function Proyectos() {
    const {Proyectos} = useContext(ContextADPC);

    const arr = Object.entries(Proyectos);
    return (
        <>
        <div className='proyectos'>
            {
            arr.map((e)=>{
                return <div key={e[0]}className='proyectos__proyecto-container'>
                    <h3 className='proyectos__proyecto-container__nombre'>{e[1].nombre}</h3>
                    <p className='proyectos__proyecto-container__subnombre'>{e[1].subnombre}</p>
                    <div id='cuadrado' className='proyectos__proyecto-container__cuadrado'>
                        <a href={e[1].url} target='_blank' rel="noreferrer" className='proyectos__proyecto-container__cuadrado__img-a'>
                            <img className='proyectos__proyecto-container__cuadrado__img-a__img' src={e[1].img} alt={`imagen de muestra del proyecto ${e[1].nombre}`}/>
                        </a>
                        <div className='proyectos__proyecto-container__cuadrado__loexpandido'>
                            <p className='proyectos__proyecto-container__cuadrado__loexpandido__descripcion'>{e[1].descripcion}</p>
                            <p className='proyectos__proyecto-container__cuadrado__loexpandido__lenguaje'>Lenguaje: {e[1].lenguaje}</p>
                            <a href={e[1].url} target='_blank' rel="noreferrer" className='proyectos__proyecto-container__cuadrado__loexpandido__enlace'>Enlace aquí</a>
                        </div>
                    </div>
                    <button className='proyectos__proyecto-container__btn' onClick={(e)=>{
                        e.target.parentNode.childNodes[2].childNodes[1].classList.toggle('funcionExpandir');
                        e.target.parentNode.childNodes[3].childNodes[0].classList.toggle('reactIconContraer');
                        }}>
                            {<VscFoldDown className='reactIconExpandir'/>}
                        </button>
                </div>
            })
            }
            </div>
        </>
    )
}

export default Proyectos


//clase 'expandir' a <div className='proyectos__proyecto-container__cuadrado'>
//clase display-none