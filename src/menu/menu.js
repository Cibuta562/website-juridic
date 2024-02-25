// Inside YourMenuComponent.js
import React, { useRef, useState } from 'react';
import './menu.css';
import ro_img from "../assets/romania-flag-square-icon-32.png";
import de_img from "../assets/germany-flag-square-icon-32.png";
import menu_hamburger from "../assets/menu.png";
import {Link} from "react-router-dom"

const Menu = () => {
    const scrollRef = useRef(null);
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    function moveToTop() {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo(0, 0);
        }
    }

    function moveToServicii() {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo(0, 0);
        }
    }


    function moveToContact() {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo(0, 0);
        }
    }

    // function scrollToServicii() {
    //     const viewportWidth = window.innerWidth;
    //     const viewportHeight = window.innerHeight;
    //     let scrollHeight;
    //
    //     // Define different scroll heights based on viewport width
    //     if (viewportWidth <= 768) { // Adjust the breakpoint as needed for phones
    //         scrollHeight = viewportHeight * 0.3; // Scroll to 30% of viewport height for phones
    //     } else {
    //         scrollHeight = viewportHeight * 0.6; // Scroll to 60% of viewport height for desktop
    //     }
    //
    //     if (scrollRef.current) {
    //         window.scrollTo({
    //             top: scrollHeight,
    //             behavior: 'smooth'
    //         });
    //     }
    // }
    //
    // function scrollToContact() {
    //     const viewportWidth = window.innerWidth;
    //     const viewportHeight = window.innerHeight;
    //     let scrollHeight;
    //
    //     // Define different scroll heights based on viewport width
    //     if (viewportWidth <= 768) { // Adjust the breakpoint as needed for phones
    //         scrollHeight = viewportHeight * 0.3; // Scroll to 30% of viewport height for phones
    //     } else {
    //         scrollHeight = viewportHeight * 0.6; // Scroll to 60% of viewport height for desktop
    //     }
    //
    //     if (scrollRef.current) {
    //         window.scrollTo({
    //             top: scrollHeight,
    //             behavior: 'smooth'
    //         });
    //     }
    // }

    return (
        <div className={`menu-container ${isMobileMenuVisible ? 'active' : ''}`}>
            <div className="home-button" onClick={moveToTop}>
                <Link className="link-menu" style={{display: "flex"}} to="/">
                <p style={{ color: "#C1A267" }}>Consult - </p>
                <p style={{ paddingLeft: "3px" }}> Juridic.</p>
                </Link>
            </div>

            {/* Desktop View */}
            <div className="desktop-menu">
                <div className="main-category">
                    <Link className="link-menu" to="/despre/noi">
                        Despre Noi
                    </Link></div>
                <div className="main-category">
                    <Link className="link-menu" to="/">Servicii
                    </Link></div>
                <div className="main-category">
                    <Link className="link-menu" to="/">Consultanta
                    </Link></div>
                {/*<div className="main-category">*/}
                {/*    <Link className="link-menu" to="/">Contact*/}
                {/*    </Link></div>*/}
                <div className="menu-lng">
                    <div className="main-category-img">
                        <img className="img-ro-pc" src={ro_img} alt="Romanian flag" />
                    </div>
                    <div className="main-category-img1">
                        <img className="img-de-pc" src={de_img} alt="German flag" />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="mobile-menu">
                <div
                    className={`menu-toggle-button ${isMobileMenuVisible ? 'active' : ''}`}
                    onClick={() => setMobileMenuVisible(!isMobileMenuVisible)}
                >
                    <img className="menu-hamburger" src={menu_hamburger} alt="menu icon" />
                </div>
                <div className="mobile-categories">
                    <div style={{ marginTop: "15px" }} onClick={moveToTop}>
                        <div className="main-category1">
                            <Link className="link-menu" to="/">
                                Home
                            </Link>
                        </div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{ marginTop: "15px" }} onClick={moveToTop}>
                        <div className="main-category1">
                            <Link className="link-menu" to="/despre/noi">
                                Despre Noi
                            </Link>
                        </div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <div className="main-category">Servicii</div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{ marginTop: "15px" }} onClick={moveToTop}>
                        <div className="main-category1">Consultanta</div>
                        <div className="dec-line"></div>
                    </div>
                    {/*<div style={{ marginTop: "15px" }}>*/}
                    {/*    <div className="main-category">Contact</div>*/}
                    {/*    <div className="dec-line"></div>*/}
                    {/*</div>*/}
                    <div className="menu-lng">
                        <div className="main-category-img">
                            <img className="img-ro" src={ro_img} alt="Romanian flag" />
                        </div>
                        <div className="main-category-img1">
                            <img className="img-de" src={de_img} alt="German flag" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
