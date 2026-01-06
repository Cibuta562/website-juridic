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

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    // 🔐 VERIFICARE PLATĂ LA LOAD
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get("session_id");

        // ❌ FĂRĂ session_id → AFARĂ
        if (!sessionId) {
            navigate("/");
            return;
        }

        fetch(`/api/verify-session.php?session_id=${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.valid) {
                    setAllowed(true);
                } else {
                    navigate("/");
                }
            })
            .catch(() => navigate("/"))
            .finally(() => setChecking(false));
    }, [navigate]);

    // 🔄 LOADING
    if (checking) {
        return <p style={{ color: "white" }}>Se verifică plata...</p>;
    }

    // ❌ BLOCARE TOTALĂ
    if (!allowed) {
        return null;
    }

    // 📧 EMAILJS — DOAR DUPĂ PLATĂ
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

            alert("Mesaj trimis cu succes!");
            form.current.reset();
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

                <form ref={form} onSubmit={sendEmail}>
                    <input name="lastName" placeholder="Nume" required />
                    <input name="firstName" placeholder="Prenume" required />
                    <input name="email" type="email" placeholder="Email" required />
                    <input name="phoneNumber" placeholder="Telefon" />

                    <select name="subject" required>
                        <option value="">Subiect</option>
                        <option value="drept-civil">Drept civil</option>
                        <option value="drept-penal">Drept penal</option>
                        <option value="consultanta">Consultanță juridică</option>
                    </select>

                    <textarea name="message" placeholder="Mesaj" required />

                    <button type="submit" disabled={sending}>
                        {sending ? "Se trimite..." : "Trimite mesajul"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
