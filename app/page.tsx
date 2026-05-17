import type { Metadata } from 'next';
import Link from 'next/link';
import HeroCTA from '@/components/HeroCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Attorney in Georgia & Florida | Nwahiri Law',
  description:
    'Injured in a truck accident, rideshare crash, or slip and fall? Attorney Tobechuku Nwahiri fights for maximum compensation in Georgia and Florida. Free consultation.',
  keywords: [
    'personal injury attorney Georgia',
    'personal injury attorney Florida',
    'truck accident attorney',
    'TBI attorney',
    'Uber Lyft accident attorney',
    'Nwahiri Law',
  ],
};

const tickerItems = [
  '$340,000 — Auto Accident with Traumatic Brain Injury',
  '$300,000 — Florida Government Civil Rights Violation',
  '$225,000+ — Injury Aboard Major Airline',
  '$200,000 — Police Dog Bite Case',
  '$150,000 — Employment Discrimination & Retaliation',
  '$150,000 — Policy Limits Settlement (Georgia Auto Accident)',
  '$125,000 — Slip & Fall',
  '$80,000 — Employment Discrimination',
];

const practiceAreas = [
  {
    icon: '🚛',
    title: 'Truck Accidents',
    desc: '18-wheelers and commercial vehicles cause catastrophic damage. We know how to take on carriers and their insurers.',
    href: '/practice-areas/truck-accidents',
  },
  {
    icon: '🧠',
    title: 'Traumatic Brain Injury',
    desc: 'TBI cases require medical expertise and legal precision. We build the evidence to secure the lifetime compensation you may need.',
    href: '/practice-areas/traumatic-brain-injury',
  },
  {
    icon: '🚗',
    title: 'Uber & Lyft Accidents',
    desc: 'Rideshare accidents involve complex insurance layers. We cut through the confusion and fight for full accountability.',
    href: '/practice-areas/uber-lyft-accidents',
  },
  {
    icon: '⚠️',
    title: 'Slip & Fall',
    desc: 'Property owners have a duty to keep you safe. When they fail, we hold them responsible.',
    href: '/practice-areas/slip-and-fall',
  },
  {
    icon: '🚙',
    title: 'Car Accidents',
    desc: 'From minor crashes to life-altering collisions, we handle every aspect of your claim so you can focus on healing.',
    href: '/practice-areas/car-accidents',
  },
  {
    icon: '✝️',
    title: 'Wrongful Death',
    desc: 'No settlement can replace a loved one. But justice and financial security for your family can make a profound difference.',
    href: '/practice-areas/wrongful-death',
  },
  {
    icon: '⚖️',
    title: 'Police Excessive Force',
    desc: 'When law enforcement crosses the line, there are legal consequences. We hold officers and agencies accountable for civil rights violations.',
    href: '/practice-areas/excessive-force',
  },
];

const caseResults = [
  {
    amount: '$340,000',
    type: 'Auto Accident | Traumatic Brain Injury',
    state: 'Georgia',
    desc: 'Client suffered a serious TBI in a high-impact auto collision. Nwahiri Law secured a $340,000 settlement covering medical expenses, lost wages, and long-term rehabilitation needs.',
  },
  {
    amount: '$300,000',
    type: 'Civil Rights Violation',
    state: 'Florida',
    desc: 'Client\'s civil rights were violated by a Florida government entity. Nwahiri Law secured $300,000 in compensation for the harm caused.',
  },
  {
    amount: '$225,000+',
    type: 'Personal Injury | Major Airline Incident',
    state: 'Florida',
    desc: 'Client was seriously injured during travel on a major commercial airline. Nwahiri Law recovered $225,000+ against the carrier.',
  },
  {
    amount: '$200,000',
    type: 'Civil Rights | Police Dog Bite',
    state: 'Florida',
    desc: 'Client sustained serious injuries from a police canine. Nwahiri Law secured $200,000 in this civil rights and excessive force matter.',
  },
];

const whyItems = [
  {
    title: 'No Fee Unless We Win',
    desc: 'You pay nothing upfront. Our fee comes only from the compensation we recover for you. There is no financial risk to getting started.',
  },
  {
    title: 'Direct Access to Your Attorney',
    desc: 'You will communicate directly with Attorney Nwahiri — not a paralegal or case manager. Your case gets personal attention.',
  },
  {
    title: 'Licensed in Two States',
    desc: 'Admitted to the State Bars of Georgia and Florida, we can handle your case no matter which state your injury occurred in.',
  },
  {
    title: 'Free, Confidential Consultation',
    desc: 'We\'ll review your case, answer your questions, and give you an honest assessment — at no cost and with no obligation.',
  },
];

