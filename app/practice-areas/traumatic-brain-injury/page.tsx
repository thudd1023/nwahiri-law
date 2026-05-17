import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Traumatic Brain Injury Attorney Georgia & Florida | Nwahiri Law',
  description: 'Suffered a traumatic brain injury in an accident in Georgia or Florida? Nwahiri Law fights for the full lifetime compensation TBI victims deserve. Free consultation.',
  keywords: ['TBI attorney Georgia', 'traumatic brain injury lawyer Florida', 'brain injury attorney', 'TBI compensation Georgia Florida'],
};

export default function TBIPage() {
  return (
    <>
      <PracticeAreaHero
        title="Traumatic Brain Injury (TBI) Attorney | Georgia &amp; Florida"
        subtitle="TBI cases require medical expertise and legal precision. We build the evidence to secure the lifetime compensation you may need."
        breadcrumb="Traumatic Brain Injury"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            A traumatic brain injury can change everything in an instant. What follows can be even harder: cognitive difficulties, memory loss, personality changes, inability to work, and a lifetime of medical care. The insurance company on the other side is already looking for ways to minimize what they pay. You need an attorney prepared to fight for what your injury actually costs.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Tobechuku Nwahiri represents TBI victims and their families in Georgia and Florida. We understand the full medical and financial scope of these injuries — and we build cases that reflect that reality.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">
            Understanding Traumatic Brain Injury
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
            A traumatic brain injury occurs when a sudden trauma — a blow, jolt, or penetrating injury — disrupts the normal function of the brain. TBI ranges in severity from mild concussions to severe, life-altering damage. Even injuries classified as "mild" can have significant, lasting consequences.
          </p>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-2xl font-bold mb-4">
            Types of TBI Recognized in Personal Injury Claims
          </h3>
          <ul className="space-y-2">
            {[
              'Concussions (including repeated concussions and post-concussion syndrome)',
              'Contusions (brain bruising)',
              'Diffuse axonal injury',
              'Coup-contrecoup injuries',
              'Penetrating brain injuries',
              'Anoxic and hypoxic brain injuries (oxygen deprivation)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
              Long-Term Consequences of TBI
            </h2>
            <ul className="space-y-2">
              {[
                'Cognitive impairment and memory loss',
                'Personality and behavioral changes',
                'Depression, anxiety, and PTSD',
                'Chronic headaches and migraines',
                'Seizures and epilepsy',
                'Sensory and vision problems',
                'Inability to return to work',
                'Need for long-term care and support',
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
              Compensation in TBI Cases
            </h2>
            <ul className="space-y-2">
              {[
                'Emergency and acute medical care',
                'Neurological and specialist treatment',
                'Ongoing rehabilitation and therapy',
                'In-home care and assistance',
                'Future medical expenses (lifetime needs analysis)',
                'Lost past and future wages',
                'Pain, suffering, and loss of enjoyment of life',
                'Family member loss of consortium',
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
            Why TBI Cases Require a Specialized Approach
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Insurance companies routinely undervalue TBI claims — especially when injuries are not immediately visible on imaging. We work with neurologists, neuropsychologists, and life care planners to document the full scope of your injury and calculate a damages figure that accounts for your lifetime needs.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            A quick settlement that doesn&apos;t account for long-term care costs can leave you financially devastated years down the road. We do not accept settlements that fail to reflect the true value of your case.
          </p>
        </div>
      </section>

      <HeroCTA heading="Suffered a TBI? We Can Help." body="Contact Nwahiri Law for a free, confidential consultation. We fight for the full compensation TBI victims deserve — including long-term care costs." />
    </>
  );
}
