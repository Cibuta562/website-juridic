import "./servicii.css";
import React, { useState } from "react";
import servicii1 from "../assets/servicii1.jpg";
import servicii2 from "../assets/servicii2.jpg";
import servicii3 from "../assets/servicii3.jpg";
import servicii4 from "../assets/servicii4.jpg";
import servicii5 from "../assets/servicii5.jpg";
import servicii6 from "../assets/servicii6.jpg";
import briefDown from "../assets/brief-down.jpg";

import TapButton from "./TapServicii";
import { DETALII_SERVICII } from "../lang/data-ro";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

const Servicii = () => {
  // Importă hook-ul useLanguage pentru a accesa contextul limbii și funcțiile asociate
  const { getText, language } = useLanguage();

  // Alege fișierul de traducere corespunzător limbii selectate
  let translations;
  if (language === "ro") {
    translations = translationsRO; // foloseste textul in RO
  } else if (language === "de") {
    translations = translationsDE; // foloseste textul in GER
  }

  /* useState pentru selectarea butonului din meniul de servicii de pe randul 0 */
  const [selectedServiciuRowZero, setSelectedServiciuRowZero] = useState();

  // functie care seteaza butonul ca `activ` din meniul de servicii de pe randul 0
  function handleSelectServiciuRowZero(selectedButtonRowZero) {
    setSelectedServiciuRowZero(selectedButtonRowZero);
  }

  /* useState pentru selectarea butonului din meniul de servicii de pe randul 1 */
  const [selectedServiciuRowOne, setSelectedServiciuRowOne] = useState();

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
  // mobile states
  const [selectedServiciiMobile, setSelectedServiciiMobile] = useState({
    dreptPenal: false,
    dreptCivil: false,
    dreptRutier: false,
    declaratiiFiscale: false,
    dreptulFamiliei: false,
    dreptulMuncii: false,
  });
  // drept penal mobile
  function handleSelectServiciuDreptPenal() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptPenal: !prevState.dreptPenal,
    }));
  }
  // drept civil mobile
  function handleSelectServiciuDreptCivil() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptCivil: !prevState.dreptCivil,
    }));
  }
  // drept rutier mobile
  function handleSelectServiciuDreptRutier() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptRutier: !prevState.dreptRutier,
    }));
  }
  // declaratii fiscale mobile
  function handleSelectServiciuDeclaratiiFiscale() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      declaratiiFiscale: !prevState.declaratiiFiscale,
    }));
  }
  // dreptul familiei mobile
  function handleSelectServiciuDreptulFamiliei() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptulFamiliei: !prevState.dreptulFamiliei,
    }));
  }
  // dreptul muncii mobile
  function handleSelectServiciuDreptulMuncii() {
    setSelectedServiciiMobile((prevState) => ({
      ...prevState,
      dreptulMuncii: !prevState.dreptulMuncii,
    }));
  }

  return (
    <div>
      <div className='servicii-cont'>
        <p className='servicii-title'>
          {getText(translations, "serviciiTitle")}
        </p>
        <p className='servicii-subtitle'>
          {" "}
          {getText(translations, "serviciiSubtitle")}
        </p>
        <div className='line-dec-ver'></div>

        {/* row - servicii - 0 : Drept Penal / Drept Civil / Drept Rutier */}
        <div className='row-servicii edit-detalii-servicii'>
          <div className='col-servicii'>
            <div>
              <img src={servicii1} alt='img penal' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'>
                {" "}
                {getText(translations, "dreptPenalTitle")}
              </p>
              <p className='desc-servicii'>
                <ul>
                  <li>{getText(translations, "dreptPenalLi1")}</li>
                  <li>{getText(translations, "dreptPenalLi2")}</li>
                  <li>{getText(translations, "dreptPenalLi3")}</li>
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
                {getText(translations, "btnMaiMulteDetalii")}
              </TapButton>
            </div>
            {/* {dreptPenalMobile} */}
            {isMobile && selectedServiciiMobile.dreptPenal && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDreptPenal.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDreptPenal.description}</p>
                <p>{DETALII_SERVICII.btnDreptPenal.info}</p>
                <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDreptPenal}
                ></button>
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img src={servicii2} alt='img civil' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'>
                {getText(translations, "dreptCivilTitle")}
              </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>{getText(translations, "dreptCivilLi1")}</li>
                  <li>{getText(translations, "dreptCivilLi2")}</li>
                  <li>{getText(translations, "dreptCivilLi3")}</li>
                  <li>{getText(translations, "dreptCivilLi4")}</li>
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
                {getText(translations, "btnMaiMulteDetalii")}
              </TapButton>
            </div>
            {/* {dreptCivilMobile} */}
            {isMobile && selectedServiciiMobile.dreptCivil && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDreptCivil.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDreptCivil.description}</p>
                <p>{DETALII_SERVICII.btnDreptCivil.info}</p>
                <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDreptCivil}
                ></button>
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img src={servicii3} alt='img rutier' className='img-serv' />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'>
                {" "}
                {getText(translations, "dreptRutierTitle")}
              </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>{getText(translations, "dreptRutierLi1")}</li>
                  <li>{getText(translations, "dreptRutierLi2")}</li>
                  <li>{getText(translations, "dreptRutierLi3")}</li>
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
                {getText(translations, "btnMaiMulteDetalii")}
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
              <button
                className='close-detaliiServicii'
                onClick={handleSelectServiciuDreptRutier}
              ></button>
            </div>
          )}
        </div>

        {/* row - servicii - 0 : Drept Penal / Drept Civil / Drept Rutier */}
        <div>{detaliiServiciiContentRowZero}</div>

        {/* row - servicii - 1 : Declarații Fiscale / Dreptul Familiei / Dreptul Muncii */}
        <div className='row-servicii1 edit-detalii-servicii'>
          <div className='col-servicii'>
            <div>
              <img
                src={servicii4}
                alt='img declaratii fiscale'
                className='img-serv'
              />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'>
                {getText(translations, "declaratiiFiscaleTitle")}
              </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>{getText(translations, "declaratiiFiscaleLi1")}</li>
                  <li>{getText(translations, "declaratiiFiscaleLi2")}</li>
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
                {getText(translations, "btnMaiMulteDetalii")}
              </TapButton>
            </div>
            {isMobile && selectedServiciiMobile.declaratiiFiscale && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDeclaratiiFiscale.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDeclaratiiFiscale.description}</p>
                <p>{DETALII_SERVICII.btnDeclaratiiFiscale.info}</p>
                <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDeclaratiiFiscale}
                ></button>
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img
                src={servicii5}
                alt='img dreptul familiei'
                className='img-serv'
              />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'>
                {" "}
                {getText(translations, "dreptulFamilieiTitle")}
              </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>{getText(translations, "dreptulFamilieiLi1")}</li>
                  <li>{getText(translations, "dreptulFamilieiLi2")}</li>
                  <li>{getText(translations, "dreptulFamilieiLi3")}</li>
                  <li>{getText(translations, "dreptulFamilieiLi4")}</li>
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
                {getText(translations, "btnMaiMulteDetalii")}
              </TapButton>
            </div>
            {isMobile && selectedServiciiMobile.dreptulFamiliei && (
              <div id='mobile-detalii-content'>
                <h3>{DETALII_SERVICII.btnDreptulFamiliei.title}</h3>
                <div className='line-dec-ver10'></div>
                <p>{DETALII_SERVICII.btnDreptulFamiliei.description}</p>
                <p>{DETALII_SERVICII.btnDreptulFamiliei.info}</p>
                <button
                  className='close-detaliiServicii'
                  onClick={handleSelectServiciuDreptulFamiliei}
                ></button>
              </div>
            )}
          </div>
          <div className='col-servicii'>
            <div>
              <img
                src={servicii6}
                alt='img dreptul muncii'
                className='img-serv'
              />
            </div>
            <div className='text-servicii'>
              <p className='heading-servicii'>
                {" "}
                {getText(translations, "dreptulMunciiTitle")}
              </p>
              <p className='desc-servicii'>
                <ul type='square'>
                  <li>{getText(translations, "dreptulMunciiLi1")}</li>
                  <li>{getText(translations, "dreptulMunciiLi2")}</li>
                  <li>{getText(translations, "dreptulMunciiLi3")}</li>
                  <li>{getText(translations, "dreptulMunciiLi4")}</li>
                  <li>{getText(translations, "dreptulMunciiLi5")}</li>
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
                {getText(translations, "btnMaiMulteDetalii")}
              </TapButton>
            </div>
          </div>
          {isMobile && selectedServiciiMobile.dreptulMuncii && (
            <div id='mobile-detalii-content'>
              <h3>{DETALII_SERVICII.btnDreptulMuncii.title}</h3>
              <div className='line-dec-ver10'></div>
              <p>{DETALII_SERVICII.btnDreptulMuncii.description}</p>
              <p>{DETALII_SERVICII.btnDreptulMuncii.info}</p>
              <button
                className='close-detaliiServicii'
                onClick={handleSelectServiciuDreptulMuncii}
              ></button>
            </div>
          )}
        </div>

        {/* row - servicii - 1 : Declarații Fiscale / Dreptul Familiei / Dreptul Muncii */}
        <div>{detaliiServiciiContentRowOne}</div>

        {/* <div className='line-dec-ver2'></div> */}

        <div className='brief-servicii'>
          <div className='second-brief-servicii'>
            <div className='div-servicii'>
              <p className='brief-heading'>
                {getText(translations, "briefServiciiHeading")}
              </p>
              <div className='line-dec'></div>
              <div className='brief-text'>
                <p>
                  {getText(translations, "briefServiciiText1")}
                  <p>{getText(translations, "briefServiciiText2")}</p>
                </p>
              </div>
            </div>
          </div>
          <div className='first-brief-servicii'>
            <img className='brief-img-servicii' src={briefDown} alt='' />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Servicii;
