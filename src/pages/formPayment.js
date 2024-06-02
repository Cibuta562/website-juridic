import "./formPayment.css";
import {  useState } from "react";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import ContactForm from "./contactForm";
import {Link} from "react-router-dom";
import {useLanguage} from "../lang/LanguageContext";
import translationsRO from "../lang/data-ro";
import translationsDE from "../lang/data-de";

function Payment() {
  const [sender, setSender] = useState("online@consult-juridic.eu");
  const [message, setMessage] = useState(
    "Va rog sa completati urmatoarele campuri pentru a trimite emailul: \n" +
      "\n" +
      "Nume: \n" +
      "\n" +
      "Prenume: \n" +
      "\n" +
      "Email: \n" +
      "\n" +
      "Denumire Situatie Juridica (exemplu: Civil, Penal, Divort, Amenda, Etc): \n" +
      "\n" +
      "\n" +
      "Mesaj (Descriere succincta a problemei juridice):" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "Va rog sa atasati fisierele necesare in sectiunea ATASAMENTE"
  );
  const [subject, setSubject] = useState("Consult Juridic");

  const handleButtonClick = () => {
    const mailtoLink = `mailto:${sender}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

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
