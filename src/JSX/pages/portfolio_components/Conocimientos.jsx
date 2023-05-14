import React, { useContext, useState } from 'react';
import { ContextADPC } from './context/Context';

function Conocimientos() {
  const {Conocimientos} = useContext(ContextADPC);

  const arr = Object.entries(Conocimientos);

  const [widthBar, setWidthBar] = useState();
  const scrollYPosition = window.scrollY;
  window.addEventListener('scroll', ()=> (scrollYPosition/9) < 100 ? setWidthBar(scrollYPosition/9) : setWidthBar(100));

  return (
    <>
    <main className='conocimientos-cont'>
      <aside className='conocimientos-cont__bar' style={{width: `${widthBar}%`}}></aside>
      {arr.map((e)=>{       
        return <article key={`conocimientos-cont__card-${e[0]}`} className='conocimientos-cont__card'>
            <section key={`conocimientos-cont__card__logo-${e[0]}`} className='conocimientos-cont__card__icons'>{e[1].foto}</section>
            <section key={`conocimientos-cont__card__description-${e[0]}`} className='conocimientos-cont__card__descriptions'>{e[1].texto}</section>
          </article>
        })
      }
    </main>
    </>
  )
}

export default Conocimientos