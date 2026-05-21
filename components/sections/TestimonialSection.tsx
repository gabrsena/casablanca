'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../contexts/TranslationContext';

export const TestimonialSection = () => {
  const { t } = useTranslation();

  return (
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
                <Image 
                  className="author-avatar" 
                  src={testi.avatar} 
                  alt={testi.name} 
                  width={48}
                  height={48}
                  style={{ objectFit: 'cover' }}
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
  );
};
