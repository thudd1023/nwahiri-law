import type { Metadata } from 'next';
import HeroCTA from '@/components/HeroCTA';
import PracticeAreaHero from '@/components/PracticeAreaHero';

export const metadata: Metadata = {
  title: 'About Attorney Tobechuku Nwahiri | Personal Injury Lawyer GA & FL',
  description:
    'Meet Attorney Tobechuku Nwahiri — licensed in Georgia and Florida, fighting for injury victims in truck accidents, TBI cases, rideshare accidents, and civil rights cases.',
  keywords: [
    'Tobechuku Nwahiri attorney',
    'personal injury lawyer Georgia Florida',
    'Nwahiri Law attorney biography',
    'civil rights attorney Georgia Florida',
  ],
};

const credentials = [
  { label: 'Bar Admissions', items: ['State Bar of Georgia', 'Florida Bar'] },
  { label: 'Practice Focus', items: ['Personal Injury', 'Civil Rights Litigation', 'Criminal Defense'] },
  { label: 'Recognition', items: ['National Trial Lawyers — Top 40 Under 40 (2024, 2025, 2026)', 'Best Lawyers — Ones to Watch, Personal Injury (2024, 2025, 2026)'] },
];

export default function AboutPage() {
  return (
    <>
      <PracticeAreaHero
        title="Attorney Tobechuku Nwahiri"
        subtitle="Personal Injury &amp; Civil Rights Attorney | Licensed in Georgia &amp; Florida"
      />

      {/* Credential bar */}
      <div style={{ backgroundColor: '#1A3566' }} className="py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#F8F4EE' }}>
          {['State Bar of Georgia', 'Florida Bar', 'Personal Injury', 'Civil Rights'].map((c) => (
            <span key={c} className="flex items-center gap-2">
              <span style={{ color: '#B8973B' }}>·</span> {c}
            </span>
          ))}
        </div>
      </div>

      {/* Biography */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className="w-full aspect-[3/4] rounded bg-gray-100 flex items-center justify-center border border-gray-200 max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {/* Replace with: <Image src="/images/attorney/attorney-nwahiri.jpg" alt="Attorney Tobechuku Nwahiri" fill className="object-cover rounded" /> */}
              <span className="text-gray-400 text-sm text-center px-4">Attorney Photo<br /><span className="text-xs">/images/attorney/attorney-nwahiri.jpg</span></span>
            </div>

            {/* Credentials card */}
            <div className="mt-8 p-6 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-xl font-bold mb-5">
                Credentials &amp; Admissions
              </h3>
              {credentials.map((group) => (
                <div key={group.label} className="mb-4">
                  <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-2">
                    {group.label}
                  </p>
                  {group.items.map((item) => (
                    <p key={item} style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-4">
              Biography
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-4xl font-bold mb-8 leading-tight">
              Dedicated Counsel. Real Results.
            </h2>
            {[
              'Attorney Tobechuku Nwahiri is the founder of Nwahiri Law, a practice dedicated to representing individuals who have been seriously injured or whose civil rights have been violated. Licensed in both Georgia and Florida, he brings focused legal skill and genuine personal commitment to every client he represents.',
              'Attorney Nwahiri understands that behind every case is a person whose life has been upended — by a reckless truck driver, a negligent property owner, an insurance company acting in bad faith, or law enforcement that overstepped its authority. His role is to even the playing field.',
              'From the first consultation through every stage of litigation, Attorney Nwahiri provides direct, personal representation. Clients speak with him — not a rotating cast of assistants. He reviews the evidence, builds the strategy, and makes the arguments that get results.',
              'His practice is concentrated on the cases where the stakes are highest: catastrophic personal injuries including truck accidents, traumatic brain injuries, Uber and Lyft accidents, slip and fall incidents, and wrongful death claims. He also handles criminal defense matters and civil rights litigation, including excessive use of force by law enforcement and civil asset forfeiture challenges.',
              'Attorney Nwahiri believes in fighting hard, preparing thoroughly, and never settling for less than what his clients deserve.',
            ].map((para, i) => (
              <p key={i} style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-5">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Philosophy
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-4xl md:text-5xl font-bold mb-10 text-center leading-tight">
            How Attorney Nwahiri Approaches Every Case
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded border border-gray-100">
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-4">
                Insurance companies employ teams of adjusters, lawyers, and investigators whose single goal is to minimize what they pay you. From the moment an accident happens, they are building their case.
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-2xl font-bold italic">
                Attorney Nwahiri builds yours.
              </p>
            </div>
            <div className="bg-white p-8 rounded border border-gray-100">
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed">
                That means starting immediately — securing evidence before it disappears, identifying every liable party, consulting the right experts, and constructing a legal argument built for trial, not just for settlement negotiations. When insurers know you are prepared to go to trial, the math changes in your favor.
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="text-sm font-semibold mt-4">
                This is how Nwahiri Law operates on every case it takes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HeroCTA heading="Let&rsquo;s Talk About Your Case" body="Schedule a free, confidential consultation with Attorney Nwahiri. There&apos;s no obligation, and you&apos;ll walk away with a clear understanding of your options." />
    </>
  );
}
