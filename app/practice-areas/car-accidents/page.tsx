import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Car Accident Attorney Georgia & Florida | Nwahiri Law',
  description: 'Injured in a car accident in Georgia or Florida? Nwahiri Law fights insurance companies for the full compensation you deserve. No fee unless we win.',
  keywords: ['car accident attorney Georgia', 'car accident lawyer Florida', 'auto accident attorney', 'car crash injury lawyer Georgia Florida'],
};

export default function CarAccidentsPage() {
  return (
    <>
      <PracticeAreaHero
        title="Car Accident Attorney | Georgia &amp; Florida"
        subtitle="After a car accident, insurers move fast to minimize your claim. We move faster — to protect your rights and fight for everything you are owed."
        breadcrumb="Car Accidents"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            After a car accident, the insurance company&apos;s goal is not to make you whole — it is to settle your claim for as little as possible, as quickly as possible. Adjusters are trained negotiators. If you are unrepresented, you are at a significant disadvantage.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law handles car accident claims in Georgia and Florida with the seriousness they deserve. Whether your accident involved a distracted driver, a drunk driver, or a hit-and-run, we are prepared to fight for everything you are owed.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Common Causes We Handle</h2>
            <ul className="space-y-2">
              {['Distracted driving (texting, phone use, inattention)', 'Speeding and reckless driving', 'Drunk or impaired driving (DUI/DWI)', 'Running red lights and stop signs', 'Improper lane changes and merging', 'Rear-end collisions', 'Head-on collisions', 'Hit-and-run accidents', 'Drowsy or fatigued driving', 'Defective vehicle parts'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Compensation Available</h2>
            <ul className="space-y-2">
              {['Medical expenses (emergency care, surgery, therapy, ongoing treatment)', 'Lost wages during recovery', 'Loss of future earning capacity', 'Property damage', 'Pain and suffering', 'Emotional distress', 'Permanent disability or disfigurement', 'Wrongful death damages for surviving families'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">What to Do After a Car Accident</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { step: '01', action: 'Seek medical attention immediately — even if you feel fine' },
              { step: '02', action: 'Document the scene: photos, driver info, witness contact info' },
              { step: '03', action: 'Report the accident to police and get the report number' },
              { step: '04', action: 'Do not give a recorded statement to the other driver\'s insurer' },
              { step: '05', action: 'Do not accept any settlement offer before speaking with an attorney' },
              { step: '06', action: 'Contact Nwahiri Law — the consultation is free' },
            ].map(({ step, action }) => (
              <div key={step} className="flex items-start gap-4 p-4 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
                <span style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif' }} className="text-2xl font-bold flex-shrink-0">{step}</span>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm leading-relaxed">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeroCTA heading="Injured in a Car Accident?" body="Don&apos;t negotiate with insurance companies alone. Contact Nwahiri Law today for a free, confidential consultation." />
    </>
  );
}
