'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// SVG Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
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

export default function CityLayout({ children }: { children: React.ReactNode }) {
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

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} style={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white' }}>
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/"><ProCleanLogo /></Link>
        </div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="nav-links desktop-only">
            <Link href="/#features" className="nav-link">Services</Link>
            <Link href="/#about" className="nav-link">About Us</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </div>
          
          <div className="mobile-menu-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer', color: 'var(--primary-blue)', display: 'flex', zIndex: 1002, position: 'relative' }}>
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6L18 18"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6H20M4 12H20M4 18H20"/>
              </svg>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6L18 18"/>
          </svg>
        </div>
        <div className="mobile-menu-content">
          <Link href="/#features" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      <main style={{ paddingTop: '80px', minHeight: '60vh' }}>
        {children}
      </main>

      {/* HIDDEN SEO TEXT BLOCK */}
      <div style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
        ProClean Management provides Airbnb turnover cleaning, laundry coordination, restocking and property management across Costa Blanca, Spain — including Javea, Calpe, Denia, Alicante, Torrevieja, Benidorm and surrounding areas. English-speaking local team. Serving international property owners and Airbnb hosts since 2017.
      </div>
      
      {/* FOOTER */}
      <footer className="footer fade-in-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo" style={{ background: 'white', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '16px' }}>
                <ProCleanLogo />
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '14px', maxWidth: '250px' }}>
                Premium cleaning and property management for vacation rentals in Costa Blanca, Spain.
              </p>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><Link href="/#features">Airbnb Turnover</Link></li>
                <li><Link href="/#features">Property Care</Link></li>
                <li><Link href="/#features">Owner Updates</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000'}`}>WhatsApp</a></li>
                <li><a href="#">Email</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
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
            <span>© {new Date().getFullYear()} ProClean Management. All rights reserved.</span>
            <span>Costa Blanca, Spain</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
