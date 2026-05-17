import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Slip and Fall Attorney Georgia & Florida | Nwahiri Law',
  description: 'Injured in a slip and fall in Georgia or Florida? Nwahiri Law holds negligent property owners accountable. Free consultation. No fee unless we win.',
  keywords: ['slip and fall attorney Georgia', 'slip and fall lawyer Florida', 'premises liability slip fall', 'fall accident attorney Georgia Florida'],
};

export default function SlipAndFallPage() {
  return (
    <>
      <PracticeAreaHero
        title="Slip &amp; Fall Attorney | Georgia &amp; Florida"
        subtitle="Property owners have a duty to keep you safe. When they fail, we hold them responsible for every dollar of harm they caused."
        breadcrumb="Slip &amp; Fall"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            A slip and fall accident can happen anywhere: a grocery store with an unmarked wet floor, an apartment complex with broken steps, a parking lot with inadequate lighting, or a restaurant with hazardous conditions. These are not random accidents — they are the result of someone&apos;s failure to maintain a safe property.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            If you were injured in a slip and fall in Georgia or Florida, you may have a premises liability claim. Attorney Tobechuku Nwahiri will evaluate your case and fight to hold the negligent property owner fully accountable.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">
            What Property Owners Are Required to Do
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
            Under Georgia and Florida law, property owners owe a legal duty of care to people on their premises. The specific duty depends on why you were there:
          </p>
          <div className="space-y-4">
            {[
              { label: 'Invitees (customers, shoppers, invited guests)', desc: 'Property owners owe the highest duty of care — they must inspect their property, identify hazards, and either fix them or warn visitors.' },
              { label: 'Licensees (social guests, some contractors)', desc: 'Owners must warn of known dangers they are aware of.' },
              { label: 'Trespassers', desc: 'Generally owed a lesser duty, though exceptions exist for children (the "attractive nuisance" doctrine) and other circumstances.' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded border border-gray-100">
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="font-semibold text-sm mb-2">{item.label}</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed mt-6">
            Most slip and fall claims involve business invitees — people who were on the property for commercial purposes — who are owed the highest duty of care.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Common Locations</h2>
            <ul className="space-y-2">
              {['Grocery stores and supermarkets', 'Retail stores and shopping centers', 'Restaurants and bars', 'Hotels and resorts', 'Apartment complexes and stairwells', 'Parking lots and garages', 'Hospitals and medical facilities', 'Construction sites', 'Public sidewalks and government property'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">What Must Be Proven</h2>
            <ul className="space-y-2">
              {['The property owner owed you a duty of care', 'A hazardous condition existed on the property', 'The owner knew or should have known about the hazard', 'The owner failed to fix it or warn you', 'The hazard caused your fall and your injuries', 'You suffered real damages as a result'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in a Slip and Fall?" body="Property owners and their insurers fight hard to avoid liability. We fight harder. Contact Nwahiri Law today for a free consultation." />
    </>
  );
}
