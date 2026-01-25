import "./multumire.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../lang/LanguageContext";
import translationsRO from "../lang/data-ro";
import translationsDE from "../lang/data-de";

const Multumire = () => {
    const { getText, language } = useLanguage();
    const translations = language === "ro" ? translationsRO : translationsDE;

    return (
        <div className="multumire-page">
            <h1>{getText(translations, "multumireTitle")}</h1>

            <p>{getText(translations, "multumireText")}</p>

            <Link to="/">
                <button className="btn btn-primary" style={{width: "200px", marginLeft: "-0%"}}>
                    {getText(translations, "multumireBtn")}
                </button>
            </Link>
        </div>
    );
};

export default Multumire;
