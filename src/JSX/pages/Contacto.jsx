import React, { useRef, useState } from 'react';
import foto from '/img/portfolio/fotoperfilED.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
// EmailJS
import emailjs from '@emailjs/browser';

function Contacto() {
    const form = useRef();
    const sendBtn = useRef();
    const [opacity, setOpacity] = useState(1);
    
    //when submit
    const sendEmail = (data) => {
        data.preventDefault();
        // EmailJS
        window.setTimeout(()=>{
            emailjs.sendForm(
            'service_f5ml6lj',
            'template_qjkfcwm',
            form.current,
            's0MKGILL8unFh6lJ-')
            .then((result) => {
                console.log(result.text);
                // console.log(data);
                setOpacity(0);
                sendBtn.current.style.background = 'linear-gradient(360deg, #0ec91b, #adecb1)';
                sendBtn.current.innerHTML = 'Mensaje enviado correctamente';
            }, (error) => {
                console.log(error.text);
            }
            )
        });
    };

    return (
        <>
        <main className='contacto'>
            <section className='contacto__cabecera'>
                <article className='contacto__cabecera__texto-cont'>
                    <h1><span>Contacta</span> conmigo a través de mis redes sociales</h1>
                    <article>
                        <a href='https://www.linkedin.com/in/alvaro-de-prado/' target='_blank' rel='noreferrer noopener' aria-label='LinkedIn logo-link'>
                            <BsLinkedin alt='LinkedIn logo svg image'/>
                        </a>
                        <a href='https://github.com/Alvaro624la' target='_blank' rel='noreferrer noopener' aria-label='GitHub logo-link'>
                            <BsGithub alt='GitHub logo svg image'/>
                        </a>
                    </article>
                    <h1>o bien, rellenando los campos siguientes:</h1>
                </article>
                <article className='contacto__cabecera__foto-cont'>
                    <img src={foto}></img>
                </article>
            </section>
            <form ref={form} className='contacto__form' method='post' autoComplete='on' onSubmit={sendEmail}>
                <fieldset className='contacto__form__recuadro'>
                    <legend>Contacto</legend>
                    <label style={{opacity: opacity}}>Nombre <sup>(Opcional)</sup></label>
                    <input type='text' name='user_name' style={{opacity: opacity}}></input>
                    <label style={{opacity: opacity}}>Email <sup>*</sup></label>
                    <input type='email' name='user_email' required style={{opacity: opacity}}></input>
                    <label style={{opacity: opacity}}>Mensaje <sup>*</sup></label>
                    <textarea name='message' required style={{opacity: opacity}}></textarea>
                    <button ref={sendBtn} type='submit' value='Send'>Enviar</button>
                </fieldset>
            </form>
        </main>
        </>
    )
}

export default Contacto