'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const HowItWorksSection = () => {
  const { lang } = useTranslation();

  return (
    <section className="how-it-works-section fade-in-section">
      <div className="container">
        <h2 className="section-headline">{lang === 'en' ? 'How it works' : 'Cómo funciona'}</h2>
        <div className="how-it-works-grid">
          <div className="how-step">
            <span className="how-step-num">01</span>
            <h4 className="how-step-title">
              {lang === 'en' ? 'Send your property details' : 'Envía los detalles de tu propiedad'}
            </h4>
            <p className="how-step-desc">
              {lang === 'en' ? 'Tell us your location, property type, number of bedrooms and rental platform.' : 'Cuéntanos tu ubicación, número de habitaciones y plataforma de alquiler.'}
            </p>
          </div>
          <div className="how-step">
            <span className="how-step-num">02</span>
            <h4 className="how-step-title">
              {lang === 'en' ? 'We build your checklist' : 'Creamos tu lista de verificación'}
            </h4>
            <p className="how-step-desc">
              {lang === 'en' ? 'We create a custom turnover and property care checklist for your home' : 'Creamos una lista de verificación personalizada para tu propiedad.'}
            </p>
          </div>
          <div className="how-step">
            <span className="how-step-num">03</span>
            <h4 className="how-step-title">
              {lang === 'en' ? 'We coordinate cleaning, laundry & restocking' : 'Nos encargamos de limpieza, lavandería y reposición'}
            </h4>
            <p className="how-step-desc">
              {lang === 'en' ? 'Our local team handles each scheduled visit with your property checklist.' : 'Nuestro equipo local coordina cada visita, cada vez.'}
            </p>
          </div>
          <div className="how-step">
            <span className="how-step-num">04</span>
            <h4 className="how-step-title">
              {lang === 'en' ? 'You receive photo confirmation' : 'Recibes confirmación fotográfica'}
            </h4>
            <p className="how-step-desc">
              {lang === 'en' ? 'After each turnover, you receive a WhatsApp update with photos and any important notes.' : 'Después de cada servicio recibes un informe por WhatsApp con fotos.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
