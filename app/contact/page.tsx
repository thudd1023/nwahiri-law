'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

// Note: metadata must be in a separate layout.tsx for client components
const caseTypes = ['Truck Accident', 'Traumatic Brain Injury (TBI)', 'Uber & Lyft Accident', 'Slip & Fall', 'Car Accident', 'Wrongful Death', 'Premises Liability', 'Negligent Security', 'Dog Bite', 'Criminal Defense', 'DUI', 'Civil Rights / Excessive Force', 'Civil Asset Forfeiture', 'Other'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Contact Nwahiri Law
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl">
            We are here to listen. Your consultation is free, confidential, and carries no obligation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {[
                { label: 'Phone', value: '(305) 345-4117', href: 'tel:3053454117' },
                { label: 'Email', value: 'info@nwahirilaw.com', href: 'mailto:info@nwahirilaw.com' },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-1">{label}</p>
                  <a href={href} style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="text-base font-medium hover:opacity-70 transition-opacity">{value}</a>
                </div>
              ))}
              <div>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Office Address</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">
                  13499 Biscayne Blvd, Suite 107<br />North Miami, FL 33181
                </p>
              </div>
              <div>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Hours</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-base">Available 24/7 for urgent matters</p>
              </div>
              <div>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-2">Schedule Online</p>
                <a
                  href="https://calendly.com/nwahirilaw/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#0F2044', fontFamily: 'Montserrat, sans-serif' }}
                  className="inline-block text-white font-semibold px-6 py-3 rounded hover:opacity-80 transition-opacity text-sm"
                >
                  Book a Free Consultation →
                </a>
              </div>
            </div>

            <div className="mt-10 p-5 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-xs leading-relaxed">
                <strong style={{ color: '#0F2044' }}>Disclaimer:</strong> The information you submit through this form is confidential and will only be used to evaluate your potential claim. Submitting this form does not create an attorney-client relationship. Do not include highly sensitive information in the initial submission.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="text-center py-16">
                <div style={{ color: '#B8973B' }} className="text-5xl mb-4">✓</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }} className="text-3xl font-bold mb-4">Message Received</h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="text-base">Attorney Nwahiri will review your information and follow up with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">First Name *</label>
                    <input required type="text" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Last Name *</label>
                    <input required type="text" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Email Address *</label>
                  <input required type="email" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Phone Number *</label>
                  <input required type="tel" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">State of Injury *</label>
                  <select required className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }}>
                    <option value="">Select a state</option>
                    <option>Georgia</option>
                    <option>Florida</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Type of Case *</label>
                  <select required className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }}>
                    <option value="">Select case type</option>
                    {caseTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Tell us briefly what happened</label>
                  <textarea rows={4} className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400 resize-none" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                </div>
                <div>
                  <label style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">How did you hear about us?</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" id="disclaimer" className="mt-1 flex-shrink-0" />
                  <label htmlFor="disclaimer" style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-xs leading-relaxed">
                    I agree that submitting this form does not create an attorney-client relationship.
                  </label>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
                  className="w-full text-white font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity text-base"
                >
                  Submit — Schedule My Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
