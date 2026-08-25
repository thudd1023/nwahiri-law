import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Truck Accident Attorney in Atlanta, GA | Nwahiri Law',
  description: 'Hit by a semi-truck or commercial vehicle in Atlanta? Attorney Tobechuku Nwahiri fights trucking companies for maximum compensation. Free consultation. (305) 345-4117.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/truck-accidents/atlanta' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — Truck Accident Attorney Atlanta',
      description: 'Personal injury attorney representing victims hit by semi-trucks and commercial vehicles in Atlanta and across Georgia. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/truck-accidents/atlanta',
      telephone: '+13053454117',
      areaServed: { '@type': 'City', name: 'Atlanta', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is liable when a commercial truck hits me in Atlanta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Liability may extend beyond the truck driver to include the trucking company, the shipper, a cargo loading company, a maintenance contractor, or the vehicle manufacturer. Georgia law allows claims against all responsible parties — an attorney investigates every avenue.',
          },
        },
        {
          '@type': 'Question',
          name: 'What evidence is most important in an Atlanta truck accident case?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Black box (ECM) data, driver hours-of-service logs, dispatch and GPS records, and the truck's maintenance history are critical — and can be destroyed or overwritten quickly. A preservation letter must go out immediately after the crash.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a truck accident claim in Georgia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Georgia's statute of limitations for personal injury claims is two years from the date of the accident. If a government entity is involved, notice deadlines can be as short as six months. Do not wait.",
          },
        },
      ],
    },
  ],
};

const corridors = [
  'I-285 (The Perimeter) — Atlanta\'s busiest commercial truck loop, encircling the city',
  'I-75 / I-85 (Downtown Connector) — one of the most congested truck corridors in the South',
  'I-20 east and west — major freight route connecting Atlanta to Birmingham and Augusta',
  'I-85 northeast — heavy distribution center traffic through Gwinnett and Hall counties',
  'SR-400 and Spaghetti Junction (I-285 / I-85 interchange) — a high-crash commercial zone',
  'Hartsfield-Jackson cargo routes — delivery and freight vehicles surrounding the airport',
];

const differences = [
  {
    heading: 'Federal regulations apply',
    body: 'FMCSA rules govern commercial trucking — hours-of-service limits, drug testing, load securement, and maintenance standards. Violations create direct liability for the trucking company.',
  },
  {
    heading: 'Multiple liable parties',
    body: 'The driver, the carrier, the shipper, and the maintenance company may all share responsibility. Georgia law allows you to pursue all of them in a single action.',
  },
  {
    heading: 'Commercial insurance is different',
    body: "Trucking companies carry millions in liability coverage — but their insurers send adjusters to the scene immediately. You need representation before giving any statement.",
  },
  {
    heading: 'Evidence must be preserved fast',
    body: 'ECM (black box) data, driver logs, and dispatch records can be overwritten within 30 days. Attorney Nwahiri sends a preservation letter the same day he is retained.',
  },
];

const faqs = [
  {
    q: 'Who is liable when a commercial truck hits me in Atlanta?',
    a: 'Liability may extend beyond the truck driver to include the trucking company, the shipper, a cargo loading company, a maintenance contractor, or the vehicle manufacturer. Georgia law allows claims against all responsible parties — an attorney investigates every avenue.',
  },
  {
    q: 'What evidence is most important in an Atlanta truck accident case?',
    a: "Black box (ECM) data, driver hours-of-service logs, dispatch and GPS records, and the truck's maintenance history are critical — and can be destroyed or overwritten quickly. A preservation letter must go out immediately after the crash.",
  },
  {
    q: 'How long do I have to file a truck accident claim in Georgia?',
    a: "Georgia's statute of limitations for personal injury claims is two years from the date of the accident. If a government entity is involved, notice deadlines can be as short as six months. Do not wait.",
  },
];

export default function AtlantaTruckAccidentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Truck Accident Attorney — Atlanta, GA
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Hit by a Truck or Commercial Vehicle in Atlanta?
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '640px' }}>
            Atlanta sits at the intersection of five major interstates. When a semi-truck, 18-wheeler, or commercial delivery vehicle hits you on the I-285, the Downtown Connector, or anywhere in metro Atlanta, you face a trucking company with a commercial insurer and a defense team — Attorney Nwahiri fights back.
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

      {/* Why different */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              What Makes These Cases Different
            </span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-10">
            Truck Accident Claims Require a Different Approach
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
            Atlanta's Most Dangerous Commercial Truck Routes
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

      {/* Recovery + Evidence */}
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
              Damages You Can Recover
            </h2>
            <ul className="space-y-3">
              {[
                'Medical expenses — past and future treatment',
                'Lost wages and reduced earning capacity',
                'Pain and suffering',
                'Permanent disability or disfigurement',
                'Property damage',
                'Wrongful death damages for families who lost someone',
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
                How We Build Your Case
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">
              Attorney Nwahiri's Approach
            </h2>
            <ul className="space-y-3">
              {[
                'Immediate preservation letter for ECM (black box) and telematics data',
                'Subpoena driver hours-of-service logs and dispatch records',
                'Investigate FMCSA violations — overloading, maintenance failures, drug screening',
                'Retain Georgia-licensed accident reconstruction experts',
                'Identify all liable parties — carrier, shipper, loader, manufacturer',
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
            <Link href="/atlanta-personal-injury-attorney" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              View All Atlanta Practice Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Hit by a truck in Atlanta or anywhere in Georgia?
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
