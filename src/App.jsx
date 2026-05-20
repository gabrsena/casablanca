import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// SVG Icons
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ProCleanLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 330 64" width="220" height="44" role="img">
    <title>ProClean Management Costa Blanca</title>
    <g>
      <rect x="0" y="22" width="44" height="36" rx="4" fill="#1A56DB"/>
      <polygon points="-4,24 22,2 48,24" fill="#1A56DB"/>
      <rect x="15" y="32" width="14" height="18" rx="2" fill="#ffffff"/>
      <polyline points="10,13 18,21 34,7" fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <text x="58" y="36" fontFamily="Georgia, 'Times New Roman', serif" fontSize="28" fontWeight="700" fill="#111827" letterSpacing="-0.8">ProClean</text>
    <line x1="58" y1="44" x2="318" y2="44" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round"/>
    <text x="59" y="57" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="400" fill="#6B7280" letterSpacing="2.5">MANAGEMENT COSTA BLANCA</text>
  </svg>
);

const RobotHostSVG = () => (
  <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="100" cy="180" rx="40" ry="8" fill="#E2E8F0" />
    
    {/* Left Arm & Bucket */}
    <path d="M 60 110 C 30 110, 30 140, 50 145" fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round" />
    <path d="M 35 145 C 35 130, 65 130, 65 145" fill="none" stroke="#06B6D4" strokeWidth="3" />
    <polygon points="35,145 65,145 60,175 40,175" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" strokeLinejoin="round" />
    <line x1="40" y1="155" x2="60" y2="155" stroke="#E2E8F0" strokeWidth="1" />

    {/* Right Arm & Mop */}
    <path d="M 140 110 C 170 110, 160 140, 150 135" fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round" />
    <rect x="146" y="40" width="8" height="130" rx="4" fill="#14B8A6" />
    <path d="M 140 40 Q 130 70 145 45 M 150 40 Q 140 70 155 45 M 160 40 Q 150 70 165 45" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
    <path d="M 135 40 C 135 25, 165 25, 165 40 Z" fill="#334155" />
    
    {/* Body */}
    <ellipse cx="100" cy="120" rx="45" ry="50" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="4" />
    
    {/* Head */}
    <ellipse cx="100" cy="70" rx="55" ry="45" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="4" />
    
    {/* Face Screen */}
    <rect x="60" y="55" width="80" height="35" rx="15" fill="#1E293B" />
    
    {/* Cyan Eyes */}
    <g className="robot-eyes">
      <path d="M 75 70 Q 80 65 85 70" fill="none" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
      <path d="M 115 70 Q 120 65 125 70" fill="none" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
    </g>
    
    {/* Cute Cyan Nose/Mouth */}
    <circle cx="100" cy="80" r="3" fill="#06B6D4" />
    
    {/* Head details (ear pieces) */}
    <rect x="42" y="65" width="4" height="15" rx="2" fill="#CBD5E1" />
    <rect x="154" y="65" width="4" height="15" rx="2" fill="#CBD5E1" />
  </svg>
);

const RobotPointSVG = () => (
  <svg viewBox="0 0 200 200" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow */}
    <ellipse cx="100" cy="180" rx="35" ry="6" fill="#E2E8F0" />
    
    {/* Left Arm */}
    <path d="M 60 110 C 40 120, 50 140, 70 140" fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round" />
    
    {/* Right Arm Pointing Right */}
    <path d="M 140 110 C 160 110, 180 120, 190 140" fill="none" stroke="#F1F5F9" strokeWidth="12" strokeLinecap="round" />
    {/* Hand/Pointer */}
    <circle cx="190" cy="140" r="8" fill="#F1F5F9" />
    <path d="M 190 140 L 200 150" fill="none" stroke="#F1F5F9" strokeWidth="6" strokeLinecap="round" />

    {/* Body */}
    <ellipse cx="100" cy="120" rx="45" ry="50" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="4" />
    
    {/* Head */}
    <ellipse cx="100" cy="70" rx="55" ry="45" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="4" />
    
    {/* Face Screen */}
    <rect x="60" y="55" width="80" height="35" rx="15" fill="#1E293B" />
    
    {/* Cyan Eyes - Happy */}
    <g className="robot-eyes">
      <path d="M 75 72 Q 80 60 85 72" fill="none" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
      <path d="M 115 72 Q 120 60 125 72" fill="none" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
    </g>
    
    {/* Cute Cyan Nose/Mouth */}
    <circle cx="100" cy="80" r="3" fill="#06B6D4" />
    
    {/* Head details (ear pieces) */}
    <rect x="42" y="65" width="4" height="15" rx="2" fill="#CBD5E1" />
    <rect x="154" y="65" width="4" height="15" rx="2" fill="#CBD5E1" />
  </svg>
);

