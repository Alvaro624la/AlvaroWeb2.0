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
                    // ul + li: listas normales de texto punteadas
                    // ol + li: para lineas de código
                // clases:
                    // post__read-time: Utilizar para frase indicativa de tiempo de lectura del post.
                    // post__img-title: imagen de cabecera
                    // post__img-normal: imagen de párrafo
                    // corregir: para el desarrollador / para el proceso de creación del post
            portadaSrc: '../../../../src/img/context-blog/TrYZdBz.jpeg',
            contenido: (
            <div className='post'>
                <span className='post__read-time'>Tiempo de lectura: 6 minutos</span>
                <h1>El inicio de internet</h1>
                <figure className='post__img-title'>
                    <img src='../../../../src/img/context-blog/TrYZdBz.jpeg' alt='Imagen del satélite Sputnik 1'/>
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
                    En EEUU crearon la <span>ARPA</span> &#40;Agencia de proyectos de Investigación Avanzada&#41; y con ella, la creación de Internet con <span>ARPANET</span>, la primera red de ordenadores diseñada en un principio para comunicaciones militares descentralizadas.
                </p>
                <figure className='post__img-normal'>
                    <img src='../../../../src/img/context-blog/zzFKRxs.jpg' alt='Imagen de trabajadores de ARPA'/>
                    <figcaption>Trabajadores de ARPA</figcaption>
                </figure>
                <p>
                    En diciembre de 1969 nació la técnica de <span>conmutación de paquetes</span> que permite enviar y recibir ficheros y acceder a ellos con tiempo compartido, pero aún había fallos para que los ordenadores se pudieran comunicar bien entre ellos, hasta que se llegaron a unir todas las redes en 1981, con las conexiones de ARPANET, software desarrollado por ARPA, creando el protocolo <span>TCP/IP</span> &#40;protocolo de control de transmisión/protocolo de internet&#41;, usado en la actualidad, mejorando su antecesor protocolo NCP que no era suficiente para permitir la comunicación mundial.
                </p>
                <p>
                    <small>Un protocolo de comunicación es lo que permite que dos cosas se entiendan, en este caso, ordenadores.</small>
                </p>
                <h2>World Wide Web</h2>
                <p>
                    Gopher, a principios de los 90, era un sistema de recuperación de información que constaba de menús para acceder a información. Al principio fue de uso académico.
                    <br/>
                    El 6 de agosto de 1991, en Suiza, <span>Tim Berners-Lee</span>, de <span>CERN</span> &#40;consejo europeo de investigación nuclear&#41;, publicó su proyecto en el servicio de noticias Usenet, que sería la <span>primera página web de la historia</span>, con la ayuda de su compañero de CERN <span>Robert Cailliau</span>, que fue pieza clave en la creación, difusión y mantenimiento continuo hasta 2015 de la WWW. Creó un servidor para publicar hipertexto y un programa para leerlo, denominado <span>World Wide Web</span>, creando un servidor y un buscador que permitían acceder y compartir información desde ordenadores distintos. 
                </p>
                <figure className='post__img-normal'>
                    <img src='../../../../src/img/context-blog/w5Ertcx.jpg' alt='Imagen de Tim Berners-Lee'/>
                    <figcaption>Tim Berners-Lee junto a los logos de CERN y World Wide Web</figcaption>
                </figure>
                <p>
                    Él y su grupo crearon lo que por sus siglas en inglés se denomina Lenguaje <span>HTML</span> &#40;HyperText Markup Language&#41; o lenguaje de etiquetas de hipertexto, el protocolo <span>HTTP</span> &#40;HyperText Transfer Protocol&#41; y el sistema de localización de objetos en la web <span>URL</span> &#40;Uniform Resource Locator&#41;, pero <span>Gopher</span> ganó protagonismo por dos acontecimientos, hasta que cometió el error de en 1993 empezar a cobrar por su uso, entonces fue ese mismo año, el 30 de abril de 1993 el CERN cedió el código fuente del WWW al dominio público, dando lugar a la creación por parte de NCSA, de <span>Mosaic</span>, el primer navegador &#40;era una combinación de navegador web y cliente Gopher&#41;, generando mucha popularidad y, en consecuencia, también la web, generando así muchos tipos de navegadores, destacado entre ellos la primera versión de Opera en 1994.
                </p>
                <figure className='post__img-normal'>
                    <img src='../../../../src/img/context-blog/HjblNQY.jpg' alt='Imagen del navegador Mosaic'/>
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
                    <img src='../../../../src/img/context-blog/IgeQnBJ.jpg' alt='Imagen; de izquierda a derecha, Internet Explorer y Netscape'/>
                    <figcaption>De izquierda a derecha, Internet Explorer y Netscape</figcaption>
                </figure>
                <h2>W3C y los estándares web</h2>
                <p>
                    A causa de tal descontrol se formó el W3C &#40;World Wide Web Consortium&#41; que publicó varias especificaciones denominadas recomendaciones, incluyendo HTML 4 y CSS 1 y 2, que pronto mejoró WaSP &#40;Proyecto de Estándares Web&#41; que planteó cambiar el término recomendaciones por <span>estándares</span>, porque las webs se seguían creando sin tener en cuenta W3C.
                </p>
                <figure className='post__img-normal'>
                    <img src='../../../../src/img/context-blog/qjv9mPb.jpg' alt='Imagen del logotipo de W3C, Internet Explorer y Netscape'/>
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
                    <img src='../../../../src/img/context-blog/Rie35OT.jpg' alt='Imagen de cabecera de la página oficial de CSS Zen Garden'/>
                    <figcaption>Cabecera de la página oficial de CSS Zen Garden</figcaption>
                </figure>
                <h2>Accesibilidad</h2>
                <p>
                    El W3C es uno de los principales organismos de estándares de Internet. Su Web Accessibility Initiative &#40;WAI&#41; publicó la primera versión de sus directrices para unos sitios web accesibles en el mes de mayo de 1999. Las directrices de accesibilidad del contenido web &#40;WCAG&#41; son el estándar más utilizado para la accesibilidad de la web. Varios organismos gubernamentales, que incluyen a la UE y al gobierno italiano, recomiendan o exigen el uso de las WCAG 1.0.
                </p>
                <figure className='post__img-normal'>
                    <img src='../../../../src/img/context-blog/r67kJti.png' alt='Imagen del logotipo de WAI'/>
                    <figcaption>Ilustración de WCAG 3.0 &#40;primer borrador: 7 diciembre 2021&#41;</figcaption>
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
            portadaSrc: '../../../../src/img/context-blog/rGMg7Xn.jpg',
            contenido: (
                <div className='post'>
                    <span className='post__read-time'>Tiempo de lectura: 10 minutos</span>
                    <h1>Etiquetas semánticas estructurales</h1>
                    <figure className='post__img-title'>
                        <img src='../../../../src/img/context-blog/rGMg7Xn.jpg' alt='Código HTML en un navegador'/>
                    </figure>
                    <h2>Introducción</h2>
                    <p>
                        Voy a explicar tanto los beneficios de usar HTML semántico como los elementos que lo conforman. Veremos los elementos más importantes y con más uso dentro de un documento HTML, junto a sus definiciones y explicaciones sobre el uso e impacto que tienen en tu página web.
                    </p>
                    <h2>HTML</h2>
                    <p>
                        El HTML &#40;HyperText Markup Language&#41; es un lenguaje para describir el contenido de los documentos de la web.
                        <br/>
                        Utiliza una sintaxis especial que contiene marcadores &#40;conocidos como "elementos"&#41; que rodean al texto que hay dentro del documento para indicar a los agentes de usuario cómo deben interpretar esta parte del documento.
                    </p>
                    <p>
                        En HTML hay dos estructuras:
                    </p>
                    <ul>
                        <li><span>Elementos de bloque</span>: Elementos que empiezan en una nueva línea y ocupan todo el ancho del documento. Ocupan un bloque.</li>
                        <li><span>Elementos de línea</span>: Pequeños elementos que conforman o están dentro de bloques. No hará que aparezca una nueva línea. Pueden ser los hipervínculos, las citas, las palabras subrayadas, etc.</li>
                    </ul>
                    <p>
                        Un ejemplo de elemento de bloque sería un párrafo y un elemento de línea sería una palabra de ese párrafo.
                    </p>
                    <h2>HTML semántico</h2>
                    <p>
                        HTML Semántico es el uso de las etiquetas HTML para reforzar la semántica o significado de la información en las páginas web.
                        <br/>
                        Su uso es una muy buena práctica, y te digo que, cambiar todas las etiquetas &#60;div&#62; de un proyecto por etiquetas HTML5 correctas como &#60;header&#62;, &#60;main&#62;, o &#60;article&#62; puede mejorar la <span>accesibilidad</span> y el <span>SEO</span> de la página, así como hacer el <span>código HTML más legible y organizado</span>.
                    </p>
                    <p>
                        El HTML semántico es procesado por los navegadores web regulares así como por muchos otros agentes de usuarios, que son los encargados de proporcionar la información necesaria al servidor web para que este genere el contenido que nosotros vemos, como clientes.
                    </p>
                    <figure className='post__img-normal'>
                        <img src='../../../../src/img/context-blog/bbnwIg9.jpg' alt='Estructura HTML4 vs. el HTML semántico de HTML5'/>
                        <figcaption>HTML4 vs. HTML5</figcaption>
                    </figure>
                    <h2>Nomenclatura</h2>
                    <p>
                        Para escribir HTML, existen los llamados elementos, envueltos en caracteres, formando así las etiquetas, que en su interior constarán de atributos, con su correspondiente nombre y valor.
                        <br/>
                        Las etiquetas proporcionan información crucial para el contenido que encierran, que será lo visible para el cliente.
                    </p>
                    <ul>
                        <li><span>Elemento</span>: p, main, article...</li>
                        <li><span>Carácter</span>: &#60;, &#62;</li>
                        <li><span>Etiqueta</span> de apertura y de cierre: &#60;p&#62; y &#60;/p&#62;. Las etiquetas son elementos y caracteres.
                            <ul>
                                <li><span>Atributo</span>:
                                    <ul>
                                        <li><span>Nombre</span>: href, title, src, class, style… </li>
                                        <li><span>Valor</span>: 'www.blabla.com'</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span>Contenido</span>: El resultado o lo que vemos en pantalla.</li>
                    </ul>
                    <figure className='post__img-normal'>
                        <img src='../../../../src/img/context-blog/eOiZpTg.gif' alt='Ilustración de los conceptos de nomenclatura HTML recién explicados'/>
                        <figcaption>Vista general de la nomenclatura</figcaption>
                    </figure>
                    <h2>Estructura general</h2>
                    <code>
                        <ol>
                            <li>
                                &#60;!DOCTYPE html&#62;
                                <br/>
                                &#60;html lang="es-ES"&#62;
                                <br/>
                                &#60;head&#62;&#60;/head&#62;
                                <br/>
                                &#60;body&#62;
                                <br/>
                                <ol>
                                    <li>
                                        &#60;header&#62;&#60;/header&#62;
                                        <br/>
                                        &#60;nav&#62;&#60;/nav&#62;
                                        <br/>
                                        &#60;main&#62;
                                        <br/>
                                        <ol>
                                            <li>
                                                &#60;section&#62;
                                                <br/>
                                                <ol>
                                                    <li>
                                                        &#60;article&#62;&#60;/article&#62;
                                                        <br/>
                                                    </li>
                                                </ol>
                                                &#60;/section&#62;
                                                <br/>
                                                &#60;aside&#62;&#60;/aside&#62;
                                                <br/>
                                            </li>
                                        </ol>
                                        &#60;/main&#62;
                                        <br/>
                                        &#60;footer&#62;&#60;/footer&#62;
                                        <br/>
                                    </li>
                                </ol>
                                &#60;/body&#62;
                                <br/>
                                &#60;/html&#62;
                                <br/>
                            </li>
                        </ol>
                    </code>
                    <p>
                        <span>DOCTYPE</span>: El Document Type Definition &#40;DTD o Doctype&#41; define los elementos y los atributos que se pueden utilizar en una versión concreta del HTML. Los navegadores web lo utilizan para <span>determinar el modo de representación</span> que deben utilizar y los validadores de etiquetado para <span>determinar las normas con las que deben comprobar el documento</span>.
                        <br/>
                        Sin Doctype, se vería un jaleo de cosas sin sentido en la pantalla, porque no tendría ninguna representación a seguir ni ningún estándar.
                    </p>
                    <p>
                        <span>html lang</span>: El atributo lang en HTML se usa para especificar el idioma principal de un documento. Esto es importante porque algunos navegadores y herramientas de accesibilidad pueden utilizar esta información para adaptar su comportamiento al idioma especificado.
                        <br/>
                        Además, el atributo lang se puede utilizar en otros elementos HTML, como &#60;p&#62;, &#60;div&#62;, &#60;span&#62;, entre otros, para indicar que el contenido de esos elementos está escrito en un idioma específico dentro del documento.
                    </p>
                    <h2>Estructura de HEAD</h2>
                    <p>
                        Head también contribuye a tener un buen SEO y una correcta estructura tanto interna del propio documento que sirva para la correcta lectura y representación de tu web, y externa como por ejemplo pueden ser las descripciones debajo del título de la web que se muestren al buscar tu página en Google.
                        <br/>
                        Puede haber más etiquetas dentro del header, pero aquí muestro las más importantes y las que yo más utilizo.
                    </p>
                    <code>
                        <ol>
                            <li>
                                &#60;head&#62;
                                <br/>
                                <ol>
                                    <li>
                                        &#60;meta charset="UTF-8"&#62;
                                        <br/>
                                        &#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;
                                        <br/>

                                        &#60;meta name="author" content="Alvaro de Prado"&#62;
                                        <br/>
                                        &#60;meta name="description" content="descripcion de la web"&#62;
                                        <br/>

                                        &#60;link rel="author" href="www.blabla.com"&#62;
                                        <br/>
                                        &#60;link rel="icon" sizes="64x64" href="/blabla.png"&#62;
                                        <br/>

                                        &#60;link rel="stylesheet" href="mystylesfile.css" type="text/css"&#62;
                                        <br/>

                                        &#60;title&#62;Titulo de la web&#60;/title&#62;
                                        <br/>
                                    </li>
                                </ol>
                                &#60;/head&#62;
                            </li>
                        </ol>
                    </code>
                    <p>
                        <span>meta</span>: Las etiquetas meta son etiquetas HTML que se incorporan en el encabezado de una página web y que resultan invisibles para un visitante normal. Su propósito es incluir información &#40;metadatos&#41; de referencia sobre la página, como autor, título, fecha, palabras clave, descripción, etc.
                    </p>
                    <ul>
                        <li><span>charset</span>: El atributo charset en HTML es utilizado para especificar la codificación de caracteres del documento HTML, lo que permite que el navegador interprete correctamente los caracteres especiales y los símbolos del idioma. La codificación de caracteres más común en la red es <span>UTF-8</span>, que es compatible con ASCII &#40;American Standard Code for Information Interchange&#41; y puede representar cualquier carácter Unicode estándar.</li>
                        <li><span>name</span>: Indica que tipo de metadato que vamos a introducir.</li>
                        <li><span>content</span>: La información que almacenamos en ese metadato.</li>
                    </ul>
                    <p>
                        <span>link</span>: Se utiliza para vincular recursos externos, como hojas de estilo &#40;CSS&#41;, fuentes de iconos y otras bibliotecas, a la página web.
                    </p>
                    <ul>
                        <li><span>rel</span>: Define la relación entre la página web y el recurso vinculado. Por ejemplo, <span>stylesheet</span> para hojas de estilo, <span>alternate stylesheet</span> para hojas de estilo alternativas e <span>icon</span> para fuentes de iconos.</li>
                        <li><span>href</span>: Indica la <span>URL</span> del recurso que se vinculará.</li>
                        <li><span>type</span>: Indica el tipo &#40;MIME Multipurpose Internet Mail Extensions&#41; del recurso vinculado, como <span>text/css</span> para hojas de estilo CSS, <span>image/svg+xml</span> para SVG y <span>application/rss+xml</span> para feeds RSS.</li>
                    </ul>
                    <p>
                        <span>title</span>: El título de la página web. Se utiliza para proporcionar información sobre el contenido de la página a los motores de búsqueda y a los usuarios.
                        <br/>
                        Podrás comprobar rápidamente que es el nombre que muestra tu pestaña, arriba del todo de tu navegador, encima de la barra de navegación.
                    </p>
                    <h2>Estructura de BODY</h2>
                    <p>
                        La etiqueta &#60;body&#62; en HTML representa el contenido principal de un documento HTML. No puede haber más de una etiqueta &#60;body&#62; en un documento. Esta etiqueta define la parte visible de la página web, a diferencia de otras partes del documento, como la sección &#60;head&#62; que contiene metadatos y enlaces a recursos externos, como explicamos antes.
                    </p>
                    <code>
                        <ol>
                            <li>
                                &#60;body&#62;
                                <br/>
                                <ol>
                                    <li>
                                        &#60;header&#62;&#60;/header&#62;
                                        <br/>
                                        &#60;nav&#62;&#60;/nav&#62;
                                        <br/>
                                        &#60;main&#62;
                                        <br/>
                                        <ol>
                                            <li>
                                                &#60;section&#62;
                                                <br/>
                                                <ol><li>
                                                    &#60;article&#62;&#60;/article&#62;
                                                    <br/>
                                                </li></ol>
                                                &#60;/section&#62;
                                                <br/>
                                                &#60;aside&#62;&#60;/aside&#62;
                                                <br/>
                                            </li>
                                        </ol>
                                        &#60;/main&#62;
                                        <br/>
                                        &#60;footer&#62;&#60;/footer&#62;
                                        <br/>
                                        &#60;script src="myjsfile.js"&#62;
                                        <br/>
                                    </li>
                                </ol>
                                &#60;/body&#62;
                            </li>
                        </ol>
                    </code>
                    <p>
                        <span>header</span>: Esta etiqueta representa un grupo de elementos introductorios o de navegación, como encabezados, logos, menús de búsqueda y otros componentes. Se puede repetir las veces que sean necesarias dentro de body, por ello si utilizamos headers para los distintos componentes, desplegados uno debajo de otro cuando se compilen en el documento padre/principal, con React por ejemplo, no dará problema alguno.
                    </p>
                    <p>
                        <span>nav</span>: Etiqueta utilizada para definir una sección de navegación en un documento web. Se utiliza típicamente para agrupar enlaces y otros elementos relacionados que permiten a los usuarios moverse dentro del sitio web o entre diferentes secciones del mismo. Esto puede incluir menús de navegación, barras de navegación, listas de enlaces, botones de navegación y otros elementos de navegación.
                    </p>
                    <p>
                        <span>main</span>: Etiqueta que se utiliza para marcar el contenido principal de un documento o sección de una página web. Representa el contenido central y significativo de la página, excluyendo elementos como la cabecera, el pie de página, la barra lateral u otras secciones secundarias. El propósito de la etiqueta &#60;main&#62; es proporcionar una estructura semántica clara y coherente, ayudando a los motores de búsqueda y a las tecnologías de asistencia a comprender y navegar por el contenido principal de la página.
                        <br/>
                        También puede ser útil en términos de accesibilidad, ya que algunas tecnologías de asistencia pueden ofrecer una forma de saltar directamente al contenido principal de la página utilizando comandos de navegación específicos.
                    </p>
                    <p>
                        <span>section</span>: Esta etiqueta se utiliza para estructurar y organizar el contenido en bloques coherentes y relacionados entre sí.
                    </p>
                    <p>
                        <span>article</span>: La etiqueta &#60;article&#62; suele ir dentro de &#60;section&#62; teniendo, su contenido, relación con ella. Puede haber más de un artículo dentro de su sección. Todos los necesarios.
                    </p>
                    <p>
                        <span>aside</span>: Se utiliza para estructurar el contenido que no tiene relación con las secciones y/o articulos que hayamos escrito, y se separa usando esta etiqueta.
                    </p>
                    <p>
                        <span>footer</span>: La etiqueta para el pie de página se utiliza para proporcionar un contexto adicional o información complementaria sobre el contenido de la página. Puede contener elementos como enlaces de navegación secundarios, datos de contacto, enlaces a políticas de privacidad o términos de uso, créditos de autoría, logotipos de patrocinadores y mucho más.
                    </p>
                    <p>
                        <span>script</span>: Aquí quiero terminar explicando la etiqueta &#60;script&#62; debido a que muchos pueden cometer el "error" de incluir los archivos JavaScript, FontAwesome... en el &#60;head&#62; del documento, provocando así que los scripts se carguen en vano antes de haberse cargado completamente el DOM de la página, debido a que aún no tienen elementos donde ejecutarse, y esto puede ralentizar la carga de la página.
                        <br/>
                        Por lo tanto, es muy recomendable incluirlos al final de cuerpo de la página, antes de cerrar la etiqueta &#60;body&#62;.
                    </p>
                </div>
            )
        },
        // 3: {
        //     grupo: 'CSS',
        //     titulo: 'Art.3',
        //     portadaSrc: '',
        //     contenido: (
        //         <div className='post'>
        //             <span className='post__read-time'>Tiempo de lectura: x minutos</span>
        //             <h1>Titulo obligatorio Art.3</h1>
        //         </div>
        //     )
        // },
        // 4: {
        //     grupo: 'JavaScript',
        //     titulo: 'Art.4',
        //     portadaSrc: '',
        //     contenido: (
        //         <div className='post'>
        //             <span className='post__read-time'>Tiempo de lectura: x minutos</span>
        //             <h1>Titulo obligatorio Art.4</h1>
        //         </div>
        //     )
        // },
        // 5: {
        //     grupo: 'JavaScript',
        //     titulo: 'Art.5',
        //     portadaSrc: '',
        //     contenido: (
        //         <div className='post'>
        //             <span className='post__read-time'>Tiempo de lectura: x minutos</span>
        //             <h1>Titulo obligatorio Art.4</h1>
        //         </div>
        //     )
        // },
        // 6: {
        //     grupo: 'Git',
        //     titulo: 'Art.6',
        //     portadaSrc: '../../../../src/img/context-blog/TrYZdBz.jpeg',
        //     contenido: (
        //         <div className='post'>
        //             <span className='post__read-time'>Tiempo de lectura: x minutos</span>
        //             <h1>Titulo obligatorio Art.4</h1>
        //         </div>
        //     )
        // }
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