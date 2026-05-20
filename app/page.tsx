import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroCTA from '@/components/HeroCTA';
import HeroAttorneyPhoto from '@/components/HeroAttorneyPhoto';
import AttorneyIntroPhoto from '@/components/AttorneyIntroPhoto';

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
  { num: '01', title: 'Truck Accidents', desc: '18-wheelers and commercial vehicles cause catastrophic damage. We know how to take on carriers and their insurers.', href: '/practice-areas/truck-accidents' },
  { num: '02', title: 'Traumatic Brain Injury', desc: 'TBI cases require medical expertise and legal precision. We build the evidence to secure lifetime compensation.', href: '/practice-areas/traumatic-brain-injury' },
  { num: '03', title: 'Uber & Lyft Accidents', desc: 'Rideshare accidents involve complex insurance layers. We cut through the confusion and fight for full accountability.', href: '/practice-areas/uber-lyft-accidents' },
  { num: '04', title: 'Slip & Fall', desc: 'Property owners have a duty to keep you safe. When they fail, we hold them responsible.', href: '/practice-areas/slip-and-fall' },
  { num: '05', title: 'Car Accidents', desc: 'From minor crashes to life-altering collisions, we handle every aspect of your claim so you can focus on healing.', href: '/practice-areas/car-accidents' },
  { num: '06', title: 'Wrongful Death', desc: 'No settlement can replace a loved one. But justice and financial security for your family can make a profound difference.', href: '/practice-areas/wrongful-death' },
  { num: '07', title: 'Civil Rights & Excessive Force', desc: 'When law enforcement crosses the line, we hold officers and agencies accountable for civil rights violations.', href: '/practice-areas/excessive-force' },
  { num: '08', title: 'Premises Liability', desc: 'Unsafe properties injure people every day. We pursue owners, managers, and insurers for the full value of your loss.', href: '/practice-areas/premises-liability' },
  { num: '09', title: 'Criminal Defense', desc: 'Facing criminal charges demands a fighter in your corner. We protect your rights and your future at every stage.', href: '/practice-areas/criminal-defense' },
];

const caseResults = [
  { amount: '$340,000', type: 'Auto Accident — Traumatic Brain Injury', state: 'Georgia', desc: 'Client suffered a serious TBI in a high-impact auto collision. Nwahiri Law secured a $340,000 settlement covering medical expenses, lost wages, and long-term rehabilitation.' },
  { amount: '$300,000', type: 'Civil Rights Violation', state: 'Florida', desc: 'Client\'s civil rights were violated by a Florida government entity. Nwahiri Law secured $300,000 in compensation.' },
  { amount: '$225,000+', type: 'Personal Injury — Major Airline', state: 'Florida', desc: 'Client seriously injured during travel on a major commercial airline. Nwahiri Law recovered $225,000+ against the carrier.' },
  { amount: '$200,000', type: 'Civil Rights — Police Dog Bite', state: 'Florida', desc: 'Client sustained serious injuries from a police canine. Nwahiri Law secured $200,000 in this civil rights and excessive force matter.' },
];

const whyItems = [
  { title: 'No Fee Unless We Win', desc: 'You pay nothing upfront on personal injury and civil rights cases. Our fee comes only from the compensation we recover.' },
  { title: 'Direct Attorney Access', desc: 'You communicate directly with Attorney Nwahiri — not a paralegal or case manager. Your case gets personal attention.' },
  { title: 'Licensed in Two States', desc: 'Admitted to the State Bars of Georgia and Florida. Wherever your injury occurred, we can represent you.' },
  { title: 'Free Confidential Consultation', desc: 'We review your case, answer your questions, and give an honest assessment — at no cost and no obligation.' },
];

