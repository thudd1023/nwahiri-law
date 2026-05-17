import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'DUI Defense Attorney Georgia & Florida | Nwahiri Law',
  description: 'Charged with DUI in Georgia or Florida? Attorney Nwahiri provides aggressive DUI defense to protect your license, record, and future. Free confidential consultation.',
  keywords: ['DUI attorney Georgia', 'DUI lawyer Florida', 'drunk driving defense attorney', 'DUI defense Georgia Florida'],
};

export default function DUIPage() {
  return (
    <>
      <PracticeAreaHero
        title="DUI Defense Attorney | Georgia &amp; Florida"
        subtitle="A DUI arrest does not have to become a conviction. We challenge the stop, the testing, and the government's case — to protect your license, record, and future."
        breadcrumb="DUI Defense"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            A DUI arrest does not have to become a conviction. The state must prove its case beyond a reasonable doubt, and there are often legal challenges available — to the traffic stop itself, the field sobriety tests, the breathalyzer equipment, and the chain of custody for blood samples.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Attorney Nwahiri provides focused DUI defense in Georgia and Florida, moving quickly to protect your license, your record, and your future.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">What a DUI Conviction Can Cost You</h2>
            <ul className="space-y-2">
              {["Driver's license suspension or revocation", 'Mandatory DUI school and community service', 'Fines and court fees', 'Probation', 'Ignition interlock device requirement', 'Increased auto insurance rates', 'Employment consequences (especially for CDL holders)', 'Immigration consequences for non-citizens', 'Jail time (for repeat offenses or aggravated circumstances)'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">DUI Defenses We Investigate</h2>
            <ul className="space-y-2">
              {['Was the traffic stop lawful? (Lack of reasonable suspicion)', 'Were field sobriety tests properly administered and evaluated?', 'Was the breathalyzer properly calibrated and maintained?', 'Were blood draw procedures followed correctly?', 'Were your Miranda rights honored?', 'Were there medical or physical conditions that affected test results?', 'Is the eyewitness or officer testimony consistent and credible?'].map((item) => (
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
          <div className="border-l-4 pl-6" style={{ borderColor: '#BE1823' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-2xl font-bold mb-4">Act Immediately After a DUI Arrest</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
              In Georgia and Florida, you have a very limited window to request a hearing to challenge the suspension of your driver&apos;s license. Missing this deadline — which can be as short as 10–30 days — means your license is automatically suspended. Contact Nwahiri Law immediately after a DUI arrest to preserve your right to fight the suspension.
            </p>
          </div>
        </div>
      </section>

      <HeroCTA heading="Charged With DUI?" body="Time is critical after a DUI arrest. Contact Nwahiri Law today for a free, confidential consultation — before the license suspension deadline passes." />
    </>
  );
}
