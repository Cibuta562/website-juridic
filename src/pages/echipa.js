import "./echipa.css"
import pisicaAvocat from "../assets/mike.webp"

const Echipa = () => {
    return(
        <div className="echipa-cont">
            <p className="echipa-title">
                Echipa Noastra
            </p>
            <div className="line-dec-echipa"></div>
            <div className="row-echipa">
                <div className="col-echipa">
                    <div>
                    <img className="pic-avocat" src={pisicaAvocat} alt="mike"/>
                    </div>
                    <div className="desc-echipa">
                        <p className="membru-title">
                            Lucian Niculescu
                        </p>
                        <p className="membru-desc">
                            avocat CNSA, membru al UNBR și BRAO Germania
                        </p>
                    </div>
                </div>
                <div className="col-echipa">
                    <div>
                        <img className="pic-avocat" src={pisicaAvocat} alt="mike"/>
                    </div>
                    <div className="desc-echipa">
                        <p className="membru-title">
                            Lucian Niculescu
                        </p>
                        <p className="membru-desc">
                            avocat CNSA, membru al UNBR și BRAO Germania
                        </p>
                    </div>
                </div>
                <div className="col-echipa">
                    <div>
                        <img className="pic-avocat" src={pisicaAvocat} alt="mike"/>
                    </div>
                    <div className="desc-echipa">
                        <p className="membru-title">
                            Lucian Niculescu
                        </p>
                        <p className="membru-desc">
                            avocat CNSA, membru al UNBR și BRAO Germania
                        </p>
                    </div>
                </div>
                <div className="col-echipa">
                    <div>
                        <img className="pic-avocat" src={pisicaAvocat} alt="mike"/>
                    </div>
                    <div className="desc-echipa">
                        <p className="membru-title">
                            Lucian Niculescu
                        </p>
                        <p className="membru-desc">
                            avocat CNSA, membru al UNBR și BRAO Germania
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Echipa;