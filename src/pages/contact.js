import "./contact.css";
import contact from "../assets/contact.jpg";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

const Contact = () => {
  // Importă hook-ul useLanguage pentru a accesa contextul limbii și funcțiile asociate
  const { getText, language } = useLanguage();

  // Alege fișierul de traducere corespunzător limbii selectate
  let translations;
  if (language === "ro") {
    translations = translationsRO; // foloseste textul in RO
  } else if (language === "de") {
    translations = translationsDE; // foloseste textul in GER
  }

  // const [formData, setFormData] = useState({
  //   input1: "",
  //   input2: "",
  //   input3: "",
  //   input4: "",
  //   message: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div>
      <div className='contact-img-cont'>
        <img className='contact-img' src={contact} alt='contact' />
      </div>
      <div className='contact-form'>
        <p className='contact-heading'>
          {getText(translations, "contactTitle")}
        </p>
        <div className='line-dec-cont'></div>
        <div className='form-cont'>
          <p className='text-cont'>{getText(translations, "contactText")}</p>

          <p className='text-cont'>
            <a className='link-email' href='mailto:romania@consult-juridic.eu'>
              romania@consult-juridic.eu
            </a>
          </p>

          {/*<form onSubmit={handleSubmit}>*/}
          {/*    <div className="form-row">*/}
          {/*        <div className="form-group">*/}
          {/*            <input*/}
          {/*                type="text"*/}
          {/*                className="form-control"*/}
          {/*                placeholder="Nume"*/}
          {/*                name="input1"*/}
          {/*                value={formData.input1}*/}
          {/*                onChange={handleInputChange}*/}
          {/*            />*/}
          {/*            <hr className="decoration-line" />*/}
          {/*        </div>*/}
          {/*        <div className="form-group">*/}
          {/*            <input*/}
          {/*                type="text"*/}
          {/*                className="form-control"*/}
          {/*                placeholder="Prenume"*/}
          {/*                name="input2"*/}
          {/*                value={formData.input2}*/}
          {/*                onChange={handleInputChange}*/}
          {/*            />*/}
          {/*            <hr className="decoration-line" />*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <div className="form-row">*/}
          {/*        <div className="form-group">*/}
          {/*            <input*/}
          {/*                type="text"*/}
          {/*                className="form-control"*/}
          {/*                placeholder="Email"*/}
          {/*                name="input3"*/}
          {/*                value={formData.input3}*/}
          {/*                onChange={handleInputChange}*/}
          {/*            />*/}
          {/*            <hr className="decoration-line" />*/}
          {/*        </div>*/}
          {/*        <div className="form-group">*/}
          {/*            <input*/}
          {/*                type="text"*/}
          {/*                className="form-control"*/}
          {/*                placeholder="Telefon"*/}
          {/*                name="input4"*/}
          {/*                value={formData.input4}*/}
          {/*                onChange={handleInputChange}*/}
          {/*            />*/}
          {/*            <hr className="decoration-line" />*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <p className="textarea-title">Mesaj</p>*/}
          {/*    <div className="form-group-area">*/}
          {/*      <textarea*/}
          {/*          style={{ minHeight: '150px', resize: 'vertical' }}*/}
          {/*          className="form-control"*/}
          {/*          // placeholder="Message"*/}
          {/*          name="message"*/}
          {/*          value={formData.message}*/}
          {/*          onChange={handleInputChange}*/}
          {/*      ></textarea>*/}
          {/*    </div>*/}
          {/*    <button type="submit" className="btn btn-primary">Trimite</button>*/}
          {/*</form>*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