export default function HomePage() {
  const tickerContent = [...tickerItems, ...tickerItems];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '620px' }}>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/hero/courtroom.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            zIndex: 0,
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10,26,56,0.82)', zIndex: 1 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36" style={{ zIndex: 2 }}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Licensed in Georgia &amp; Florida
              </span>
            </div>
            <h1
              style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.08 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-8"
            >
              Serious injuries and injustices demand serious representation.
            </h1>
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '56px', marginBottom: '1.75rem' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.8, maxWidth: '520px' }}>
              Attorney Tobechuku Nwahiri fights for full compensation after truck accidents, traumatic brain injuries, rideshare crashes, civil rights violations, and more — across Georgia and Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/free-consultation"
                style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }}
                className="text-white font-semibold uppercase text-center hover:opacity-90 transition-opacity"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/results"
                style={{ border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px', color: 'rgba(255,255,255,0.8)' }}
                className="uppercase text-center font-semibold hover:border-white hover:text-white transition-colors"
              >
                View Case Results
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {['Licensed in Georgia & Florida', 'No Fee on Injury or Civil Cases Unless We Win', 'Free Consultations', 'Phones Answered 24/7'].map((item) => (
                <div key={item} style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.06em' }} className="flex items-center gap-2">
                  <span style={{ color: '#B8973B' }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SETTLEMENTS TICKER ───────────────────────────────── */}
      <div style={{ backgroundColor: '#0F2044', borderTop: '1px solid rgba(184,151,59,0.2)', borderBottom: '1px solid rgba(184,151,59,0.2)' }} className="overflow-hidden py-3.5">
        <div className="overflow-hidden">
          <div className="ticker-track flex items-center">
            {tickerContent.map((item, i) => (
              <span key={i} style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '12px', letterSpacing: '0.04em' }} className="flex-shrink-0 px-8">
                <span style={{ color: '#B8973B' }} className="font-semibold">Recent Result:</span>{' '}{item}
                <span className="mx-8 opacity-30">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── RECOGNITION + CREDENTIALS (combined) ─────────────── */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
            <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
              Recognized for Excellence
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" style={{ borderTop: '1px solid rgba(15,32,68,0.1)' }}>

            {/* National Trial Lawyers */}
            <div className="py-10 pr-8" style={{ borderRight: '1px solid rgba(15,32,68,0.1)' }}>
              <Image
                src="/images/badges/national-trial-lawyers.png"
                alt="National Trial Lawyers"
                width={100}
                height={100}
                className="object-contain mb-5"
                unoptimized
              />
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.25rem' }}>
                National Trial Lawyers
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>
                Top 40 Under 40 · Civil Plaintiff
              </p>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em', marginTop: '8px' }} className="font-semibold">
                2022 · 2023 · 2024
              </p>
            </div>

            {/* 11+ Years */}
            <div className="py-10 px-8" style={{ borderRight: '1px solid rgba(15,32,68,0.1)' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 300, fontSize: '3.5rem', lineHeight: 1 }}>
                11+
              </p>
              <div style={{ height: '1px', backgroundColor: '#B8973B', width: '24px', margin: '12px 0' }} />
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '11px', letterSpacing: '0.1em' }} className="uppercase">
                Years of Experience
              </p>
            </div>

            {/* GA & FL */}
            <div className="py-10 px-8" style={{ borderRight: '1px solid rgba(15,32,68,0.1)' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 300, fontSize: '3.5rem', lineHeight: 1 }}>
                GA &amp; FL
              </p>
              <div style={{ height: '1px', backgroundColor: '#B8973B', width: '24px', margin: '12px 0' }} />
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '11px', letterSpacing: '0.1em' }} className="uppercase">
                Licensed in Both States
              </p>
            </div>

            {/* Best Lawyers */}
            <div className="py-10 pl-8">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontStyle: 'italic', fontSize: '1.25rem' }}>
                Best Lawyers — <em>Ones to Watch</em>
              </h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>
                Personal Injury Litigation
              </p>
              <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em', marginTop: '8px' }} className="font-semibold">
                2024 · 2025 · 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Areas of Practice
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600 }} className="text-4xl md:text-5xl">
              What We Fight For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid rgba(15,32,68,0.1)' }}>
            {practiceAreas.map((area) => (
              <Link key={area.href} href={area.href} className="group block p-8 transition-colors hover:bg-navy" style={{ borderRight: '1px solid rgba(15,32,68,0.1)', borderBottom: '1px solid rgba(15,32,68,0.1)' }}>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em' }} className="font-semibold mb-3">
                  {area.num}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.35rem', fontWeight: 600 }} className="mb-3">
                  {area.title}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '13px', lineHeight: 1.7 }} className="mb-4">
                  {area.desc}
                </p>
                <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="font-semibold uppercase">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/practice-areas"
              style={{ border: '1px solid #0F2044', color: '#0F2044', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 28px' }}
              className="inline-block font-semibold uppercase hover:opacity-70 transition-opacity"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ── ATTORNEY INTRO ───────────────────────────────────── */}
      <section style={{ backgroundColor: '#F8F4EE' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <AttorneyIntroPhoto />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Your Attorney. Your Advocate.
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.1 }} className="text-4xl md:text-5xl mb-8">
              Attorney Tobechuku Nwahiri
            </h2>
            <div style={{ backgroundColor: '#B8973B', height: '1px', width: '40px', marginBottom: '2rem' }} />
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '14px', lineHeight: 1.85 }} className="mb-5">
              Attorney Tobechuku Nwahiri built Nwahiri Law on a simple belief: every person who walks through the door — regardless of background, income, or circumstances — deserves the same caliber of legal representation as the most powerful interests on the other side.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '14px', lineHeight: 1.85 }} className="mb-5">
              With over 11 years of legal experience and licenses in both Georgia and Florida, he has represented individuals and families after devastating accidents, serious injuries, and civil rights violations. Recognized by Best Lawyers as &ldquo;Ones to Watch&rdquo; and by the National Trial Lawyers as Top 40 Under 40.
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.6 }} className="mb-9">
              &ldquo;He does not take every case. He takes the right cases — and fights for them with everything he has.&rdquo;
            </p>
            <Link
              href="/about"
              style={{ backgroundColor: '#0F2044', color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 28px' }}
              className="inline-block font-semibold uppercase hover:opacity-80 transition-opacity"
            >
              Meet Attorney Nwahiri
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE RESULTS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0A1A38' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Case Results
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 600 }} className="text-4xl md:text-5xl">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" style={{ borderTop: '1px solid rgba(184,151,59,0.2)' }}>
            {caseResults.map((result, i) => (
              <div key={i} className="py-8 pr-8" style={i < 3 ? { borderRight: '1px solid rgba(255,255,255,0.06)' } : {}}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#B8973B', fontWeight: 300 }} className="text-4xl md:text-5xl mb-3">
                  {result.amount}
                </p>
                <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.12em' }} className="uppercase font-semibold mb-2">
                  {result.state}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 500 }} className="mb-3">
                  {result.type}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: 1.7 }}>
                  {result.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Link
              href="/results"
              style={{ border: '1px solid rgba(184,151,59,0.5)', color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '13px 28px' }}
              className="inline-block font-semibold uppercase hover:opacity-80 transition-opacity"
            >
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY NWAHIRI LAW ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0F2044' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
              <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                Why Clients Choose Us
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 600 }} className="text-4xl md:text-5xl">
              What Sets Nwahiri Law Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="py-6 pl-6" style={{ borderLeft: '2px solid #B8973B' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.35rem', fontWeight: 600 }} className="mb-3">
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEOGRAPHIC COVERAGE ──────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div style={{ backgroundColor: '#B8973B', height: '1px', width: '36px', flexShrink: 0 }} />
                <span style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold">
                  Service Area
                </span>
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, lineHeight: 1.15 }} className="text-4xl md:text-5xl mb-6">
                Serving Georgia &amp; Florida
              </h2>
              <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '13px', lineHeight: 1.8 }}>
                Nwahiri Law represents injured individuals and families throughout Georgia and Florida. We handle cases statewide — distance is not a barrier.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p style={{ color: '#0F2044', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600, borderBottom: '1px solid rgba(15,32,68,0.1)', paddingBottom: '8px' }} className="uppercase mb-4">
                  Georgia
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '13px', lineHeight: 1.9 }}>
                  Atlanta · Savannah<br />
                  Augusta · Macon<br />
                  Columbus · Athens<br />
                  Albany · Brunswick<br />
                  and throughout Georgia
                </p>
              </div>
              <div>
                <p style={{ color: '#0F2044', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }} className="uppercase mb-4">
                  Florida
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '13px', lineHeight: 1.9 }}>
                  Miami · Orlando<br />
                  Tampa · Jacksonville<br />
                  Fort Lauderdale · Hialeah<br />
                  Tallahassee · Pensacola<br />
                  and throughout Florida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <HeroCTA />
    </>
  );
}
