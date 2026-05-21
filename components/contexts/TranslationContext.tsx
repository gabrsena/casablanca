'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Translation {
  navServices: string;
  navAbout: string;
  navContact: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  heroTrustLine: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  robotSpeech: string;
  badgeRobot: string;
  badgeStatusClean: string;
  badgeStatusPending: string;
  trust1: string;
  trust2: string;
  trust3: string;
  featuresTitle: string;
  tab1: string;
  tab2: string;
  tab3: string;
  tab1Title: string;
  tab1List1: string;
  tab1List2: string;
  tab1List3: string;
  tab2Title: string;
  tab2List1: string;
  tab2List2: string;
  tab2List3: string;
  tab3Title: string;
  tab3List1: string;
  tab3List2: string;
  tab3List3: string;
  mockupTask1: string;
  mockupTask2: string;
  mockupTask3: string;
  mockupDone: string;
  testiTitle: string;
  testimonials: Testimonial[];
  stat1Number: string;
  stat1Label: string;
  stat2Number: string;
  stat2Label: string;
  stat3Number: string;
  stat3Label: string;
  stat4Number: string;
  stat4Label: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutSubline: string;
  formTitle: string;
  formName: string;
  formPhone: string;
  formType: string;
  formOpt1: string;
  formOpt2: string;
  formOpt3: string;
  formSubmit: string;
  footerDesc: string;
  footerLegal: string;
  rights: string;
  waMessage: string;
}

