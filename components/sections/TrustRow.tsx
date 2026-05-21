'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ShieldIcon, CalendarIcon, MapPinIcon } from '../icons';

export const TrustRow = () => {
  const { t } = useTranslation();

  return (
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
  );
};
