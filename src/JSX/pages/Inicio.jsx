import React, { useContext } from 'react';
import { ContextPosts } from './blog_articles/ContextBlog';
import fotoPortadaPortfolio from '../../../src/img/portfolio/portada5.jpg';
import { Link } from 'react-router-dom';

function Inicio() {
    // obtener todos los posts con el hook useContext
    const { Posts } = useContext(ContextPosts);

    // obtener los nombres de todos los grupos, sin repetir
    const postGruposUnicos = [...new Set(Object.values(Posts).map(e => e.grupo))];
    // pasar el objeto Posts a array para manejar todos los posts
    const postsTodo = Object.entries(Posts);

    // ultimo post:
    // foto
    const indexUltimoPost = Object.entries(Posts).length - 1;
    const tituloUltimoPost = postsTodo[indexUltimoPost][1].titulo;
    const fotoPortadaUltimoPost = postsTodo[indexUltimoPost][1].portadaSrc;
    // links
    const idUltimoPost = Object.entries(Posts).filter(e => e[1].titulo === tituloUltimoPost)[0][0];
    const idPostRuta = (titulo) => Object.entries(Posts).filter(e => e[1].titulo === titulo)[0][0];
    
    // texto de muestra
    // const muestraTextoUltimoPost = postsTodo[indexUltimoPost][1].blablabla;

    return (
        <>
        <div className='inicio'>
            <header className='inicio__header'>
                <h1>
                    Bienvenid@ a ADP
                </h1>
                {/* Temporal pharagraph */}
                <p style={{backgroundColor: '#FFDC0011', color: '#FFDC00'}}>
                    ⚠️ Esta página está en actual desarrollo. El apartado de blogs está actualmente falto y pobre en cuanto a contenido se refiere. Poco a poco iré añadiendo funcionalidades y contenido variado como de HTML, CSS, JavaScript, React, Git, etc. ⚠️
                </p>
                <p>
                    Aquí encontraras toda la información necesaria sobre desarrollo Frontend, tanto como si estás empezando en esto como si quieres reforzar ciertos conocimientos. Por lo tanto, sin importar el nivel que tengas, puede que te resulte interesante descubrir que te tengo preparado.
                </p>
                <p>
                    Todo el contenido que encontrarás en los posts del <Link to='/blog' style={{color: 'white', cursor: 'pointer'}} onClick={()=>window.scrollTo(0, 0)}>Blog</Link> es contenido propio, sacado de mis <span style={{fontWeight: 'bold'}}>cientos de páginas</span> de apuntes que he ido escribiendo desde que empecé a estudiar programación en verano del 2021.
                </p>
                <p>
                    {/* Mi objetivo con éste proyecto de página es  */}
                </p>
            </header>
            <main className='inicio__main'>
                <section className='inicio__main__section'>
                    <article className='inicio__main__section__presentacion'>                        
                        <Link to={`/portfolio`} onClick={()=>window.scrollTo(0, 0)} className='inicio__main__section__presentacion__link'>
                            <article>
                                <h2>Portfolio</h2>
                                <h4>Álvaro de Prado</h4>
                                <img src={fotoPortadaPortfolio}></img>
                            </article>
                        </Link>
                        <Link 
                        to={`/blog/${idUltimoPost}`} 
                        onClick={()=>window.scrollTo(0, 0)} 
                        className='inicio__main__section__presentacion__link react-link'>
                            <article>
                                <h2>Último post</h2>
                                <h4>{tituloUltimoPost}</h4>
                                <img src={fotoPortadaUltimoPost}></img>
                            </article>
                        </Link>
                    </article>
                    <article className='inicio__main__section__rutas'>
                        <h2>Rutas de aprendizaje:</h2>
                        <p>Seguir en orden para aprender el lenguaje.</p>
                        {postGruposUnicos.map(grupo => {
                            return  <article>
                                <h4 key={grupo}>Ruta {grupo}</h4>
                                <ol> {/* ARREGLAR PROBLEMA DE KEY */}
                                    {postsTodo.map(e => e[1]).map(e => e.grupo === grupo ? <li key={e.titulo}><Link to={`/blog/${idPostRuta(e.titulo)}`} onClick={()=>window.scrollTo(0, 0)}>{e.titulo}</Link></li> : false)}
                                </ol>
                            </article>
                        })}
                    </article>
                </section>
            </main>
        </div>
        </>
    )
}

export default Inicio