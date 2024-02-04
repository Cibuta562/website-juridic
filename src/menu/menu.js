// Inside YourMenuComponent.js
import React, { useState } from 'react';
import './menu.css';
import ro_img from "../assets/romania-flag-square-icon-32.png";
import de_img from "../assets/germany-flag-square-icon-32.png";
import menu_hamburger from "../assets/menu.png";

const YourMenuComponent = () => {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    return (
        <div className={`menu-container ${isMobileMenuVisible ? 'active' : ''}`}>
            <div className="home-button">
                <p style={{ color: "#C1A267" }}>Consult - </p>
                <p style={{ paddingLeft: "3px" }}> Juridic.</p>
            </div>

            {/* Desktop View */}
            <div className="desktop-menu">
                <div className="main-category">Despre Noi</div>
                <div className="main-category">Consultanta</div>
                <div className="main-category">Servicii</div>
                <div className="main-category">Contact</div>
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
                    <div style={{marginTop: "15px"}}>
                        <div className="main-category1">Home</div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <div className="main-category">Despre Noi</div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <div className="main-category">Consultanta</div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <div className="main-category">Servicii</div>
                        <div className="dec-line"></div>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <div className="main-category">Contact</div>
                        <div className="dec-line"></div>
                    </div>
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

export default YourMenuComponent;
