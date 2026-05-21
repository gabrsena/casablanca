'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '../contexts/TranslationContext';
import { ProCleanLogo } from '../icons';

export const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <ProCleanLogo />
          </Link>
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
    </>
  );
};
