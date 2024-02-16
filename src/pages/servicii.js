import "./servicii.css"
import penal from "../assets/heading.jpg"
import briefImg from "../assets/brief-img.jpg";
import servicii1 from "../assets/servicii1.jpg";
import servicii2 from "../assets/servicii2.jpg";
import servicii3 from "../assets/servicii3.jpg";
import servicii4 from "../assets/servicii4.jpg";
import servicii5 from "../assets/servicii5.jpg";
import servicii6 from "../assets/servicii6.jpg";
import briefDown from "../assets/brief-down.jpg";


const Servicii = () => {
    return(
        <div>
        <div className="servicii-cont">
            <p className="servicii-title">
                 Servicii Juridice
            </p>
            <p className="servicii-subtitle">
                drept roman/german
            </p>
            <div className="line-dec-ver"></div>
            <div className="row-servicii">
                <div className="col-servicii">
                    <div>
                        <img src={servicii1} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Drept Penal </p>
                        <p className="desc-servicii"> asistenta cu reprezentare mandate internationale de extradare,
                            recunoasteri sentinte penale, asistenta infractiuni economice </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
                <div className="col-servicii">
                    <div>
                        <img src={servicii2} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Drept Civil </p>
                        <p className="desc-servicii"> ecuperari creante, pretentii financiare,
                            partaj succesoral, contracte comerciale </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
                <div className="col-servicii">
                    <div>
                        <img src={servicii3} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Drept Rutier </p>
                        <p className="desc-servicii"> sanctiuni contraventionale cu elemente de externitate,
                            infractiuni la regimul rutier, accidente rutiere </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
            </div>
            <div className="row-servicii1">
                <div className="col-servicii">
                    <div>
                        <img src={servicii4} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Declaratii Fiscale </p>
                        <p className="desc-servicii"> depunere acte contabile la timp,
                            corespondenta cu autoritatile fiscale germane </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
                <div className="col-servicii">
                    <div>
                        <img src={servicii5} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Dreptul Familiei </p>
                        <p className="desc-servicii"> divort, partaj, exercitare autoritate parinteasca,
                            stabilire/recuperare pensie de intretinere </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
                <div className="col-servicii">
                    <div>
                        <img src={servicii6} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Dreptul Muncii </p>
                        <p className="desc-servicii"> detasari pe teritoriul UE, formulare A1, contracte de munca internationale, recuperari salarii,
                            munca fara forme legale </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
            </div>

            <div className="line-dec-ver2"></div>

            <div className="brief-servicii">
                <div className="second-brief-servicii">
                    <div className="div-servicii" >
                        <p className="brief-heading">Cum te putem ajuta</p>
                        <div className="line-dec"></div>
                        <div className="brief-text">
                            <p>Daca ati primit un formular de la o institutie germana, cum ar fi: Finante (Finazamt), Primarie (Rathaus), Politie (Polizeiamt), Inregistrare firme (Gewerbeamt) si nu stiti sa-l completati sau unde sa-l trimiteti, va putem ajuta noi. Ne veti putea trimite documentul primit impreuna cu datele de identificare iar noi il vom completa. Ulterior veti primi pe adresa dumneavoastra de mail documentul impreuna cu indrumarile necesare.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="first-brief-servicii">
                    <img className="brief-img-servicii" src={briefDown}/>
                </div>
            </div>


        </div>

            <div>

            </div>

        </div>
    )
}

export default Servicii;