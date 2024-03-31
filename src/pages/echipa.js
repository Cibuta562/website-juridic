import "./echipa.css";
import lawyer from "../assets/lawyer.jpg";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

const Echipa = () => {
  // Importă hook-ul useLanguage pentru a accesa contextul limbii și funcțiile asociate
  const { getText, language } = useLanguage();

  // Alege fișierul de traducere corespunzător limbii selectate
  let translations;
  if (language === "ro") {
    translations = translationsRO; // foloseste textul in RO
  } else if (language === "de") {
    translations = translationsDE; // foloseste textul in GER
  }
  return (
    <div className='echipa-cont'>
      <p className='echipa-title'>{getText(translations, "echipaTitle")}</p>
      <div className='line-dec-echipa'></div>
      <div className='row-echipa'>
        <div className='col-echipa'>
          <div>
            <img className='pic-avocat' src={lawyer} alt='mike' />
          </div>
          <div className='desc-echipa'>
            <p className='membru-title'>
              {getText(translations, "echipaLucianNiculescu")}
            </p>
            <p className='membru-desc'>
              {getText(translations, "echipaMembruDesc1")}
            </p>
          </div>
        </div>
        <div className='col-echipa'>
          <div>
            <img className='pic-avocat' src={lawyer} alt='mike' />
          </div>
          <div className='desc-echipa'>
            <p className='membru-title'>
              {" "}
              {getText(translations, "echipaPartener")}
            </p>
            <p className='membru-desc'>
              {getText(translations, "echipaMembruDesc2")}
            </p>
          </div>
        </div>
        <div className='col-echipa'>
          <div>
            <img className='pic-avocat' src={lawyer} alt='mike' />
          </div>
          <div className='desc-echipa'>
            <p className='membru-title'>
              {" "}
              {getText(translations, "echipaPartener")}
            </p>
            <p className='membru-desc'>
              {" "}
              {getText(translations, "echipaMembruDesc3")}
            </p>
          </div>
        </div>
        <div className='col-echipa'>
          <div>
            <img className='pic-avocat' src={lawyer} alt='mike' />
          </div>
          <div className='desc-echipa'>
            <p className='membru-title'>
              {" "}
              {getText(translations, "echipaPartener")}
            </p>
            <p className='membru-desc'>
              {" "}
              {getText(translations, "echipaMembruDesc3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Echipa;
