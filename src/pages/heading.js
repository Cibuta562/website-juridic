import "./heading.css"
import heading from "../assets/heading.jpg"
import upArrow from "../assets/arrow.png"

function Heading() {

    function moveToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }


    return(
        <div style={{width: "100%", margin: "0"}}>
        <div className="heading-cont">

            <div className="dark-overlay"></div>

            <h1 className="heading-quote">
                UN DREPT NEDOVEDIT ESTE
                PRECUM UN DREPT INEXISTENT
            </h1>

            <div>
                <button className="btn-heading">
                    Consultanta Online >
                </button>
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
                <div className="stats-row" style={{borderBottom: "1px solid white"}}>
                    <p className="heading-stats-number">
                        547
                    </p>
                    <p className="heading-stats-title">
                        Seminarii si Stagii
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Heading