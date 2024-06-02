import "./contact.css";
import contact from "../assetsMin/contact.jpg";

import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

const Contact = () => {
  const { getText, language } = useLanguage();

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  return (
    <div>
      <div className='contact-img-cont'>
        <img className='contact-img' src={contact} alt='contact' />
      </div>
      <div className='contact-form-main'>
        <p className='contact-heading'>
          {getText(translations, "contactTitle")}
        </p>
        <div className='line-dec-cont'></div>
        <div className='form-cont'>
          <p className='text-cont' style={{textAlign: "justify"}}>{getText(translations, "contactText")}</p>

          <p className='text-cont'>
            <a className='link-email' href='mailto:office@consult-juridic.eu' style={{color: "#c1a267", textAlign: "justify"}}>
              office@consult-juridic.eu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
