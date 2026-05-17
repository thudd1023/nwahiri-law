import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Truck Accident Attorney in Georgia & Florida | Nwahiri Law',
  description: 'Injured in an 18-wheeler or commercial truck accident in Georgia or Florida? Attorney Tobechuku Nwahiri fights for maximum compensation. No fee unless we win.',
  keywords: ['truck accident attorney Georgia', 'truck accident attorney Florida', '18-wheeler accident lawyer', 'commercial truck accident attorney', 'Nwahiri Law'],
};

export default function TruckAccidentsPage() {
  return (
    <>
      <PracticeAreaHero
        title="Truck Accident Attorney | Georgia &amp; Florida"
        subtitle="When commercial trucks cause catastrophic injuries, you need an attorney who knows federal trucking regulations — and knows how to use them against the carriers."
        breadcrumb="Truck Accidents"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            When a commercial truck collides with a passenger vehicle, the results are rarely minor. The sheer size and weight of 18-wheelers, semi-trucks, flatbeds, and tanker trucks mean that crashes cause catastrophic injuries: spinal cord damage, traumatic brain injuries, broken bones, and fatalities.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            If you or someone you love has been seriously injured in a truck accident in Georgia or Florida, Nwahiri Law is prepared to fight for the full compensation you deserve.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">
            Truck Accident Claims Are Not the Same as Car Accident Claims
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Trucking cases involve a layer of complexity that most accident claims do not. Commercial carriers are regulated by the Federal Motor Carrier Safety Administration (FMCSA). They are required to maintain logs, inspect vehicles, follow hours-of-service rules, and meet strict licensing requirements. When they fail to do so, and a crash results, they bear significant legal responsibility.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
            What makes these cases more complex — and more valuable — is that multiple parties may be liable:
          </p>
          <ul className="space-y-2 mb-6">
            {['The truck driver', 'The trucking company or carrier', 'The owner of the cargo', 'Maintenance contractors', 'Vehicle or parts manufacturers'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#B8973B' }} className="mt-1 text-lg">·</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Nwahiri knows how to identify every responsible party and pursue every available avenue of compensation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
              Common Causes of Truck Accidents
            </h2>
            <ul className="space-y-2">
              {[
                'Driver fatigue — hours-of-service violations',
                'Distracted driving',
                'Improperly loaded or overloaded cargo',
                'Defective brakes or equipment',
                'Speeding and reckless driving',
                'Failure to yield or check blind spots',
                'Driving under the influence',
                'Inadequate driver training',
                'Failure to perform required vehicle inspections',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
              Compensation You May Recover
            </h2>
            <ul className="space-y-2">
              {[
                'Emergency medical treatment and surgery',
                'Ongoing and future medical care',
                'Physical and occupational therapy',
                'Lost wages during recovery',
                'Loss of future earning capacity',
                'Pain and suffering',
                'Emotional distress',
                'Permanent disability or disfigurement',
                'Wrongful death damages for surviving families',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
            How Attorney Nwahiri Builds Truck Accident Cases
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            The evidence in a truck accident case is time-sensitive. Electronic logging device (ELD) data, black box recordings, driver logs, inspection records, and surveillance footage can all disappear or be overwritten quickly. We act immediately to preserve evidence, send preservation demands to the carrier, and identify every avenue of liability.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            We consult with accident reconstruction experts, FMCSA compliance specialists, and medical professionals to build a case that reflects the full value of your injuries — and then we fight for that value in negotiations or at trial.
          </p>
        </div>
      </section>

      <HeroCTA heading="Injured in a Truck Accident?" body="Time is critical — evidence disappears fast. Contact Nwahiri Law today for a free, confidential consultation." />
    </>
  );
}
