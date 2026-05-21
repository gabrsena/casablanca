'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ArrowIcon, RobotHostSVG } from '../icons';

const ALL_PROPERTIES = [
  { id: 1, name: "Villa Sol", loc: "Calpe", time: "10:00 AM", status: "clean" },
  { id: 2, name: "Casa Marina", loc: "Javea", time: "11:30 AM", status: "pending" },
  { id: 3, name: "Apartment 4B", loc: "Denia", time: "09:00 AM", status: "clean" },
  { id: 4, name: "Sea Penthouse", loc: "Altea", time: "01:00 PM", status: "pending" },
  { id: 5, name: "Finca Rustica", loc: "Moraira", time: "02:30 PM", status: "pending" },
  { id: 6, name: "Beach Condo", loc: "Benidorm", time: "12:00 PM", status: "clean" }
];

const robotMessages = {
  en: [
    "Hi! We handle 5-star cleaning, maintenance, and check-ins so you don't have to.",
    "Need a turnover? We offer hotel-standard cleaning between guests!",
    "Absentee owner? We handle key holding, guest check-ins, and support.",
    "Complete peace of mind: we manage minor repairs and emergency maintenance.",
    "Stay fully updated with instant WhatsApp photo reports after every clean.",
    "We restock toiletries, coffee, and supply fresh linen."
  ],
  es: [
    "¡Hola! Gestionamos limpieza 5 estrellas, mantenimiento y check-ins para que no tengas que hacerlo.",
    "¿Necesitas una limpieza de cambio? ¡Ofrecemos limpieza estándar de hotel!",
    "¿Propietario ausente? Custodiamos llaves, gestionamos check-ins y soporte.",
    "Tranquilidad total: resolvemos reparaciones menores y mantenimiento.",
    "Mantente al tanto con informes fotográficos al instante por WhatsApp.",
    "Reponemos amenities, café, té y gestionamos ropa de cama limpia."
  ]
};

interface HeroProps {
  cityName?: string;
  whatsappMessageOverride?: string;
}

export const Hero: React.FC<HeroProps> = ({ cityName, whatsappMessageOverride }) => {
  const { lang, t } = useTranslation();
  
  // Animation state for the hero mockup
  const [mockupItems, setMockupItems] = useState(ALL_PROPERTIES.slice(0, 3));
  const [cycleCount, setCycleCount] = useState(0);
  const [robotMsgIndex, setRobotMsgIndex] = useState(0);
  const [isRobotTyping, setIsRobotTyping] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRobotTyping(true);
      setTimeout(() => {
        setRobotMsgIndex(prev => (prev + 1) % robotMessages[lang].length);
        setIsRobotTyping(false);
      }, 800);
    }, 3800);

    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMockupItems(prev => {
        const newItems = [...prev];
        const pendingIndex = newItems.findIndex(i => i.status === 'pending');
        
        if (pendingIndex !== -1 && cycleCount % 2 === 0) {
          newItems[pendingIndex] = { ...newItems[pendingIndex], status: 'clean' };
          return newItems;
        } 
        
        const nextPropIndex = (prev[prev.length - 1].id) % ALL_PROPERTIES.length;
        newItems.shift();
        newItems.push({ ...ALL_PROPERTIES[nextPropIndex] });
        return newItems;
      });
      setCycleCount(c => c + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [cycleCount]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine dynamic overrides
  let displayTitle = t.heroTitle;
  let displaySubtext = t.heroSub;
  let displayWhatsAppUrl = '';

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';

  if (cityName) {
    const isCostaBlancaRegion = cityName.toLowerCase() === 'costa blanca';
    if (lang === 'en') {
      displayTitle = <>Airbnb Turnover & <span className="text-gradient">Property Care</span> in {cityName}</>;
      displaySubtext = isCostaBlancaRegion
        ? `Reliable Airbnb turnover, laundry coordination and property care for holiday homeowners in ${cityName}.`
        : `Reliable Airbnb turnover, laundry coordination and property care for holiday homeowners in ${cityName}, Costa Blanca.`;
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hi, I'm interested in Airbnb cleaning in ${cityName}.`)}`;
    } else {
      displayTitle = <>Limpieza de Airbnb y <span className="text-gradient">Cuidado de Propiedades</span> en {cityName}</>;
      displaySubtext = isCostaBlancaRegion
        ? `Limpieza fiable de Airbnb, coordinación de lavandería y cuidado de propiedades para propietarios de viviendas vacacionales en la ${cityName}.`
        : `Limpieza fiable de Airbnb, coordinación de lavandería y cuidado de propiedades para propietarios de viviendas vacacionales en ${cityName}, Costa Blanca.`;
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hola, estoy interesado en la limpieza de Airbnb en ${cityName}.`)}`;
    }
  } else {
    if (lang === 'en') {
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi, I'm interested in Airbnb turnover / property care in Costa Blanca. My property is located in ")}`;
    } else {
      displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hola, estoy interesado en limpieza de Airbnb / cuidado de propiedades en la Costa Blanca. Mi propiedad está ubicada en ")}`;
    }
  }

  if (whatsappMessageOverride) {
    displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappMessageOverride)}`;
  }

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      
      <div className="container hero-content">
        <div className="hero-text fade-in-section">
          <h1>{displayTitle}</h1>
          <p>{displaySubtext}</p>
          <p className="hero-trust-line" style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '12px', marginBottom: '24px' }}>
            {t.heroTrustLine}
          </p>
          <div className="hero-buttons">
            <a 
              href={displayWhatsAppUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
            >
              {t.heroBtnPrimary}
            </a>
            <button className="btn-text hero-scroll-btn" onClick={() => scrollToSection('features')}>
              {t.heroBtnSecondary} <ArrowIcon />
            </button>
          </div>
        </div>
        
        <div className="hero-mockup-wrapper fade-in-section" style={{ transitionDelay: '0.2s' }}>
          <div className="floating-robot">
            <div className="robot-speech-bubble">
              {isRobotTyping ? (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                robotMessages[lang][robotMsgIndex]
              )}
            </div>
            <RobotHostSVG />
          </div>
          
          <div className="mockup-window">
            <div className="mockup-top-bar">
              <div className="mockup-dot red"></div>
              <div className="mockup-dot yellow"></div>
              <div className="mockup-dot green"></div>
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              {mockupItems.map((item) => (
                <div 
                  key={`${item.id}-${item.status}`} 
                  className="mockup-row"
                  style={{
                    animation: 'fadeInUp 0.4s ease-out forwards'
                  }}
                >
                  <div className="mockup-row-left">
                    <span className="mockup-prop-name">{item.name} ({item.loc})</span>
                    <span className="mockup-date">Oct 12, {item.time}</span>
                  </div>
                  {item.status === 'clean' ? (
                    <span className="mockup-badge">{t.badgeStatusClean}</span>
                  ) : (
                    <span className="mockup-badge pending">{t.badgeStatusPending}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator fade-in-section" style={{ transitionDelay: '0.4s' }}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};
