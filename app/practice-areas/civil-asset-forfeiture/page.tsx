import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Civil Asset Forfeiture Attorney Georgia & Florida | Nwahiri Law',
  description: 'Government seized your property or cash in Georgia or Florida? Attorney Nwahiri challenges unlawful civil forfeiture and fights to recover what\'s yours.',
  keywords: ['civil asset forfeiture attorney Georgia', 'asset forfeiture lawyer Florida', 'property seizure attorney', 'fight asset forfeiture Georgia Florida'],
};

export default function CivilAssetForfeiturePage() {
  return (
    <>
      <PracticeAreaHero
        title="Civil Asset Forfeiture Attorney | Georgia &amp; Florida"
        subtitle="The government seized your property — possibly without charging you with a crime. You have rights and a limited window to assert them. Act now."
        breadcrumb="Civil Asset Forfeiture"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Civil asset forfeiture allows law enforcement to seize property — cash, vehicles, real estate, and other assets — that they suspect is connected to criminal activity. The disturbing reality: in many cases, no criminal charges are required. Your property can be taken and kept even if you are never charged with a crime.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law fights back against unlawful and unjust civil asset forfeiture in Georgia and Florida. If your property has been seized, you have rights — and a limited window to assert them.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">
            How Civil Forfeiture Works — and Why It&rsquo;s Contested
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
            Under civil forfeiture, it is the property itself that is &ldquo;charged&rdquo; with a crime — not the owner. This means the government must prove, typically by a preponderance of the evidence, that the property is connected to illegal activity.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base font-medium mb-4">What makes this difficult for property owners:</p>
          <ul className="space-y-3">
            {['The burden is often reversed — you may have to prove your property is "innocent"', 'The cost of fighting a forfeiture can exceed the value of what was seized', 'Deadlines to challenge a seizure are short — often 30 days or less'].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white p-4 rounded border border-gray-100">
                <span style={{ color: '#BE1823' }} className="mt-1 font-bold">!</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
            How Nwahiri Law Challenges Civil Asset Forfeiture
          </h2>
          <ul className="space-y-2">
            {['File timely challenges to preserve your right to contest the seizure', 'Demand proof that the property is connected to criminal activity', 'Challenge the legality of the underlying search and seizure', 'Challenge the proportionality of the forfeiture', 'Represent you in forfeiture hearings and any related criminal proceedings'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#B8973B' }} className="mt-1 text-lg">·</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HeroCTA heading="Don&rsquo;t Let the Government Keep What&rsquo;s Yours Without a Fight." body="Deadlines to challenge forfeiture are short. Contact Nwahiri Law today for a free, confidential consultation — before your window closes." />
    </>
  );
}
