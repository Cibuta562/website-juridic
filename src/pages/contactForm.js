import "./contactForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { loadStripe } from "@stripe/stripe-js";
import { useLanguage } from "../lang/LanguageContext";
import translationsRO from "../lang/data-ro";
import translationsDE from "../lang/data-de";

const stripePromise = loadStripe("pk_live_XXXXXXXXXXXX"); // cheia PUBLICĂ Stripe

const ContactForm = () => {
    const { getText, language } = useLanguage();
    const translations = language === "ro" ? translationsRO : translationsDE;
    const form = useRef();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const handlePayAndSend = async () => {
        setIsProcessing(true);

        try {
            const response = await fetch(
                "https://siteul-tau.ro/api/create-payment-intent.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        amount: 1000,
                        metadata: formData,
                    }),
                }
            );

            const { clientSecret } = await response.json();
            if (!clientSecret) {
                alert("Eroare inițializare plată");
                return;
            }

            const stripe = await stripePromise;
            const result = await stripe.confirmCardPayment(clientSecret);

            if (result.paymentIntent?.status === "succeeded") {
                await emailjs.sendForm(
                    "service_xcrg7kt",
                    "template_3y1mukr",
                    form.current,
                    { publicKey: "5wMRQjsax-6NjhayN" }
                );

                alert("Plata reușită. Formular trimis!");
            } else {
                alert("Plata a eșuat");
            }
        } catch (err) {
            console.error(err);
            alert("Eroare la procesarea plății");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="contact-div">
            <div className="contact-form">
                <p className="contact-heading">
                    {getText(translations, "contactTextHeading")}
                </p>
                <div className="line-dec-cont"></div>

                <div className="form-cont">
                    <form ref={form}>
                        {/* NUME / PRENUME */}
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={getText(translations, "contactTextNume")}
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
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
                                    required
                                />
                                <hr className="decoration-line" />
                            </div>
                        </div>

                        {/* EMAIL / TELEFON */}
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <hr className="decoration-line" />
                            </div>

                            <div className="form-group">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder={getText(translations, "contactTextTelefon")}
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                                <hr className="decoration-line" />
                            </div>
                        </div>

                        {/* SUBIECT */}
                        <div className="form-row">
                            <div className="form-group-option">
                                <label htmlFor="subject">Subiect</label>
                                <select
                                    className="form-control-option"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">
                                        {getText(translations, "contactTextCategorieJuridica")}
                                    </option>
                                    {/* opțiuni */}
                                </select>
                                <hr className="decoration-line" />
                            </div>
                        </div>

                        {/* MESAJ */}
                        <p className="textarea-title">
                            {getText(translations, "contactTextMesaj")}
                        </p>

                        <div className="form-row">
                            <div className="form-group-area">
                <textarea
                    className="form-control"
                    style={{ minHeight: "150px", resize: "vertical" }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />
                            </div>
                        </div>

                        {/* BUTON FINAL */}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handlePayAndSend}
                            disabled={isProcessing}
                        >
                            {isProcessing
                                ? "Se procesează plata..."
                                : "Plătește și trimite"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