export default function HomePage() {
  const tickerContent = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: '#0F2044' }} className="relative py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p
            style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
            className="text-sm font-semibold uppercase tracking-widest mb-6"
          >
            Licensed in Georgia &amp; Florida
          </p>
          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            Serious injuries and injustices demand serious representation.
          </h1>
          <p
            style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }}
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6"
          >
            Attorney Tobechuku Nwahiri fights for the full compensation you deserve after truck accidents,
            traumatic brain injuries, rideshare crashes, and more — in Georgia and Florida.
          </p>
          <p
            style={{ color: '#d1d5db', fontFamily: 'Montserrat, sans-serif' }}
            className="text-base leading-relaxed max-w-2xl mx-auto mb-10"
          >
            When you&apos;re hurt and the insurance companies are already working against you, you need an attorney
            who knows the law, knows the tactics, and will not back down. Nwahiri Law takes on the cases that matter most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/free-consultation"
              style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
              className="inline-block text-white font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity text-base"
            >
              Get Your Free Consultation
            </Link>
            <Link
              href="/results"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', fontFamily: 'Montserrat, sans-serif' }}
              className="inline-block border-2 font-semibold px-8 py-4 rounded hover:border-white transition-colors text-base"
            >
              View Case Results
            </Link>
          </div>

          {/* Trust bar */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {['Licensed in Georgia & Florida', 'No Fee Unless We Win', 'Free Consultations', 'Available 24/7'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span style={{ color: '#B8973B' }}>✓</span>
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SETTLEMENTS TICKER */}
      <div
        style={{ backgroundColor: '#1A3566' }}
        className="overflow-hidden py-4 relative"
      >
        <div className="flex items-center gap-2 px-4 mb-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        </div>
        <div className="overflow-hidden">
          <div className="ticker-track flex items-center">
            {tickerContent.map((item, i) => (
              <span
                key={i}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#F8F4EE' }}
                className="text-sm font-semibold flex-shrink-0 px-6"
              >
                <span style={{ color: '#B8973B' }} className="font-bold">Recent Result:</span> {item}
                <span className="mx-6 text-gray-400">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RECOGNITION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p
            style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
            className="text-xs font-semibold uppercase tracking-widest mb-8"
          >
            Recognized for Excellence
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {/* National Trial Lawyers */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-100 border-2"
                style={{ borderColor: '#B8973B' }}
              >
                <span style={{ color: '#0F2044' }} className="text-xs font-bold text-center leading-tight px-2">
                  TOP 40<br />UNDER 40
                </span>
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}>
                <p className="text-xl font-bold">National Trial Lawyers</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-sm mt-1">
                  Top 40 Under 40 · Civil Plaintiff
                </p>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold">
                  2024 · 2025 · 2026
                </p>
              </div>
            </div>

            <div
              className="hidden md:block w-px h-20"
              style={{ backgroundColor: '#e5e7eb' }}
            />

            {/* Best Lawyers */}
            <div className="flex flex-col items-center gap-3">
              <div
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
                className="text-center"
              >
                <p
                  style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                >
                  Best Lawyers
                </p>
                <p className="text-2xl font-bold italic">Ones to Watch</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-sm mt-1">
                  Personal Injury Litigation
                </p>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold mt-1">
                  2024 · 2025 · 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { stat: '11+', label: 'Years of Experience' },
            { stat: 'Top 40', label: 'National Trial Lawyers' },
            { stat: 'GA & FL', label: 'Licensed in Both States' },
            { stat: '$0', label: 'Upfront — No Fee Unless We Win' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#B8973B' }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat}
              </p>
              <p
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#e5e7eb' }}
                className="text-sm"
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              What We Fight For
            </h2>
            <p
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }}
              className="text-base max-w-2xl mx-auto"
            >
              We focus on high-stakes personal injury and civil rights cases where the outcome truly changes lives.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {practiceAreas.map((area) => (
              <div
                key={area.href}
                className="bg-white rounded p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
                  className="text-xl font-bold mb-2"
                >
                  {area.title}
                </h3>
                <p
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }}
                  className="text-sm leading-relaxed mb-4"
                >
                  {area.desc}
                </p>
                <Link
                  href={area.href}
                  style={{ color: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
                  className="text-sm font-semibold hover:opacity-70 transition-opacity"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/practice-areas"
              style={{ color: '#0F2044', borderColor: '#0F2044', fontFamily: 'Montserrat, sans-serif' }}
              className="inline-block border-2 font-semibold px-8 py-3.5 rounded hover:bg-navy hover:text-white transition-colors"
            >
              View All Practice Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ATTORNEY INTRO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Photo placeholder */}
            <div
              className="w-full aspect-[3/4] rounded bg-gray-200 flex items-center justify-center max-w-sm mx-auto md:mx-0"
            >
              <span style={{ color: '#9ca3af', fontFamily: 'Montserrat, sans-serif' }} className="text-sm">
                Attorney Photo
              </span>
            </div>
          </div>
          <div>
            <p
              style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
            >
              Your Attorney. Your Advocate.
            </p>
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Attorney Tobechuku Nwahiri
            </h2>
            <p
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }}
              className="text-base leading-relaxed mb-4"
            >
              Attorney Tobechuku Nwahiri built Nwahiri Law on a simple belief: every person who walks through
              the door — regardless of their background, income, or circumstances — deserves the same caliber
              of legal representation as the most powerful interests on the other side.
            </p>
            <p
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }}
              className="text-base leading-relaxed mb-4"
            >
              With over 11 years of legal experience, Attorney Nwahiri is licensed to practice in both Georgia
              and Florida and has represented individuals and families facing some of the most difficult moments
              of their lives — after devastating accidents, serious injuries, and violations of their civil rights.
            </p>
            <p
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }}
              className="text-base leading-relaxed mb-4"
            >
              Recognized by Best Lawyers as &ldquo;Ones to Watch&rdquo; and by the National Trial Lawyers as a Top 40 Under 40
              Civil Plaintiff attorney, he has built a reputation for fighting hard and delivering real results.
            </p>
            <p
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }}
              className="text-base font-medium leading-relaxed mb-8"
            >
              He does not take every case. He takes the right cases, and then he fights for them with everything he has.
            </p>
            <Link
              href="/about"
              style={{ backgroundColor: '#0F2044', fontFamily: 'Montserrat, sans-serif' }}
              className="inline-block text-white font-semibold px-7 py-3.5 rounded hover:opacity-80 transition-opacity"
            >
              Meet Attorney Nwahiri &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CASE RESULTS */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Results That Speak for Themselves
            </h2>
            <p
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }}
              className="text-base max-w-xl mx-auto"
            >
              We pursue maximum compensation — not quick settlements that benefit the insurance company.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseResults.map((result, i) => (
              <div
                key={i}
                className="bg-white rounded p-6 shadow-sm border border-gray-100"
              >
                <p
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
                  className="text-3xl font-bold mb-2"
                >
                  {result.amount}
                </p>
                <p
                  style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                >
                  {result.state}
                </p>
                <p
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }}
                  className="text-sm font-semibold mb-3"
                >
                  {result.type}
                </p>
                <p
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }}
                  className="text-sm leading-relaxed"
                >
                  {result.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/results"
              style={{ color: '#0F2044', fontFamily: 'Montserrat, sans-serif' }}
              className="text-base font-semibold hover:opacity-70 transition-opacity underline underline-offset-4"
            >
              View All Results &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NWAHIRI LAW */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Why Clients Choose Nwahiri Law
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item, i) => (
              <div key={i} className="text-center">
                <div
                  style={{ backgroundColor: '#0F2044' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-white text-lg font-bold">{i + 1}</span>
                </div>
                <h3
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
                  className="text-xl font-bold mb-3"
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }}
                  className="text-sm leading-relaxed"
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Serving Clients Across Georgia &amp; Florida
          </h2>
          <p
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }}
            className="text-base mb-8"
          >
            Nwahiri Law represents injured individuals throughout Georgia and Florida. Whether your accident
            happened in Atlanta, Miami, Savannah, Orlando, or anywhere in between, we can help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Georgia', 'Florida', 'Atlanta', 'Miami', 'Savannah', 'Tampa', 'Orlando', 'Augusta'].map((city) => (
              <span
                key={city}
                style={{ backgroundColor: '#0F2044', color: 'white', fontFamily: 'Montserrat, sans-serif' }}
                className="text-sm font-medium px-4 py-2 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <HeroCTA />
    </>
  );
}