export const translations: Record<'en' | 'es', Translation> = {
  en: {
    navServices: "Services",
    navAbout: "About Us",
    navContact: "Contact",
    heroTitle: <>Airbnb Turnover & <span className="text-gradient">Property Care</span> in Costa Blanca</>,
    heroSub: "Reliable Airbnb turnover, laundry coordination and property care for international owners who need a trusted local team.",
    heroTrustLine: "U.S. service experience since 2017. Now serving property owners across Costa Blanca.",
    heroBtnPrimary: "Get a Quote on WhatsApp",
    heroBtnSecondary: "View Services",
    robotSpeech: "Hi! We handle 5-star cleaning, maintenance, and check-ins so you don't have to.",
    badgeRobot: "Smart Host",
    badgeStatusClean: "Clean ✓",
    badgeStatusPending: "Pending",
    trust1: "Founded 2017",
    trust2: "Experience from Orlando to Costa Blanca",
    trust3: "Local team on Costa Blanca",
    featuresTitle: "Everything your property needs, handled.",
    tab1: "Airbnb Turnover",
    tab2: "Property Care",
    tab3: "Owner Updates",
    tab1Title: "Guest-ready turnovers for 5-star reviews",
    tab1List1: "Full cleaning after each guest stay — bathrooms, kitchen, bedrooms, floors and common areas.",
    tab1List2: "Fresh linen setup, towel replacement and laundry coordination.",
    tab1List3: "Final checklist and photo confirmation before the next check-in.",
    tab2Title: "Complete peace of mind while you're away",
    tab2List1: "Key holding and access coordination for cleaners, guests or maintenance.",
    tab2List2: "Minor maintenance coordination with trusted local providers.",
    tab2List3: "Regular property inspections during vacant periods or low season.",
    tab3Title: "Stay updated, wherever you are",
    tab3List1: "WhatsApp updates after each turnover or property visit.",
    tab3List2: "Photo reports showing cleaning completion and property condition.",
    tab3List3: "Quick alerts for damages, missing items or maintenance issues.",
    mockupTask1: "Change linens",
    mockupTask2: "Sanitize bathrooms",
    mockupTask3: "Restock coffee",
    mockupDone: "Done",
    testiTitle: "Trusted by property owners",
    testimonials: [
      {
        quote: "\"Since hiring ProClean Management, our Airbnb reviews have improved significantly. They treat our Costa Blanca villa like their own.\"",
        name: "Sarah & Mark T.",
        role: "Owners, Javea",
        avatar: "/Sarah&mark.png"
      },
      {
        quote: "\"Incredible attention to detail. We live in the UK and knowing that ProClean is managing the turnovers gives us total peace of mind.\"",
        name: "James L.",
        role: "Host, Calpe",
        avatar: "/JamesL.png"
      },
      {
        quote: "\"They handle everything from emergency repairs to deep cleaning. Our guests always comment on how spotless the apartment is.\"",
        name: "Elena R.",
        role: "Owner, Denia",
        avatar: "/ElenaR.png"
      }
    ],
    stat1Number: "Since 2017",
    stat1Label: "U.S. Experience",
    stat2Number: "Checklist-Based",
    stat2Label: "Every Turnover",
    stat3Number: "Local Team",
    stat3Label: "Costa Blanca",
    stat4Number: "WhatsApp",
    stat4Label: "Fast Response",
    aboutLabel: "ABOUT US",
    aboutTitle: "From Orlando to the Costa Blanca.",
    aboutText: "Since 2017, our background in property services in the United States taught us the importance of punctuality, communication and attention to detail. Today, we bring that same operational standard to holiday homeowners and Airbnb hosts across the Costa Blanca.",
    aboutSubline: "Built on U.S. service standards. Operated locally in Costa Blanca.",
    formTitle: "Ready to hand off your property?",
    formName: "Your Name",
    formPhone: "WhatsApp Number",
    formType: "Property Type",
    formOpt1: "Airbnb/VRBO rental",
    formOpt2: "Vacation home",
    formOpt3: "Both",
    formSubmit: "Send via WhatsApp",
    footerDesc: "Premium cleaning and property management for vacation rentals in Costa Blanca, Spain.",
    footerLegal: "Legal",
    rights: "All rights reserved.",
    waMessage: "Hi! I need help managing my property in Costa Blanca."
  },
  es: {
    navServices: "Servicios",
    navAbout: "Nosotros",
    navContact: "Contacto",
    heroTitle: <>Limpieza de Airbnb y <span className="text-gradient">Cuidado de Propiedades</span> en Costa Blanca</>,
    heroSub: "Limpieza fiable de Airbnb, coordinación de lavandería y cuidado de propiedades para propietarios internacionales que necesitan un equipo local de confianza.",
    heroTrustLine: "Experiencia en servicio de EE. UU. desde 2017. Ahora sirviendo a propietarios en toda la Costa Blanca.",
    heroBtnPrimary: "Obtén un presupuesto en WhatsApp",
    heroBtnSecondary: "Ver Servicios",
    robotSpeech: "¡Hola! Gestionamos limpieza 5 estrellas, mantenimiento y check-ins para que no tengas que hacerlo.",
    badgeRobot: "Anfitrión Inteligente",
    badgeStatusClean: "Limpio ✓",
    badgeStatusPending: "Pendiente",
    trust1: "Fundada en 2017",
    trust2: "Experiencia desde Orlando hasta la Costa Blanca",
    trust3: "Equipo local en la Costa Blanca",
    featuresTitle: "Todo lo que tu propiedad necesita, resuelto.",
    tab1: "Limpieza Post-alquiler",
    tab2: "Gestión de Propiedades",
    tab3: "Comunicación con el Propietario",
    tab1Title: "Cambios impecables para reseñas de 5 estrellas",
    tab1List1: "Limpieza profunda a nivel de hotel entre huéspedes.",
    tab1List2: "Gestión de lavandería y suministro de ropa limpia.",
    tab1List3: "Reposición de artículos esenciales (aseo, café).",
    tab2Title: "Tranquilidad total mientras estás lejos",
    tab2List1: "Custodia de llaves y coordinación de check-in.",
    tab2List2: "Mantenimiento de emergencia y reparaciones menores.",
    tab2List3: "Inspecciones periódicas durante temporada baja.",
    tab3Title: "Mantente informado, estés donde estés",
    tab3List1: "Actualizaciones instantáneas por WhatsApp después de cada limpieza.",
    tab3List2: "Informes fotográficos del estado de la propiedad.",
    tab3List3: "Resúmenes mensuales de gestión.",
    mockupTask1: "Cambiar sábanas",
    mockupTask2: "Desinfectar baños",
    mockupTask3: "Reponer café",
    mockupDone: "Hecho",
    testiTitle: "Con la confianza de los propietarios",
    testimonials: [
      {
        quote: "\"Desde que contratamos a ProClean Management, nuestras reseñas en Airbnb han mejorado significativamente. Tratan nuestra villa como si fuera suya.\"",
        name: "Sarah & Mark T.",
        role: "Propietarios, Javea",
        avatar: "/Sarah&mark.png"
      },
      {
        quote: "\"Increíble atención al detalle. Vivimos en el Reino Unido y saber que ProClean gestiona los cambios de huéspedes nos da total tranquilidad.\"",
        name: "James L.",
        role: "Anfitrión, Calpe",
        avatar: "/JamesL.png"
      },
      {
        quote: "\"Se encargan de todo, desde reparaciones de emergencia hasta limpieza profunda. Nuestros huéspedes siempre comentan lo impecable que está el apartamento.\"",
        name: "Elena R.",
        role: "Propietaria, Denia",
        avatar: "/ElenaR.png"
      }
    ],
    stat1Number: "Desde 2017",
    stat1Label: "Experiencia en EE.UU.",
    stat2Number: "Basado en Lista",
    stat2Label: "Cada Limpieza",
    stat3Number: "Equipo Local",
    stat3Label: "Costa Blanca",
    stat4Number: "WhatsApp",
    stat4Label: "Respuesta Rápida",
    aboutLabel: "SOBRE NOSOTROS",
    aboutTitle: "Desde Orlando hasta la Costa Blanca.",
    aboutText: "Desde 2017, nuestra trayectoria en servicios de propiedad en los Estados Unidos nos enseñó la importancia de la puntualidad, la comunicación y la atención al detalle. Hoy traemos ese mismo estándar operativo a los propietarios de viviendas vacacionales y anfitriones de Airbnb en toda la Costa Blanca.",
    aboutSubline: "Basado en estándares de servicio de EE. UU. Operado localmente en la Costa Blanca.",
    formTitle: "¿Listo para dejarnos tu propriedade en buenas manos?",
    formName: "Tu Nombre",
    formPhone: "Número de WhatsApp",
    formType: "Tipo de Propiedad",
    formOpt1: "Alquiler Airbnb/VRBO",
    formOpt2: "Casa vacacional",
    formOpt3: "Ambas",
    formSubmit: "Enviar por WhatsApp",
    footerDesc: "Limpieza premium y gestión de propiedades para alquileres vacacionales en la Costa Blanca, España.",
    footerLegal: "Legal",
    rights: "Todos los derechos reservados.",
    waMessage: "¡Hola! Necesito ayuda para gestionar mi propiedad en la Costa Blanca."
  }
};

interface TranslationContextType {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('proclean-lang');
    if (savedLang === 'en' || savedLang === 'es') {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: 'en' | 'es') => {
    setLang(newLang);
    localStorage.setItem('proclean-lang', newLang);
  };

  const t = translations[lang];

  return (
    <TranslationContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
