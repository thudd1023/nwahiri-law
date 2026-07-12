import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Accident Attorney in Hialeah, FL | Nwahiri Law',
  description: 'Injured in a car accident in Hialeah? Attorney Tobechuku Nwahiri fights insurance companies for full compensation. Free consultation, no fee unless we win. (305) 345-4117.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/car-accidents/hialeah' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — Car Accident Attorney Hialeah',
      description: 'Personal injury attorney representing Hialeah car accident victims. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/car-accidents/hialeah',
      telephone: '+13053454117',
      areaServed: { '@type': 'City', name: 'Hialeah', containedInPlace: { '@type': 'State', name: 'Florida' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a car accident attorney in Hialeah cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nothing upfront. Nwahiri Law handles car accident cases on contingency — you pay no attorney fees unless we recover compensation for you.' },
        },
        {
          '@type': 'Question',
          name: 'Florida is a no-fault state — can I still sue after a car accident in Hialeah?',
          acceptedAnswer: { '@type': 'Answer', text: 'Florida is a no-fault state, but serious injuries — broken bones, traumatic brain injury, herniated discs, permanent scarring — allow you to step outside PIP coverage and pursue the at-fault driver directly for medical bills, lost wages, and pain and suffering.' },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a car accident claim in Florida?',
          acceptedAnswer: { '@type': 'Answer', text: "Florida's statute of limitations for car accident injury claims is two years from the date of the accident. Do not wait — evidence disappears and witnesses become harder to locate over time." },
        },
      ],
    },
  ],
};

const causes = [
  'Rear-end collisions in heavy Palmetto Expressway traffic',
  'Red-light and intersection accidents on Okeechobee Road and Hialeah Drive',
  'Distracted and drowsy driving on commuter corridors',
  'Rideshare and commercial vehicle collisions',
  'Truck accidents involving I-75 and the Palmetto interchange',
];

const faqs = [
  {
    q: 'How much does a car accident attorney in Hialeah cost?',
    a: 'Nothing upfront. Nwahiri Law handles car accident cases on contingency — you pay no attorney fees unless we recover compensation for you.',
  },
  {
    q: 'Florida is a no-fault state — can I still sue after a car accident in Hialeah?',
    a: 'Florida is a no-fault state, but serious injuries — broken bones, traumatic brain injury, herniated discs, permanent scarring — allow you to step outside PIP coverage and pursue the at-fault driver directly for medical bills, lost wages, and pain and suffering.',
  },
  {
    q: 'How long do I have to file a car accident claim in Florida?',
    a: "Florida's statute of limitations for car accident injury claims is two years from the date of the accident. Do not wait — evidence disappears and witnesses become harder to locate over time.",
  },
];

export default function HialeahCarAccidentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Car Accident Attorney — Hialeah, FL
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Car Accident Attorney in Hialeah, FL
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '620px' }}>
            If you were injured in a car accident in Hialeah, the insurance company is already building a case to pay you less than your claim is worth. Attorney Tobechuku Nwahiri represents Hialeah drivers, passengers, and pedestrians injured in auto accidents throughout Miami-Dade County.
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

      {/* Causes */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Common Causes
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              Common Causes of Car Accidents in Hialeah
            </h2>
            <ul className="space-y-3">
              {causes.map((cause, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B', flexShrink: 0, fontFamily: 'Montserrat, sans-serif', fontSize: '11px' }}>—</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.7 }}>{cause}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Your Claim
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              What Your Hialeah Car Accident Claim Is Worth
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }} className="mb-4">
              Florida is a no-fault state, but serious injuries — broken bones, traumatic brain injury, herniated discs, permanent scarring — allow you to step outside PIP coverage and pursue the at-fault driver directly.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }}>
              Recoverable damages may include medical bills, future medical expenses, lost wages, loss of earning capacity, and pain and suffering. Attorney Nwahiri evaluates every case individually and tells you exactly what your claim may be worth — at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-6">
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
          <div className="mt-10 pt-2">
            <Link href="/practice-areas/locations/hialeah-personal-injury-attorney" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              View All Practice Areas Serving Hialeah &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Injured in a Hialeah car accident?
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }} className="mb-8">
            Free consultation · No fee unless we win · Phones answered 24/7
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
