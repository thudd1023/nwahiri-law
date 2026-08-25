import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Atlanta Personal Injury Attorney | Nwahiri Law',
  description: 'Injured in Atlanta? Attorney Tobechuku Nwahiri handles truck accidents, car accidents, TBI, wrongful death, and civil rights cases across metro Atlanta and Fulton County. Free consultation.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/locations/atlanta-personal-injury-attorney' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — Atlanta Personal Injury Attorney',
      description: 'Personal injury and civil rights law firm serving Atlanta and metro Georgia. Truck accidents, car accidents, TBI, wrongful death, civil rights. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/locations/atlanta-personal-injury-attorney',
      telephone: '+13053454117',
      areaServed: { '@type': 'City', name: 'Atlanta', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Nwahiri Law handle personal injury cases in Atlanta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Attorney Tobechuku Nwahiri is licensed in Georgia and handles personal injury, truck accident, car accident, traumatic brain injury, wrongful death, and civil rights cases across Atlanta and metro Georgia.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a personal injury claim in Georgia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Georgia's statute of limitations for personal injury cases is generally two years from the date of the injury. Claims against government entities require notice within six months. Contact an attorney as soon as possible.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Nwahiri Law charge upfront fees for Atlanta personal injury cases?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Nwahiri Law handles personal injury cases on a contingency fee basis — you pay nothing unless we recover compensation for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas of Atlanta does Nwahiri Law serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nwahiri Law serves clients throughout metro Atlanta including Fulton County, DeKalb County, Cobb County, Gwinnett County, Clayton County, and surrounding communities.',
          },
        },
      ],
    },
  ],
};

const practiceAreas = [
  { title: 'Truck Accident', href: '/practice-areas/truck-accidents/atlanta', desc: 'Hit by a semi, 18-wheeler, or commercial vehicle on the I-285, Downtown Connector, or I-75.' },
  { title: 'Car Accident', href: '/practice-areas/car-accidents', desc: 'Atlanta traffic ranks among the worst in the nation — we fight insurers for full compensation.' },
  { title: 'Traumatic Brain Injury', href: '/practice-areas/traumatic-brain-injury', desc: 'TBI cases require specialized medical evidence and long-term damages analysis.' },
  { title: 'Wrongful Death', href: '/practice-areas/wrongful-death', desc: 'Representing Atlanta families who lost a loved one due to someone else\'s negligence.' },
  { title: 'Civil Rights', href: '/practice-areas/civil-rights', desc: 'Excessive force, unlawful arrest, and civil rights violations by Georgia law enforcement.' },
  { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall', desc: 'Premises liability claims against property owners and businesses across metro Atlanta.' },
];

const faqs = [
  {
    q: 'Does Nwahiri Law handle personal injury cases in Atlanta?',
    a: 'Yes. Attorney Tobechuku Nwahiri is licensed in Georgia and handles personal injury, truck accident, car accident, traumatic brain injury, wrongful death, and civil rights cases across Atlanta and metro Georgia.',
  },
  {
    q: 'How long do I have to file a personal injury claim in Georgia?',
    a: "Georgia's statute of limitations for personal injury cases is generally two years from the date of the injury. Claims against government entities require notice within six months. Contact an attorney as soon as possible.",
  },
  {
    q: 'Does Nwahiri Law charge upfront fees for Atlanta personal injury cases?',
    a: 'No. Nwahiri Law handles personal injury cases on a contingency fee basis — you pay nothing unless we recover compensation for you.',
  },
  {
    q: 'What areas of Atlanta does Nwahiri Law serve?',
    a: 'Nwahiri Law serves clients throughout metro Atlanta including Fulton County, DeKalb County, Cobb County, Gwinnett County, Clayton County, and surrounding communities.',
  },
];

const counties = ['Fulton County', 'DeKalb County', 'Cobb County', 'Gwinnett County', 'Clayton County', 'Cherokee County', 'Forsyth County', 'Henry County'];

export default function AtlantaPersonalInjuryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Personal Injury Attorney — Atlanta, GA
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Atlanta Personal Injury Attorney
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '640px' }}>
            Attorney Tobechuku Nwahiri is licensed in Georgia and represents injured people across metro Atlanta — from truck accident victims on the I-285 to civil rights cases against law enforcement. Contingency fee — no charge unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="text-white font-semibold uppercase text-center hover:opacity-90 transition-opacity">
              Get a Free Consultation
            </Link>
            <a href="tel:3053454117" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px', color: 'rgba(255,255,255,0.8)' }} className="uppercase text-center font-semibold hover:border-white hover:text-white transition-colors">
              Call (305) 345-4117
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Practice Areas
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-10">
            Cases We Handle in Atlanta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(15,32,68,0.1)' }}>
            {practiceAreas.map((area, i) => (
              <Link
                key={i}
                href={area.href}
                className="group block p-7 hover:bg-gray-50 transition-colors"
                style={{ borderRight: '1px solid rgba(15,32,68,0.1)', borderBottom: '1px solid rgba(15,32,68,0.1)' }}
              >
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.15rem' }} className="mb-2 group-hover:text-[#B8973B] transition-colors">
                  {area.title}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', lineHeight: 1.7 }}>{area.desc}</p>
                <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="font-semibold uppercase mt-4 block">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Service Area
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              Metro Atlanta Counties We Serve
            </h2>
            <ul className="space-y-2">
              {counties.map((county, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span style={{ color: '#B8973B', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px' }}>{county}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                About the Firm
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              Georgia-Licensed. Contingency Fee.
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }} className="mb-4">
              Attorney Tobechuku Nwahiri is admitted to practice in Georgia and Florida. The firm's Atlanta clients pay nothing upfront — we handle all costs of litigation and are paid only when we win your case.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }}>
              Named to the National Trial Lawyers Top 40 Under 40 (Civil Plaintiff) for 2024, 2025, and 2026, and recognized by Best Lawyers — Ones to Watch for Personal Injury Litigation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          <div className="space-y-0" style={{ borderTop: '1px solid rgba(15,32,68,0.1)' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="py-7" style={{ borderBottom: '1px solid rgba(15,32,68,0.1)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.2rem', fontWeight: 600 }} className="mb-3">{faq.q}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Injured in Atlanta?
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }} className="mb-8">
            Free consultation · No fee unless we win · Georgia-licensed attorney
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="text-white font-semibold uppercase hover:opacity-90 transition-opacity">
              Get a Free Consultation
            </Link>
            <a href="tel:3053454117" style={{ border: '1px solid rgba(184,151,59,0.5)', color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="font-semibold uppercase hover:opacity-80 transition-opacity">
              Call (305) 345-4117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
