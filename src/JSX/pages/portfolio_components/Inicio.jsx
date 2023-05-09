import React, { useContext, useState } from 'react';
import { ContextADPC } from './context/Context';
import fotoPerfil from '/img/portfolio/fotoperfilEDIT2.png';
import { FaLinkedin, FaGithubSquare, FaHome, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { CgEditBlackPoint } from "react-icons/cg";
import 'animate.css';
import Nube1 from '/img/portfolio/cloud1.png';
import Nube4 from '/img/portfolio/cloud4.png';
import Nube3 from '/img/portfolio/cloud3.png';
function Inicio() {
  const {ADPC} = useContext(ContextADPC);

  const [claseContactar, setClaseContactar] = useState('contactar-off');

  const [textPoint1, setTextPoint1] = useState();
  const [textPoint2, setTextPoint2] = useState();
  const [textPoint3, setTextPoint3] = useState();

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [numBaseScroll] = useState(0);
  const [difIncrementada, setDifIncrementada] = useState();
  const [numBaseOpacity] = useState(1);
  const [opacityNumber, setOpacityNumber] = useState();

  window.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY); // 200 está el scroll
    setDifIncrementada(scrollPosition-numBaseScroll); // 200 (0-200) es la diferencia
    setOpacityNumber(numBaseOpacity-(difIncrementada*(1/300))); // 0.332 será la opacidad correcta
    if(window.scrollY < 10) setOpacityNumber(1); // asegurar la opacidad 1 arriba del todo de la página
    if(window.scrollY > 300) setOpacityNumber(0); // asegurar la opacidad 0 cuando scrollY sea 300
    
    // quitar etiquetas cuando me desplazo o muevo
    // setTextPoint1('');
    // setTextPoint2('');
    // setTextPoint3('');
  });

  return (
    <>
    <div className='inicio'>
      <h1 className='inicio__nombrecompleto'>{ADPC.nombrecompleto}</h1>
      <div className='inicio__fotoBnt-cont'>
        <img className='inicio__fotoBnt-cont__fotoperfil' src={fotoPerfil} alt='foto de perfil de Álvaro de Prado'/>
        <button className='inicio__fotoBnt-cont__botoncontacto' aria-label="my-btn" onClick={()=> claseContactar === 'contactar-off' ? setClaseContactar('contactar-on') : setClaseContactar('contactar-off')}>Contactar</button>
      </div>
      <div className={claseContactar}>
        <button className='contactar-on__btn-cerrar' onClick={()=>setClaseContactar('contactar-off')}>X</button>
        <div className='contactar-on__redes-container'>
          <div className='contactar-on__redes-container__demas-rows'>
            <a href={'https://goo.gl/maps/7WRQWNHEzcNEqSxCA'} target='_blank' rel="noreferrer nofollow noopener" className='contactar-on__redes-container__demas-rows__icons'><FaHome/></a>
            <a href={'https://goo.gl/maps/7WRQWNHEzcNEqSxCA'} target='_blank' rel="noreferrer nofollow noopener" className='contactar-on__redes-container__demas-rows__p'>{ADPC.lugar}</a>
          </div>
          <div className='contactar-on__redes-container__demas-rows'>
            <a href={`tel: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__icons'><FaPhoneAlt/></a>
            <a href={`tel: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__p'>{ADPC.telefono}</a>
          </div>
          <div className='contactar-on__redes-container__demas-rows'>
            <a href={`mailto: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__icons'><GrMail/></a>
            <a href={`mailto: ${ADPC.email}`} className='contactar-on__redes-container__demas-rows__p'>{ADPC.email}</a>
          </div>
          <div className='contactar-on__redes-container__last-rows'>
            <a className='contactar-on__redes-container__last-rows__links' href={ADPC.linkedin} target='_blank' rel="noreferrer"><FaLinkedin/></a>
            <a className='contactar-on__redes-container__last-rows__links' href={ADPC.github} target='_blank' rel="noreferrer"><FaGithubSquare/></a>
          </div>
        </div>
      </div>
      <CgEditBlackPoint style={{opacity: opacityNumber}} className='infoPoint-1 animate__animated animate__flip animate__delay-1s' 
      onMouseOver={()=>setTextPoint1(<p style={{opacity: opacityNumber}} className='infoPoint-1__text'>+2 años de experiencia</p>)} 
      onMouseLeave={()=>{setTextPoint1('');}}/>
      {textPoint1}
      <CgEditBlackPoint style={{opacity: opacityNumber}} className='infoPoint-2 animate__animated animate__flip animate__delay-1.5s' 
      onMouseOver={()=>setTextPoint2(<p style={{opacity: opacityNumber}} className='infoPoint-2__text'>React, Git y más</p>)} 
      onMouseLeave={()=>setTextPoint2('')}/>
      {textPoint2}
      <CgEditBlackPoint style={{opacity: opacityNumber}} className='infoPoint-3 animate__animated animate__flip animate__delay-2s' 
      onMouseOver={()=>setTextPoint3(<p style={{opacity: opacityNumber}} className='infoPoint-3__text'>Disponibilidad</p>)} 
      onMouseLeave={()=>setTextPoint3('')}/>
      {textPoint3}
      <div className='nube1-cont' style={{opacity: opacityNumber}}>
        <img src={Nube1} className='nube2-cont__img' alt='nube 1 png'/>
        <p className='nube2-cont__texto'>+2 años de experiencia</p>
      </div>
      <div className='nube2-cont' style={{opacity: opacityNumber}}>
        <img src={Nube4} className='nube2-cont__img' alt='nube 2 png'/>
        <p className='nube2-cont__texto'>React, Git y más</p>
      </div>
      <div className='nube3-cont' style={{opacity: opacityNumber}}>
        <img src={Nube3} className='nube2-cont__img' alt='nube 3 png'/>
        <p className='nube2-cont__texto'>Disponibilidad</p>
      </div>
    </div>
    </>
  )
}

export default Inicio