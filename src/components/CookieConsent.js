import React, { useState, useEffect } from "react";
import "./CookieConsent.css";
import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

const CookieConsent = () => {
  const { getText, language } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  useEffect(() => {
    // Verifică dacă utilizatorul a dat deja consimțământul
    const consent = localStorage.getItem("cookieConsent");
    const analytics = localStorage.getItem("analyticsConsent");

    if (!consent) {
      setShowConsent(true);
    } else {
      const hasAnalytics = analytics === "true";
      setAnalyticsConsent(hasAnalytics);
      // Dacă există consimțământ pentru analytics, încarcă Google Analytics
      if (hasAnalytics && !window.gtag) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Încarcă Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-3CXRVNJC3L";
    document.head.appendChild(script1);

    script1.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-3CXRVNJC3L");
    };
  };

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("analyticsConsent", "true");
    setShowConsent(false);
    setAnalyticsConsent(true);
    loadGoogleAnalytics();
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("analyticsConsent", "false");
    setShowConsent(false);
    setAnalyticsConsent(false);
  };

  const handleAcceptAnalytics = () => {
    localStorage.setItem("analyticsConsent", "true");
    setAnalyticsConsent(true);
    loadGoogleAnalytics();
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-container">
        <div className="cookie-consent-content">
          <h3 className="cookie-consent-title">
            {getText(translations, "cookieConsentTitle")}
          </h3>
          <p className="cookie-consent-text">
            {getText(translations, "cookieConsentText")}
          </p>
          <div className="cookie-consent-options">
            <label className="cookie-consent-checkbox">
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => {
                  if (e.target.checked) {
                    handleAcceptAnalytics();
                  } else {
                    localStorage.setItem("analyticsConsent", "false");
                    setAnalyticsConsent(false);
                  }
                }}
              />
              <span>{getText(translations, "cookieConsentAnalytics")}</span>
            </label>
          </div>
          <div className="cookie-consent-buttons">
            <button
              className="cookie-btn cookie-btn-necessary"
              onClick={handleAcceptNecessary}
            >
              {getText(translations, "cookieConsentNecessary")}
            </button>
            <button
              className="cookie-btn cookie-btn-accept"
              onClick={handleAcceptAll}
            >
              {getText(translations, "cookieConsentAcceptAll")}
            </button>
          </div>
          <p className="cookie-consent-link">
            <a
              href="/politica/cookies"
              style={{ color: "#c1a267", textDecoration: "none" }}
            >
              {getText(translations, "cookieConsentLearnMore")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
