import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Premises Liability Attorney Georgia & Florida | Nwahiri Law',
  description: 'Injured on someone else\'s property in Georgia or Florida? Nwahiri Law holds negligent property owners accountable. Free consultation. No fee unless we win.',
  keywords: ['premises liability attorney Georgia', 'premises liability lawyer Florida', 'property injury attorney', 'negligent property owner Georgia Florida'],
};

export default function PremisesLiabilityPage() {
  return (
    <>
      <PracticeAreaHero
        title="Premises Liability Attorney | Georgia &amp; Florida"
        subtitle="When you are injured on someone else's property, the property owner may be legally responsible. We hold them accountable."
        breadcrumb="Premises Liability"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            When you are injured on someone else&apos;s property — whether it is a business, apartment complex, parking lot, or private home — you may have a legal claim based on premises liability. Property owners have a legal responsibility to maintain their spaces in a reasonably safe condition. When they fail and someone is hurt, they can be held liable.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law represents premises liability victims throughout Georgia and Florida.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Common Types of Premises Liability Cases</h2>
            <ul className="space-y-2">
              {['Slip and fall accidents', 'Trip and fall accidents', 'Swimming pool accidents (drowning, entrapment)', 'Elevator and escalator injuries', 'Falling objects and merchandise', 'Toxic exposure (mold, chemicals)', 'Playground injuries', 'Inadequate maintenance of structures', 'Negligent security leading to assault or crime', 'Animal attacks on property'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">What Must Be Established</h2>
            <div className="space-y-3">
              {[
                'The defendant owned, leased, or controlled the property',
                'The defendant was negligent in the maintenance or use of the property',
                'The negligence caused your injury',
                'You suffered actual damages (medical expenses, lost wages, pain, etc.)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-4 rounded border border-gray-100">
                  <span style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif' }} className="text-xl font-bold flex-shrink-0">{i + 1}</span>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm mt-4 leading-relaxed">
              Key to many of these cases: proving the property owner knew about — or should have known about — the dangerous condition and failed to fix it or warn visitors.
            </p>
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured on Someone Else&rsquo;s Property?" body="Premises liability claims require moving quickly — evidence disappears and deadlines apply. Contact Nwahiri Law today for a free consultation." />
    </>
  );
}
