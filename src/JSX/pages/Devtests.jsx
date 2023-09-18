import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

function Devtests() {
    const navigateTo = useNavigate();
    const handleClick = () => {
        navigateTo('/portfolio');
        //     scrollTo(x, y)
        window.scrollTo(0, 0);
        // hide burguer nav
        setBar('nav__burguer-btn');
        setBurguerClass('nav__burguer-cont');
    }

    return (
        <>
        <main className='tests'>
            {/* hacer tests en TDD antes de crear el apartado de tests*/}
        </main>
        </>
    )
}

export default Devtests