'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { CheckIcon } from '../icons';

interface PackagesSectionProps {
  cityName?: string;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ cityName }) => {
  const { lang } = useTranslation();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';

  const suffixEn = cityName ? ` in ${cityName}` : ' for my property';
  const suffixEs = cityName ? ` en ${cityName}` : ' para mi propiedad';

  const link1 = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    lang === 'en' 
      ? `Hi, I'm interested in the Turnover Only service${suffixEn}.` 
      : `Hola, estoy interesado en el servicio de Solo Limpieza${suffixEs}.`
  )}`;

  const link2 = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    lang === 'en' 
      ? `Hi, I'm interested in the Airbnb Care service${suffixEn}.` 
      : `Hola, estoy interesado en el servicio de Airbnb Care${suffixEs}.`
  )}`;

  const link3 = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    lang === 'en' 
      ? `Hi, I'm interested in the Full Property Care service${suffixEn}.` 
      : `Hola, estoy interesado en el servicio de Cuidado Completo${suffixEs}.`
  )}`;

  return (
    <section className="packages-section fade-in-section">
      <div className="container">
        <h2 className="section-headline">{lang === 'en' ? 'Choose your service level' : 'Elige tu nivel de servicio'}</h2>
        <div className="packages-grid">
          {/* Card 1 */}
          <div className="package-card">
            <h3 className="package-title">{lang === 'en' ? 'Turnover Only' : 'Solo Limpieza'}</h3>
            <p className="package-desc">
              {lang === 'en' ? 'For hosts who need reliable guest-ready cleaning between stays.' : 'Para anfitriones que necesitan una limpieza de cambio fiable.'}
            </p>
            <div className="package-divider"></div>
            <div className="package-includes-title">{lang === 'en' ? 'Includes:' : 'Incluye:'}</div>
            <ul className="package-features">
              <li><CheckIcon /> {lang === 'en' ? 'Post-guest cleaning' : 'Limpieza post-huésped'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Bed and towel setup' : 'Cambio de sábanas y toallas'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Bathroom & kitchen reset' : 'Desinfección de baño y cocina'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Final photo confirmation' : 'Confirmación fotográfica'}</li>
            </ul>
            <a 
              href={link1} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary package-btn"
            >
              {lang === 'en' ? 'Request on WhatsApp' : 'Solicitar en WhatsApp'}
            </a>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="package-card highlighted">
            <span className="package-badge">{lang === 'en' ? 'Most Popular' : 'Más Popular'}</span>
            <h3 className="package-title">Airbnb Care</h3>
            <p className="package-desc">
              {lang === 'en' ? 'For owners who want cleaning, laundry and restocking coordinated.' : 'Para propietarios que desean externalizar limpieza, lavandería y reposición.'}
            </p>
            <div className="package-divider"></div>
            <div className="package-includes-title">{lang === 'en' ? 'Includes:' : 'Incluye:'}</div>
            <ul className="package-features">
              <li><CheckIcon /> {lang === 'en' ? 'Everything in Turnover Only' : 'Todo lo de Solo Limpieza'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Laundry coordination' : 'Coordinación de lavandería'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Essentials restocking' : 'Reposición de esenciales'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Custom turnover checklist' : 'Lista de verificación personalizada'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'WhatsApp photo report' : 'Informe fotográfico por WhatsApp'}</li>
            </ul>
            <a 
              href={link2} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary package-btn"
            >
              {lang === 'en' ? 'Request on WhatsApp' : 'Solicitar en WhatsApp'}
            </a>
          </div>

          {/* Card 3 */}
          <div className="package-card">
            <h3 className="package-title">{lang === 'en' ? 'Full Property Care' : 'Cuidado Completo'}</h3>
            <p className="package-desc">
              {lang === 'en' ? 'For international owners who are not on-site.' : 'Para propietarios internacionales que no están en la propiedad.'}
            </p>
            <div className="package-divider"></div>
            <div className="package-includes-title">{lang === 'en' ? 'Includes:' : 'Incluye:'}</div>
            <ul className="package-features">
              <li><CheckIcon /> {lang === 'en' ? 'Everything in Airbnb Care' : 'Todo lo de Airbnb Care'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Property inspections' : 'Inspección de propiedad'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Maintenance coordination' : 'Coordinación de mantenimiento'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Guest-ready checks' : 'Control de puesta a punto'}</li>
              <li><CheckIcon /> {lang === 'en' ? 'Damage or issue alerts' : 'Alertas de daños o problemas'}</li>
            </ul>
            <a 
              href={link3} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary package-btn"
            >
              {lang === 'en' ? 'Request on WhatsApp' : 'Solicitar en WhatsApp'}
            </a>
          </div>
        </div>
        
        <p className="package-footer-text">
          {lang === 'en' 
            ? 'Custom pricing based on your property. Request a quote on WhatsApp.' 
            : 'Precios personalizados según tu propiedad. Solicita un presupuesto por WhatsApp.'}
        </p>
      </div>
    </section>
  );
};
