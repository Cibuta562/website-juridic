import React, { useRef } from "react";
import "./consultanta.css";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import { Link } from "react-router-dom";

function Consultanta() {
  const targetConsultantaOnline = useRef(null);

  const scrollToConsultantaOnline = () => {
    targetConsultantaOnline.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Menu />
      <div className='heading-cont-consultanta'>
        <div className='dark-overlay'></div>

        <p className='heading-quote-consultanta'>
          - CONSULTANȚĂ JURIDICĂ PE EMAIL -
        </p>

        <div>
          <Link className='link-menu' to='/consultanta'>
            <button
              className='btn-heading-consultanta btn-hover'
              onClick={scrollToConsultantaOnline}
            >
              Consultanță Online
            </button>
          </Link>
        </div>
      </div>
      <div className='consultanta-cont'>
        <div className='consultanta-desc-text'>
          <div className='consultanta-dec-text'>
            <p className='despre-p' style={{ paddingTop: "20px" }}>
              Respectăm confidențialitatea și aplicăm permanent măsuri de
              securitate în ceea ce privește informațiile personale și cele de
              business ale clienților. Solicităm aceste informații pentru a
              îmbunătăți calitatea serviciilor pe care le oferim.
            </p>
            <p className='despre-p'>
              Nu împărtășim informațiile personale cu alte companii, organizații
              sau indivizi.
            </p>
          </div>
          <div className='consultanta-dec'></div>
        </div>
        <div className='consultanta-desc-text2'>
          <p className='despre-p'>
            Pe site-ul nostru puteţi obţine rapid şi ieftin consultaţii juridice
            online privind dreptul german sau drept romanesc. Astfel, evitați
            timpul pierdut cu programarea întâlnirii la birou, cu deplasarea și
            mai ales nu mai este nevoie să vă învoiți de la serviciu.
          </p>
          <p className='despre-p'>
            Pentru a solicita o consultaţie juridică online, trebuie să
            completaţi un formular în care sa ne specificaţi numele, numărul de
            telefon pentru contact, adresa de email ale Dvs şi să ne descrieţi
            problema juridică pe care o aveţi.{" "}
            <p style={{ fontWeight: "lighter", padding: "0", margin: "0" }}>
              * Puteţi ataşa până la 5 documente scanate în format JPG sau PDF
              *.
            </p>
          </p>
          <p className='despre-p'>
            Veți comunica cu un avocat, care va răspunde clarificat întrebărilor
            dumneavoastră. În maxim 24 de ore veți primi o consultație scrisă,
            detaliată de la un avocat specializat. În timp, avocatul specializat
            va analiza situația juridică prezentată, va stabili legislația
            aplicabilă, iar ulterior va oferi informații juridice temeinice.
          </p>
          <div className='consultanta-dec'></div>
        </div>
        <div className='despre-cont-text' ref={targetConsultantaOnline}>
          <p
            style={{ fontSize: "24px" }}
            className='despre-heading-consultanta'
          >
            Consultanță juridică pe E-mail
          </p>
          <div className='dec-consultanta'></div>
          <div className='text-despre-consultanta'>
            <p className='despre-p'>
              1. Alegeți domeniul de drept al problemei dumneavoastră.
            </p>
            <p className='despre-p'>2. Introduceți datele de contact.</p>
            <p className='despre-p'>
              3. Descrieți cat mai detaliat problema juridică.
            </p>
            <p className='despre-p'>
              4. După caz, atașați în format .pdf sau .jpg documentele{" "}
              <span style={{ fontWeight: "lighter" }}>
                (poze cât mai lizibile).
              </span>
            </p>
            <p className='despre-p'>5. Achitați onorariul afișat.</p>
            <p className='despre-p'>
              6. Imediat dupa procesarea plății situația juridică prezentată de
              dumneavoastră va fi analizată de unul din specialiștii noștri.
            </p>
            <p className='despre-p'>
              7. În maxim 12 de ore de la procesarea plații unul din
              specialiștii noștri va răspunde pe emailul indicat de dvs, iar
              după caz, veți primi documentele solicitate. De asemenea, veți
              primi datele de contact ale avocatului pentru eventuale detalii
              finale.
            </p>
            <p className='despre-p'>
              8. Într-o eventuală discuție telefonică, finală, toate întrebările
              restante privind situația juridică prezentată, pot fi discutate cu
              avocatul care v-a răspuns.
            </p>
            <p className='despre-p'>
              Biroul nostru va asigura consultanță juridică atât pentru
              cetățenii români rezidenți în Germania, cât și pentru cetățenii
              nemți care se confruntă cu situații juridice în România.
            </p>
            <br />
            <a
              href='mailto:office@consult-juridic.eu'
              style={{ textDecoration: "none", color: "black" }}
            >
              <button className='btn-contact-consultanta btn-hover'>
                <a
                  href='https://buy.stripe.com/test_8wM4gJ8El5B31ag000'
                  target='_blank'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  TRIMITE EMAIL
                </a>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Subsol />
    </div>
  );
}

export default Consultanta;
