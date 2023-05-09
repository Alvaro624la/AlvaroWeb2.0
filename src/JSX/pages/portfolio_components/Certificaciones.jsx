import React, { useContext } from 'react';
import { FaGitAlt, FaJs, FaHtml5, FaCss3Alt, FaFilePdf} from "react-icons/fa";
// import { BsFiletypePdf } from "react-icons/bs"
import { ContextADPC } from './context/Context';

function Certificaciones() {

    const {Certificaciones} = useContext(ContextADPC);

    return (
    <>
    <div className='certif-y-cv-cont'>
        <div className='certif-y-cv-cont__certif'>
            <h2 className='certif-y-cv-cont__certif__title'>Certificaciones</h2>
            <div className='certif-y-cv-cont__certif__icons-links-cont'>
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
            </div>
        </div>
        <div className='certif-y-cv-cont__cv'>
            <h2 className='certif-y-cv-cont__cv__title'>Currículum</h2>
            <div className='certif-y-cv-cont__cv__download-cont'>
                <a className='certif-y-cv-cont__cv__download-cont__icon-a' href='CV.pdf' target='_blank' rel="noreferrer" download>
                    <FaFilePdf className='certif-y-cv-cont__cv__download-cont__icon-a__icon'></FaFilePdf>
                </a>
                <a className='certif-y-cv-cont__cv__download-cont__btn-a' href='CV-Alvaro_De_Prado.pdf' target='_blank' rel="noreferrer" download>
                    <button className='certif-y-cv-cont__cv__download-cont__btn-a__btn'>Download PDF</button>
                </a>
            </div>
            
        </div>
    </div>
    </>
    )
}

export default Certificaciones