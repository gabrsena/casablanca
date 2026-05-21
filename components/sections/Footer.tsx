'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../contexts/TranslationContext';
import { ProCleanLogo } from '../icons';

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
              <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000'}`}>WhatsApp</a></li>
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
          <div className="footer-col">
            <h5>Areas We Serve</h5>
            <ul>
              <li><Link href="/airbnb-cleaning-javea">Airbnb Cleaning in Javea</Link></li>
              <li><Link href="/airbnb-cleaning-calpe">Airbnb Cleaning in Calpe</Link></li>
              <li><Link href="/airbnb-cleaning-denia">Airbnb Cleaning in Denia</Link></li>
              <li><Link href="/airbnb-cleaning-alicante">Airbnb Cleaning in Alicante</Link></li>
              <li><Link href="/airbnb-cleaning-torrevieja">Airbnb Cleaning in Torrevieja</Link></li>
              <li><Link href="/airbnb-cleaning-benidorm">Airbnb Cleaning in Benidorm</Link></li>
              <li><Link href="/holiday-home-care-costa-blanca">Holiday Home Care in Costa Blanca</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ProClean Management. {t.rights}</span>
          <span>Costa Blanca, Spain</span>
        </div>
      </div>
    </footer>
  );
};
