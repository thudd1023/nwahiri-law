import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Dog Bite Attorney Georgia & Florida | Nwahiri Law',
  description: 'Bitten or attacked by a dog in Georgia or Florida? Nwahiri Law holds dog owners accountable for your medical bills, pain, and suffering. Free consultation.',
  keywords: ['dog bite attorney Georgia', 'dog bite lawyer Florida', 'dog attack injury attorney', 'canine bite claim Georgia Florida'],
};

export default function DogBitesPage() {
  return (
    <>
      <PracticeAreaHero
        title="Dog Bite Attorney | Georgia &amp; Florida"
        subtitle="Dog bite injuries can be severe and traumatic. Dog owners can be held legally responsible for the harm their animals cause."
        breadcrumb="Dog Bites"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            A dog bite or attack can cause serious physical injury and lasting psychological trauma — especially for children. If you were bitten or attacked by someone else&apos;s dog, the dog&apos;s owner may be legally responsible for your medical bills, lost wages, and other damages.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law represents dog bite victims in Georgia and Florida.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-8">
            Dog Bite Law in Georgia and Florida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded border border-gray-100">
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Georgia</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">
                Under Georgia law, a dog owner may be liable for injuries if the owner knew the dog was dangerous or vicious and the victim was not provoking the animal. Georgia also has leash law provisions that can affect liability when a dog runs at large.
              </p>
            </div>
            <div className="bg-white p-8 rounded border border-gray-100">
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Florida</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">
                Florida operates under a strict liability standard for dog bites. Dog owners are generally liable for bites that occur in public places or on private property where the victim was lawfully present — regardless of whether the owner knew the dog was dangerous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
            What Dog Bite Victims May Recover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Emergency medical treatment and surgery', 'Reconstructive or cosmetic surgery for scarring', 'Physical therapy', 'Psychological counseling for trauma', 'Lost wages', 'Pain and suffering', 'Permanent scarring and disfigurement damages'].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
                <span style={{ color: '#B8973B' }} className="mt-0.5">·</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in a Dog Attack? We&rsquo;re Here to Help." body="Contact Nwahiri Law today for a free, confidential consultation about your dog bite claim." />
    </>
  );
}
