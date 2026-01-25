import React, { useEffect } from "react";

const TrackingTags = () => {
  useEffect(() => {
    // Verificăm dacă utilizatorul și-a dat acordul
    const analyticsConsent = localStorage.getItem("analyticsConsent");

    if (analyticsConsent === "true") {
      const gaId = 'G-VGF7WHKVPD';

      // 1. Aceasta este partea: <script async src="https://www.googletagmanager.com/gtag/js?id=G-VGF7WHKVPD"></script>
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // 2. Aceasta este partea: window.dataLayer = window.dataLayer || []; ... gtag('js', new Date());
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());

      // 3. Aceasta este partea: gtag('config', 'G-VGF7WHKVPD');
      window.gtag('config', gaId);
    }
  }, []);

  return null;
};

export default TrackingTags;