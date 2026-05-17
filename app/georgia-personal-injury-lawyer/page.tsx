import type { Metadata } from 'next';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Georgia Personal Injury Lawyer | Truck Accidents, TBI, Rideshare | Nwahiri Law',
  description: 'Injured in Georgia? Nwahiri Law handles serious personal injury cases statewide — truck accidents, TBI, Uber/Lyft, slip and fall. No fee unless we win.',
  keywords: ['Georgia personal injury lawyer', 'Georgia truck accident attorney', 'personal injury attorney Georgia statewide', 'Georgia TBI lawyer'],
};

const georgiaAreas = ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon', 'Athens', 'Albany', 'Warner Robins', 'Roswell', 'Johns Creek', 'Valdosta', 'Gainesville', 'Peachtree City', 'Smyrna', 'Rome'];

export default function GeorgiaPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Georgia</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Georgia Personal Injury Lawyer
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl">
            Attorney Tobechuku Nwahiri is admitted to the State Bar of Georgia and handles serious personal injury cases throughout the state.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            Georgia sees tens of thousands of serious traffic accidents every year. The state&apos;s combination of major interstate highways, heavy commercial truck traffic, rapidly growing urban areas, and the surge in rideshare services creates significant risks for drivers, passengers, cyclists, and pedestrians alike.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            If you were seriously injured anywhere in Georgia, Nwahiri Law is prepared to represent you. Attorney Tobechuku Nwahiri is admitted to the State Bar of Georgia and handles personal injury cases throughout the state.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-8">Key Facts About Georgia Personal Injury Law</h2>
          <div className="space-y-6">
            {[
              { title: 'Statute of Limitations', desc: 'Georgia generally allows two years from the date of injury to file a personal injury lawsuit. Missing this deadline bars your claim entirely — do not wait.' },
              { title: 'Comparative Fault (O.C.G.A. § 51-11-7)', desc: 'Georgia follows a modified comparative fault rule. You can recover compensation as long as you were less than 50% at fault, but your recovery is reduced by your percentage of responsibility.' },
              { title: 'At-Fault State', desc: "Georgia is an at-fault (tort) state. You pursue the at-fault driver's insurance directly — there is no mandatory PIP no-fault threshold." },
              { title: 'Available Damages', desc: 'Economic damages (medical bills, lost wages, property damage) and non-economic damages (pain and suffering, emotional distress, loss of consortium). Punitive damages may be available in cases of egregious misconduct.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded border border-gray-100">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-xl font-bold mb-2">{item.title}</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">We Represent Clients Across Georgia</h2>
          <div className="flex flex-wrap gap-2">
            {georgiaAreas.map((area) => (
              <span key={area} style={{ backgroundColor: '#0F2044', color: 'white', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-medium px-4 py-2 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in Georgia? Let&rsquo;s Talk." body="Georgia law has strict deadlines. Don&apos;t wait — contact Nwahiri Law today for a free, confidential consultation." />
    </>
  );
}
