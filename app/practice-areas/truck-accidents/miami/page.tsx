import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Truck Accident Attorney in Miami, FL | Nwahiri Law',
  description: 'Hit by a semi-truck or commercial vehicle in Miami? Attorney Tobechuku Nwahiri fights trucking companies and their insurers for maximum compensation. Free consultation. (305) 345-4117.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/truck-accidents/miami' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — Truck Accident Attorney Miami',
      description: 'Personal injury attorney representing victims hit by semi-trucks and commercial vehicles in Miami. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/truck-accidents/miami',
      telephone: '+13053454117',
      areaServed: { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who can I sue after being hit by a commercial truck in Miami?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depending on the facts, liable parties may include the truck driver, the trucking company, the cargo loader, a maintenance contractor, or the vehicle manufacturer. Trucking cases often have multiple defendants — an experienced attorney identifies every responsible party.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a truck accident claim different from a regular car accident claim?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Commercial trucks are regulated by the FMCSA (Federal Motor Carrier Safety Administration). Trucking companies carry large commercial insurance policies. Evidence like black box data, driver logs, and maintenance records must be preserved immediately — which is why contacting an attorney as soon as possible matters.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a truck accident claim in Florida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Florida's statute of limitations for truck accident injury claims is two years from the date of the accident. Do not wait — black box data can be overwritten and trucking companies begin building their defense immediately.",
          },
        },
      ],
    },
  ],
};

const corridors = [
  'I-95 through Miami-Dade — one of the most truck-heavy stretches in the Southeast',
  'SR-826 (Palmetto Expressway) — heavy commercial traffic from warehouses and distribution centers',
  'SR-836 (Dolphin Expressway) — Miami International Airport freight corridor',
  'Port of Miami access roads — container truck traffic to and from PortMiami',
  'NW 7th Avenue and NW 36th Street — industrial and distribution routes through Miami',
  'US-1 and the Turnpike interchange — delivery vehicle and semi-truck collisions',
];

const differences = [
  {
    heading: 'Federal regulations apply',
    body: 'Commercial trucks are governed by FMCSA rules — hours of service limits, drug testing requirements, weight restrictions. Violations create additional liability for the trucking company.',
  },
  {
    heading: 'Multiple liable parties',
    body: 'The driver, the carrier, the shipper, the maintenance company, and the manufacturer may all share responsibility. Identifying every liable party is critical to maximizing recovery.',
  },
  {
    heading: 'Larger insurance policies',
    body: 'Commercial carriers are required to carry far more insurance than private drivers — but they also have teams of lawyers and adjusters working against you from the moment of the crash.',
  },
  {
    heading: 'Evidence disappears fast',
    body: 'Black box (ECM) data, driver logs, and dispatch records can be overwritten or destroyed. A preservation letter must go out immediately to protect this evidence.',
  },
];

const faqs = [
  {
    q: 'Who can I sue after being hit by a commercial truck in Miami?',
    a: 'Depending on the facts, liable parties may include the truck driver, the trucking company, the cargo loader, a maintenance contractor, or the vehicle manufacturer. Trucking cases often have multiple defendants — an experienced attorney identifies every responsible party.',
  },
  {
    q: 'Is a truck accident claim different from a regular car accident claim?',
    a: 'Yes. Commercial trucks are regulated by the FMCSA (Federal Motor Carrier Safety Administration). Trucking companies carry large commercial insurance policies. Evidence like black box data, driver logs, and maintenance records must be preserved immediately — which is why contacting an attorney as soon as possible matters.',
  },
  {
    q: 'How long do I have to file a truck accident claim in Florida?',
    a: "Florida's statute of limitations for truck accident injury claims is two years from the date of the accident. Do not wait — black box data can be overwritten and trucking companies begin building their defense immediately.",
  },
];

export default function MiamiTruckAccidentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Truck Accident Attorney — Miami, FL
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Hit by a Truck or Commercial Vehicle in Miami?
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '640px' }}>
            When a semi-truck, delivery vehicle, or other commercial truck hits you, you are not dealing with a regular driver — you are dealing with a trucking company, a commercial insurer, and a team of adjusters whose job is to pay you as little as possible. Attorney Tobechuku Nwahiri levels the playing field.
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

      {/* Why truck accidents are different */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              What Makes These Cases Different
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-10">
            Truck Accident Claims Are More Complex Than Car Accident Claims
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differences.map((item, i) => (
              <div key={i} style={{ borderLeft: '3px solid #B8973B', paddingLeft: '1.25rem' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.2rem', fontWeight: 600 }} className="mb-2">{item.heading}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              High-Risk Corridors
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
            Miami's Most Dangerous Commercial Truck Routes
          </h2>
          <ul className="space-y-3">
            {corridors.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, fontFamily: 'Montserrat, sans-serif', fontSize: '11px', marginTop: '3px' }}>—</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you can recover */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Your Recovery
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              What You Can Recover After a Truck Accident
            </h2>
            <ul className="space-y-3">
              {[
                'Medical bills — past and future',
                'Lost wages and loss of earning capacity',
                'Pain and suffering',
                'Permanent disability or disfigurement',
                'Property damage',
                'Wrongful death damages if a family member was killed',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Evidence We Preserve
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              How Attorney Nwahiri Builds Your Case
            </h2>
            <ul className="space-y-3">
              {[
                'Send a preservation letter for ECM (black box) data before it is overwritten',
                'Subpoena driver logs, dispatch records, and hours-of-service data',
                'Investigate FMCSA violations — overloaded cargo, maintenance failures, falsified logs',
                'Retain accident reconstruction and trucking industry experts',
                'Document all damages and coordinate with your treating physicians',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
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
            <Link href="/practice-areas/locations/miami-personal-injury-attorney" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              View All Practice Areas Serving Miami &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Hit by a truck in Miami?
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
