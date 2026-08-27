import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fulton County Personal Injury Attorney | Nwahiri Law',
  description: 'Injured in Fulton County? Attorney Tobechuku Nwahiri handles truck accidents, car accidents, TBI, wrongful death, and civil rights cases across Atlanta and Fulton County. Free consultation.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/locations/fulton-county-personal-injury-attorney' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — Fulton County Personal Injury Attorney',
      description: 'Personal injury and civil rights attorney serving Fulton County, Georgia. Truck accidents, car accidents, TBI, wrongful death, civil rights. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/locations/fulton-county-personal-injury-attorney',
      telephone: '+13053454117',
      areaServed: { '@type': 'AdministrativeArea', name: 'Fulton County', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Nwahiri Law handle personal injury cases in Fulton County?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Attorney Tobechuku Nwahiri is licensed in Georgia and handles personal injury, truck accident, car accident, traumatic brain injury, wrongful death, and civil rights cases across Fulton County including Atlanta, Sandy Springs, Roswell, and Johns Creek.' },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a personal injury claim in Fulton County?',
          acceptedAnswer: { '@type': 'Answer', text: "Georgia's statute of limitations for personal injury cases is generally two years from the date of injury. Claims against government entities, including Fulton County and City of Atlanta, require ante litem notice within six months. Contact an attorney immediately." },
        },
        {
          '@type': 'Question',
          name: 'What is an ante litem notice in Georgia?',
          acceptedAnswer: { '@type': 'Answer', text: 'An ante litem notice is a required pre-suit notice that must be filed with a government entity before a lawsuit can proceed. For Fulton County or City of Atlanta claims, this notice must typically be filed within six months of the injury — missing the deadline can permanently bar your claim.' },
        },
      ],
    },
  ],
};

const practiceAreas = [
  { title: 'Truck Accident', href: '/practice-areas/truck-accidents/atlanta', desc: 'Hit on I-285, I-75, I-85, or SR-400 by a semi-truck or commercial vehicle.' },
  { title: 'Car Accident', href: '/practice-areas/car-accidents/atlanta', desc: 'Atlanta and Fulton County accident victims facing insurance companies after serious crashes.' },
  { title: 'Traumatic Brain Injury', href: '/practice-areas/traumatic-brain-injury', desc: 'TBI — including concussion — from any accident type requires specialized legal handling.' },
  { title: 'Wrongful Death', href: '/practice-areas/wrongful-death', desc: 'Representing Fulton County families who lost a loved one due to negligence.' },
  { title: 'Civil Rights', href: '/practice-areas/civil-rights', desc: 'Excessive force, unlawful arrest, and constitutional violations by Fulton County and Atlanta police.' },
  { title: 'Premises Liability', href: '/practice-areas/premises-liability', desc: 'Slip and fall and negligent security claims against Fulton County property owners.' },
];

const cities = ['Atlanta', 'Sandy Springs', 'Roswell', 'Johns Creek', 'Alpharetta', 'College Park', 'East Point', 'Hapeville', 'Union City', 'Fairburn'];

const faqs = [
  { q: 'Does Nwahiri Law handle personal injury cases in Fulton County?', a: 'Yes. Attorney Tobechuku Nwahiri is licensed in Georgia and handles personal injury, truck accident, car accident, traumatic brain injury, wrongful death, and civil rights cases across Fulton County including Atlanta, Sandy Springs, Roswell, and Johns Creek.' },
  { q: 'How long do I have to file a personal injury claim in Fulton County?', a: "Georgia's statute of limitations for personal injury cases is generally two years from the date of injury. Claims against government entities, including Fulton County and City of Atlanta, require ante litem notice within six months. Contact an attorney immediately." },
  { q: 'What is an ante litem notice in Georgia?', a: 'An ante litem notice is a required pre-suit notice that must be filed with a government entity before a lawsuit can proceed. For Fulton County or City of Atlanta claims, this notice must typically be filed within six months of the injury — missing the deadline can permanently bar your claim.' },
];

export default function FultonCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Personal Injury Attorney — Fulton County, GA</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Fulton County Personal Injury Attorney
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '640px' }}>
            Attorney Tobechuku Nwahiri is licensed in Georgia and represents injured people across Fulton County — from truck accident victims on the I-285 to civil rights cases against Atlanta police. Contingency fee — no charge unless we win.
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

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Practice Areas</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-10">Cases We Handle in Fulton County</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(15,32,68,0.1)' }}>
            {practiceAreas.map((area, i) => (
              <Link key={i} href={area.href} className="group block p-7 hover:bg-gray-50 transition-colors" style={{ borderRight: '1px solid rgba(15,32,68,0.1)', borderBottom: '1px solid rgba(15,32,68,0.1)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.15rem' }} className="mb-2 group-hover:text-[#B8973B] transition-colors">{area.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', lineHeight: 1.7 }}>{area.desc}</p>
                <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="font-semibold uppercase mt-4 block">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Cities We Serve</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">Fulton County Communities</h2>
            <ul className="space-y-2">
              {cities.map((city, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span style={{ color: '#B8973B', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px' }}>{city}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Important for Fulton County Claims</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">Ante Litem Notice Deadlines</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }} className="mb-4">
              If your injury involves a Fulton County government vehicle, road defect, or City of Atlanta property, Georgia law requires an ante litem notice to be filed within <strong>six months</strong> of the injury — before any lawsuit can proceed.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }}>
              Missing this deadline permanently bars your claim. Attorney Nwahiri identifies when government liability applies and files all required notices on time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
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
        </div>
      </section>

      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">Injured in Fulton County?</p>
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
