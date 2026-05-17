import type { Metadata } from 'next';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Florida Personal Injury Lawyer | Truck Accidents, TBI, Rideshare | Nwahiri Law',
  description: 'Injured in Florida? Attorney Tobechuku Nwahiri handles truck accidents, TBI, rideshare crashes, and slip and fall claims. Licensed in Florida. Free consultation.',
  keywords: ['Florida personal injury lawyer', 'Florida truck accident attorney', 'personal injury attorney Florida', 'Florida TBI lawyer', 'Miami personal injury attorney'],
};

const floridaAreas = ['Miami', 'Fort Lauderdale', 'Orlando', 'Tampa', 'Jacksonville', 'St. Petersburg', 'Tallahassee', 'Gainesville', 'Boca Raton', 'West Palm Beach', 'Naples', 'Fort Myers', 'Daytona Beach', 'Pensacola', 'Sarasota'];

export default function FloridaPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Florida</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Florida Personal Injury Lawyer
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl">
            Attorney Tobechuku Nwahiri is licensed in Florida and handles serious personal injury cases throughout the state.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Florida&apos;s roads are among the most congested and accident-prone in the country. With heavy tourist traffic, active construction zones, significant commercial trucking, and one of the largest rideshare markets in the US, serious accidents happen every day. When they do, the insurance and legal frameworks that apply in Florida are distinct from other states — and understanding them can make a significant difference in the outcome of your case.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Tobechuku Nwahiri is licensed in Florida and handles serious personal injury cases throughout the state.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-8">Key Facts About Florida Personal Injury Law</h2>
          <div className="space-y-6">
            {[
              { title: 'Statute of Limitations', desc: 'Florida generally allows two years from the date of injury to file a personal injury lawsuit (reduced from four years by recent legislation).' },
              { title: 'No-Fault / PIP System', desc: "Florida is a no-fault insurance state. Drivers are required to carry Personal Injury Protection (PIP) coverage, which pays a portion of medical expenses and lost wages regardless of fault — up to $10,000. However, if your injuries meet the 'serious injury threshold' (significant and permanent injury, permanent scarring or disfigurement, or death), you can step outside the no-fault system and sue the at-fault driver directly." },
              { title: 'Comparative Fault (Florida Statute § 768.81)', desc: 'Florida follows a modified comparative fault standard as of 2023. You can recover damages if you were less than 51% at fault, with your recovery reduced by your percentage of responsibility.' },
              { title: 'Available Damages', desc: 'Medical expenses, lost wages, pain and suffering (if threshold is met), loss of consortium, and in egregious cases, punitive damages.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded border border-gray-100">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-xl font-bold mb-2">{item.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">We Represent Clients Across Florida</h2>
          <div className="flex flex-wrap gap-2">
            {floridaAreas.map((area) => (
              <span key={area} style={{ backgroundColor: '#0F2044', color: 'white', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-medium px-4 py-2 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in Florida? You Deserve an Attorney Who Knows Florida Law." body="Florida&apos;s no-fault system and modified comparative fault rules are complex. Contact Nwahiri Law for a free, confidential consultation." />
    </>
  );
}
