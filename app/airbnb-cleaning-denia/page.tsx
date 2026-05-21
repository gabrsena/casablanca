import { Metadata } from 'next';
import App from '@/components/App';

export const metadata: Metadata = {
  title: 'Airbnb Cleaning in Denia | ProClean Management Costa Blanca',
  description: 'Professional Airbnb turnover cleaning and property care in Denia, Costa Blanca. Reliable local team, photo reports, laundry coordination and restocking for holiday homeowners.',
};

export default function DeniaPage() {
  return <App cityName="Denia" />;
}
