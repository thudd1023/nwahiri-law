import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Civil Rights Attorney Georgia & Florida | Nwahiri Law',
  description: 'Civil rights violated in Georgia or Florida? Nwahiri Law fights police misconduct, excessive force, and unlawful seizure cases. Free consultation.',
  keywords: ['civil rights attorney Georgia', 'civil rights lawyer Florida', 'police misconduct attorney', 'Section 1983 attorney Georgia Florida'],
};

export default function CivilRightsPage() {
  return (
    <>
      <PracticeAreaHero
        title="Civil Rights Attorney | Georgia &amp; Florida"
        subtitle="When law enforcement or government officials violate your constitutional rights, there must be accountability. Nwahiri Law takes on the institutions others won't."
        breadcrumb="Civil Rights Violations"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            The Constitution guarantees fundamental rights — to be free from unreasonable search and seizure, from excessive force, from unlawful discrimination by government actors. When law enforcement or other government officials violate those rights, those responsible must be held accountable.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Tobechuku Nwahiri represents individuals whose constitutional rights have been violated in Georgia and Florida. These cases require a lawyer willing to take on government institutions. That is exactly what Nwahiri Law does.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-8">Civil Rights Cases We Handle</h2>
          <div className="space-y-6">
            {[
              { title: 'Excessive Use of Force by Law Enforcement', desc: 'When police officers use more force than is legally justified — during an arrest, a traffic stop, or any law enforcement encounter — they may be liable under 42 U.S.C. § 1983 and state law.' },
              { title: 'Wrongful Death at the Hands of Law Enforcement', desc: 'When excessive force results in death, surviving family members have the right to pursue both civil rights and wrongful death claims.' },
              { title: 'Civil Asset Forfeiture (Unlawful Seizure of Property)', desc: 'Government agencies sometimes seize money, vehicles, and property under civil forfeiture laws — often with minimal due process. We challenge unlawful seizures and fight for the return of what belongs to our clients.' },
              { title: 'Appeals', desc: 'We handle appeals of civil rights cases in both state and federal courts.' },
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
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">The Legal Basis for Civil Rights Claims</h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Civil rights claims against law enforcement are typically brought under 42 U.S.C. § 1983, which allows individuals to sue government officials who violate their constitutional rights under color of law.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            These cases are challenging — government entities and their attorneys have significant resources to defend them. Attorney Nwahiri has the experience and the commitment to see civil rights cases through. His record includes a $300,000 civil rights settlement against a Florida government entity.
          </p>
        </div>
      </section>

      <HeroCTA heading="Were Your Civil Rights Violated?" body="Government entities and law enforcement agencies fight hard to avoid accountability. We fight harder. Contact Nwahiri Law for a free, confidential consultation." />
    </>
  );
}
