import "./subsol.css"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"

const Subsol = () => {
   return(
       <div>
           <p className="subsol-adv">Folositi numerele de telefon de mai jos, sau adresa de email, exclusiv in situatii de urgenta</p>
        <div className="subsol-row">
            <div className="subsol-col">
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={insta} alt="insta"/>*/}
                    <p className="subsol-socials">
                        Bucuresti/Romania; Speyer/Deutschland
                    </p>
                </div>
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={facebook} alt="insta"/>*/}
                    <p className="subsol-socials">
                        <p style={{margin: "0px"}}>0040 731 57 90 43</p>
                        <p style={{margin: "0px"}}>0040 176 31 23 42 32</p>
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
            <div className="subsol-dec-ver1"></div>
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
            <div className="subsol-dec-ver"></div>
            <div className="subsol-col">
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={insta} alt="insta"/>*/}
                    <p className="subsol-socials">
                        consult-juridic.
                    </p>
                </div>
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={facebook} alt="insta"/>*/}
                    <p className="subsol-socials">
                        consult-juridic.
                    </p>
                </div>
                <div className="subsol-flex">
                    {/*<img className="icon-socials" src={linkedin} alt="insta"/>*/}
                    <p className="subsol-socials">
                        consult-juridic.
                    </p>
                </div>
            </div>
            <div className="subsol-dec-hor"></div>
        </div>
           <div className="subsol-row2">
               <div className="subsol-col2">
                   © 2024 Consult-Juridic.
               </div>
               <div className="subsol-col2">
                   @generation salez
               </div>
               <div className="subsol-col2">
                   terms & conditions
               </div>
               <div className="subsol-col2">
                   impressum
               </div>
           </div>
       </div>
   )
}

export default Subsol;