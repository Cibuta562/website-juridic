import "./echipa.css";
import lawyer from "../assetsMin/lawyer.jpg";

import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

const Echipa = () => {
  const { getText, language } = useLanguage();


  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
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
