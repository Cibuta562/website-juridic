import "./subsol.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";
import Terms from "./terms";
import { useLanguage } from "../lang/LanguageContext";

import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";

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

const Subsol = () => {
  const { getText, language } = useLanguage();
  let translations;

  // Alege fișierul de traducere corespunzător limbii selectate
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className='subsol-row'>
        <div className='subsol-col'>
          <p className='subsol-adv' style={{ paddingTop: "0px" }}>
            {getText(translations, "subsolText1")}
          </p>
          <p className='subsol-adv'>{getText(translations, "subsolText2")}</p>
        </div>
        <div className='subsol-col subsol-padding'>
          <div className='subsol-flex'>
            {/*<img className="icon-socials" src={insta} alt="insta"/>*/}
            <p className='subsol-socials'>
              București/România <br /> Speyer/Deutschland
            </p>
          </div>
          <div className='subsol-flex'>
            <p className='subsol-socials'>
              <FontAwesomeIcon icon={faPhone} />
              {/*<p style={{margin: "0px"}}>*/}
              {/*    <a href="tel:+40731579043" style={{textDecoration: "none", color: "black"}}>*/}
              {/*        0040 731 57 90 43</a></p>*/}

              <a
                href='tel:+4017631234232'
                style={{
                  textDecoration: "none",
                  color: "black",
                  // fontWeight: 'bolder',
                  marginLeft: "5px",
                }}
              >
                0049 176 31 23 42 32
              </a>
            </p>
          </div>
          <div className='subsol-flex'>
            {/*<img className="icon-socials" src={linkedin} alt="insta"/>*/}
            <p className='subsol-socials'>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href='mailto:office@consult-juridic.eu'
                style={{
                  textDecoration: "none",
                  color: "black",
                  // fontWeight: 'bolder',
                  marginLeft: "5px",
                }}
              >
                urgent@consult-juridic.eu
              </a>
            </p>
          </div>
        </div>
        <div className='subsol-dec-hor'></div>
        <div className='subsol-dec-ver1'></div>
        <div className='subsol-col calendarIcon'>
          {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
          <div className='subsol-flex'>
            <p className='subsol-schedule'>
              {getText(translations, "subsolSchedule1")}
            </p>
          </div>
          <div className='subsol-flex'>
            <p className='subsol-schedule'>
              {getText(translations, "subsolSchedule2")}
            </p>
          </div>
          <div className='subsol-flex'>
            <p className='subsol-schedule'>
              {getText(translations, "subsolSchedule3")}
            </p>
          </div>
        </div>
        <div className='subsol-dec-hor'></div>
        <div className='subsol-dec-ver'></div>
        {/*<div className="subsol-col">*/}
        {/*    <div className="subsol-flex">*/}
        {/*        <img className="icon-socials" src={facebook} alt="insta"/>*/}
        {/*        <a href="https://www.facebook.com/profile.php?id=100069100737162" target="_blank" style={{textDecoration: "none", color: "black"}}>*/}
        {/*        <p className="subsol-socials">*/}
        {/*            consult-juridic.*/}
        {/*        </p>*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className='subsol-dec-hor'></div>
      </div>
      <div className='subsol-row2'>
        <div className='subsol-col2' style={{ marginTop: "0px" }}>
          © 2024 Consult-Juridic.
        </div>
        <div className='subsol-col2'>@generation salez</div>
        <div className='subsol-col2'>
          <Link
            to='/termeni/si/conditii'
            onClick={moveToTop}
            style={{ textDecoration: "none", color: "black" }}
          >
            terms & conditions
          </Link>
        </div>
        <div className='subsol-col2'>impressum</div>
      </div>
    </div>
  );
};

export default Subsol;
