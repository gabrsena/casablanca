'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { WhatsAppIcon } from '../icons';

interface CTASectionProps {
  cityName?: string;
  whatsappMessageOverride?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ cityName, whatsappMessageOverride }) => {
  const { lang, t } = useTranslation();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';

  let displayWhatsAppUrl = '';

  if (whatsappMessageOverride) {
    displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappMessageOverride)}`;
  } else if (cityName) {
    if (lang === 'en') {
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hi, I'm interested in Airbnb cleaning in ${cityName}.`)}`;
    } else {
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hola, estoy interesado en la limpieza de Airbnb en ${cityName}.`)}`;
    }
  } else {
    if (lang === 'en') {
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'd like to talk to someone about managing my property in Costa Blanca.")}`;
    } else {
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("¡Hola! Me gustaría hablar con alguien para gestionar mi propiedad en la Costa Blanca.")}`;
    }
  }

  return (
    <section id="contact" className="section cta-section fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BACKGROUND VIDEO */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#000' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}>
          <source src="/proclean1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="cta-container-premium" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="cta-title-premium">{t.formTitle}</h2>
        <p className="cta-subtitle-premium">
          {lang === 'en' 
            ? 'Connect directly with our local team on WhatsApp. No forms, no wait times—just immediate support to coordinate your property care.' 
            : 'Conecta directamente con nuestro equipo local por WhatsApp. Sin formularios, sin tiempos de espera: soporte inmediato para coordinar el cuidado de tu propiedad.'}
        </p>
        <a 
          href={displayWhatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp-premium"
        >
          <WhatsAppIcon />
          <span>{lang === 'en' ? 'Chat with our Team' : 'Conversar con nuestro Equipo'}</span>
        </a>
        <div className="cta-response-time">
          <span>{lang === 'en' ? 'Average response time: < 5 minutes' : 'Tiempo medio de respuesta: < 5 minutos'}</span>
        </div>
      </div>
    </section>
  );
};
