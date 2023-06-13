import React, { useState, useContext, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextPosts } from './ContextBlog';
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

function Post() {

    // ENRUTAMIENTO DINÁMICO
    const { id } = useParams();
    const { Posts } = useContext(ContextPosts);
    const post = Posts[id];

    if (!post) {
        return <h1>El post no existe.</h1>;
    }
    
    // VOLVER BTN
    const navigateTo = useNavigate();
    const handleClick = () => {
        navigateTo('/blog');
        //     scrollTo(x, y)
        window.scrollTo(0, 0);
    }

    // DARK MODE
    // almaceno el estado en el localStorage para recordar como quiere mostrar la página el cliente cuando entre de nuevo, si oscura o clara.
    const [darkModeState, setDarkModeState] = useState(localStorage.getItem('darkModeState') || 'On');
    //si no habia valor guardado previamente en el localStorage, le asigno el que acabo de añadir a darkModeState, que es 'On'
    localStorage.setItem('darkModeState', darkModeState);
    const main = useRef();
    const darkModeIcon = useRef();
    const volverBtn = useRef();
    // cada vez que de click al icono de la luna, cambio el valor de darkModeState y lo guardo en el localStorage
    const darkMode = (e) =>{
        darkModeState === 'On' ? setDarkModeState('Off') : setDarkModeState('On');
        localStorage.setItem('darkModeState', darkModeState);
    }
    //dependiendo del darkModeState, es decir, del localStorage, activo el darkMode o no cada vez que la variable cambie, gracias al hook useEffect()
    useEffect(()=>{
        darkModeState === 'On'
        ? (
            darkModeIcon.current.style.color = 'rgb(255, 255, 255)',
            main.current.className = 'post-main',
            volverBtn.current.className = 'post-main__btn-volver'
        )
        : (
            darkModeIcon.current.style.color = 'rgb(0, 0, 0)',
            main.current.className = 'post-main dark-mode-class',
            volverBtn.current.className = 'post-main__btn-volver dark-mode-volverBtn-class'
        )
    },[darkModeState]);

    return (
        // dejo las clases 'post-main' y 'post-main__btn-volver' por seguridad ante cualquier problema con el localStorage o la variable darkModeState.
        <main ref={main} className='post-main'>
            <aside ref={darkModeIcon} className='post-main__btn-dark-mode' onClick={darkMode} style={{color: 'rgb(255, 255, 255)'}}>
                <MdDarkMode aria-label='boton para cambiar a vista dia o noctura/blanca o negra/white o dark mode'/>
            </aside>
            {post.contenido}
            <button ref={volverBtn} className='post-main__btn-volver' onClick={handleClick} aria-label='boton para ir atrás, a la página principal: blog'><BsArrowLeftCircle className='post-main__btn-volver__icon' aria-label='icono de flecha hacia la izquierda'/>Volver</button>
        </main>
    )
}

export default Post