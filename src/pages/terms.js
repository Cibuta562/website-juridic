import './terms.css';
import Menu from "../menu/menu";
import Subsol from "./subsol";


const Terms = () => {
    return(
        <div>
            <Menu></Menu>
        <div className="terms-cont">
            <p className="terms-heading">
            Termeni și Condiții
            </p>

            <p className="terms-text">
            Acești Termeni și Condiții ("Termeni") guvernează utilizarea dvs. a [Numele Site-ului] ("Site-ul") operat de [Numele Companiei] ("Compania"). Accesând și utilizând Site-ul, sunteți de acord să respectați acești Termeni. Dacă nu sunteți de acord cu nicio parte a acestor Termeni, trebuie să vă abțineți să utilizați Site-ul.
            </p>

            <p className="terms-heading">
            1. Acceptarea Termenilor
            </p>

            <p className="terms-text">
            Prin accesarea sau utilizarea Site-ului, sunteți de acord să fiți supus acestor Termeni și tuturor legilor și reglementărilor aplicabile. Dacă nu sunteți de acord cu niciunul dintre acești Termeni, vi se interzice utilizarea sau accesarea Site-ului.
            </p>

            <p className="terms-heading">
            2. Drepturile de Proprietate Intelectuală
            </p>

            <p className="terms-text">
            Toate conținutul de pe Site, inclusiv textul, grafica, logo-urile, imaginile și software-ul, sunt proprietatea Companiei sau a licențiatorilor săi și sunt protejate de drepturile de autor, mărci înregistrate și alte legi privind proprietatea intelectuală. Nu puteți reproduce, distribui, modifica sau transmite nicio parte a Site-ului fără permisiunea prealabilă în scris din partea Companiei.
            </p>

            <p className="terms-heading">
            3. Conduită a Utilizatorului
            </p>


            <p className="terms-text">
            Sunteți de acord să utilizați Site-ul numai în scopuri legale și într-un mod care să nu încalce drepturile altora. Nu trebuie să utilizați Site-ul pentru:
            Transmiterea de conținut ilegal, defăimător, obscen sau ofensiv.
            Hartuirea, intimidarea sau vătămarea altora.
            Încălcarea oricăror legi sau reglementări aplicabile.
            </p>


            <p className="terms-heading">
            4. Renunțare la Garanții
            </p>

            <p className="terms-text">
            Site-ul este furnizat în baza "așa cum este" și "conform disponibilității", fără niciun fel de garanții, fie explicite, fie implicite. Compania nu face nicio reprezentare sau garanție cu privire la exactitatea, fiabilitatea sau completitudinea conținutului de pe Site.
            </p>

            <p className="terms-heading">
            5. Limitare a Răspunderii
            </p>


            <p className="terms-text">
            În niciun caz Compania nu va fi răspunzătoare pentru daune directe, indirecte, accidentale, speciale sau consecințiale rezultate din utilizarea sau imposibilitatea de a utiliza Site-ul, chiar dacă Compania a fost informată despre posibilitatea unor astfel de daune.
            </p>



                <p className="terms-heading">
            6. Indemnizare
                </p>


            <p className="terms-text">
            Sunteți de acord să despăgubiți, să apărați și să mențineți nevinovați Compania și ofițerii săi, directorii, angajații, agenții și afiliații de orice pretenții, daune, răspunderi, costuri și cheltuieli rezultate din utilizarea dvs. a Site-ului sau încălcarea acestor Termeni.
            </p>

                <p className="terms-heading">
            7. Modificări ale Termenilor
                </p>

            <p className="terms-text">
            Compania își rezervă dreptul de a modifica acești Termeni în orice moment fără notificare prealabilă. Continuând să utilizați Site-ul după orice astfel de modificări, sunteți de acord să fiți supus Termenilor revizuiți.
            </p>

                <p className="terms-heading">
            8. Legea Aplicabilă
                </p>

            <p className="terms-text">
            Acești Termeni vor fi guvernați și interpretați în conformitate cu legile din [jurisdicția], fără a se face referire la conflicte de legi.
            </p>

                <p className="terms-heading">
            9. Contactați-ne
                </p>

            <p className="terms-text">
            Dacă aveți întrebări sau nelămuriri cu privire la acești Termeni, vă rugăm să ne contactați la [adresa de e-mail sau adresa poștală de contact].
            </p>

        </div>
        <Subsol/>
        </div>
    )
}

export default Terms