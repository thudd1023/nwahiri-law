import type { Metadata } from 'next';
import PracticeAreaHero from '@/components/PracticeAreaHero';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Wrongful Death Attorney Georgia & Florida | Nwahiri Law',
  description: 'Lost a loved one due to negligence in Georgia or Florida? Nwahiri Law pursues justice and full financial accountability for surviving families. Free consultation.',
  keywords: ['wrongful death attorney Georgia', 'wrongful death lawyer Florida', 'fatal accident attorney', 'wrongful death claim Georgia Florida'],
};

export default function WrongfulDeathPage() {
  return (
    <>
      <PracticeAreaHero
        title="Wrongful Death Attorney | Georgia &amp; Florida"
        subtitle="No settlement can replace a loved one. But justice — and financial security for your family — can make a profound difference."
        breadcrumb="Wrongful Death"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
            The loss of a family member is an immeasurable tragedy. When that loss was caused by another person&apos;s negligence, recklessness, or intentional misconduct, surviving family members have the right to pursue a wrongful death claim — and to demand accountability from those responsible.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
            Nwahiri Law handles wrongful death cases in Georgia and Florida with the depth of legal preparation they require and the compassion the circumstances demand.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl md:text-4xl font-bold mb-6">What Constitutes a Wrongful Death Claim</h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
            A wrongful death claim arises when a person&apos;s death is caused by the negligent, reckless, or intentional actions of another party. Common circumstances include:
          </p>
          <ul className="space-y-2">
            {['Fatal car, truck, or motorcycle accidents', 'Fatal Uber or Lyft accidents', 'Slip and fall fatalities', 'Medical malpractice resulting in death', 'Workplace accidents', 'Defective products', 'Excessive force by law enforcement', 'Criminal acts'].map((item) => (
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
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Who Can Bring a Wrongful Death Claim</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed mb-4">
              In Georgia, the surviving spouse has the primary right to bring the claim. If there is no surviving spouse, children of the deceased may bring the claim. If there are no children, the parents may bring it. The estate may also bring a survival action for certain categories of damages.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm leading-relaxed">
              In Florida, the personal representative of the estate brings the wrongful death claim on behalf of survivors — typically the spouse, children, and parents of the deceased.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Compensation in Wrongful Death Cases</h2>
            <ul className="space-y-2">
              {['Medical and funeral expenses', 'Loss of the deceased\'s future earnings', 'Loss of companionship, guidance, and care', 'Pain and suffering of survivors', 'Mental anguish of surviving family members', 'Loss of consortium for the surviving spouse', 'Value of household services the deceased provided'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1">·</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HeroCTA heading="We&rsquo;re Here for Your Family." body="If you lost a loved one due to someone else&apos;s negligence, Nwahiri Law will handle every aspect of your case with the care and intensity it demands. Your consultation is free and confidential." />
    </>
  );
}