// Animated Counter Hook / Component
const AnimatedCounter = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || end === null) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeProgress = progress * (2 - progress); // ease-out quad
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  if (end === null) {
    return <span ref={ref}>{prefix}{suffix}</span>;
  }
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const translations = {
  en: {
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    heroTitle: <>Your Costa Blanca property, <span className="text-gradient">always ready.</span></>,
    heroSub: "Professional cleaning and full management for Airbnb hosts and vacation homeowners. Trusted since 2017.",
    heroBtnPrimary: "Talk to us on WhatsApp",
    heroBtnSecondary: "See our services",
    robotSpeech: "Hi! We handle 5-star cleaning, maintenance, and check-ins so you don't have to.",
    badgeRobot: "Smart Host",
    badgeStatusClean: "Clean ✓",
    badgeStatusPending: "Pending",
    trust1: "Founded 2017",
    trust2: "Experience from Orlando to Costa Blanca",
    trust3: "Local team on Costa Blanca",
    featuresTitle: "Everything your property needs, handled.",
    tab1: "Post-rental Cleaning",
    tab2: "Property Management",
    tab3: "Owner Communication",
    tab1Title: "Flawless turnovers for 5-star reviews",
    tab1List1: "Hotel-standard deep cleaning between guests.",
    tab1List2: "Laundry and fresh linen supply management.",
    tab1List3: "Restocking of essentials (toiletries, coffee).",
    tab2Title: "Complete peace of mind while you're away",
    tab2List1: "Key holding and guest check-in coordination.",
    tab2List2: "Emergency maintenance and minor repairs.",
    tab2List3: "Regular property inspections during low season.",
    tab3Title: "Stay updated, wherever you are",
    tab3List1: "Instant WhatsApp updates after every clean.",
    tab3List2: "Photo reports of property condition.",
    tab3List3: "Monthly management summaries.",
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
        avatar: "/sarah_mark.png"
      },
      {
        quote: "\"Incredible attention to detail. We live in the UK and knowing that ProClean is managing the turnovers gives us total peace of mind.\"",
        name: "James L.",
        role: "Host, Calpe",
        avatar: "/james.png"
      },
      {
        quote: "\"They handle everything from emergency repairs to deep cleaning. Our guests always comment on how spotless the apartment is.\"",
        name: "Elena R.",
        role: "Owner, Denia",
        avatar: "/elena.png"
      }
    ],
    stat1Label: "Founded",
    stat2Label: "Properties Managed",
    stat3Label: "Costa Blanca Support",
    stat4Label: "Response Time",
    aboutLabel: "ABOUT US",
    aboutTitle: "From Orlando to the Costa Blanca.",
    aboutP1: "Founded in 2017, we began our journey managing high-demand vacation rentals in Orlando, Florida. We learned exactly what it takes to deliver 5-star experiences at scale.",
    aboutP2: "Now based entirely on the Costa Blanca, we bring that same American standard of excellence to your property. We are a locally-operated team with international experience, dedicated exclusively to ensuring your vacation home is always guest-ready.",
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
    heroTitle: <>Tu propiedad en la Costa Blanca, <span className="text-gradient">siempre lista.</span></>,
    heroSub: "Limpieza profesional y gestión integral para anfitriones de Airbnb y propietarios de viviendas vacacionales. Confianza desde 2017.",
    heroBtnPrimary: "Hablemos por WhatsApp",
    heroBtnSecondary: "Ver nuestros servicios",
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
        avatar: "/sarah_mark.png"
      },
      {
        quote: "\"Increíble atención al detalle. Vivimos en el Reino Unido y saber que ProClean gestiona los cambios de huéspedes nos da total tranquilidad.\"",
        name: "James L.",
        role: "Anfitrión, Calpe",
        avatar: "/james.png"
      },
      {
        quote: "\"Se encargan de todo, desde reparaciones de emergencia hasta limpieza profunda. Nuestros huéspedes siempre comentan lo impecable que está el apartamento.\"",
        name: "Elena R.",
        role: "Propietaria, Denia",
        avatar: "/elena.png"
      }
    ],
    stat1Label: "Fundada",
    stat2Label: "Propiedades Gestionadas",
    stat3Label: "Soporte Costa Blanca",
    stat4Label: "Tiempo de Respuesta",
    aboutLabel: "SOBRE NOSOTROS",
    aboutTitle: "Desde Orlando hasta la Costa Blanca.",
    aboutP1: "Fundada en 2017, comenzamos nuestra trayectoria gestionando alquileres vacacionales de alta demanda en Orlando, Florida. Aprendimos exactamente lo que se necesita para ofrecer experiencias de 5 estrellas a gran escala.",
    aboutP2: "Ahora ubicados por completo en la Costa Blanca, traemos ese mismo estándar americano de excelencia a tu propiedad. Somos un equipo operado localmente con experiencia internacional, dedicados exclusivamente a garantizar que tu casa vacacional esté siempre lista para los huéspedes.",
    formTitle: "¿Listo para dejarnos tu propiedad en buenas manos?",
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

