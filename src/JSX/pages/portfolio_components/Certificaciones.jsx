import React, { useContext, useState, useRef, useEffect } from 'react';
import { FaGitAlt, FaJs, FaHtml5, FaCss3Alt, FaFilePdf} from "react-icons/fa";
// import { BsFiletypePdf } from "react-icons/bs"
import { ContextADPC } from './context/Context';

function Certificaciones() {

    const {Certificaciones} = useContext(ContextADPC);

    //animate CV btn when scrollY arrives ==> when element is intersecting on intersectionObserver
    const [cvClass, setCvClass] = useState('certif-y-cv-cont__cv__download-cont__btn-a__btn');
    const [isIntersecting, setIsIntersecting] = useState(false);
    const box = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-80px" }
        );
        // console.log(isIntersecting);
        observer.observe(box.current);
    
        return () => observer.disconnect();
    }, [isIntersecting]);
    
    useEffect(() => {
        if (isIntersecting) {
            setCvClass('certif-y-cv-cont__cv__download-cont__btn-a__btn anim-cuelga');
        } else {
            setCvClass('certif-y-cv-cont__cv__download-cont__btn-a__btn');
        }
    }, [isIntersecting]);

    return (
    <>
    <main className='certif-y-cv-cont'>
        <article className='certif-y-cv-cont__certif'>
            <h2 className='certif-y-cv-cont__certif__title'>Certificaciones</h2>
            <section className='certif-y-cv-cont__certif__icons-links-cont'>
                <div className='certif-y-cv-cont__certif__icons-links-cont__icon-link'>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__icon' href={Certificaciones.htmlCss.fcc} target='_blank' rel="noreferrer"><FaHtml5/><FaCss3Alt/></a>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__link' href={Certificaciones.htmlCss.fcc} target='_blank' rel="noreferrer">Responsive Web Design (FreeCodeCamp)</a>
                </div>
                <div className='certif-y-cv-cont__certif__icons-links-cont__icon-link'>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__icon' href={Certificaciones.htmlCss.ob} target='_blank' rel="noreferrer"><FaHtml5/><FaCss3Alt/></a>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__link' href={Certificaciones.htmlCss.ob} target='_blank' rel="noreferrer">HTML + CSS (OpenBootcamp)</a>
                </div>
                <div className='certif-y-cv-cont__certif__icons-links-cont__icon-link'>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__icon' href={Certificaciones.js.fcc} target='_blank' rel="noreferrer"><FaJs/></a>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__link' href={Certificaciones.js.fcc} target='_blank' rel="noreferrer">JavaScript (FreeCodeCamp)</a>
                </div>
                <div className='certif-y-cv-cont__certif__icons-links-cont__icon-link'>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__icon' href={Certificaciones.js.ob} target='_blank' rel="noreferrer"><FaJs/></a>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__link' href={Certificaciones.js.ob} target='_blank' rel="noreferrer">JavaScript Básico (OpenBootcamp)</a>
                </div>
                <div className='certif-y-cv-cont__certif__icons-links-cont__icon-link'>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__icon' href={Certificaciones.git} target='_blank' rel="noreferrer"><FaGitAlt/></a>
                    <a className='certif-y-cv-cont__certif__icons-links-cont__icon-link__link' href={Certificaciones.git} target='_blank' rel="noreferrer">Git (OpenBootcamp)</a>
                </div>
            </section>
        </article>
        <article className='certif-y-cv-cont__cv'>
            <h2 className='certif-y-cv-cont__cv__title'>Currículum</h2>
            <section className='certif-y-cv-cont__cv__download-cont'>
                <a className='certif-y-cv-cont__cv__download-cont__icon-a' href='CV.pdf' target='_blank' rel="noreferrer" download>
                    <FaFilePdf className='certif-y-cv-cont__cv__download-cont__icon-a__icon'></FaFilePdf>
                </a>
                <a ref={box} className='certif-y-cv-cont__cv__download-cont__btn-a' href='CV-Alvaro_De_Prado.pdf' target='_blank' rel="noreferrer" download>
                    <button className={cvClass}>Download PDF</button>
                </a>
            </section>
        </article>
        <article className="particles">
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
            <section className="particle"></section>
        </article>
    </main>
    </>
    )
}

export default Certificaciones