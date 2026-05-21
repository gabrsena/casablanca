import { Metadata } from 'next';
import App from '@/components/App';

export const metadata: Metadata = {
  title: 'Holiday Home Care in Costa Blanca | ProClean Management Costa Blanca',
  description: 'Professional holiday home care and property management in Costa Blanca. Reliable local team, property inspections, maintenance coordination for absentee owners.',
};

export default function HolidayHomeCarePage() {
  return <App cityName="Costa Blanca" />;
}
