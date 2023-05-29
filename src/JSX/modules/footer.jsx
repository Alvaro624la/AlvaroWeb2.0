import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import logoADP from '/img/logo-adp.png';

function footer() {
    return (
        <>
        <div className='footer-body'>
            <div className='footer-body__container'>
            <div className='footer-body__container__seguir-container'>
                <div className='footer-body__container__seguir-container__icons'>
                    <a href='https://www.linkedin.com/in/alvaro-de-prado/' target='_blank' rel="noreferrer noopener" aria-label='LinkedIn logo-link'><BsLinkedin alt="LinkedIn logo svg image"/></a>
                    <img className='footer-body__container__seguir-container__icons__logo' aria-label='Logo Alvaro de Prado' alt='Logo Alvaro de Prado' src={logoADP}/>
                    <a href='https://github.com/Alvaro624la' target='_blank' rel="noreferrer noopener" aria-label='GitHub logo-link'><BsGithub alt="GitHub logo svg image"/></a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default footer