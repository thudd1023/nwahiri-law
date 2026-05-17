import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Criminal Defense Attorney Georgia & Florida | Nwahiri Law',
  description: 'Facing criminal charges in Georgia or Florida? Attorney Tobechuku Nwahiri provides skilled criminal defense for DUI, felonies, and misdemeanors. Call today.',
  keywords: ['criminal defense attorney Georgia', 'criminal defense lawyer Florida', 'felony defense attorney', 'misdemeanor lawyer Georgia Florida'],
};

export default function CriminalDefensePage() {
  return (
    <>
      <PracticeAreaHero
        title="Criminal Defense Attorney | Georgia &amp; Florida"
        subtitle="A criminal charge can affect every area of your life. Attorney Nwahiri provides experienced, aggressive defense — from investigation through trial."
        breadcrumb="Criminal Defense"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            A criminal charge — whether a misdemeanor or a felony — can affect every area of your life: your employment, your professional licenses, your housing, your immigration status, and your freedom. The criminal justice system is not designed to be navigated alone.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Tobechuku Nwahiri provides experienced criminal defense representation in Georgia and Florida, protecting the rights and futures of people facing serious charges.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-8">Criminal Defense Cases We Take</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'DUI (Driving Under the Influence)', desc: 'A DUI conviction carries serious consequences — license suspension, fines, mandatory programs, and potential incarceration. Early intervention gives you the best chance at protecting your record.' },
              { title: 'Felony Charges', desc: 'Felony convictions carry mandatory minimum sentences in many cases and lasting collateral consequences. We provide aggressive defense at every stage from investigation through trial.' },
              { title: 'Misdemeanor Charges', desc: 'Even "minor" charges can have real consequences. We take misdemeanor defense seriously because the impact on your life can be significant.' },
              { title: 'Traffic Criminal Offenses', desc: 'Certain traffic violations carry criminal — not just civil — penalties. We represent clients facing criminal traffic charges in both states.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded border border-gray-100">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-xl font-bold mb-3">{item.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">
            How Attorney Nwahiri Approaches Criminal Defense
          </h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Criminal defense requires early, thorough investigation. We review the government&apos;s evidence critically, challenge illegal searches and seizures, cross-examine the prosecution&apos;s witnesses, and explore every available defense.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            If a plea agreement is in your best interest, we negotiate the strongest possible terms. If the case should go to trial, we are prepared to go to trial. Attorney Nwahiri has extensive trial experience in both civil and criminal courts — a rare differentiator that makes a real difference in how prosecutors and courts approach your case.
          </p>
        </div>
      </section>

      <HeroCTA heading="Facing Criminal Charges?" body="Don&apos;t wait — early legal intervention makes a real difference. Contact Nwahiri Law today for a free, confidential consultation." />
    </>
  );
}
