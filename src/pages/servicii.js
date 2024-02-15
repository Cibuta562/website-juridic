import "./servicii.css"
import penal from "../assets/heading.jpg"


const Servicii = () => {
    return(
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
                        <img src={penal} alt="img penal" className="img-serv"/>
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
                        <img src={penal} alt="img penal" className="img-serv"/>
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
                        <img src={penal} alt="img penal" className="img-serv"/>
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
                        <img src={penal} alt="img penal" className="img-serv"/>
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
                        <img src={penal} alt="img penal" className="img-serv"/>
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
                        <img src={penal} alt="img penal" className="img-serv"/>
                    </div>
                    <div className="text-servicii">
                        <p className="heading-servicii"> Dreptul Muncii </p>
                        <p className="desc-servicii"> detasari pe teritoriul UE, formulare A1, contracte de munca internationale, recuperari salarii,
                            munca pe teritoriul german fara forme legale </p>
                        <button className="btn-servicii">
                            Mai multe detalii >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicii;