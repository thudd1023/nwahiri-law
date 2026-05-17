import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Negligent Security Attorney Georgia & Florida | Nwahiri Law',
  description: 'Assaulted or harmed due to inadequate security in Georgia or Florida? Nwahiri Law holds negligent property owners accountable. Free consultation.',
  keywords: ['negligent security attorney Georgia', 'negligent security lawyer Florida', 'inadequate security injury attorney', 'assault property owner liability'],
};

export default function NegligentSecurityPage() {
  return (
    <>
      <PracticeAreaHero
        title="Negligent Security Attorney | Georgia &amp; Florida"
        subtitle="When a property owner's failure to provide adequate security leads to your injury, they can be held legally responsible."
        breadcrumb="Negligent Security"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            When a property owner knows — or should know — that there is a risk of criminal activity on or near their premises, they have a legal duty to provide adequate security. If they fail to do so, and you are harmed as a result, they may be held liable under negligent security law.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law represents victims of negligent security in Georgia and Florida. If you were assaulted, robbed, or otherwise harmed at a hotel, apartment complex, parking lot, shopping center, nightclub, or other commercial property, you may have a claim.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Where Negligent Security Claims Arise</h2>
            <ul className="space-y-2">
              {['Hotels and motels with known crime problems and inadequate security staff', 'Apartment complexes with broken gates, inadequate lighting, or nonfunctional entry systems', 'Parking lots and garages in high-crime areas without cameras or guards', 'Nightclubs and bars with insufficient crowd control', 'Convenience stores and gas stations in known high-crime areas', 'Shopping centers and malls', 'College campuses and dormitories'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">What We Do in These Cases</h2>
            <ul className="space-y-2">
              {['Investigate prior incidents of crime at the location', 'Review the property owner\'s security policies and practices', 'Consult security experts to establish what measures should have been in place', 'Demonstrate the property owner\'s knowledge of the risk', 'Calculate full damages — physical, emotional, and financial', 'Pursue the property owner and their insurer in settlement or trial'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HeroCTA heading="Were You Harmed Due to Inadequate Security?" body="You should not bear the consequences of someone else&apos;s failure to protect you. Contact Nwahiri Law today for a free, confidential consultation." />
    </>
  );
}
