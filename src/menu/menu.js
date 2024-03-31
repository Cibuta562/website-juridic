import "./menu.css";
import React, { useState } from "react";
import ro_img from "../assets/romania-flag-square-icon-32.png"; // steag RO
import de_img from "../assets/germany-flag-square-icon-32.png"; // steag GER
import menu_hamburger from "../assets/menu.png"; // imagine pictorgrama de meniu
import { Link, NavLink } from "react-router-dom";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

const Menu = () => {
  // Importă hook-ul useLanguage pentru a accesa contextul limbii și funcțiile asociate
  const { getText, switchLanguage, language } = useLanguage();

  // Alege fișierul de traducere corespunzător limbii selectate
  let translations;
  if (language === "ro") {
    translations = translationsRO; // foloseste textul in RO
  } else if (language === "de") {
    translations = translationsDE; // foloseste textul in GER
  }

  // Funcția pentru schimbarea limbii
  const handleChangeLanguage = (lang) => {
    switchLanguage(lang); // Apelează funcția switchLanguage pentru a schimba limba cu cea specificată
  };

  // stare pentru vizibilitatea meniului pe mobil
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  // functie pentru derularea la inceputul paginii
  function moveToTop() {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }

  // returnare meniu
  return (
    <div className={"menu-container"}>
      {/* Home button : Consult - Juridic */}
      <div className='home-button' onClick={moveToTop}>
        <Link className='link-menu' to='/website-juridic'>
          <p className='meniu-consult'>
            {getText(translations, "pageTitleConsult")}
          </p>
          {/* Consult - */}
          <p className='meniu-juridic'>
            {getText(translations, "pageTitleJuridic")}
          </p>
          {/* Juridic */}
        </Link>
      </div>

      {/* Desktop View */}
      <div className='desktop-menu'>
        <div className='main-category'>
          <NavLink
            className='link-menu btn-menu-hover'
            to='/despre/noi'
            onClick={moveToTop}
          >
            {/* Despre Noi */}
            {getText(translations, "meniuDespreNoi")}
          </NavLink>
        </div>
        <div className='main-category'>
          <NavLink
            className='link-menu btn-menu-hover'
            to='/website-juridic'
            onClick={moveToTop}
          >
            {/* Servicii */}
            {getText(translations, "meniuServicii")}
          </NavLink>
        </div>
        <div className='main-category'>
          <NavLink
            className='link-menu btn-menu-hover'
            to='/consultanta'
            onClick={moveToTop}
          >
            {/* Consultanta */}
            {getText(translations, "meniuConsultanta")}
          </NavLink>
        </div>
        {/* !BUTON DE CONTACT */}
        <div className='menu-lng'>
          <div className='main-category-img'>
            <img
              className='img-ro-pc'
              src={ro_img}
              alt='Romanian flag'
              onClick={() => handleChangeLanguage("ro")}
            />
          </div>
          <div className='main-category-img1'>
            <img
              className='img-de-pc'
              src={de_img}
              alt='German flag'
              onClick={() => handleChangeLanguage("de")}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='mobile-menu'>
        <div
          className={`menu-toggle-button ${
            isMobileMenuVisible ? "active" : ""
          }`}
          onClick={() => setMobileMenuVisible(!isMobileMenuVisible)}
        >
          <img
            className='menu-hamburger'
            src={menu_hamburger}
            alt='menu icon'
          />
        </div>
        {/* ascundere meniu dupa apasarea unui buton */}
        <div
          className={`mobile-categories ${
            isMobileMenuVisible ? "visible" : ""
          }`}
        >
          <div
            style={{ marginTop: "15px" }}
            onClick={() => {
              setMobileMenuVisible(false);
              // inchidere dupa apasare Home
              moveToTop();
            }}
          >
            <div className='main-category1'>
              <Link className='link-menu' to='/website-juridic'>
                {getText(translations, "meniuHome")}
              </Link>
            </div>
            <div className='dec-line'></div>
          </div>
          <div
            style={{ marginTop: "15px" }}
            onClick={() => {
              setMobileMenuVisible(false);
              moveToTop();
            }}
          >
            <div className='main-category1'>
              <Link className='link-menu' to='/despre/noi'>
                {getText(translations, "meniuDespreNoi")}
              </Link>
            </div>
            <div className='dec-line'></div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <div className='main-category1'>
              <Link
                className='link-menu'
                to='/website-juridic'
                onClick={() => {
                  setMobileMenuVisible(false);
                  moveToTop();
                }}
              >
                {getText(translations, "meniuServicii")}
              </Link>
            </div>
            <div className='dec-line'></div>
          </div>
          <div
            style={{ marginTop: "15px" }}
            onClick={() => {
              setMobileMenuVisible(false);
              moveToTop();
            }}
          >
            <div className='main-category1'>
              <Link className='link-menu' to='/consultanta'>
                {getText(translations, "meniuConsultanta")}
              </Link>
            </div>
            <div className='dec-line'></div>
          </div>
          {/* !BUTON DE CONTACT */}
          <div className='menu-lng'>
            <div className='main-category-img'>
              <img
                className='img-ro'
                src={ro_img}
                alt='Romanian flag'
                onClick={() => {
                  setMobileMenuVisible(false);
                  handleChangeLanguage("ro");
                }} // schimba limba in RO
              />
            </div>
            <div className='main-category-img1'>
              <img
                className='img-de'
                src={de_img}
                alt='German flag'
                onClick={() => {
                  setMobileMenuVisible(false);
                  handleChangeLanguage("de");
                }} // schimba limba in GER
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
