import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextPosts } from './ContextBlog';
import { BsArrowLeft, BsArrowLeftCircle } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';

function Post() {

    // enrutamiento dinámico
    const { id } = useParams();
    const { Posts } = useContext(ContextPosts);
    const post = Posts[id];

    if (!post) {
        return <h1>El post no existe.</h1>;
    }
    
    // volver btn
    const navigateTo = useNavigate();
    const handleClick = () => {
        navigateTo('/blog');
        //     scrollTo(x, y)
        window.scrollTo(0, 0);
    }
    return (
        <main className='post-main'>
            {post.contenido}
            <button className='post-main__btn-volver' onClick={handleClick} aria-label='boton para ir atrás, a la página principal: blog'><BsArrowLeftCircle className='post-main__btn-volver__icon' aria-label='icono de flecha hacia la izquierda'/>Volver</button>
        </main>
    )
}

export default Post