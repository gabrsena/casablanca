import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airbnb Turnover & Property Care in Costa Blanca | ProClean Management',
  description: 'Professional Airbnb turnover cleaning, laundry coordination and property management for holiday homeowners across Costa Blanca — Javea, Calpe, Denia, Alicante, Torrevieja, Benidorm and more. U.S. service standards since 2017.',
  keywords: 'Airbnb cleaning Costa Blanca, Airbnb turnover Costa Blanca, Airbnb cleaning Alicante, holiday home cleaning Costa Blanca, vacation rental cleaning Alicante, property management Costa Blanca, holiday home property care, Airbnb laundry service Costa Blanca, Airbnb cleaning Javea, Airbnb cleaning Calpe, Airbnb cleaning Denia, Airbnb cleaning Torrevieja, Airbnb cleaning Benidorm',
  icons: {
    icon: '/proclean-icon.svg',
  },
  openGraph: {
    title: 'Airbnb Turnover & Property Care in Costa Blanca | ProClean Management',
    description: 'Professional Airbnb turnover cleaning, laundry coordination and property management for holiday homeowners across Costa Blanca.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ProClean Management Costa Blanca",
              "description": "Airbnb turnover cleaning, laundry coordination and property management for holiday homeowners across Costa Blanca, Spain.",
              "url": "https://procleancoastablanca.com",
              "telephone": "+34600000000",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Alicante",
                "addressCountry": "ES"
              },
              "areaServed": ["Javea", "Calpe", "Denia", "Alicante", "Torrevieja", "Benidorm", "Costa Blanca"],
              "serviceType": "Airbnb Turnover Cleaning, Vacation Rental Property Management, Holiday Home Care",
              "foundingDate": "2017"
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

