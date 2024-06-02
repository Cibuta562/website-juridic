import "./contactForm.css"
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {useLanguage} from "../lang/LanguageContext";
import translationsRO from "../lang/data-ro";
import translationsDE from "../lang/data-de";


const ContactForm = () => {


    const { getText, language } = useLanguage();

    let translations;
    if (language === "ro") {
        translations = translationsRO;
    } else if (language === "de") {
        translations = translationsDE;
    }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(formData);

        emailjs
            .sendForm('service_ptzqzf9', 'template_iq97n57', form.current, {
                publicKey: 'Vo_OfRgK6DeUPu2kL',
            })
            .then(
                () => {
                    console.log('Email sent successfully!');
                    // Redirect to the Stripe payment link after the email is sent
                    setTimeout(() => {
                        window.location.href = "https://buy.stripe.com/14kaHN0jn5u98s8aEF";
                    }, 500);
                },
                (error) => {
                    console.log('Email sending failed:', error.text);
                },
            );
    };



    return(
        <div className="contact-div">
            {/*<div className="contact-img-cont">*/}
            {/*    <img className="contact-img" src={contact} alt="contact"/>*/}
            {/*</div>*/}
            <div className="contact-form">
                <p className="contact-heading">
                    {getText(translations, "contactTextHeading")}
                </p>
                <div className="line-dec-cont"></div>
                <div className="form-cont">

                    <form  ref={form} onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={getText(translations, "contactTextNume")}
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <hr className="decoration-line" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={getText(translations, "contactTextPrenume")}
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <hr className="decoration-line" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <hr className="decoration-line" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder={getText(translations, "contactTextTelefon")}
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                                <hr className="decoration-line" />
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group-option">
                            <label htmlFor="subject">Subiect</label>
                            <select
                                className="form-control-option"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            >
                                <option value="">{getText(translations, "contactTextCategorieJuridica")}</option>
                                <option value="Drept civil – RO">{getText(translations, "contactTextCategorieJuridica1")}</option>
                                <option value="Drept civil – DE">{getText(translations, "contactTextCategorieJuridica2")}</option>
                                <option value="Drept penal - RO">{getText(translations, "contactTextCategorieJuridica3")}</option>
                                <option value="Drept penal – DE">{getText(translations, "contactTextCategorieJuridica4")}</option>
                                <option value="Dreptul familiei  - RO">{getText(translations, "contactTextCategorieJuridica5")}</option>
                                <option value="Dreptul Familiei – DE">{getText(translations, "contactTextCategorieJuridica6")}</option>
                                <option value="Drept rutier – RO">{getText(translations, "contactTextCategorieJuridica7")}</option>
                                <option value="Drept rutier – DE">{getText(translations, "contactTextCategorieJuridica8")}</option>
                                <option value="Drept imobiliar – RO">{getText(translations, "contactTextCategorieJuridica9")}</option>
                                <option value="Drept imobiliar - DE">{getText(translations, "contactTextCategorieJuridica10")}</option>
                                <option value="Altele – RO">{getText(translations, "contactTextCategorieJuridica11")}</option>
                                <option value="Altele - DE">{getText(translations, "contactTextCategorieJuridica12")}</option>
                            </select>
                            <hr className="decoration-line" />
                        </div>
                        </div>
                        <p className="textarea-title">{getText(translations, "contactTextMesaj")}</p>
                        <div className="form-row">
                        <div className="form-group-area">
                          <textarea
                              style={{ minHeight: '150px', resize: 'vertical'}}
                              className="form-control"
                              // placeholder="Message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                          ></textarea>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary" >
                            {/*<a*/}
                            {/*    href='https://buy.stripe.com/14kaHN0jn5u98s8aEF'*/}
                            {/*    target='_blank'*/}
                            {/*    style={{ textDecoration: "none", color: "white" }}*/}
                            {/*> Trimite </a>*/}
                            {getText(translations, "contactTextTrimite")}
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default ContactForm