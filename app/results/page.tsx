'use client';

import { useState } from 'react';
import HeroCTA from '@/components/HeroCTA';

const allResults = [
  { amount: '$340,000', type: 'Auto Accident / Traumatic Brain Injury', state: 'Georgia', category: 'TBI', desc: 'Client was involved in a serious auto collision that resulted in a traumatic brain injury. Nwahiri Law secured a $340,000 settlement covering medical expenses, lost wages, and ongoing rehabilitation needs.' },
  { amount: '$300,000', type: 'Civil Rights Violation', state: 'Florida', category: 'Civil Rights', desc: "Client's civil rights were violated by a Florida government entity. Nwahiri Law pursued the matter through litigation and secured $300,000 in compensation for the harm caused." },
  { amount: '$225,000+', type: 'Personal Injury — Major Airline', state: 'Florida', category: 'Personal Injury', desc: 'Client sustained serious injuries while traveling aboard a major commercial airline. Nwahiri Law recovered over $225,000 against the carrier on behalf of the injured passenger.' },
  { amount: '$200,000', type: 'Civil Rights / Police Dog Bite', state: 'Florida', category: 'Civil Rights', desc: 'Client suffered significant injuries from a police canine deployment. Nwahiri Law secured $200,000 in this civil rights and excessive force matter.' },
  { amount: '$150,000', type: 'Employment Discrimination & Retaliation', state: 'Georgia / Florida', category: 'Employment', desc: 'Client was subjected to workplace discrimination and retaliation. Nwahiri Law secured $150,000 in compensation for lost wages, emotional distress, and related damages.' },
  { amount: '$150,000', type: 'Auto Accident — Policy Limits', state: 'Georgia', category: 'Car Accidents', desc: 'Client was injured in an auto accident in Georgia. Nwahiri Law secured the full policy limits of $150,000 on behalf of the client.' },
  { amount: '$125,000', type: 'Slip & Fall', state: 'Georgia / Florida', category: 'Slip & Fall', desc: 'Client was injured in a slip and fall accident on a negligently maintained property. Nwahiri Law obtained a $125,000 settlement holding the property owner accountable.' },
  { amount: '$80,000', type: 'Employment Discrimination', state: 'Georgia / Florida', category: 'Employment', desc: 'Client faced unlawful employment discrimination and sought legal recourse. Nwahiri Law secured $80,000 in a negotiated resolution.' },
];

const filters = ['All Cases', 'TBI', 'Civil Rights', 'Car Accidents', 'Slip & Fall', 'Employment', 'Personal Injury'];

export default function ResultsPage() {
  const [active, setActive] = useState('All Cases');
  const filtered = active === 'All Cases' ? allResults : allResults.filter((r) => r.category === active);

  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Case Results</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Results That Reflect What We Fight For
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl">
            We do not measure success by the number of cases we close. We measure it by the outcomes we deliver for our clients.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-xs text-center mb-8">
            *Results may vary. Prior outcomes are not a guarantee of future results. Case descriptions do not include identifying client information.
          </p>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: active === f ? '#0F2044' : 'white',
                  color: active === f ? 'white' : '#0F2044',
                  borderColor: '#0F2044',
                }}
                className="text-sm font-medium px-4 py-2 rounded border hover:opacity-80 transition-all"
              >
                {f}
              </button>
            ))}
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((result, i) => (
              <div key={i} className="bg-white rounded p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-4xl font-bold mb-2">
                  {result.amount}
                </p>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-wider mb-1">
                  {result.state}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="text-sm font-semibold mb-3">
                  {result.type}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-sm leading-relaxed">
                  {result.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeroCTA heading="Let&rsquo;s Talk About Your Case" body="Every case is different. The only way to know what your case may be worth is to speak with an attorney. Schedule your free consultation today." />
    </>
  );
}
