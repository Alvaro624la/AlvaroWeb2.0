import React, { useContext } from 'react';
import { ContextADPC } from './context/Context';

function Conocimientos() {
  const {Conocimientos} = useContext(ContextADPC);

  const arr = Object.entries(Conocimientos);

  return (
    <>
    <div className='conocimientos-cont'>
      {arr.map((e)=>{       
        return <div key={`conocimientos-cont__card-${e[0]}`} className='conocimientos-cont__card'>
            <div key={`conocimientos-cont__card__logo-${e[0]}`} className='conocimientos-cont__card__icons'>{e[1].foto}</div>
            <div key={`conocimientos-cont__card__description-${e[0]}`} className='conocimientos-cont__card__descriptions'>{e[1].texto}</div>
          </div>
        })
      }
    </div>
    </>
  )
}

export default Conocimientos