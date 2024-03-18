import "./heading.css"
import heading from "../assets/heading.jpg"
import upArrow from "../assets/arrow.png"
import briefImg from"../assets/brief-img.jpg"
import {Link} from "react-router-dom";

function Heading() {

    function moveToTop() {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo(0, 0);
        }
    }


    return(
        <div style={{width: "100%", margin: "0"}}>
        <div className="heading-cont">

            <div className="dark-overlay"></div>

            <p className="heading-quote">
                UN DREPT NEDOVEDIT ESTE
                PRECUM UN DREPT INEXISTENT
            </p>

            <div>
                <Link className="link-menu" to="/consultanta">
                <button className="btn-heading">
                    Consultanta Online >
                </button>
                </Link>
            </div>

                <button className="btn-top" onClick={moveToTop}>
                    <img className="img-arrow" src={upArrow} alt={"btn-top"}/>
                </button>

        </div>

            <div className="stats-column">
                <div className="stats-row">
                    <p className="heading-stats-number">
                        121
                    </p>
                    <p className="heading-stats-title">
                        Colaboratori externi
                    </p>
                </div>
                <div className="stats-row">
                    <p className="heading-stats-number">
                        779
                    </p>
                    <p className="heading-stats-title">
                        Clienti
                    </p>
                </div>
                <div className="stats-row">
                    <p className="heading-stats-number">
                        2750
                    </p>
                    <p className="heading-stats-title">
                        Cauze Instrumentate
                    </p>
                </div>
                <div className="stats-row" >
                    <p className="heading-stats-number">
                        547
                    </p>
                    <p className="heading-stats-title">
                        Seminarii si Stagii
                    </p>
                </div>

            </div>

            <div className="brief">
                <div className="first-brief">
                    <img className="brief-img" src={briefImg}/>
                </div>
                <div className="second-brief">
                    <div style={{paddingLeft: "20px"}}>
                    <p className="brief-heading">Consultanta Juridica</p>
                    <div className="line-dec"></div>
                    <div className="brief-text">
                    <p>Asigurăm asistență juridică de specialitate atât în drept german cât și în drept român</p>
                    <p>Pe site-ul nostru puteţi obţine rapid şi ieftin consultaţii juridice online privind dreptul german sau drept romanesc. Astfel, evitati timpul pierdut cu programarea intalnirii la birou, cu deplasarea si mai ales nu mai este nevoie sa va invoiti de la serviciu
                        </p>
                    </div>
                    <div className="brief-btn">
                        {/*<button className="brief-btn-1">*/}
                        {/*    Contacteaza-ne >*/}
                        {/*</button>*/}
                        <Link className="link-menu" to="/consultanta">
                        <button className="brief-btn-2">
                            Consult Juridic Online >
                        </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Heading