import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Results & Settlements | Nwahiri Law | Georgia & Florida',
  description: 'See the results Nwahiri Law has achieved for injury victims in Georgia and Florida. Truck accidents, TBI, rideshare, slip and fall, and civil rights cases.',
  keywords: ['case results personal injury Georgia', 'settlement results Florida attorney', 'Nwahiri Law results', 'personal injury settlements Georgia Florida'],
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
