import React from 'react';
import './css/header.css';

function Header(props){

    function openNav(e){
        e.persist();
        e.target.parentElement.querySelector(".items").classList.add("show");
    }

    function closeNav(e){
        e.persist();
        e.target.parentElement.parentElement.classList.remove("show");
    }

    function closeNava(e){
        e.persist();
        e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("show");
    }

    function overlayHide(e){
        e.persist();
        e.target.parentElement.classList.remove("show");
    }


    return (
        <header>
            <a href="#"><div className="branding">
                <div className="logo"></div>
                <div className="text">VERTZO</div>
            </div></a>
            <div className="hamburger icon" onClick={openNav}>menu</div>
            <div className="items">
                <div className="overlay" onClick={overlayHide}></div>
                <div className="cont">
                    <div className="close icon" onClick={closeNav}>close</div>
                    <div className="center-items">
                        <a href="#" onClick={closeNava}><li className="item">Home</li></a>
                        <a href="#about" onClick={closeNava}><li className="item">About</li></a>
                        <a href="#team" onClick={closeNava}><li className="item">Team</li></a>
                        <a href="#events" onClick={closeNava}><li className="item">Events</li></a>
                        <a href="#contact" onClick={closeNava}><li className="item">Contact</li></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;