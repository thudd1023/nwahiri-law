import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DeKalb County Personal Injury Attorney | Nwahiri Law',
  description: 'Injured in DeKalb County? Attorney Tobechuku Nwahiri handles truck accidents, car accidents, TBI, wrongful death, and civil rights cases across DeKalb County and metro Atlanta. Free consultation.',
  alternates: { canonical: 'https://www.nwahirilaw.com/practice-areas/locations/dekalb-county-personal-injury-attorney' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Nwahiri Law — DeKalb County Personal Injury Attorney',
      description: 'Personal injury and civil rights attorney serving DeKalb County, Georgia. Truck accidents, car accidents, TBI, wrongful death, civil rights. No fee unless we win.',
      url: 'https://www.nwahirilaw.com/practice-areas/locations/dekalb-county-personal-injury-attorney',
      telephone: '+13053454117',
      areaServed: { '@type': 'AdministrativeArea', name: 'DeKalb County', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Nwahiri Law handle personal injury cases in DeKalb County?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Attorney Tobechuku Nwahiri is licensed in Georgia and handles personal injury, truck accident, car accident, traumatic brain injury, wrongful death, and civil rights cases across DeKalb County including Decatur, Tucker, Stone Mountain, Lithonia, and Dunwoody.' },
        },
        {
          '@type': 'Question',
          name: 'What are the high-risk roads in DeKalb County for accidents?',
          acceptedAnswer: { '@type': 'Answer', text: 'DeKalb County has several high-traffic corridors with elevated accident rates, including I-285 east, I-20 east, Memorial Drive, Glenwood Avenue, and Covington Highway. Commercial truck traffic through Spaghetti Junction (I-285/I-85) creates additional hazards.' },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a personal injury claim in DeKalb County?',
          acceptedAnswer: { '@type': 'Answer', text: "Georgia's statute of limitations for personal injury is generally two years. Claims against DeKalb County government require an ante litem notice within 12 months (county) or 6 months (municipalities). Contact an attorney immediately — these deadlines are strictly enforced." },
        },
      ],
    },
  ],
};

const practiceAreas = [
  { title: 'Truck Accident', href: '/practice-areas/truck-accidents/atlanta', desc: 'Hit by a commercial vehicle near Spaghetti Junction, I-285 east, or I-20 through DeKalb County.' },
  { title: 'Car Accident', href: '/practice-areas/car-accidents/atlanta', desc: 'Memorial Drive, Glenwood Avenue, and Covington Highway accident victims.' },
  { title: 'Traumatic Brain Injury', href: '/practice-areas/traumatic-brain-injury', desc: 'TBI and concussion from any accident type — specialized documentation and long-term damages.' },
  { title: 'Wrongful Death', href: '/practice-areas/wrongful-death', desc: 'Representing DeKalb County families who lost a loved one due to negligence.' },
  { title: 'Civil Rights', href: '/practice-areas/civil-rights', desc: 'Excessive force and constitutional violations by DeKalb County police and sheriff.' },
  { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall', desc: 'Premises liability claims against property owners and businesses across DeKalb County.' },
];

const cities = ['Decatur', 'Tucker', 'Stone Mountain', 'Lithonia', 'Dunwoody', 'Chamblee', 'Clarkston', 'Avondale Estates', 'Pine Lake', 'Scottdale'];

const faqs = [
  { q: 'Does Nwahiri Law handle personal injury cases in DeKalb County?', a: 'Yes. Attorney Tobechuku Nwahiri is licensed in Georgia and handles personal injury, truck accident, car accident, traumatic brain injury, wrongful death, and civil rights cases across DeKalb County including Decatur, Tucker, Stone Mountain, Lithonia, and Dunwoody.' },
  { q: 'What are the high-risk roads in DeKalb County for accidents?', a: 'DeKalb County has several high-traffic corridors with elevated accident rates, including I-285 east, I-20 east, Memorial Drive, Glenwood Avenue, and Covington Highway. Commercial truck traffic through Spaghetti Junction (I-285/I-85) creates additional hazards.' },
  { q: 'How long do I have to file a personal injury claim in DeKalb County?', a: "Georgia's statute of limitations for personal injury is generally two years. Claims against DeKalb County government require an ante litem notice within 12 months (county) or 6 months (municipalities). Contact an attorney immediately — these deadlines are strictly enforced." },
];

export default function DeKalbCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Personal Injury Attorney — DeKalb County, GA</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl lg:text-6xl mb-6">
            DeKalb County Personal Injury Attorney
          </h1>
          <div style={{ backgroundColor: '#B8973B', height: '1px', width: '48px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.85, maxWidth: '640px' }}>
            Attorney Tobechuku Nwahiri is licensed in Georgia and represents injured people across DeKalb County — from commercial truck accident victims near Spaghetti Junction to civil rights cases against DeKalb County law enforcement. No fee unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="text-white font-semibold uppercase text-center hover:opacity-90 transition-opacity">Get a Free Consultation</Link>
            <a href="tel:3053454117" style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px', color: 'rgba(255,255,255,0.8)' }} className="uppercase text-center font-semibold hover:border-white hover:text-white transition-colors">Call (305) 345-4117</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Practice Areas</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-10">Cases We Handle in DeKalb County</h2>
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
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">DeKalb County Communities</h2>
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
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">Deadline Warning</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-3xl mb-6">Government Claims in DeKalb County</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }} className="mb-4">
              If your injury involves a DeKalb County government vehicle, a road defect on a county road, or a municipal property, Georgia&rsquo;s ante litem notice law requires formal notice before a lawsuit can be filed.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.85 }}>
              For DeKalb County: notice within <strong>12 months</strong>. For DeKalb municipalities: notice within <strong>6 months</strong>. Missing these deadlines can permanently end your claim.
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
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">Injured in DeKalb County?</p>
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
