import type { Metadata } from 'next';
import Link from 'next/link';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Atlanta Personal Injury Attorney | Truck Accidents, TBI, Rideshare | Nwahiri Law',
  description: 'Looking for a personal injury attorney in Atlanta? Nwahiri Law handles truck accidents, TBI, Uber/Lyft crashes, and slip and fall cases. Free consultation.',
  keywords: ['Atlanta personal injury attorney', 'Atlanta truck accident lawyer', 'Atlanta TBI attorney', 'personal injury attorney Atlanta Georgia'],
};

const practiceLinks = [
  { label: 'Truck and 18-wheeler accidents on Atlanta interstates', href: '/practice-areas/truck-accidents' },
  { label: 'Traumatic brain injury (TBI) claims', href: '/practice-areas/traumatic-brain-injury' },
  { label: 'Uber and Lyft accident claims', href: '/practice-areas/uber-lyft-accidents' },
  { label: 'Slip and fall on commercial property', href: '/practice-areas/slip-and-fall' },
  { label: 'Car accident claims', href: '/practice-areas/car-accidents' },
  { label: 'Wrongful death', href: '/practice-areas/wrongful-death' },
  { label: 'Premises liability and negligent security', href: '/practice-areas/premises-liability' },
  { label: 'Civil rights violations by law enforcement', href: '/practice-areas/civil-rights' },
];

const atlantaAreas = ['Atlanta', 'Decatur', 'Sandy Springs', 'Marietta', 'Smyrna', 'Roswell', 'Duluth', 'Alpharetta', 'College Park', 'East Point', 'Gwinnett County', 'DeKalb County', 'Fulton County', 'Cobb County'];

export default function AtlantaPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Georgia</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Atlanta Personal Injury Attorney
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl mb-8">
            Nwahiri Law represents seriously injured individuals throughout the Atlanta metro area and across Georgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }} className="inline-block text-white font-semibold px-7 py-3.5 rounded hover:opacity-90 transition-opacity">
              Get Your Free Consultation →
            </Link>
            <a href="tel:3053454117" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', fontFamily: 'Montserrat, sans-serif' }} className="inline-block border font-medium px-7 py-3.5 rounded hover:border-white transition-colors">
              (305) 345-4117
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Atlanta&apos;s highways — I-285, I-85, I-75, I-20 — are among the most dangerous corridors in the Southeast. Commercial truck traffic is constant. Rideshare vehicles are everywhere. When accidents happen in the metro Atlanta area, the resulting injuries can be life-altering.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law represents seriously injured individuals throughout the Atlanta metro area and across Georgia. Attorney Tobechuku Nwahiri brings focused legal experience to personal injury cases where the stakes are high and the opposition is well-resourced.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Atlanta Personal Injury Cases We Handle</h2>
            <ul className="space-y-3">
              {practiceLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="flex items-start gap-3 hover:opacity-70 transition-opacity">
                    <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Why Atlanta Cases Require Local Knowledge</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed mb-4">
              Georgia law governs Atlanta personal injury cases, and understanding how Georgia courts approach damages, comparative fault, and evidence rules matters enormously. Attorney Nwahiri is admitted to the State Bar of Georgia and understands the legal landscape specific to Georgia claims.
            </p>
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">We represent clients throughout:</p>
            <div className="flex flex-wrap gap-2">
              {atlantaAreas.map((area) => (
                <span key={area} style={{ backgroundColor: '#0F2044', color: 'white', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-medium px-3 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in Atlanta? Talk to a Local Attorney Today." body="Attorney Nwahiri is licensed in Georgia and handles personal injury cases throughout the Atlanta metro and statewide. Your consultation is free." />
    </>
  );
}
