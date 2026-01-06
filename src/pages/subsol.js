import "./subsol.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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

  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  const currentYear = new Date().getFullYear();


  return (
    <div style={{ backgroundColor: "white" }}>
        <div style={{paddingTop: "50px", textAlign: "center"}}>
          <p style={{marginLeft: "20px", marginRight: "20px", textAlign: "center", fontSize: "20px"}}>
            {getText(translations, "subsolHeader")}
          </p>
        </div>
      <div className='subsol-row'>
        <div className='subsol-col-1'>
          <div className='subsol-flex'>
            {/*<img className="icon-socials" src={insta} alt="insta"/>*/}
            <p className='subsol-socials'>
              București/Romania
            </p>
          </div>
          <p className='subsol-socials'>
            <FontAwesomeIcon icon={faPhone} />
            <a
                href='tel:+4017631234232'
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "5px",
                }}
            >
              0040 731 579 043 (RO)
            </a>
          </p>
          <div className='subsol-flex'>
            <p className='subsol-socials'>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                  href='mailto:office@consult-juridic.eu'
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "5px",
                  }}
              >
                office@consult-juridic.eu
              </a>
            </p>
          </div>
          {/*<p className='subsol-adv'>{getText(translations, "subsolText2")}</p>*/}
        </div>

        <div className='subsol-col3 subsol-padding'>
          <div className='subsol-flex'>
            {/*<img className="icon-socials" src={insta} alt="insta"/>*/}
            <p className='subsol-socials'>
              Speyer/Deutschland
            </p>
          </div>
          <div className='subsol-flex'>
          </div>
          <div className='subsol-flex'>
            <p className='subsol-socials'>
              <FontAwesomeIcon icon={faPhone} />
              <a
                  href='tel:+4017631234232'
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "5px",
                  }}
              >
                0049 176 31 23 42 32 (DE)
              </a>
            </p>
          </div>
          <div className='subsol-flex'>
            <p className='subsol-socials'>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href='mailto:office@consult-juridic.eu'
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "5px",
                }}
              >
                office@consult-juridic.eu
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
              {/*{getText(translations, "subsolText1")}*/}
            </p>
          </div>
        </div>
        <div className='subsol-dec-hor'></div>
        <div className='subsol-dec-ver'></div>
        <div className='subsol-dec-hor'></div>
      </div>
      <div className='subsol-row2'>
        <div className='subsol-col2' style={{marginTop: "0px"}}>
          © {currentYear} Consult-Juridic.
        </div>
        <div className='subsol-col2'>
          <a style={{textDecoration: "none", color: "black"}} href="https://generationsalez.com" target="_blank">
            @generation salez
          </a>
        </div>
        <div className='subsol-col2'>
          <Link
              to='/termeni/si/conditii'
              onClick={moveToTop}
              style={{textDecoration: "none", color: "black"}}
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
