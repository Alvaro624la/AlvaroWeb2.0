import React, { useContext, useState } from 'react';
import { ContextADPC } from './context/ContextPortfolio';
import fotoPerfil from '/img/portfolio/fotoperfilED.png';

function Inicio() {
  const {ADPC} = useContext(ContextADPC);

  const [width, setWidth] = useState(40);
  const [left, setLeft] = useState(60);
  const [opacityAux, setOpacityAux] = useState(0);
  const [display, setDisplay] = useState('block');

  setTimeout(()=>{
    setOpacityAux(1);
    setDisplay('none');
    // animation-duration: 1s; (entry-cards animation)
  }, 1000); 
  window.addEventListener('scroll', ()=>{
    setLeft(60 - window.scrollY/6);
    setWidth(40 + window.scrollY/6);
    // cuando el telón llegue al limite izq, déjalo allí, en left = 0
    (60 - window.scrollY/6) <= 0 ? (setLeft(0), setWidth(100)) : false;
    // al clicar en nav y ejecutar scrollTo0() del componente nav.jsx para dejar el telón abierto
    window.scrollY === 0 ? (setLeft(60), setWidth(40)) : false;
  });

  return (
    <>
    <header className='porfolio-inicio'>
      <section className='porfolio-inicio__titles-cont'>
        <img className='porfolio-inicio__titles-cont__fotoperfil' src={fotoPerfil} alt='foto de perfil de Álvaro de Prado'/>
        <h1 className='porfolio-inicio__titles-cont__titulo'>{ADPC.nombrecompleto}</h1>
        <h4 className='porfolio-inicio__titles-cont__subtitulo'>{ADPC.descripcion}</h4>
        <article className='porfolio-inicio__titles-cont__entry-animation'>
          <div className='porfolio-inicio__titles-cont__entry-animation__card' style={{opacity: opacityAux, width: `${width}vw`, left:`${left}%`}}></div>
          <div className='porfolio-inicio__titles-cont__entry-animation__card' style={{display: display}}></div>
          <div className='porfolio-inicio__titles-cont__entry-animation__card' style={{display: display}}></div>
        </article>
      </section>
    </header>
    </>
  )
}

export default Inicio