'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const personalInjuryLinks = [
  { label: 'Truck Accidents', href: '/practice-areas/truck-accidents' },
  { label: 'Traumatic Brain Injury (TBI)', href: '/practice-areas/traumatic-brain-injury' },
  { label: 'Uber & Lyft Accidents', href: '/practice-areas/uber-lyft-accidents' },
  { label: 'Slip & Fall', href: '/practice-areas/slip-and-fall' },
  { label: 'Car Accidents', href: '/practice-areas/car-accidents' },
  { label: 'Wrongful Death', href: '/practice-areas/wrongful-death' },
];

const otherAreaLinks = [
  { label: 'Criminal Defense', href: '/practice-areas/criminal-defense' },
  { label: 'Civil Rights Violations', href: '/practice-areas/civil-rights' },
  { label: 'Excessive Force', href: '/practice-areas/excessive-force' },
  { label: 'Dog Bites', href: '/practice-areas/dog-bites' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ borderBottom: '1px solid rgba(184,151,59,0.25)' }}>
      <div style={{ backgroundColor: '#0F2044' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3.5 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logos/nwahiri-law-logo-white.svg"
              alt="Nwahiri Law"
              width={280}
              height={70}
              className="object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
            {/* Practice Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.75)', fontSize: '11px', letterSpacing: '0.08em' }}
                className="uppercase font-medium hover:text-white transition-colors flex items-center gap-1.5"
              >
                Practice Areas
                <svg className="w-2.5 h-2.5 mt-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 w-72 z-50"
                  style={{ paddingTop: '8px' }}
                >
                  <div style={{ backgroundColor: '#0F2044', border: '1px solid rgba(184,151,59,0.3)' }}>
                  <div className="p-5">
                    <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold mb-3">
                      Personal Injury
                    </p>
                    {personalInjuryLinks.map((link) => (
                      <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '13px' }} className="block py-1.5 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="mt-4 pt-4">
                      <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold mb-3">
                        Additional Practice Areas
                      </p>
                      {otherAreaLinks.map((link) => (
                        <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat, sans-serif', fontSize: '13px' }} className="block py-1.5 hover:text-white transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="mt-4 pt-4">
                      <Link href="/practice-areas" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.05em' }} className="font-semibold hover:opacity-70 transition-opacity">
                        All Practice Areas &rarr;
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>

            {[
              { label: 'Results', href: '/results' },
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.75)', fontSize: '11px', letterSpacing: '0.08em' }}
                className="uppercase font-medium hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(255,255,255,0.15)' }} />

            <a
              href="tel:3053454117"
              style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '13px' }}
              className="font-medium hover:opacity-80 transition-opacity"
            >
              (305) 345-4117
            </a>

            <Link
              href="/free-consultation"
              style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.1em', padding: '10px 18px' }}
              className="text-white font-semibold uppercase hover:opacity-90 transition-opacity"
            >
              Free Consultation
            </Link>

          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div style={{ backgroundColor: 'white' }} className="w-6 h-px" />
            <div style={{ backgroundColor: 'white' }} className="w-6 h-px" />
            <div style={{ backgroundColor: 'white' }} className="w-4 h-px" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Montserrat, sans-serif' }}>
            <div className="px-6 py-5 space-y-1">
              <p style={{ color: '#B8973B', fontSize: '10px', letterSpacing: '0.15em' }} className="uppercase font-semibold py-2">Personal Injury</p>
              {personalInjuryLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }} className="block py-2" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <p style={{ color: '#B8973B', fontSize: '10px', letterSpacing: '0.15em', borderTop: '1px solid rgba(255,255,255,0.08)' }} className="uppercase font-semibold pt-4 pb-2 mt-2">
                Additional Areas
              </p>
              {otherAreaLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }} className="block py-2" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="pt-4 mt-2 space-y-3">
                {[
                  { label: 'Results', href: '/results' },
                  { label: 'About', href: '/about' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }} className="block py-1.5" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', color: 'white', fontSize: '12px', letterSpacing: '0.08em' }} className="inline-block mt-2 px-5 py-3 font-semibold uppercase" onClick={() => setMobileOpen(false)}>
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
