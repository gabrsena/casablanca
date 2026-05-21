'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '../contexts/TranslationContext';
import { CheckIcon } from '../icons';

export const FeaturesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="section features-section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px', background: '#000' }}>
      
      {/* DYNAMIC BACKGROUND GIFS */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {activeTab === 0 && <Image src="/Tab-1.gif" alt="" fill className="fade-in" style={{ objectFit: 'cover', opacity: 0.35 }} unoptimized />}
        {activeTab === 1 && <Image src="/Tab-2.gif" alt="" fill className="fade-in" style={{ objectFit: 'cover', opacity: 0.35 }} unoptimized />}
        {activeTab === 2 && <Image src="/Tab-3.gif" alt="" fill className="fade-in" style={{ objectFit: 'cover', opacity: 0.35 }} unoptimized />}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-headline fade-in-section" style={{ color: 'white' }}>{t.featuresTitle}</h2>
        
        <div className="tabs-header fade-in-section">
          <button 
            className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} 
            onClick={() => setActiveTab(0)} 
            style={{ 
              color: activeTab === 0 ? 'white' : 'rgba(255,255,255,0.7)', 
              background: activeTab === 0 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)' 
            }}
          >
            {t.tab1}
          </button>
          <button 
            className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} 
            onClick={() => setActiveTab(1)} 
            style={{ 
              color: activeTab === 1 ? 'white' : 'rgba(255,255,255,0.7)', 
              background: activeTab === 1 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)' 
            }}
          >
            {t.tab2}
          </button>
          <button 
            className={`tab-btn ${activeTab === 2 ? 'active' : ''}`} 
            onClick={() => setActiveTab(2)} 
            style={{ 
              color: activeTab === 2 ? 'white' : 'rgba(255,255,255,0.7)', 
              background: activeTab === 2 ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)' 
            }}
          >
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
  );
};
