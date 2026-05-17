import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Consultation | Personal Injury Attorney Georgia & Florida | Nwahiri Law',
  description: 'Schedule a free, confidential consultation with Attorney Tobechuku Nwahiri. No obligation. No fee unless we win. Serving Georgia and Florida.',
  keywords: ['free consultation personal injury attorney Georgia', 'free legal consultation Florida', 'Nwahiri Law free consultation'],
};

const trustItems = [
  'Free & Confidential',
  'No Obligation',
  'No Fee Unless We Win',
  'Direct Access to Attorney Nwahiri',
  'Licensed in GA & FL',
];

const whatToExpect = [
  'A review of the facts of your case',
  'An explanation of your legal rights and potential claims',
  'An honest assessment of the strength of your case',
  'Clear answers to your questions — no legal jargon',
  'Information about the next steps if you decide to move forward',
];

export default function FreeConsultationPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Free Consultation</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Free Consultation With Attorney Nwahiri
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-xl leading-relaxed max-w-2xl mx-auto">
            No fees. No obligation. Just an honest conversation about your case.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ backgroundColor: '#1A3566' }} className="py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#F8F4EE' }}>
              <span style={{ color: '#B8973B' }}>✓</span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">What to Expect</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mb-6">
              When you contact Nwahiri Law for a consultation, you will speak directly with Attorney Tobechuku Nwahiri — not a call center, not a case screener. He will listen to what happened, ask the right questions, and give you an honest assessment of your options.
            </p>
            <ul className="space-y-3">
              {whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#B8973B' }} className="mt-1 font-bold">✓</span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base leading-relaxed mt-6">
              There is no charge for this conversation. If we take your case, we work on contingency — you pay nothing unless we win.
            </p>
          </div>

          <div className="space-y-6">
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-6">Schedule Your Consultation</h2>

            <div className="p-6 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Option 1 — Schedule Online</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-sm mb-4">Book a free 15-minute consultation directly on Attorney Nwahiri&apos;s calendar.</p>
              <a
                href="https://calendly.com/nwahirilaw/15min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
                className="inline-block text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity text-sm"
              >
                Book Online Now →
              </a>
            </div>

            <div className="p-6 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Option 2 — Call Us</p>
              <a href="tel:3053454117" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold block mb-1 hover:opacity-70 transition-opacity">
                (305) 345-4117
              </a>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-sm">Available 24/7 for urgent matters.</p>
            </div>

            <div className="p-6 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-3">Option 3 — Contact Form</p>
              <Link href="/contact" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="text-sm font-semibold hover:opacity-70 transition-opacity underline underline-offset-4">
                Use Our Contact Form →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
