import { useEffect } from "react";

const TrackingTags = () => {
  useEffect(() => {
    const analyticsConsent = localStorage.getItem("analyticsConsent");

    if (analyticsConsent === "true") {
      // ============================================
      // GOOGLE ANALYTICS (GA4) CONFIGURATION
      // ============================================

      const gaId = 'G-VGF7WHKVPD'; // Codul de măsurare din screenshot-ul tău

      // 1. Crearea și inserarea scriptului gtag.js
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // 2. Inițializarea obiectului dataLayer și a funcției gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());

      // 3. Configurarea ID-ului specific
      gtag('config', gaId, {
        page_path: window.location.pathname,
      });

      // Opțional: Curățare la demontarea componentei
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default TrackingTags;