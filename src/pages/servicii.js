import './servicii.css';
import penal from '../assets/heading.jpg';
import briefImg from '../assets/brief-img.jpg';
import servicii1 from '../assets/servicii1.jpg';
import servicii2 from '../assets/servicii2.jpg';
import servicii3 from '../assets/servicii3.jpg';
import servicii4 from '../assets/servicii4.jpg';
import servicii5 from '../assets/servicii5.jpg';
import servicii6 from '../assets/servicii6.jpg';
import briefDown from '../assets/brief-down.jpg';

const Servicii = () => {
  return (
    <div>
      <div className="servicii-cont">
        <p className="servicii-title">Servicii Juridice</p>
        <p className="servicii-subtitle">drept roman/german</p>
        <div className="line-dec-ver"></div>
        <div className="row-servicii">
          <div className="col-servicii">
            <div>
              <img src={servicii1} alt="img penal" className="img-serv" />
            </div>
            <div className="text-servicii">
              <p className="heading-servicii"> Drept Penal </p>
              <p className="desc-servicii">
                {' '}
                asistență cu reprezentare mandate internaționale de extrădare,
                recunoașteri sentințe penale, asistență infracțiuni economice{' '}
              </p>
              <button className="btn-servicii btn-hover">
                Mai multe detalii >
              </button>
            </div>
          </div>
          <div className="col-servicii">
            <div>
              <img src={servicii2} alt="img penal" className="img-serv" />
            </div>
            <div className="text-servicii">
              <p className="heading-servicii"> Drept Civil </p>
              <p className="desc-servicii">
                {' '}
                recuperari creanțe, pretenții financiare, partaj succesoral,
                contracte comerciale{' '}
              </p>
              <button className="btn-servicii btn-hover">
                Mai multe detalii >
              </button>
            </div>
          </div>
          <div className="col-servicii">
            <div>
              <img src={servicii3} alt="img penal" className="img-serv" />
            </div>
            <div className="text-servicii">
              <p className="heading-servicii"> Drept Rutier </p>
              <p className="desc-servicii">
                {' '}
                sancțiuni contravenționale cu elemente de externitate,
                infracțiuni la regimul rutier, accidente rutiere{' '}
              </p>
              <button className="btn-servicii btn-hover">
                Mai multe detalii >
              </button>
            </div>
          </div>
        </div>
        <div className="row-servicii1">
          <div className="col-servicii">
            <div>
              <img src={servicii4} alt="img penal" className="img-serv" />
            </div>
            <div className="text-servicii">
              <p className="heading-servicii"> Declarații Fiscale </p>
              <p className="desc-servicii">
                {' '}
                depunere acte contabile la timp, corespondența cu autoritățile
                fiscale germane{' '}
              </p>
              <button className="btn-servicii btn-hover">
                Mai multe detalii >
              </button>
            </div>
          </div>
          <div className="col-servicii">
            <div>
              <img src={servicii5} alt="img penal" className="img-serv" />
            </div>
            <div className="text-servicii">
              <p className="heading-servicii"> Dreptul Familiei </p>
              <p className="desc-servicii">
                {' '}
                divorț, partaj, exercitare autoritate părintească,
                stabilire/recuperare pensie de întreținere{' '}
              </p>
              <button className="btn-servicii btn-hover">
                Mai multe detalii >
              </button>
            </div>
          </div>
          <div className="col-servicii">
            <div>
              <img src={servicii6} alt="img penal" className="img-serv" />
            </div>
            <div className="text-servicii">
              <p className="heading-servicii"> Dreptul Muncii </p>
              <p className="desc-servicii">
                {' '}
                detașări pe teritoriul UE, formulare A1, contracte de muncă
                internaționale, recuperări salarii, munca fără forme legale{' '}
              </p>
              <button className="btn-servicii btn-hover">
                Mai multe detalii >
              </button>
            </div>
          </div>
        </div>

        <div className="line-dec-ver2"></div>

        <div className="brief-servicii">
          <div className="second-brief-servicii">
            <div className="div-servicii">
              <p className="brief-heading">Cum te putem ajuta</p>
              <div className="line-dec"></div>
              <div className="brief-text">
                <p>
                  Dacă ați primit un formular de la o instituție germană, cum ar
                  fi: Finanțe (Finazamt), Primărie (Rathaus), Poliție
                  (Polizeiamt), Înregistrare firme (Gewerbeamt) și nu știți să-l
                  completați sau unde să-l trimiteți, vă putem ajuta noi. Ne
                  veți putea trimite documentul primit împreună cu datele de
                  identificare iar noi îl vom completa. Ulterior veți primi pe
                  adresa dumneavoastră de email documentul împreuna cu
                  îndrumarile necesare.
                </p>
              </div>
            </div>
          </div>
          <div className="first-brief-servicii">
            <img className="brief-img-servicii" src={briefDown} />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Servicii;
