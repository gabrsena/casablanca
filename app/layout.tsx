import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ProClean Management Costa Blanca',
  description: 'Premium cleaning and property management for vacation rentals in Costa Blanca, Spain. Trusted since 2017.',
  keywords: [
    'ProClean',
    'Management',
    'Costa Blanca',
    'Cleaning',
    'Property Management',
    'Vacation Rentals',
    'Airbnb cleaning Spain',
    'Javea',
    'Calpe',
    'Denia'
  ],
  icons: {
    icon: '/proclean-icon.svg',
  },
  openGraph: {
    title: 'ProClean Management Costa Blanca',
    description: 'Premium cleaning and property management for vacation rentals in Costa Blanca, Spain. Trusted since 2017.',
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
      <body>
        {children}
      </body>
    </html>
  );
}
