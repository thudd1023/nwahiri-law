import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Uber & Lyft Accident Attorney Georgia & Florida | Nwahiri Law',
  description: 'Injured in an Uber or Lyft accident in Georgia or Florida? Nwahiri Law navigates rideshare insurance complexities to fight for your maximum compensation.',
  keywords: ['Uber accident attorney Georgia', 'Lyft accident lawyer Florida', 'rideshare accident attorney', 'Uber Lyft injury claim Georgia Florida'],
};

const coverageTiers = [
  { status: 'App OFF', detail: "The driver's personal auto insurance applies. Uber/Lyft provide no coverage." },
  { status: 'App ON, No Passenger (Available)', detail: 'Uber and Lyft provide contingent liability coverage — typically $50,000/$100,000 per person/per accident for bodily injury.' },
  { status: 'Ride Accepted or Passenger in Vehicle', detail: 'Uber and Lyft provide up to $1,000,000 in third-party liability coverage, plus uninsured/underinsured motorist coverage.' },
];

export default function UberLyftPage() {
  return (
    <>
      <PracticeAreaHero
        title="Uber &amp; Lyft Accident Attorney | Georgia &amp; Florida"
        subtitle="Rideshare accidents involve complex, tiered insurance systems. We cut through the confusion and pursue every available avenue of compensation."
        breadcrumb="Uber &amp; Lyft Accidents"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Rideshare services like Uber and Lyft have transformed transportation — and created an entirely new category of accident claim. If you were injured as a passenger, pedestrian, or driver in a collision involving a rideshare vehicle, the path to compensation is more complicated than a standard car accident claim.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law understands the insurance structures, liability frameworks, and legal strategies specific to rideshare accident cases in Georgia and Florida.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">
            Why Rideshare Accident Claims Are Different
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-8">
            Uber and Lyft both operate complex, tiered insurance systems designed to limit their liability exposure. The coverage that applies to your accident depends on the driver&apos;s status at the time of the crash:
          </p>
          <div className="space-y-4">
            {coverageTiers.map((tier, i) => (
              <div key={i} className="bg-white rounded p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span style={{ backgroundColor: '#0F2044', color: 'white', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-bold px-3 py-1 rounded flex-shrink-0">
                    Status {i + 1}
                  </span>
                  <div>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="font-semibold text-sm mb-1">{tier.status}</p>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">{tier.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed mt-6">
            Determining which coverage applies — and then actually recovering from it — requires legal knowledge of both state law and the companies&apos; policy structures. This is exactly what we do.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Who Can File a Claim</h2>
            <ul className="space-y-2">
              {['Passengers injured in a rideshare vehicle', 'Pedestrians or cyclists hit by an Uber or Lyft driver', 'Drivers of other vehicles hit by a rideshare driver', 'Other passengers or bystanders injured in the crash'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Compensation You May Recover</h2>
            <ul className="space-y-2">
              {['Medical expenses', 'Lost wages', 'Pain and suffering', 'Permanent disability or scarring', 'Wrongful death damages', 'Uninsured/underinsured motorist coverage'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in an Uber or Lyft?" body="Rideshare insurance disputes are complex — but they are exactly what we handle. Contact Nwahiri Law for a free consultation today." />
    </>
  );
}