const ALL_PROPERTIES = [
  { id: 1, name: "Villa Sol", loc: "Calpe", time: "10:00 AM", status: "clean" },
  { id: 2, name: "Casa Marina", loc: "Javea", time: "11:30 AM", status: "pending" },
  { id: 3, name: "Apartment 4B", loc: "Denia", time: "09:00 AM", status: "clean" },
  { id: 4, name: "Sea Penthouse", loc: "Altea", time: "01:00 PM", status: "pending" },
  { id: 5, name: "Finca Rustica", loc: "Moraira", time: "02:30 PM", status: "pending" },
  { id: 6, name: "Beach Condo", loc: "Benidorm", time: "12:00 PM", status: "clean" }
];

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  // Animation state for the hero mockup
  const [mockupItems, setMockupItems] = useState(ALL_PROPERTIES.slice(0, 3));
  const [cycleCount, setCycleCount] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);

  // Robot dialog speech rotation
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

  const [robotMsgIndex, setRobotMsgIndex] = useState(0);
  const [isRobotTyping, setIsRobotTyping] = useState(false);

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
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    // Hero visibility observer for the robot
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const heroEl = document.querySelector('.hero-section');
    if (heroEl) heroObserver.observe(heroEl);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      if (heroEl) heroObserver.unobserve(heroEl);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        if (window.scrollY > heroHeight) {
          setShowWhatsApp(true);
        } else {
          setShowWhatsApp(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Mockup card animation interval
    const interval = setInterval(() => {
      setMockupItems(prev => {
        const newItems = [...prev];
        const pendingIndex = newItems.findIndex(i => i.status === 'pending');
        
        // If there's a pending item, make it clean
        if (pendingIndex !== -1 && cycleCount % 2 === 0) {
          newItems[pendingIndex] = { ...newItems[pendingIndex], status: 'clean' };
          return newItems;
        } 
        
        // Otherwise, rotate the list with a new property from the pool
        const nextPropIndex = (prev[prev.length - 1].id) % ALL_PROPERTIES.length;
        newItems.shift(); // remove first
        newItems.push({ ...ALL_PROPERTIES[nextPropIndex] }); // add new at end
        return newItems;
      });
      setCycleCount(c => c + 1);
    }, 2500); // Trigger every 2.5 seconds

    return () => clearInterval(interval);
  }, [cycleCount]);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const propertyType = formData.get('propertyType');
    
    let message = t.waMessage;
    if (name && propertyType) {
      message = lang === 'en' 
        ? `Hi! I'm ${name} and I need help managing my ${propertyType} in Costa Blanca.`
        : `¡Hola! Soy ${name} y necesito ayuda para gestionar mi ${propertyType} en la Costa Blanca.`;
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <ProCleanLogo />
        </div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="nav-links desktop-only">
            <a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
              {t.navServices}
            </a>
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              {t.navAbout}
            </a>
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              {t.navContact}
            </a>
          </div>
          
          <div className="lang-toggle desktop-only">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
              🇺🇸 EN
            </button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>
              🇪🇸 ES
            </button>
          </div>

          <div className="mobile-menu-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer', color: 'var(--primary-blue)', display: 'flex', zIndex: 1002, position: 'relative' }}>
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="mobile-menu-content">
          <a href="#features" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); scrollToSection('features'); }}>
            {t.navServices}
          </a>
          <a href="#about" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); scrollToSection('about'); }}>
            {t.navAbout}
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); scrollToSection('contact'); }}>
            {t.navContact}
          </a>
          <div className="mobile-lang-toggle">
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => {setLang('en'); setIsMenuOpen(false);}}>
              🇺🇸 EN
            </button>
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => {setLang('es'); setIsMenuOpen(false);}}>
              🇪🇸 ES
            </button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="hero-section" ref={heroRef}>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        
        <div className="container hero-content">
          <div className="hero-text fade-in-section">
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSub}</p>
            <div className="hero-buttons">
              <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="btn-primary">
                {t.heroBtnPrimary}
              </a>
              <button className="btn-text" onClick={() => scrollToSection('features')}>
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
              
              {/* ANIMATED MOCKUP LIST */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                {mockupItems.map((item, index) => (
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
        
        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator fade-in-section" style={{ transitionDelay: '0.4s' }}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES ROW */}
      <section className="trust-row fade-in-section">
        <div className="trust-container">
          <div className="trust-item">
            <ShieldIcon /> {t.trust1}
          </div>
          <div className="trust-item">
            <CalendarIcon /> {t.trust2}
          </div>
          <div className="trust-item">
            <MapPinIcon /> {t.trust3}
          </div>
        </div>
      </section>

      {/* FEATURE TABS SECTION */}
      <section id="features" className="section features-section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px', background: '#000' }}>
        
        {/* DYNAMIC BACKGROUND GIFS */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          {activeTab === 0 && <img src="/tab1.gif" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, display: 'block' }} className="fade-in" />}
          {activeTab === 1 && <img src="/tab2.gif" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, display: 'block' }} className="fade-in" />}
          {activeTab === 2 && <img src="/tab3.gif" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, display: 'block' }} className="fade-in" />}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-headline fade-in-section" style={{ color: 'white' }}>{t.featuresTitle}</h2>
          
          <div className="tabs-header fade-in-section">
            <button className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)} style={{ color: activeTab === 0 ? 'white' : 'rgba(255,255,255,0.7)', background: activeTab === 0 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)' }}>
              {t.tab1}
            </button>
            <button className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)} style={{ color: activeTab === 1 ? 'white' : 'rgba(255,255,255,0.7)', background: activeTab === 1 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)' }}>
              {t.tab2}
            </button>
            <button className={`tab-btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)} style={{ color: activeTab === 2 ? 'white' : 'rgba(255,255,255,0.7)', background: activeTab === 2 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)' }}>
              {t.tab3}
            </button>
          </div>
          
          <div className="tab-content fade-in-section" style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
            <div className="tab-text" style={{ maxWidth: '700px', textAlign: 'center', color: 'white' }}>
              {activeTab === 0 && (
                <>
                  <h3 style={{ fontSize: '32px', marginBottom: '32px' }}>{t.tab1Title}</h3>
                  <ul className="tab-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px', gap: '16px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab1List1}</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab1List2}</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab1List3}</li>
                  </ul>
                </>
              )}
              {activeTab === 1 && (
                <>
                  <h3 style={{ fontSize: '32px', marginBottom: '32px' }}>{t.tab2Title}</h3>
                  <ul className="tab-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px', gap: '16px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab2List1}</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab2List2}</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab2List3}</li>
                  </ul>
                </>
              )}
              {activeTab === 2 && (
                <>
                  <h3 style={{ fontSize: '32px', marginBottom: '32px' }}>{t.tab3Title}</h3>
                  <ul className="tab-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px', gap: '16px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab3List1}</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab3List2}</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="tab-check" style={{ color: '#60A5FA' }}><CheckIcon /></span> {t.tab3List3}</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COMBINED ABOUT & STATS SECTION */}
      <section id="about" className="about-wrapper">
        {/* STATS ROW */}
        <div className="stats-section fade-in-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number text-gradient">
                2017
              </div>
              <div className="stat-label">{t.stat1Label}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="stat-label">{t.stat2Label}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <div className="stat-label">{t.stat3Label}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-gradient">
                <AnimatedCounter end={null} prefix="<" suffix="1h" />
              </div>
              <div className="stat-label">{t.stat4Label}</div>
            </div>
          </div>
        </div>

        {/* ABOUT US SECTION */}
        <div className="section about-section fade-in-section">
          <div className="container about-content">
            <div className="about-text">
              <span className="ownership-label">{t.aboutLabel}</span>
              <h2 className="section-headline">{t.aboutTitle}</h2>
              <p>{t.aboutP1}</p>
              <br/>
              <p>{t.aboutP2}</p>
            </div>
            
            <div className="about-visual">
              <div className="collage-grid">
                <div className="collage-item item-main">
                  <img src="/proclean.gif" alt="ProClean Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="collage-item item-bottom">
                  <img src="/frota2.png" alt="ProClean Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION (MOVED HERE) */}
      <section className="section testimonial-section fade-in-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="testimonial-header">
            <h2 className="section-headline">{t.testiTitle}</h2>
          </div>
          <div className="testimonial-grid">
            {t.testimonials.map((testi, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{testi.quote}</p>
                <div className="testimonial-author">
                  <img 
                    className="author-avatar" 
                    src={testi.avatar} 
                    alt={testi.name} 
                  />
                  <div className="author-info">
                    <span className="author-name">{testi.name}</span>
                    <span className="author-role">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM / CTA SECTION */}
      <section id="contact" className="section cta-section fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* BACKGROUND VIDEO */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#000' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}>
            <source src="/proclean1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="cta-container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>{t.formTitle}</h2>
          <form className="cta-form" onSubmit={handleWhatsAppSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder={t.formName} required />
              <input type="tel" name="whatsapp" placeholder={t.formPhone} required />
              <select name="propertyType" required defaultValue="">
                <option value="" disabled>{t.formType}</option>
                <option value={t.formOpt1}>{t.formOpt1}</option>
                <option value={t.formOpt2}>{t.formOpt2}</option>
                <option value={t.formOpt3}>{t.formOpt3}</option>
              </select>
            </div>
            <button type="submit" className="btn-primary btn-submit">
              {t.formSubmit} <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer fade-in-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo" style={{ background: 'white', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '16px' }}>
                <ProCleanLogo />
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '14px', maxWidth: '250px' }}>
                {t.footerDesc}
              </p>
            </div>
            <div className="footer-col">
              <h5>{t.navServices}</h5>
              <ul>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>{t.tab1}</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>{t.tab2}</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>{t.tab3}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>{t.navContact}</h5>
              <ul>
                <li><a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}>WhatsApp</a></li>
                <li><a href="#">Email</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>{t.footerLegal}</h5>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ProClean Management. {t.rights}</span>
            <span>Costa Blanca, Spain</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      {showWhatsApp && (
        <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="floating-wa" aria-label="Chat on WhatsApp">
          <WhatsAppIcon />
        </a>
      )}
      
      {/* FIXED ROBOT */}
      <div className={`fixed-robot ${!isHeroVisible ? 'visible' : ''}`}>
        <RobotPointSVG />
      </div>
    </div>
  );
};

export default App;
