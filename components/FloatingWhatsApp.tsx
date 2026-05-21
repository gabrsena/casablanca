'use client';

import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './icons';

interface FloatingWhatsAppProps {
  customMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ customMessage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';
  const url = customMessage 
    ? `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`
    : `https://wa.me/${number}`;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="floating-wa" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
    </a>
  );
};
