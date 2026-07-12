import type { Metadata } from 'next';
import Link from 'next/link';

export interface LocationPageProps {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  introParagraph: string;
  localContext: string;
  zips: string;
  practiceAreas?: { label: string; href: string }[];
}

const defaultPracticeAreas = (city: string) => [
  { label: `Car Accident Attorney in ${city}`, href: '/practice-areas/car-accidents' },
  { label: `Truck Accident Attorney in ${city}`, href: '/practice-areas/truck-accidents' },
  { label: `Slip & Fall / Premises Liability Attorney in ${city}`, href: '/practice-areas/slip-and-fall' },
  { label: `Uber & Lyft Accident Attorney in ${city}`, href: '/practice-areas/uber-lyft-accidents' },
  { label: `Wrongful Death Attorney in ${city}`, href: '/practice-areas/wrongful-death' },
  { label: `Civil Rights & Police Misconduct Attorney in ${city}`, href: '/practice-areas/civil-rights' },
];

export function buildMetadata({ metaTitle, metaDescription, slug }: LocationPageProps): Metadata {
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `https://www.nwahirilaw.com/practice-areas/locations/${slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.nwahirilaw.com/practice-areas/locations/${slug}`,
    },
  };
}

export default function LocationPage(props: LocationPageProps) {
  const { city, slug, introParagraph, localContext, zips, metaDescription } = props;
  const areas = props.practiceAreas ?? defaultPracticeAreas(city);

  const faqItems = [
    {
      q: `How much does a ${city} personal injury attorney cost?`,
      a: `Nothing upfront. Nwahiri Law handles personal injury and civil rights cases on contingency — you pay no attorney's fees unless we recover compensation for you.`,
    },
    {
      q: `Do I need a lawyer near me in ${city}, or can I use a firm based elsewhere?`,
      a: `You don't have to hire a firm physically inside ${city} — Attorney Nwahiri is licensed throughout Florida and meets clients where it's convenient, including virtually. What matters is local case experience, not a local mailing address.`,
    },
    {
      q: `How long do I have to file a personal injury claim in Florida?`,
      a: `Florida's statute of limitations for most personal injury claims is two years from the date of the injury. Some cases — especially those involving government entities — have shorter notice deadlines. Contact an attorney as soon as possible to protect your rights.`,
    },
    {
      q: `What types of compensation can I recover after an accident in ${city}?`,
      a: `Depending on the facts of your case, you may be able to recover medical bills, future medical expenses, lost wages, loss of earning capacity, pain and suffering, and other damages. Attorney Nwahiri evaluates each case individually.`,
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        name: 'Nwahiri Law',
        description: metaDescription,
        url: `https://www.nwahirilaw.com/practice-areas/locations/${slug}`,
        telephone: '+13053454117',
        email: 'info@nwahirilaw.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '13499 Biscayne Blvd, Suite 107',
          addressLocality: 'North Miami',
          addressRegion: 'FL',
          postalCode: '33181',
          addressCountry: 'US',
        },
        areaServed: [
          { '@type': 'City', 'name': city, 'containedInPlace': { '@type': 'State', 'name': 'Florida' } },
        ],
        priceRange: 'Free consultation — no fee unless we win',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Personal Injury Legal Services in ${city}, FL`,
          itemListElement: areas.map((a) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: a.label },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Personal Injury Attorney — {city}, FL
            </span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            {city} Personal Injury Attorney
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '640px' }}>
            {introParagraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/free-consultation"
              style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }}
              className="text-white font-semibold uppercase text-center hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:3053454117"
              style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px', color: 'rgba(255,255,255,0.8)' }}
              className="uppercase text-center font-semibold hover:border-white hover:text-white transition-colors"
            >
              Call (305) 345-4117
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Practice Areas Serving {city}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0" style={{ border: '1px solid rgba(15,32,68,0.1)' }}>
            {areas.map((area, i) => (
              <Link
                key={i}
                href={area.href}
                className="block p-6 hover:bg-gray-50 transition-colors"
                style={{ borderRight: i % 2 === 0 ? '1px solid rgba(15,32,68,0.1)' : 'none', borderBottom: '1px solid rgba(15,32,68,0.1)' }}
              >
                <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="font-semibold uppercase block mb-1">
                  →
                </span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.1rem', fontWeight: 600 }}>
                  {area.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Serving {city}
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.1 }} className="text-3xl md:text-4xl mb-6">
              Local Knowledge. Statewide Reach.
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '14px', lineHeight: 1.9 }}>
              {localContext}
            </p>
          </div>
          <div>
            <div style={{ borderLeft: '2px solid #B8973B', paddingLeft: '1.5rem' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8973B', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold mb-3">
                ZIP Codes Served
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.9 }}>
                {zips}
              </p>
              <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(15,32,68,0.1)', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8973B', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold mb-3">
                  Contact
                </p>
                <a href="tel:3053454117" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044', fontSize: '14px', fontWeight: 600 }} className="block hover:opacity-70">
                  (305) 345-4117
                </a>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>
                  Phones answered 24/7
                </p>
              </div>
            </div>
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
          <div className="space-y-0" style={{ borderTop: '1px solid rgba(15,32,68,0.08)' }}>
            {faqItems.map((faq, i) => (
              <div key={i} className="py-7" style={{ borderBottom: '1px solid rgba(15,32,68,0.08)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.2rem', fontWeight: 600 }} className="mb-3">
                  {faq.q}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Injured in {city}?
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px', letterSpacing: '0.04em' }} className="mb-8">
            Free consultation · No fee unless we win · Phones answered 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }}
              className="text-white font-semibold uppercase hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:3053454117"
              style={{ border: '1px solid rgba(184,151,59,0.5)', color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }}
              className="font-semibold uppercase hover:opacity-80 transition-opacity"
            >
              Call (305) 345-4117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
