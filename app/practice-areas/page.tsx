import type { Metadata } from 'next';
import Link from 'next/link';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Practice Areas | Personal Injury Attorney Georgia & Florida | Nwahiri Law',
  description:
    'Nwahiri Law handles truck accidents, TBI, rideshare accidents, slip and fall, wrongful death, and civil rights cases in Georgia and Florida. No fee unless we win.',
  keywords: [
    'personal injury practice areas Georgia Florida',
    'truck accident attorney',
    'TBI attorney Georgia',
    'civil rights attorney Florida',
    'wrongful death attorney',
  ],
};

const personalInjury = [
  { title: 'Truck Accidents', href: '/practice-areas/truck-accidents', desc: 'Commercial vehicle crashes cause some of the most severe injuries on the road. 18-wheelers, semi-trucks, and delivery vehicles are governed by complex federal regulations — and the carriers know it. We know it too.' },
  { title: 'Traumatic Brain Injury (TBI)', href: '/practice-areas/traumatic-brain-injury', desc: 'TBI can change everything: your ability to work, your relationships, your daily life. These cases require expert medical evidence and a lawyer who understands how to present long-term damages to a jury.' },
  { title: 'Uber & Lyft Accidents', href: '/practice-areas/uber-lyft-accidents', desc: 'Rideshare accidents involve multiple insurance policies and companies designed to limit their exposure. We untangle the coverage and pursue every avenue of compensation available.' },
  { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall', desc: 'Property owners have a legal duty to maintain safe premises. When they fail, we hold them accountable for the injuries that result.' },
  { title: 'Car Accidents', href: '/practice-areas/car-accidents', desc: 'After a car accident, the insurance company\'s goal is to settle quickly for as little as possible. We fight for the full value of your claim — not a fast lowball offer.' },
  { title: 'Wrongful Death', href: '/practice-areas/wrongful-death', desc: 'When a family member\'s death results from another\'s negligence or misconduct, surviving family members have the right to pursue accountability and financial security.' },
  { title: 'Premises Liability', href: '/practice-areas/premises-liability', desc: 'Property owners are legally responsible for injuries caused by dangerous conditions on their property. From commercial properties to apartment complexes, we pursue every liable party.' },
  { title: 'Negligent Security', href: '/practice-areas/negligent-security', desc: 'If you were assaulted or harmed at a property that failed to provide adequate security, the property owner may bear responsibility for your injuries.' },
  { title: 'Dog Bites', href: '/practice-areas/dog-bites', desc: 'Dog bite injuries — especially for children — can be severe and traumatic. Under Georgia and Florida law, dog owners may be held strictly liable for the harm their animals cause.' },
];

const otherAreas = [
  { title: 'Criminal Defense', href: '/practice-areas/criminal-defense', desc: 'A criminal charge — misdemeanor or felony — can affect your employment, housing, and freedom. Attorney Nwahiri provides aggressive defense representation in Georgia and Florida.' },
  { title: 'DUI Defense', href: '/practice-areas/dui', desc: 'A DUI arrest does not have to become a conviction. We challenge the stop, the testing, and the government\'s evidence to protect your license and your record.' },
  { title: 'Civil Rights Violations', href: '/practice-areas/civil-rights', desc: 'When law enforcement or government officials violate your constitutional rights, there are legal remedies. We hold agencies and officers accountable under federal and state civil rights law.' },
  { title: 'Excessive Force & Police Misconduct', href: '/practice-areas/excessive-force', desc: 'Law enforcement has strict limits on the force they can use. When officers cross the line, we pursue justice through civil rights litigation.' },
  { title: 'Civil Asset Forfeiture', href: '/practice-areas/civil-asset-forfeiture', desc: 'The government can seize your property even without a criminal charge. We challenge unlawful forfeitures and fight to recover what belongs to our clients.' },
];

function AreaCard({ title, href, desc }: { title: string; href: string; desc: string }) {
  return (
    <div className="bg-white rounded p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-xl font-bold mb-3">
        {title}
      </h3>
      <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-sm leading-relaxed flex-1 mb-4">
        {desc}
      </p>
      <Link href={href} style={{ color: '#BE1823', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold hover:opacity-70 transition-opacity">
        Learn More &rarr;
      </Link>
    </div>
  );
}

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">
            Nwahiri Law
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Practice Areas
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl">
            Nwahiri Law focuses on serious personal injury and civil rights cases in Georgia and Florida. These are not minor matters — they are cases that reshape lives.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-4xl font-bold mb-6">
            What We Handle
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-3">
            Nwahiri Law focuses on serious personal injury and civil rights cases in Georgia and Florida. These are not minor matters — they are cases that reshape lives, and they demand an attorney who understands the full weight of that responsibility.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Nwahiri accepts cases where the injuries are significant, where the other side has resources and legal representation, and where the outcome genuinely matters to the people involved.
          </p>
        </div>
      </section>

      {/* Personal Injury */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">
              High-Value Personal Injury
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold">
              Personal Injury Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInjury.map((area) => (
              <AreaCard key={area.href} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">
              Additional Practice Areas
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold">
              Criminal Defense &amp; Civil Rights
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAreas.map((area) => (
              <AreaCard key={area.href} {...area} />
            ))}
          </div>
        </div>
      </section>

      <HeroCTA />
    </>
  );
}
