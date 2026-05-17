import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Excessive Force Attorney Georgia & Florida | Police Misconduct | Nwahiri Law',
  description: 'Victim of police excessive force in Georgia or Florida? Attorney Nwahiri fights for civil rights victims and their families. Free consultation.',
  keywords: ['excessive force attorney Georgia', 'police misconduct lawyer Florida', 'police brutality attorney', 'civil rights excessive force Georgia Florida'],
};

export default function ExcessiveForcePage() {
  return (
    <>
      <PracticeAreaHero
        title="Excessive Force &amp; Police Misconduct Attorney | Georgia &amp; Florida"
        subtitle="Law enforcement has strict legal limits on the force they may use. When officers cross the line, Nwahiri Law pursues justice — without intimidation."
        breadcrumb="Excessive Force"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Law enforcement officers are granted significant authority — and with that authority comes a strict legal limit on the force they may use. When officers cross that line, whether during a traffic stop, an arrest, a search, or any encounter with the public, they violate the constitutional rights of the people they are supposed to protect.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law represents victims of excessive force and police misconduct in Georgia and Florida. We are not intimidated by the badge. We pursue justice with the same aggression and preparation we bring to every case.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">What Constitutes Excessive Force</h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
            Courts evaluate excessive force claims using an &ldquo;objective reasonableness&rdquo; standard — whether the force used was objectively reasonable given the circumstances as a reasonable officer would have perceived them. <em>(Graham v. Connor, 490 U.S. 386)</em>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Factors Considered</p>
              <ul className="space-y-2">
                {['The severity of the alleged crime', 'Whether the person posed an immediate threat to officers or others', 'Whether the person was resisting or attempting to flee'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Examples of Excessive Force</p>
              <ul className="space-y-2">
                {['Unnecessary or prolonged use of a chokehold or restraint', 'Use of lethal force when threat was not imminent', 'Tasering or pepper spray without justification', 'Beating during or after a lawful arrest', 'Excessive force during a no-knock raid'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">We Represent:</h2>
          <ul className="space-y-2">
            {['Individuals injured by police officers during encounters, arrests, or detentions', 'Families of individuals killed by law enforcement', 'Individuals who were subjected to unjustified use of force even while being arrested for an underlying offense', 'Victims of unlawful police canine deployments'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#B8973B' }} className="mt-1 text-lg">·</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HeroCTA heading="Were You the Victim of Police Excessive Force?" body="Civil rights cases against law enforcement require an attorney with experience and the commitment to see them through. Contact Nwahiri Law for a free, confidential consultation." />
    </>
  );
}
