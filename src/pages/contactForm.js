import "./contactForm.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../lang/LanguageContext";
import translationsRO from "../lang/data-ro";
import translationsDE from "../lang/data-de";

const ContactForm = () => {
    const navigate = useNavigate();
    const { getText, language } = useLanguage();
    const translations = language === "ro" ? translationsRO : translationsDE;

    const form = useRef();
    const [allowed, setAllowed] = useState(false);
    const [checking, setChecking] = useState(true);
    const [sending, setSending] = useState(false);


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get("session_id");

        if (!sessionId) {
            navigate("/");
            return;
        }

        console.log("URL:", window.location.href);
        console.log("SESSION_ID:", sessionId);

        fetch(`/api/verify-session.php?session_id=${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("VERIFY SESSION RESPONSE:", data);

                if (data.valid) {
                    setAllowed(true);
                } else {
                    navigate("/");
                }
            })
            .catch(() => navigate("/"))
            .finally(() => setChecking(false));
    }, [navigate]);


    if (checking) {
        return <p style={{ color: "white" }}>Se verifică plata...</p>;
    }

    if (!allowed) {
        return null;
    }

    // 📧 TRIMITERE EMAIL
    const sendEmail = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            await emailjs.sendForm(
                "service_xcrg7kt",
                "template_3y1mukr",
                form.current,
                { publicKey: "5wMRQjsax-6NjhayN" }
            );

            // ✅ REDIRECT DUPĂ SUCCES
            navigate("/multumire");
        } catch (err) {
            alert("Eroare la trimiterea mesajului");
        } finally {
            setSending(false);
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
                    <form ref={form} onSubmit={sendEmail}>
                        {/* NUME / PRENUME */}
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={getText(translations, "contactTextNume")}
                                    name="lastName"
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
                                />
                                <hr className="decoration-line" />
                            </div>
                        </div>

                        {/* SUBIECT */}
                        <div className="form-row">
                            <div className="form-group-option">
                                <label>Subiect</label>
                                <select
                                    className="form-control-option"
                                    name="subject"
                                    required
                                >
                                    <option value="">
                                        {getText(translations, "contactTextCategorieJuridica")}
                                    </option>
                                    <option value="drept-civil">Drept civil</option>
                                    <option value="drept-comercial">Drept comercial</option>
                                    <option value="dreptul-muncii">Dreptul muncii</option>
                                    <option value="drept-familie">Dreptul familiei</option>
                                    <option value="drept-penal">Drept penal</option>
                                    <option value="drept-administrativ">Drept administrativ</option>
                                    <option value="drept-imobiliar">Drept imobiliar</option>
                                    <option value="consultanta-juridica">
                                        Consultanță juridică
                                    </option>
                                    <option value="alta-situatie">Altă situație</option>
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
                    required
                />
                            </div>
                        </div>

                        {/* BUTON */}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={sending}
                        >
                            {sending ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
