import "./subsol.css"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"

const Contact = () => {
   return(
        <div className="subsol-row">
            <div className="subsol-col">
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={insta} alt="insta"/>*/}
                    <p className="subsol-socials">
                        Petronia-Steiner Str 25, 67346 Speyer
                    </p>
                </div>
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={facebook} alt="insta"/>*/}
                    <p className="subsol-socials">
                        0040 731 57 90 43 |
                        0040 176 31 23 42 32
                    </p>
                </div>
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={linkedin} alt="insta"/>*/}
                    <p className="subsol-socials">
                        office@consult-juridic.eu
                    </p>
                </div>
            </div>
            <div className="subsol-dec-hor"></div>
            <div className="subsol-col">
                <div className="subsol-flex">
                    <p className="subsol-schedule">
                        luni - joi :  9:00 - 18:30
                    </p>
                </div>
                <div className="subsol-flex">
                    <p className="subsol-schedule">
                        vineri :       8:00 - 18:00
                    </p>
                </div>
                <div className="subsol-flex">
                    <p className="subsol-schedule">
                        sambata : 9:30 - 15:00
                    </p>
                </div>
            </div>
            <div className="subsol-dec-hor"></div>
            <div className="subsol-col">
                <div className="subsol-flex">
                    <img className="icon-socials" src={insta} alt="insta"/>
                    <p className="subsol-socials">
                        consult-juridic.
                    </p>
                </div>
                <div className="subsol-flex">
                    <img className="icon-socials" src={facebook} alt="insta"/>
                    <p className="subsol-socials">
                        consult-juridic.
                    </p>
                </div>
                <div className="subsol-flex">
                    <img className="icon-socials" src={linkedin} alt="insta"/>
                    <p className="subsol-socials">
                        consult-juridic.
                    </p>
                </div>
            </div>
            <div className="subsol-dec-hor"></div>
        </div>
   )
}

export default Contact;