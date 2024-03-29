import React, { useState } from 'react';
import fotoProyectoVallulis from '../../../../../src/img/portfolio/proyecto-vallulis.jpg';
import fotoProyectoMetJS from '../../../../../src/img/portfolio/proyecto-metjs.jpg';
import fotoProyectoDD from '../../../../../src/img/portfolio/proyecto-dd.jpg';
import fotoProyectoPhotographer from '../../../../../src/img/portfolio/proyecto-photographer.jpg';
import fotoProyectoPortfolio from '../../../../../src/img/portfolio/proyecto-portfolio.jpg';
import { FaGitAlt, FaJs, FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaSass } from "react-icons/fa";
import { SiWebpack, SiBabel, SiVite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const ContextADPC = React.createContext();

const ContextPortfolio = (props) => {
    
    const [ADPC] = useState({
        nombrecompleto: 'Álvaro de Prado Calle',
        descripcion: 'Desarrollador Front-End',
        lugar: 'Santa Perpetua de Mogoda',
        telefono: '628 25 17 20',
        email: 'alvarodepradotrabajo@gmail.com',
        linkedin: 'https://www.linkedin.com/in/alvaro-de-prado/',
        github: 'https://github.com/Alvaro624la',
    });

    const [Conocimientos] = useState({
        1: {
            foto: <FaHtml5 aria-label='html-icon'/>,
            texto: 'HTML 5',
        },
        2: {
            foto: <FaCss3Alt aria-label='css-icon'/>,
            texto: 'CSS 3',
        },
        9: {
            foto: <FaSass aria-label='sass-icon'/>,
            texto: 'Sass',
        },
        3: {
            foto: <FaJs aria-label='javascript-icon'/>,
            texto: 'JS',
        },
        8: {
            foto: <SiBabel aria-label='babel-icon'/>,
            texto: 'Babel',
        },
        7: {
            foto: <SiWebpack aria-label='webpack-icon'/>,
            texto: 'Webpack',
        },
        4: {
            foto: <FaReact aria-label='react-icon'/>,
            texto: 'REACT',
        },
        5: {
            foto: <FaGitAlt aria-label='git-icon'/>,
            texto: 'GIT',
        },
        11: {
            foto: <FaWordpress aria-label='wordpress-icon'/>,
            texto: 'Wordpress',
        },
        6: {
            foto: <SiVite aria-label='vite-icon'/>,
            texto: 'Vite',GrMysql
        },
        10: {
            foto: <GrMysql aria-label='mysql-icon'/>,
            texto: 'MySQL',
        },
    });

    const [Proyectos] = useState({
        vallulis: {
            url: 'https://miguelangeldevallulis.com',
            img: `${fotoProyectoVallulis}`,
            nombre: 'Miguel Angel de Vallulis',
            subnombre: 'Página web oficial de artista/cantante profesional',
            descripcion: 'Creación de una página web profesional desde 0, y gestionando no solo la parte como desarrollador, sino también, la creación del dominio, el hosting y demás cosas necesarias para su correcto funcionamiento y puesta en marcha.',
            lenguaje: 'React'
        },
        metjs: {
            url: 'https://alvaro624la.github.io/MetJS/',
            img: `${fotoProyectoMetJS}`,
            nombre: 'MetJS',
            subnombre: 'Juego interactivo para resolver problemas JavaScript',
            descripcion: 'Consta de distintos niveles con problemas variados de JavaScript, de menor a mayor dificultad, con indicaciones si la respuesta es correcta o incorrecta.',
            lenguaje: 'React'
        },
        dangerousroad: {
            url: 'https://alvaro624la.github.io/DangerousRoad/',
            img: `${fotoProyectoDD}`,
            nombre: 'Dangerous Road',
            subnombre: 'Juego básico de esquivar coches y motos mientras andas por una carretera.',
            descripcion: 'Es un juego básico donde tratarás de esquivar coches y motos mientras andas por una carretera infinita. Éstos, se acercarán más rápidamente a medida que vayas esquivandolos.',
            lenguaje: 'JavaScript'
        },
        photographerpage: {
            url: 'https://alvaro624la.github.io/Artist_website/',
            img: `${fotoProyectoPhotographer}`,
            nombre: 'Photographer Page',
            subnombre: 'Página web de una fotógrafa ficticia.',
            descripcion: 'És un página de prueba para una artista dedicada a la fotografia, que quiere usar la web para mostrar sus trabajos y su información de contacto. Y que en un futuro va a tener una tienda funcional donde los clientes puedan comprar su obras.',
            lenguaje: 'JavaScript'
        },
        antiguoportfolio: {
            url: 'https://alvaro624la.github.io/Portfolio/',
            img: `${fotoProyectoPortfolio}`,
            nombre: 'AdP Portfolio',
            subnombre: 'Antiguo portfolio personal',
            descripcion: 'Mi antiguo y primer portfolio. Está desactualizado y no sirve, pero me gusta tenerlo para el recuerdo',
            lenguaje: 'JavaScript'
        },
    });

    const [Certificaciones] = useState({
        htmlCss:{
            fcc: 'https://i.imgur.com/daGpyQU.jpg',
            // Caducado por fin del campus OpenBootcamp
            // ob: 'https://storage.googleapis.com/openvitae-prod/diplomas%2Fe33fec29-18b7-41ad-bcbe-f694288e9153.pdf',
            ob: 'https://i.imgur.com/AJEjZav.jpg'
        },
        js:{
            fcc: 'https://i.imgur.com/idNfk2A.jpg',
            // Caducado por fin del campus OpenBootcamp
            // ob: 'https://storage.googleapis.com/openvitae-prod/diplomas%2Fdb862ba3-0cf1-4491-b4a1-8b1890a53716.pdf',
            ob: 'https://i.imgur.com/dd49UP1.jpg'
        },
        // Caducado por fin del campus OpenBootcamp
        // git: 'https://storage.googleapis.com/openvitae-prod/diplomas%2F6f66f0bb-7dc5-42f9-a27f-163171661226.pdf'
        git: 'https://i.imgur.com/cs7ddgX.jpg'
    });


    

    return (
        <>
        <ContextADPC.Provider value={{ADPC, Conocimientos, Proyectos, Certificaciones}}>
            {props.children}
        </ContextADPC.Provider>
        </>
    )
}

export default ContextPortfolio