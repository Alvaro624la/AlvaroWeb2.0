import React, { createContext, useState } from 'react';

export const ContextPosts = createContext();

export const ContextPostsProvider = ({ children }) => {
    const [Posts] = useState({
        1: {
            // grupos: HTML / CSS / JavaScript / React / Git / MySQL / GitHub
            grupo: 'HTML',
            // titulo y url del post
            titulo: 'El inicio de internet',
            // contenido del post:
                // etiquetas:
                    // h1: títulos
                    // h2: subtítulos
                    // p: párrafos
                    // span: negrita(bold)
                    // small: notas y aclaraciones
                // clases:
                    // post__read-time: Utilizar para frase indicativa de tiempo de lectura del post.
                    // post__img-title: imagen de cabecera
                    // post__img-normal: imagen de párrafo
                    // corregir: para el desarrollador / para el proceso de creación del post
            contenido: (
            <div className='post'>
                <span className='post__read-time'>Tiempo de lectura: 6 minutos</span>
                <h1>El inicio de internet</h1>
                <figure className='post__img-title'>
                    <img src='https://i.imgur.com/TrYZdBz.jpeg' alt='Imagen del satélite Sputnik 1'/>
                    <figcaption>Satélite Sputnik 1</figcaption>
                </figure>
                <h2>Introducción</h2>
                <p>
                    En este artículo te enseñaré la historia de internet, explicada y resumida a partir de los acontecimientos más destacados e importantes, junto con sus protagonistas más relevantes y sus grandes hazañas en el desarrollo web.
                    ¡Comencemos!
                </p>
                <h2>Satélite Sputnik 1, ARPA con ARPANET y el protocolo TCP/IP</h2>
                <p>
                    Todo comenzó en 1957, cuando la unión soviética lanzó exitosamente el satélite <span>Sputnik 1</span> a órbita.
                </p>
                <p>
                    En EEUU crearon la <span>ARPA</span> (Agencia de proyectos de Investigación Avanzada) y con ella, la creación de Internet con <span>ARPANET</span>, la primera red de ordenadores diseñada en un principio para comunicaciones militares descentralizadas.
                </p>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/zzFKRxs.jpg' alt='Imagen de trabajadores de ARPA'/>
                    <figcaption>Trabajadores de ARPA</figcaption>
                </figure>
                <p>
                    En diciembre de 1969 nació la técnica de <span>conmutación de paquetes</span> que permite enviar y recibir ficheros y acceder a ellos con tiempo compartido, pero aún había fallos para que los ordenadores se pudieran comunicar bien entre ellos, hasta que se llegaron a unir todas las redes en 1981, con las conexiones de ARPANET, software desarrollado por ARPA, creando el protocolo <span>TCP/IP</span> (protocolo de control de transmisión/protocolo de internet), usado en la actualidad, mejorando su antecesor protocolo NCP que no era suficiente para permitir la comunicación mundial.
                </p>
                <p>
                    <small>Un protocolo de comunicación es lo que permite que dos cosas se entiendan, en este caso, ordenadores.</small>
                </p>
                <h2>World Wide Web</h2>
                <p>
                    Gopher, a principios de los 90, era un sistema de recuperación de información que constaba de menús para acceder a información. Al principio fue de uso académico.
                    <br/>
                    El 6 de agosto de 1991, en Suiza, <span>Tim Berners-Lee</span>, de <span>CERN</span> (consejo europeo de investigación nuclear), publicó su proyecto en el servicio de noticias Usenet, que sería la <span>primera página web de la historia</span>, con la ayuda de su compañero de CERN <span>Robert Cailliau</span>, que fue pieza clave en la creación, difusión y mantenimiento continuo hasta 2015 de la WWW. Creó un servidor para publicar hipertexto y un programa para leerlo, denominado <span>World Wide Web</span>, creando un servidor y un buscador que permitían acceder y compartir información desde ordenadores distintos. 
                </p>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/w5Ertcx.jpg' alt='Imagen de Tim Berners-Lee'/>
                    <figcaption>Tim Berners-Lee junto a los logos de CERN y World Wide Web</figcaption>
                </figure>
                <p>
                    Él y su grupo crearon lo que por sus siglas en inglés se denomina Lenguaje <span>HTML</span> (HyperText Markup Language) o lenguaje de etiquetas de hipertexto, el protocolo <span>HTTP</span> (HyperText Transfer Protocol) y el sistema de localización de objetos en la web <span>URL</span> (Uniform Resource Locator), pero <span>Gopher</span> ganó protagonismo por dos acontecimientos, hasta que cometió el error de en 1993 empezar a cobrar por su uso, entonces fue ese mismo año, el 30 de abril de 1993 el CERN cedió el código fuente del WWW al dominio público, dando lugar a la creación por parte de NCSA, de <span>Mosaic</span>, el primer navegador (era una combinación de navegador web y cliente Gopher), generando mucha popularidad y, en consecuencia, también la web, generando así muchos tipos de navegadores, destacado entre ellos la primera versión de Opera en 1994.
                </p>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/HjblNQY.jpg' alt='Imagen del navegador Mosaic'/>
                    <figcaption>Mosaic</figcaption>
                </figure>
                <h2>Guerra de navegadores</h2>
                <p>
                    Hubo la denominada “guerra de navegadores” donde casi cada uno tenía su propia forma de construcción, dando lugar a muchos problemas para los desarrolladores durante muchos años debido a que casi tenían que crear una página por navegador, porque no eran compatibles entre sí. En esos años se crearon los navegadores:
                </p>
                <ul>
                    <li><span>Netscape</span>; creado por dos fundadores que dejaron NCSA para enfocarse en este proyecto, en 1994.</li>
                    <li><span>Internet Explorer</span>. NCSA comerció su tecnología con Microsoft para hacer este navegador, en 1995.</li>
                    <li>Opera; que se mantenía modesta, intentando innovar y siendo compatible.</li>
                </ul>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/IgeQnBJ.jpg' alt='Imagen; de izquierda a derecha, Internet Explorer y Netscape'/>
                    <figcaption>De izquierda a derecha, Internet Explorer y Netscape</figcaption>
                </figure>
                <h2>W3C y los estándares web</h2>
                <p>
                    A causa de tal descontrol se formó el W3C (World Wide Web Consortium) que publicó varias especificaciones denominadas recomendaciones, incluyendo HTML 4 y CSS 1 y 2, que pronto mejoró WaSP (Proyecto de Estándares Web) que planteó cambiar el término recomendaciones por <span>estándares</span>, porque las webs se seguían creando sin tener en cuenta W3C.
                </p>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/qjv9mPb.jpg' alt='Imagen del logotipo de W3C, Internet Explorer y Netscape'/>
                    <figcaption>Logotipo de W3C</figcaption>
                </figure>
                <p>
                    En el año 2000, Microsoft, con Internet Explorer 5 Macintosh Edition y el otro navegador Opera, fueron de gran importancia al ser construidos siguiendo los estándares web con el que los desarrolladores y diseñadores web se sentían cómodos diseñando páginas mediante estándares web por primera vez, lo que hizo retrasar la salida de Netscape 5, persuadido por WaSP para que antes de publicarlo, consiguiera seguir con los estándares web también.
                </p>
                <p>
                    Y ya empezó a evolucionar la creación de páginas HTML y, importante, CSS gracias a un papel muy importante que tuvo Dave Shea con la creación de CSS Zen Garden en 2003, que dio a ver a los progresionales web que se podían hacer virguerías y cambiar totalmente el diseño de una web manteniendo el mismo contenido en ella.
                </p>
                <p>
                    Desde entonces, en la comunidad de desarrollo web profesional, los estándares web se han convertido en un elemento de rigor.
                </p>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/Rie35OT.jpg' alt='Imagen de cabecera de la página oficial de CSS Zen Garden'/>
                    <figcaption>Cabecera de la página oficial de CSS Zen Garden</figcaption>
                </figure>
                <h2>Accesibilidad</h2>
                <p>
                    El W3C es uno de los principales organismos de estándares de Internet. Su Web Accessibility Initiative (WAI) publicó la primera versión de sus directrices para unos sitios web accesibles en el mes de mayo de 1999. Las directrices de accesibilidad del contenido web (WCAG) son el estándar más utilizado para la accesibilidad de la web. Varios organismos gubernamentales, que incluyen a la UE y al gobierno italiano, recomiendan o exigen el uso de las WCAG 1.0.
                </p>
                <figure className='post__img-normal'>
                    <img src='https://i.imgur.com/r67kJti.png' alt='Imagen del logotipo de WAI'/>
                    <figcaption>Ilustración de WCAG 3.0 (primer borrador: 7 diciembre 2021)</figcaption>
                </figure>
                <p>
                    Y hay que cumplir las prioridades de nivel 1, luego las de nivel 2 y 3 también se pueden optar a cumplir. Aunque WCAG 1.0 queda un poco anticuado para utilizar webs más sofisticadas, así que será necesario mirar otros estándares de accesibilidad, que hay muchísimos, uno de los más conocidos, también hecho por W3C, es el estándar WAI-ARIA. Estas siglas son el acrónimo de Web Accessibility Initiative-Accessible Rich Internet Applications. Se trata de una serie de documentos que definen la manera de hacer accesibles las aplicaciones web complejas que emplean tecnologías como HTML, JavaScript y AJAX. 
                    <br/>
                    {/* <a href='http://web.archive.org/web/20100622122838/http://www.areia.info/introduccion-a-wai-aria/' target='_blank' rel='noreferrer'>http://web.archive.org/web/20100622122838/http://www.areia.info/introduccion-a-wai-aria/</a> */}
                </p>
            </div>
            )
        },
        2: {
            grupo: 'HTML',
            titulo: 'Etiquetas semánticas estructurales',
            contenido: (
                <div className='post'>
                    <span className='post__read-time'>Tiempo de lectura: x minutos</span>
                    <h1>Etiquetas semánticas estructurales</h1>
                    <h2>Introducción</h2>
                    <p className='corregir'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsa odit voluptates. Accusamus ratione provident officiis quibusdam fugiat ea expedita iusto architecto doloribus vitae dolore tempore, consequuntur odit saepe libero.
                    </p>
                    <h2 className='corregir'>HTML</h2>
                    <p className='corregir'>
                        El HTML (HyperText Markup Language) es un lenguaje para describir el contenido de los documentos de la web.
                        <br/>
                        Utiliza una sintaxis especial que contiene marcadores (conocidos como "elementos") que rodean al texto que hay dentro del documento para indicar a los agentes de usuario cómo deben interpretar esta parte del documento.
                    </p>
                    <ul>
                        <li className='corregir'>Un agente de usuario es cualquier software que se utilice para acceder a las páginas web en nombre de los usuarios.</li>
                    </ul>
                    <p className='corregir'>
                        En HTML hay dos estructuras:
                    </p>
                    <ul>
                        <li className='corregir'><span>Elementos de bloque</span>: Elementos que empiezan en una nueva línea y ocupan todo el ancho del documento. Ocupan un bloque.</li>
                        <li className='corregir'><span>Elementos de línea</span>: Pequeños elementos que conforman o están dentro de bloques. No hará que aparezca una nueva línea. Pueden ser los hipervínculos, las citas, las palabras subrayadas, etc.</li>
                    </ul>
                    <p className='corregir'>
                        Un ejemplo de elemento de bloque sería un párrafo y un elemento de línea una palabra de ese párrafo.
                    </p>
                    <h2 className='corregir'>HTML semántico</h2>
                    <p className='corregir'>
                        HTML Semántico es el uso de las etiquetas HTML para reforzar la semántica, o el significado, de la información en las páginas web más que simplemente redefinir su forma de presentación. El HTML semántico es procesado por los navegadores web regulares así como por muchos otros agentes de usuarios.
                    </p>
                </div>
            )
        },
        3: {
            grupo: 'CSS',
            titulo: 'Art.3',
            contenido: (
                <div className='post'>
                    <span className='post__read-time'>Tiempo de lectura: x minutos</span>
                    <h1>Titulo obligatorio Art.3</h1>
                </div>
            )
        },
        4: {
            grupo: 'JavaScript',
            titulo: 'Art.4',
            contenido: (
                <div className='post'>
                    <span className='post__read-time'>Tiempo de lectura: x minutos</span>
                    <h1>Titulo obligatorio Art.4</h1>
                </div>
            )
        },
        5: {
            grupo: 'JavaScript',
            titulo: 'Art.4',
            contenido: (
                <div className='post'>
                    <span className='post__read-time'>Tiempo de lectura: x minutos</span>
                    <h1>Titulo obligatorio Art.4</h1>
                </div>
            )
        },
        6: {
            grupo: 'Git',
            titulo: 'Art.4',
            contenido: (
                <div className='post'>
                    <span className='post__read-time'>Tiempo de lectura: x minutos</span>
                    <h1>Titulo obligatorio Art.4</h1>
                </div>
            )
        }
    });

    return (
        <>
        <ContextPosts.Provider value={{ Posts }}>
            {children}
        </ContextPosts.Provider>
        </>
    )
}

export default ContextPostsProvider