'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../contexts/TranslationContext';

interface AboutSectionProps {
  currentCity?: string;
}

const CITIES = [
  { name: "Javea", href: "/airbnb-cleaning-javea" },
  { name: "Calpe", href: "/airbnb-cleaning-calpe" },
  { name: "Denia", href: "/airbnb-cleaning-denia" },
  { name: "Alicante", href: "/airbnb-cleaning-alicante" },
  { name: "Torrevieja", href: "/airbnb-cleaning-torrevieja" },
  { name: "Benidorm", href: "/airbnb-cleaning-benidorm" },
  { name: "Moraira" },
  { name: "Altea" },
  { name: "Villajoyosa" },
  { name: "Santa Pola" }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ currentCity }) => {
  const { lang, t } = useTranslation();

  const getActiveStyle = (cityName: string) => {
    if (currentCity && cityName.toLowerCase() === currentCity.toLowerCase()) {
      return { backgroundColor: '#1A56DB', color: '#ffffff' };
    }
    return {};
  };

  return (
    <div id="about" className="section about-section fade-in-section">
      <div className="container about-content">
        <div className="about-text">
          <span className="ownership-label">{t.aboutLabel}</span>
          <h2 className="section-headline">{t.aboutTitle}</h2>
          <p>
            {currentCity && currentCity.toLowerCase() !== 'costa blanca'
              ? (lang === 'en'
                  ? `Since 2017, our background in property services in the United States taught us the importance of punctuality, communication and attention to detail. We know ${currentCity} and the Costa Blanca, and we bring that same operational standard to keep your ${currentCity} property running smoothly.`
                  : `Desde 2017, nuestra trayectoria en servicios de propiedad en los Estados Unidos nos enseñó la importancia de la puntualidad, la comunicación y la atención al detalle. Conocemos ${currentCity} y la Costa Blanca, y aplicamos ese mismo estándar operativo para que tu propiedad en ${currentCity} funcione sin problemas.`)
              : t.aboutText}
          </p>
          <p style={{ fontSize: '15px', color: '#1A56DB', fontWeight: '700', marginTop: '16px' }}>{t.aboutSubline}</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
            {CITIES.map((city, idx) => {
              const activeStyle = getActiveStyle(city.name);
              const isLink = !!city.href;
              
              return (
                <div 
                  key={idx} 
                  className="city-pill" 
                  style={{ 
                    display: 'inline-block',
                    ...activeStyle 
                  }}
                >
                  {isLink ? (
                    <Link 
                      href={city.href!} 
                      style={{ color: 'inherit', textDecoration: 'none' }} 
                      className="hover-underline"
                    >
                      {city.name}
                    </Link>
                  ) : (
                    city.name
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="about-visual">
          <div className="collage-grid">
            <div className="collage-item item-main">
              <Image src="/proclean.gif" alt="ProClean Work" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div className="collage-item item-bottom">
              <Image src="/frota2.png" alt="ProClean Team" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
