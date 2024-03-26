import "./servicii.css";
import penal from "../assets/heading.jpg";
import briefImg from "../assets/brief-img.jpg";
import servicii1 from "../assets/servicii1.jpg";
import servicii2 from "../assets/servicii2.jpg";
import servicii3 from "../assets/servicii3.jpg";
import servicii4 from "../assets/servicii4.jpg";
import servicii5 from "../assets/servicii5.jpg";
import servicii6 from "../assets/servicii6.jpg";
import briefDown from "../assets/brief-down.jpg";
import { useState } from "react";
import TapButton from "./TapServicii";
import { DETALII_SERVICII } from "../lang/data-ro";
import React, { useRef } from "react";

const Servicii = () => {
  const [selectedServiciuRowZero, setSelectedServiciuRowZero] = useState();
  {
    /* useState pentru selectarea butonului din meniul de servicii de pe randul 0 */
  }
  // functie care seteaza butonul ca `activ` din meniul de servicii de pe randul 0
  function handleSelectServiciuRowZero(selectedButtonRowZero) {
    setSelectedServiciuRowZero(selectedButtonRowZero);
  }

  const [selectedServiciuRowOne, setSelectedServiciuRowOne] = useState();
  {
    /* useState pentru selectarea butonului din meniul de servicii de pe randul 1 */
  }
  // functie care seteaza butonul ca `activ` din meniul de servicii de pe randul 1
  function handleSelectServiciuRowOne(selectedButtonRowOne) {
    setSelectedServiciuRowOne(selectedButtonRowOne);
  }

  let detaliiServiciiContentRowZero;
  let detaliiServiciiContentRowOne;
  const selectedServiciuOptionsZero = [
    "btnDreptPenal",
    "btnDreptCivil",
    "btnDreptRutier",
  ];
  const selectedServiciuOptionsOne = [
    "btnDeclaratiiFiscale",
    "btnDreptulFamiliei",
    "btnDreptulMuncii",
  ];
  if (selectedServiciuOptionsZero.includes(selectedServiciuRowZero)) {
    detaliiServiciiContentRowZero = (
      <div id='detalii-content'>
        <h3>{DETALII_SERVICII[selectedServiciuRowZero].title}</h3>
        <div className='line-dec-ver10'></div>
        <p>{DETALII_SERVICII[selectedServiciuRowZero].description}</p>
        <p>{DETALII_SERVICII[selectedServiciuRowZero].info}</p>
        <button
          className='close-detaliiServicii'
          onClick={() => handleSelectServiciuRowZero()}
        ></button>
      </div>
    );
  }

  if (selectedServiciuOptionsOne.includes(selectedServiciuRowOne)) {
    detaliiServiciiContentRowOne = (
      <div id='detalii-content'>
        <h3>{DETALII_SERVICII[selectedServiciuRowOne].title}</h3>
        <div className='line-dec-ver10'></div>
        <p>{DETALII_SERVICII[selectedServiciuRowOne].description}</p>
        <p>{DETALII_SERVICII[selectedServiciuRowOne].info}</p>
        <button
          className='close-detaliiServicii'
          onClick={() => handleSelectServiciuRowOne()}
        ></button>
      </div>
    );
  }
  const isMobile = window.innerWidth < 800;

  const [selectedServiciiMobile, setSelectedServiciiMobile] = useState({
    dreptPenal: false,
    dreptCivil: false,
    dreptRutier: false,
    declaratiiFiscale: false,
    dreptulFamiliei: false,
    dreptulMuncii: false,
  });

  function handleSelectServiciuDreptPenal() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptPenal: !prevState.dreptPenal,
    }));
  }

  function handleSelectServiciuDreptCivil() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptCivil: !prevState.dreptCivil,
    }));
  }

  function handleSelectServiciuDreptRutier() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptRutier: !prevState.dreptRutier,
    }));
  }
  function handleSelectServiciuDeclaratiiFiscale() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      declaratiiFiscale: !prevState.declaratiiFiscale,
    }));
  }

  function handleSelectServiciuDreptulFamiliei() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptulFamiliei: !prevState.dreptulFamiliei,
    }));
  }

  function handleSelectServiciuDreptulMuncii() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptulMuncii: !prevState.dreptulMuncii,
    }));
  }

  return (
    <div>
      <div className='servicii-cont'>
        <p className='servicii-title'>Servicii Juridice</p>
        <p className='servicii-subtitle'>drept român / german</p>
        <div className='line-dec-ver'></div>

        {/* row - servicii - 0 : Drept Penal / Drept Civil / Drept Rutier */}
        <div className='row-servicii edit-detalii-servicii'>
          <div className='col-servicii'>
            <div>
              <img src={servicii1} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'> Drept Penal </p>
              <p className='desc-servicii'>
                <ul>
                  <li>
                    asistență cu reprezentare mandate internaționale de
                    extrădare
                  </li>
                  <li>recunoașteri sentințe penale</li>
                  <li>asistență infracțiuni economice</li>
                </ul>
              </p>

              {/* buton mai multe detalii pentru `Drept Penal` */}
              <TapButton
                className='butonDetaliiServicii'
                isSelected={selectedServiciuRowZero === "btnDreptPenal"}
                eMobil={isMobile}
                onSelect={() => {
                  handleSelectServiciuRowZero("btnDreptPenal");
                  handleSelectServiciuDreptPenal();
                }}
              >
                Mai multe detalii
              </TapButton>
            </div>
            {/* {dreptPenalMobile} */}
            {isMobile && selectedServiciiMobile.dreptPenal && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDreptPenal.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDreptPenal.description}</p>
                <p>{DETALII_SERVICII.btnDreptPenal.info}</p>
                {/* <button
                  className='close-detaliiServicii'
                  onClick={() => handleSelectServiciuDreptPenal}
                ></button> */}
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img src={servicii2} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'> Drept Civil </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>recuperari creanțe</li>
                  <li>pretenții financiare</li>
                  <li>partaj succesoral</li>
                  <li>contracte comerciale</li>
                </ul>
              </p>

              {/* buton mai multe detalii pentru `Drept Civil` */}
              <TapButton
                className='butonDetaliiServicii'
                isSelected={selectedServiciuRowZero === "btnDreptCivil"}
                eMobil={isMobile}
                onSelect={() => {
                  handleSelectServiciuRowZero("btnDreptCivil");
                  handleSelectServiciuDreptCivil();
                }}
              >
                Mai multe detalii
              </TapButton>
            </div>
            {/* {dreptCivilMobile} */}
            {isMobile && selectedServiciiMobile.dreptCivil && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDreptCivil.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDreptCivil.description}</p>
                <p>{DETALII_SERVICII.btnDreptCivil.info}</p>
                {/* <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDreptCivil}
                ></button> */}
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img src={servicii3} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'> Drept Rutier </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>sancțiuni contravenționale cu elemente de externitate</li>
                  <li>infracțiuni la regimul rutier</li>
                  <li>accidente rutiere</li>
                </ul>
              </p>

              {/* buton mai multe detalii pentru `Drept Rutier` */}
              <TapButton
                className='butonDetaliiServicii'
                isSelected={selectedServiciuRowZero === "btnDreptRutier"}
                eMobil={isMobile}
                onSelect={() => {
                  handleSelectServiciuRowZero("btnDreptRutier");
                  handleSelectServiciuDreptRutier();
                }}
              >
                Mai multe detalii
              </TapButton>
            </div>
          </div>
          {/* {dreptRutierMobile} */}
          {isMobile && selectedServiciiMobile.dreptRutier && (
            <div id='mobile-detalii-content'>
              <h3>{DETALII_SERVICII.btnDreptRutier.title}</h3>
              <div className='line-dec-ver10'></div>
              <p>{DETALII_SERVICII.btnDreptRutier.description}</p>
              <p>{DETALII_SERVICII.btnDreptRutier.info}</p>
              {/* <button
                className='close-detaliiServicii'
                onClick={handleSelectServiciuDreptRutier}
              ></button> */}
            </div>
          )}
        </div>

        {/* row - servicii - 0 : Drept Penal / Drept Civil / Drept Rutier */}
        <div>{detaliiServiciiContentRowZero}</div>

        {/* row - servicii - 1 : Declarații Fiscale / Dreptul Familiei / Dreptul Muncii */}
        <div className='row-servicii1 edit-detalii-servicii'>
          <div className='col-servicii'>
            <div>
              <img src={servicii4} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'> Declarații Fiscale </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>depunere acte contabile la timp</li>
                  <li>corespondența cu autoritățile fiscale germane</li>
                </ul>
              </p>

              {/* buton mai multe detalii pentru `Declarații Fiscale` */}
              <TapButton
                className='butonDetaliiServicii'
                isSelected={selectedServiciuRowOne === "btnDeclaratiiFiscale"}
                eMobil={isMobile}
                onSelect={() => {
                  handleSelectServiciuRowOne("btnDeclaratiiFiscale");
                  handleSelectServiciuDeclaratiiFiscale();
                }}
              >
                Mai multe detalii
              </TapButton>
            </div>
            {isMobile && selectedServiciiMobile.declaratiiFiscale && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDeclaratiiFiscale.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDeclaratiiFiscale.description}</p>
                <p>{DETALII_SERVICII.btnDeclaratiiFiscale.info}</p>
                {/* <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDeclaratiiFiscale}
                ></button> */}
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img src={servicii5} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'> Dreptul Familiei </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>divorț</li>
                  <li>partaj</li>
                  <li>exercitare autoritate părintească</li>
                  <li>stabilire/recuperare pensie de întreținere</li>
                </ul>
              </p>
              {/* buton mai multe detalii pentru `Dreptul Familiei` */}
              <TapButton
                className='butonDetaliiServicii'
                isSelected={selectedServiciuRowOne === "btnDreptulFamiliei"}
                eMobil={isMobile}
                onSelect={() => {
                  handleSelectServiciuRowOne("btnDreptulFamiliei");
                  handleSelectServiciuDreptulFamiliei();
                }}
              >
                Mai multe detalii
              </TapButton>
            </div>
            {isMobile && selectedServiciiMobile.dreptulFamiliei && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDreptulFamiliei.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDreptulFamiliei.description}</p>
                <p>{DETALII_SERVICII.btnDreptulFamiliei.info}</p>
                {/* <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDreptulFamiliei}
                ></button> */}
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img src={servicii6} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'> Dreptul Muncii </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>detașări pe teritoriul UE</li>
                  <li>formulare A1</li>
                  <li>contracte de muncă internaționale</li>
                  <li>recuperări salarii</li>
                  <li>munca fără forme legale</li>
                </ul>
              </p>
              {/* buton mai multe detalii pentru `Dreptul Muncii` */}
              <TapButton
                className='butonDetaliiServicii'
                isSelected={selectedServiciuRowOne === "btnDreptulMuncii"}
                eMobil={isMobile}
                onSelect={() => {
                  handleSelectServiciuRowOne("btnDreptulMuncii");
                  handleSelectServiciuDreptulMuncii();
                }}
              >
                Mai multe detalii
              </TapButton>
            </div>
          </div>
          {isMobile && selectedServiciiMobile.dreptulMuncii && (
            <div id='mobile-detalii-content'>
              <h3>{DETALII_SERVICII.btnDreptulMuncii.title}</h3>
              <div className='line-dec-ver10'></div>
              <p>{DETALII_SERVICII.btnDreptulMuncii.description}</p>
              <p>{DETALII_SERVICII.btnDreptulMuncii.info}</p>
              {/* <button
                className='close-detaliiServicii'
                onClick={handleSelectServiciuDreptulMuncii}
              ></button> */}
            </div>
          )}
        </div>

        {/* row - servicii - 1 : Declarații Fiscale / Dreptul Familiei / Dreptul Muncii */}
        <div>{detaliiServiciiContentRowOne}</div>

        <div className='line-dec-ver2'></div>

        <div className='brief-servicii'>
          <div className='second-brief-servicii'>
            <div className='div-servicii'>
              <p className='brief-heading'>Cum te putem ajuta</p>
              <div className='line-dec'></div>
              <div className='brief-text'>
                <p>
                  Dacă ați primit un formular de la o instituție germană, cum ar
                  fi: Finanțe (Finazamt), Primărie (Rathaus), Poliție
                  (Polizeiamt), Înregistrare firme (Gewerbeamt) și nu știți să-l
                  completați sau unde să-l trimiteți, vă putem ajuta noi.
                  <p>
                    Ne veți putea trimite documentul primit împreună cu datele
                    de identificare iar noi îl vom completa. Ulterior veți primi
                    pe adresa dumneavoastră de email documentul împreună cu
                    îndrumarile necesare.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className='first-brief-servicii'>
            <img className='brief-img-servicii' src={briefDown} />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Servicii;
