import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextPosts } from './blog_articles/ContextBlog';
import cardLogo from '/logo-pattern-adp2.png';

function Blog() {
    const { Posts } = useContext(ContextPosts);

    //obtener dinámicamente/automáticamente todos los grupos creados (HTML, CSS...) para generar botones de busqueda o clasificación
    const arrBtnsGrupos = [];
    //push a arrBtnsGrupos de todos los grupos, sin repetirse.
    Object.values(Posts).forEach( post => arrBtnsGrupos.includes(post.grupo) === true ? false : arrBtnsGrupos.push(post.grupo))

    // function filtrar x grupo
    function filterGroup(e){
        console.log(e.target.innerText);
        arrBtnsGrupos.includes(e.target.innerText) === false 
            ? false // todo
            : (
                arrBtnsGrupos
            )
    }

    //TAREA: Obtener ARR de todos los ID que tengan el grupo x seleccionado, y luego abajo donde el <Link> y demás usar el arrIndexPostFiltered para mostrar solo esos ID (ej: 4 y 5 que son JavaScript)
    const arrIndexPostFilteredPrueba = [4, 5]


    // Avanzado: TIENE QUE SER CAPAZ DE SELECCIONAR POR EJEMPLO 2 GRUPOS, Y QUE LOS BOTONES SE SELECCIONEN LOS 2, MOSTRANDO LOS 2 GRUPOS, Y ASI, SI SON 3, LOS 3, Y SI LE DOY A TODO, SOLO SE SELECCIONA 'TODO'


    return (
        <>
        <main className='blog'>
            <section className='blog__search-cont'>
                <article className='blog__search-cont__searcher'></article>
                <article className='blog__search-cont__btns-cont'>
                    <button onClick={filterGroup} className='blog__search-cont__btns-cont__btn'>Todo</button>
                    {arrBtnsGrupos.map( grupo => 
                        <button onClick={filterGroup} className='blog__search-cont__btns-cont__btn'>{grupo}</button>
                    )}
                </article>
            </section>
            <section>
                <h1>Lista de posts</h1>
                <ul className='blog__post-container'>
                    {Object.keys(Posts).map((id) => {
                        return <li key={id} className='blog__post-container__card-block'>
                            <Link to={`/blog/${id}`}>
                                <article className='blog__post-container__card-block__link-content'>
                                    <img src={cardLogo}></img>
                                    <h1>{Posts[id].titulo}</h1>
                                    <h2>{Posts[id].grupo}</h2>
                                </article>
                            </Link>
                        </li>
                    })}
                </ul>
            </section>
        </main>
        </>
    )
}

export default Blog