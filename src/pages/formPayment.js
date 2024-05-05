import "./formPayment.css";
import {  useState } from "react";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import ContactForm from "./contactForm";
import {Link} from "react-router-dom";

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

  return (
    <div style={{ width: "100%" }}>
      <Menu />
      <div className='heading-payment'>
        <br/>
        <br/>
        <br/>
        <h1 className='payment-conf'>Plata Dumneavoastra a fost finalizata cu succes!</h1>
        <p className='payment-conf-p'>
          Dupa confirmarea platii, situatia va fi analizata de un avocat, urmand ca solutia juridica sa va fie transmisa pe adresa de mail indicata de dvs. in cel mult 24 de ore.
        </p>
        <p className='payment-conf-p'>
          In cazul necesitatii unor informatii suplimentare, veti fi contactat prin mail separat, ori la numarul  de telefonul indicat de dumneavoastra.
        </p>
        <p className='payment-conf-p'>
          Va  multumim!
        </p>
        <p className='payment-conf-p'>
          Echipa Consult Juridic
        </p>
        <br/>
        <Link style={{textDecoration: "none"}} to="/">
        <div className='payment-conf-div'>
          <p className="p-div-center">
          Inapoi la meniu
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
