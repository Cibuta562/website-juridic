import "./despreNoi.css";
import Menu from "../menu/menu";
import Subsol from "./subsol";
import briefImg from "../assets/brief-img.jpg";
import { Link } from "react-router-dom";
import despre2 from "../assets/despre2.jpg";
import upArrow from "../assets/arrow.png";

function Despre() {
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
  return (
    <div style={{ backgroundColor: "black" }}>
      <Menu />
      <div className='heading-cont-despre'>
        <div className='dark-overlay'></div>

        <p className='heading-quote-despre'>
          PRIETENUL ADEVĂRAT ESTE ACELA CARE TE SFĂTUIEŞTE DE BINE, NU CEL CARE
          ÎŢI LAUDĂ NEBUNIILE
        </p>
        <p className='heading-quote-despre1'>- NOI TE SFĂTUIM DE BINE -</p>
      </div>
      <div className='despre-cont'></div>
      <div className='despreCont-text'>
        <p className='despre-heading'>Despre Noi</p>
        <div className='line-dec-ver-despre'></div>
        <div className='text-despre'>
          <p className='despre-p'>
            Suntem specializați în domeniul consultanței și asistenței juridice
            pentru persoane fizice și persoane juridice ce își desfașoară
            activitatea profesională ori locuiesc în Germania sau România, ne
            adresăm persoanelor fizice și juridice cu rezidenţă română de pe tot
            teritoriul Germaniei.
          </p>
          <p className='despre-p'>
            De asemenea, preîntâmpinăm majoritatea situațiilor fiscale cu care
            se confruntă cetățenii români în relația cu autoritățile germane,
            dar și a situațiilor fiscale cu care se confruntă cetățenii germani
            în relația cu autoritățile române.
          </p>
          <p className='despre-p'>
            Asigurăm înființări de societăți comerciale în Germania. Scopul
            nostru este să asigurăm clienților noștri soluțiile cele mai bune
            din legea fiscală germană și română.
          </p>
          <p className='despre-p'>
            Întocmim pentru dumneavoastră toate declarațiile fiscale necesare
            pentru persoane fizice, persoane fizice autorizate sau persoane
            juridice.
          </p>
          <p className='despre-p'>
            Obținem numărul de impozitare pentru dumneavoastră, asigurăm
            asistență la înființarea persoanei juridice.
          </p>
          <p className='despre-p'>
            Folosim mijloace tehnice moderne, astfel încat deplasarea la biroul
            nostru să nu devină o necesitate.
          </p>
          <p className='despre-p'>
            Se vor putea transmite documentele necesare prin servicii de tip
            Cloud, soluție pusă la dispoziție de către experții noștri.
          </p>
          <p className='despre-p'>
            Contactul cu biroul nostru se va putea realiza atât în limba română
            cât și în limba germană, prin toate căile de comunicație: Telefon,
            Skype, WhatsApp, E-mail, cât și prin formularul de contact.
          </p>
          <p className='despre-p'>
            Biroul nostru va asigura consultanță juridică atât pentru cetățenii
            români rezidenți în Germania cât și pentru cetățenii nemți care se
            confruntă cu situații juridice în România.
          </p>
        </div>
        <div className='brief-despre-noi'>
          <div className='first-brief'>
            <img className='brief-img despre-img' src={despre2} />
          </div>
          <div className='second-brief'>
            <div>
              <div className='briefText'>
                <p>
                  Peste 12 ani de experiență în avocatură internă și
                  internațională.
                </p>
                <p>
                  Noi îi ajutăm pe oameni să se lupte în mod eficient faţă de ce
                  este greşit și să-și apere cu succes drepturile fundamentale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subsol />
      <button className='btn-top' onClick={moveToTop}>
        <img className='img-arrow' src={upArrow} alt={"btn-top"} />
      </button>
    </div>
  );
}

export default Despre;
