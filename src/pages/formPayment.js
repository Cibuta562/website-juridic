import "./formPayment.css";
import { useRef, useState } from "react";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import check from "../assets/check-mark.png";

import { Link } from "react-router-dom";

function Payment() {
  const [sender, setSender] = useState("contact@consultjuridic.ro");
  const [message, setMessage] = useState(
    "Va rog sa completati urmatoarele campuri pentru a trimite emailul: \n" +
      "\n" +
      "Nume: \n" +
      "\n" +
      "Prenume: \n" +
      "\n" +
      "Email: \n" +
      "\n" +
      "Categoria Juridica: \n" +
      "\n" +
      "\n" +
      "Mesaj:" +
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

  return (
    <div style={{ width: "100%" }}>
      <Menu />
      <div className='heading-payment'>
        <h1 className='payment-conf'>Plata Dumneavoastra a fost procesata!</h1>
        {/*<img className="img-check" src={check}/>*/}
        <p className='payment-conf-p'>
          Faceti click pe buton pentru a completa formularul pe email despre
          necesitatea dumneavostra
        </p>
        <p className='payment-conf-p'>
          Veti fi contactat de unul dinte avocatii nostri in maximum 24 de ore
          de la primirea mail-ului
        </p>
        <button className='payment-btn' onClick={handleButtonClick}>
          Catre formular
        </button>
      </div>
      <div className='div-payment'></div>
      <Subsol />
    </div>
  );
}

export default Payment;
