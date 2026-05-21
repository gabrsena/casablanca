'use client';

import React, { useEffect } from 'react';
import { TranslationProvider } from './contexts/TranslationContext';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { TrustRow } from './sections/TrustRow';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { PackagesSection } from './sections/PackagesSection';
import { AboutSection } from './sections/AboutSection';
import { TestimonialSection } from './sections/TestimonialSection';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';
import { useTranslation } from './contexts/TranslationContext';
import { FloatingWhatsApp } from './FloatingWhatsApp';

interface AppProps {
  cityName?: string;
}

const AppContent: React.FC<AppProps> = ({ cityName }) => {
  const { lang, t } = useTranslation();

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

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const customWhatsAppMessage = cityName
    ? (lang === 'en'
        ? `Hi, I'm interested in Airbnb cleaning in ${cityName}.`
        : `Hola, estoy interesado en la limpieza de Airbnb en ${cityName}.`)
    : t.waMessage;

  return (
    <div className="app-container">
      <Navbar />
      <Hero cityName={cityName} />
      <TrustRow />
      <FeaturesSection />
      <HowItWorksSection />
      <PackagesSection cityName={cityName} />
      <AboutSection currentCity={cityName} />
      <TestimonialSection />
      <CTASection cityName={cityName} />
      
      {/* HIDDEN SEO TEXT BLOCK */}
      <div style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
        ProClean Management provides Airbnb turnover cleaning, laundry coordination, restocking and property management across Costa Blanca, Spain — including Javea, Calpe, Denia, Alicante, Torrevieja, Benidorm and surrounding areas. English-speaking local team. Serving international property owners and Airbnb hosts since 2017.
      </div>
      
      <Footer />
      <FloatingWhatsApp customMessage={customWhatsAppMessage} />
    </div>
  );
};

export default function App({ cityName }: AppProps) {
  return (
    <TranslationProvider>
      <AppContent cityName={cityName} />
    </TranslationProvider>
  );
}
