import "./contactForm.css"
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {

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
                <p className="contact-heading">Contact</p>
                <div className="line-dec-cont"></div>
                <div className="form-cont">

                    <form  ref={form} onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nume"
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
                                    placeholder="Prenume"
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
                                    placeholder="Telefon"
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
                                <option value="">Categorie Juridica</option>
                                <option value="Drept civil – RO">Drept civil – RO</option>
                                <option value="Drept civil – DE">Drept civil – DE</option>
                                <option value="Drept penal - RO">Drept penal - RO</option>
                                <option value="Drept penal – DE">Drept penal – DE</option>
                                <option value="Dreptul familiei  - RO">Dreptul familiei  - RO</option>
                                <option value="Dreptul Familiei – DE">Dreptul Familiei – DE</option>
                                <option value="Drept rutier – RO">Drept rutier – RO</option>
                                <option value="Drept rutier – DE">Drept rutier – DE</option>
                                <option value="Drept imobiliar – RO">Drept imobiliar – RO</option>
                                <option value="Drept imobiliar - DE">Drept imobiliar - DE</option>
                                <option value="Altele – RO">Altele – RO</option>
                                <option value="Altele - DE">Altele - DE</option>
                            </select>
                            <hr className="decoration-line" />
                        </div>
                        </div>
                        <p className="textarea-title">Mesaj</p>
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
                            Trimite
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default ContactForm