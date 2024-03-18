import './consultanta.css';
import Menu from "../menu/menu";
import Subsol from "./subsol";
import {Link} from "react-router-dom";

function Consultanta() {
    return (
        <div style={{backgroundColor: "black"}}>
            <Menu/>
            <div className="heading-cont-consultanta">

                <div className="dark-overlay"></div>

                <p className="heading-quote-consultanta">
                    - CONSULTANTA JURIDICA PE EMAIL -
                </p>

                <div>
                    <Link className="link-menu" to="/consultanta">
                        <button className="btn-heading-consultanta" >
                            Consultanta Online >
                        </button>
                    </Link>
                </div>



            </div>
            <div className="consultanta-cont">
                <div className="consultanta-desc-text">
                    <div className="consultanta-dec-text">
                        <p className="despre-p" style={{paddingTop: "20px"}}>
                            Respectăm confidențialitatea și aplicăm permanent măsuri de securitate în ceea ce privește informațiile personale și cele de business ale clienților. Solicităm aceste informații pentru a îmbunătăți calitatea serviciilor pe care le oferim.
                        </p>
                        <p className="despre-p">
                            Nu împărtășim informațiile personale cu alte companii, organizații sau indivizi.
                        </p>
                    </div>
                    <div className="consultanta-dec"></div>
                </div>
                <div className="consultanta-desc-text2">
                    <p className="despre-p">
                        Pe site-ul nostru puteţi obţine rapid şi ieftin consultaţii juridice online privind dreptul german sau drept romanesc. Astfel, evitati timpul pierdut cu programarea intalnirii la birou, cu deplasarea si mai ales nu mai este nevoie sa va invoiti de la serviciu
                    </p>
                    <p className="despre-p">
                        Pentru a solicita o consultaţie juridică online, trebuie să completaţi un formular în care sa ne specificaţi numele, numărul de telefon pentru contact, adresa de email ale Dvs şi să ne descrieţi problema juridică pe care o aveţi. Puteţi ataşa pana la 4 documente scanate în format JPG.
                    </p>
                    <p className="despre-p">
                        Veti comunica cu un avocat, care va raspunde calificat intrebarilor dumneavoastra. In maximn 24 de ore veți primi o consultatie scrisa, detaliata de la un avocat specializat.
                        In timpul, avocatul specializat va analiza situatia juridica prezentata, va stabili legislatia aplicabila, iar ulterior va oferi informatii juridice temeinice
                    </p>
                    <div className="consultanta-dec"></div>
                </div>
                <div className="despre-cont-text">
                    <p style={{fontSize: "24px"}} className="despre-heading-consultanta">Consultanta juridica pe E-mail</p>
                    <div className="line-dec-ver-despre"></div>
                    <div className="text-despre">
                        <p className="despre-p">
                            1.	Alegeti domeniul de drept al problemei dumneavoastra;
                        </p>
                        <p className="despre-p">
                            2.	Introduceti datele de contact;
                        </p>
                        <p className="despre-p">
                            3.	Descrieti cat mai detaliat problema juridical;
                        </p>
                        <p className="despre-p">
                            4.	Dupa caz, atasati in format pdf sau jpg ( poze cate mai lizibile) documente
                        </p>
                        <p className="despre-p">
                            5.	 Achitati onorariul afisat;
                        </p>
                        <p className="despre-p">
                            6.	Imediat dupa dupa procesarea platii situatia juridica prezentata de dvs va fi analizata de unul din specialistii nostri.
                        </p>
                        <p className="despre-p">
                            7.	In maxim 12 de ore de la procesarea platii unul din specialistii nostri va raspunde pe mailul indicat de dvs, iar dupa caz, veti primi documente solicitate. De asemenea, veti primi datele de contact ale avocatului pentru eventuale detalii finale.
                        </p>
                        <p className="despre-p">
                            8.	 Intr-o eventuala discutie telefonica, finala, toate întrebările restante privind situatia juridica prezentata, pot fi discutate cu avocatul care v-a raspuns
                        </p>
                        <p className="despre-p">
                            Biroul nostru va asigura consultanță juridică atât pentru cetățenii români rezidenți în Germania cât și pentru cetățenii nemți care se confruntă cu situații juridice în România.
                        </p>
                        <br/>
                        <a href="mailto:office@consult-juridic.eu" style={{textDecoration: "none", color: "black"}}>
                            <button className="btn-contact-consultanta" >
                                  <a href="https://buy.stripe.com/test_8wM4gJ8El5B31ag000" target="_blank" style={{textDecoration: "none", color: "white"}}>
                                      Trimite Mail >
                                </a>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Subsol/>
        </div>
    );
}

export default Consultanta;
