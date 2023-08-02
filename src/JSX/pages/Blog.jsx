import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ContextPosts } from './blog_articles/ContextBlog';
import cardLogo from '/logo-pattern-adp2.png';
import { BiSearchAlt2 } from "react-icons/bi";
import temporalPhoto from "../../../src/img/proximamente.png";

function Blog() {
    const { Posts } = useContext(ContextPosts);

    // FILTER BUTTONS
    // obtener dinámicamente/automáticamente todos los grupos creados (HTML, CSS...) para generar botones de busqueda o clasificación
    const arrBtnsGrupos = [...new Set(Object.values(Posts).map(post => post.grupo))];

    // FILTER by btns FUNCTION
    const todoBtn = useRef();
    const [arrIndexPostFiltered, setArrIndexPostFiltered] = useState(Object.keys(Posts));
    const [newArr, setNewArr] = useState([]);

    const filterGroup = (e) => {
        const grupo = e.target.innerText;
        const newIDs = Object.entries(Posts).filter(post => post[1].grupo === grupo).map(e => e[0]);
        arrBtnsGrupos.includes(grupo) === false
            ? (
                // 'todo' Btn
                // mostrar todos los grupos
                setArrIndexPostFiltered(Object.keys(Posts)),
                // vaciar newArr
                setNewArr([]),
                // deseleccionar todos los botones
                Array.from(e.target.parentNode.childNodes).forEach(e => e.className = 'blog__search-cont__btns-cont__btn'),
                // seleccionar el boton 'todo'
                !e.target.className.includes('btn-selec') ? e.target.classList.add('btn-selec') : false
            )
            : (
                // HTML, CSS, JS, Git... Btns
                // deseleccionar el boton 'todo'
                todoBtn.current.className.includes('btn-selec') ? todoBtn.current.classList.remove('btn-selec') : false,
                // si x btn NO está seleccionado...
                !e.target.className.includes('btn-selec')
                ? (
                    // marcar en amarillo/seleccionar x boton
                    e.target.classList.add('btn-selec'),
                    // push al newArray con spread operator para cambiar el valor de newArr (utilizo newArr y no arrIndexPostFiltered porque este último está lleno y no lo quiero vaciar cada vez que ejecute este if y no poder hacer un push. Necesito un arr vacio donde añadir indices para filtrar la búsqueda, como newArr)
                    setNewArr([...newArr, ...newIDs]), // ...newArr = 1, 2 ...newIDs = 3
                    // no uso setArrIndexPostFiltered(newArr) ya que al usar setState es asíncrono, y pues lo cambio yo directamente [...newArr, ...newIDs] en lugar de esperar la asícronia que me de el resultado tardío de newArr
                    setArrIndexPostFiltered([...newArr, ...newIDs].sort())
                )
                : (
                    e.target.classList.remove('btn-selec'),
                    // eliminar los numeros coincidentes con el boton dado o "grupo" && si el resultado de eliminar x da arrIndexPostFiltered.length === 0, no hacerlo
                    // [4, 5]......4......................[1, 2, 4, 5]..................2......=>[1, 2, 5]
                    // [4, 5]......5......................[1, 2, 4, 5]..................2......=>[1, 2]
                    newIDs.forEach(id => setNewArr(newArr, newArr.splice(newArr.indexOf(id), 1))),
                    newIDs.forEach(id => setArrIndexPostFiltered(arrIndexPostFiltered, arrIndexPostFiltered.splice(arrIndexPostFiltered.indexOf(id), 1))),
                    setNewArr([...newArr]),
                    setArrIndexPostFiltered([...arrIndexPostFiltered])
                )
            );
        // si no hay seleccionado ningún boton, muestro todos los posts
        arrIndexPostFiltered.length === 0 ? (
            setArrIndexPostFiltered(Object.keys(Posts)),
            todoBtn.current.classList.add('btn-selec')
        ) : false;
    }

    // FILTER by input FUNCTION
    const inputSearcher = useRef();
    const searchWords = () =>{
        // obtenemos el valor de input, lo pasamos a minúsculas y quitamos las tíldes con .normalize y .replace:
        const inputContent = inputSearcher.current.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // si existe contenido en el input/buscador, mostrar posts filtrados, si NO hay contenido en el buscador/input, devolver todos los posts:
        inputContent 
        ? (
            Object.entries(Posts).filter(entry => entry[1].titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(inputContent)).length > 0
            ? setArrIndexPostFiltered(Object.entries(Posts).filter(entry => entry[1].titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(inputContent)).map(e => e[0]))
            : console.log('No encuentro ningún entry con esa búsqueda')
            // * ¿AÑADIR QUE BUSQUE EN LAS STRING DE GRUPO TAMBIÉN? en duda debido a que ya existen los botones para clasificar por grupo
            // console.log(Object.entries(Posts).filter(entry => entry[1].grupo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(inputContent)))
        ) : setArrIndexPostFiltered(Object.keys(Posts))
    }

    return (
        <>
        <main className='blog'>
            {/* <section className='blog__search-cont'>
                <article className='blog__search-cont__searcher'>
                    <input ref={inputSearcher} onChange={searchWords} onKeyDown={e => e.key === 'Enter' ? searchWords() : false} className='blog__search-cont__searcher__input' type='text'></input>
                    <button type='submit' onClick={searchWords}><BiSearchAlt2/></button>
                </article>
                <article className='blog__search-cont__btns-cont'>
                    <button ref={todoBtn} onClick={filterGroup} className='blog__search-cont__btns-cont__btn'>Todo</button>
                    {arrBtnsGrupos.map( grupo => 
                        <button key={grupo} onClick={filterGroup} className='blog__search-cont__btns-cont__btn'>{grupo}</button>
                    )}
                </article>
            </section>
            <section>
                <h1>Lista de posts</h1>
                <ul className='blog__post-container'>
                    {arrIndexPostFiltered.map(id => {
                        return <li key={id} className='blog__post-container__card-block'>
                            <Link to={`/blog/${id}`} onClick={()=>window.scrollTo(0, 0)}>
                                <article className='blog__post-container__card-block__link-content'>
                                    <img src={cardLogo}></img>
                                    <h1>{Posts[id].titulo}</h1>
                                    <h2>{Posts[id].grupo}</h2>
                                </article>
                            </Link>
                        </li>
                    })}
                </ul>
            </section> */}
            <div style={{
                padding: '1em',
                display: 'grid',
                justifyItems: 'center'
                }}>
                <img src={temporalPhoto} style={{width: '80%', maxWidth: '600px'}}/>
                <Link to={`/portfolio`} style={{textDecoration: 'none'}}><button style={{width: '80vw'}} class="temporal-btn">Ver Portfolio</button></Link>
                <h1>⚠️ Blog: Álvaro está trabajando en ello, probablemente, ahora mismo. ⚠️</h1>
            </div>
        </main>
        </>
    )
}

export default Blog