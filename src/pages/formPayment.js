import "./formPayment.css";
import Menu from "../menu/menu";
import {Link} from "react-router-dom";
import {useLanguage} from "../lang/LanguageContext";
import translationsRO from "../lang/data-ro";
import translationsDE from "../lang/data-de";

function Payment() {

  const { getText, language } = useLanguage();

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  return (
    <div style={{ width: "100%" }}>
      <Menu />
      <div className='heading-payment'>
        <br/>
        <br/>
        <br/>
        <h1 className='payment-conf'>{getText(translations, "paymentTextHeading")}</h1>
        <p className='payment-conf-p'>
          {getText(translations, "paymentText1")}
        </p>
        <p className='payment-conf-p'>
          {getText(translations, "paymentText2")}
        </p>
        <p className='payment-conf-p'>
          {getText(translations, "paymentText3")}
        </p>
        <p className='payment-conf-p'>
          {getText(translations, "paymentText4")}
        </p>
        <br/>
        <Link style={{textDecoration: "none"}} to="/">
        <div className='payment-conf-div'>
          <p className="p-div-center">
            {getText(translations, "paymentTextButton")}
          </p>
        </div>
        </Link>
        {/*<button className='payment-btn' onClick={handleButtonClick}>*/}
        {/*  Catre formular*/}
        {/*</button>*/}
        {/*<ContactForm/>*/}
      </div>
      {/*<div className='div-payment'></div>*/}
    </div>
  );
}

export default Payment;
