import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Accident Attorney in Atlanta, GA | Nwahiri Law',
  description: 'Injured in a car accident in Atlanta? Attorney Tobechuku Nwahiri fights Georgia insurance companies for full compensation. Free consultation, no fee unless we win. (305) 345-4117.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/car-accidents/atlanta' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — Car Accident Attorney Atlanta',
      description: 'Personal injury attorney representing Atlanta car accident victims. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/car-accidents/atlanta',
      telephone: '+13053454117',
      areaServed: { '@type': 'City', name: 'Atlanta', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a car accident attorney in Atlanta cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nothing upfront. Nwahiri Law handles car accident cases on contingency — you pay no attorney fees unless we recover compensation for you.' },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a car accident claim in Georgia?',
          acceptedAnswer: { '@type': 'Answer', text: "Georgia's statute of limitations for car accident injury claims is two years from the date of the accident. Do not wait — evidence disappears quickly, and insurance companies begin building their case immediately." },
        },
        {
          '@type': 'Question',
          name: 'Should I go to the hospital after a car accident in Atlanta even if I feel fine?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — always. A concussion is a traumatic brain injury, and TBI symptoms including headache, dizziness, and confusion often do not appear until 24–72 hours after the crash. Going to the ER the same day creates the medical documentation your case depends on.' },
        },
        {
          '@type': 'Question',
          name: 'Georgia is an at-fault state — what does that mean for my car accident claim?',
          acceptedAnswer: { '@type': 'Answer', text: "Unlike Florida, Georgia is an at-fault state — the driver who caused the accident is responsible for damages. Georgia also uses modified comparative fault: if you are less than 50% at fault, you can still recover, but your award is reduced by your percentage of fault. An attorney protects you from having your fault percentage inflated by the other driver's insurer." },
        },
      ],
    },
  ],
};

const corridors = [
  'I-285 (The Perimeter) — Atlanta\'s most congested loop, with rear-end and multi-vehicle crashes daily',
  'I-75 / I-85 (Downtown Connector) — the most-driven stretch of road in Georgia',
  'I-20 east and west — major commuter and freight corridor through metro Atlanta',
  'SR-400 (Georgia 400) — heavy commuter traffic between Buckhead and North Fulton',
  'US-78 / Stone Mountain Freeway — high-crash corridor through DeKalb County',
  'Peachtree Road and Peachtree Street — urban intersection and pedestrian accident zone',
];

const faqs = [
  { q: 'How much does a car accident attorney in Atlanta cost?', a: 'Nothing upfront. Nwahiri Law handles car accident cases on contingency — you pay no attorney fees unless we recover compensation for you.' },
  { q: 'How long do I have to file a car accident claim in Georgia?', a: "Georgia's statute of limitations for car accident injury claims is two years from the date of the accident. Do not wait — evidence disappears quickly, and insurance companies begin building their case immediately." },
  { q: 'Should I go to the hospital after a car accident in Atlanta even if I feel fine?', a: 'Yes — always. A concussion is a traumatic brain injury, and TBI symptoms including headache, dizziness, and confusion often do not appear until 24–72 hours after the crash. Going to the ER the same day creates the medical documentation your case depends on.' },
  { q: "Georgia is an at-fault state — what does that mean for my car accident claim?", a: "Unlike Florida, Georgia is an at-fault state — the driver who caused the accident is responsible for damages. Georgia uses modified comparative fault: if you are less than 50% at fault, you can still recover, but your award is reduced by your percentage of fault. An attorney protects you from having your fault percentage inflated by the other driver's insurer." },
];

export default function AtlantaCarAccidentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Car Accident Attorney — Atlanta, GA</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Car Accident Attorney in Atlanta, GA
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '620px' }}>
            Atlanta consistently ranks among the worst cities in the country for traffic congestion and car accidents. If you were injured in a car accident in Atlanta, the insurance company is already building a case to pay you less. Attorney Tobechuku Nwahiri fights for full compensation for Atlanta accident victims across Fulton, DeKalb, Cobb, and Gwinnett counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="text-white font-semibold uppercase text-center hover:opacity-90 transition-opacity">Get a Free Consultation</Link>
            <a href="tel:3053454117" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px', color: 'rgba(255,255,255,0.8)' }} className="uppercase text-center font-semibold hover:border-white hover:text-white transition-colors">Call (305) 345-4117</a>
          </div>
        </div>
      </section>

      {/* TBI Warning */}
      <section className="py-10 px-6" style={{ backgroundColor: '#0A1A38' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-6" style={{ borderLeft: '4px solid #B8973B' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Go to the Hospital After Any Atlanta Car Accident — Even If You Feel Fine
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.8 }}>
              A concussion is a traumatic brain injury. Whiplash, TBI, and internal injuries from car accidents often produce no immediate pain — but symptoms appear 24–72 hours later. Same-day ER documentation protects your health and your claim. Follow your doctor&rsquo;s and attorney&rsquo;s instructions for all follow-up care.
            </p>
          </div>
        </div>
      </section>

      {/* Corridors + Damages */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">High-Risk Roads</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">Atlanta&rsquo;s Most Dangerous Corridors</h2>
            <ul className="space-y-3">
              {corridors.map((item, i) => (
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
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Your Claim</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">What Your Atlanta Car Accident Claim May Be Worth</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }} className="mb-4">
              Georgia is an at-fault state. The at-fault driver&rsquo;s insurer is responsible for your damages — but they will work to minimize your recovery. Recoverable damages may include:
            </p>
            <ul className="space-y-2">
              {['Medical bills — past and future', 'Lost wages and lost earning capacity', 'Pain and suffering', 'Permanent disability or disfigurement', 'Property damage'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span style={{ color: '#B8973B', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px' }}>{item}</span>
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
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Frequently Asked Questions</span>
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
            <Link href="/practice-areas/locations/atlanta-personal-injury-attorney" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              View All Atlanta Practice Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">Injured in an Atlanta car accident?</p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }} className="mb-8">Free consultation · No fee unless we win · Georgia-licensed attorney</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="text-white font-semibold uppercase hover:opacity-90 transition-opacity">Get a Free Consultation</Link>
            <a href="tel:3053454117" style={{ border: '1px solid rgba(184,151,59,0.5)', color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="font-semibold uppercase hover:opacity-80 transition-opacity">Call (305) 345-4117</a>
          </div>
        </div>
      </section>
    </>
  );
}
