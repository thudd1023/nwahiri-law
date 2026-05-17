'use client';

import Link from 'next/link';
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
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top bar */}
      <div style={{ backgroundColor: '#0F2044' }} className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <a
            href="tel:3053454117"
            style={{ color: '#F8F4EE', fontFamily: 'Montserrat, sans-serif' }}
            className="text-sm font-medium hover:opacity-80 transition-opacity"
          >
            (305) 345-4117
          </a>
          <Link
            href="/free-consultation"
            style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
            className="text-white text-sm font-semibold px-4 py-1.5 rounded hover:opacity-90 transition-opacity"
          >
            Free Consultation &rarr;
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044' }}
              className="text-2xl font-bold tracking-widest uppercase"
            >
              Nwahiri Law
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Practice Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }}
                className="text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1"
              >
                Practice Areas
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-100 shadow-xl rounded z-50"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <div className="p-4">
                    <p
                      style={{ color: '#B8973B' }}
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                    >
                      Personal Injury
                    </p>
                    {personalInjuryLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        style={{ color: '#0F2044' }}
                        className="block py-1.5 text-sm hover:opacity-60 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-3 pt-3">
                      <p
                        style={{ color: '#B8973B' }}
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                      >
                        Other Areas
                      </p>
                      {otherAreaLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          style={{ color: '#0F2044' }}
                          className="block py-1.5 text-sm hover:opacity-60 transition-opacity"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-3">
                      <Link
                        href="/practice-areas"
                        style={{ color: '#BE1823' }}
                        className="text-sm font-semibold hover:opacity-80 transition-opacity"
                      >
                        View All Practice Areas &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/results"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Results
            </Link>
            <Link
              href="/about"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div style={{ backgroundColor: '#0F2044' }} className="w-6 h-0.5 mb-1.5 rounded"></div>
            <div style={{ backgroundColor: '#0F2044' }} className="w-6 h-0.5 mb-1.5 rounded"></div>
            <div style={{ backgroundColor: '#0F2044' }} className="w-6 h-0.5 rounded"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t border-gray-100 bg-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div className="px-4 py-4 space-y-1">
              <p
                style={{ color: '#B8973B' }}
                className="text-xs font-semibold uppercase tracking-widest py-2"
              >
                Personal Injury
              </p>
              {personalInjuryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: '#0F2044' }}
                  className="block py-2 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <p
                style={{ color: '#B8973B' }}
                className="text-xs font-semibold uppercase tracking-widest pt-3 pb-2 border-t border-gray-100"
              >
                Other Areas
              </p>
              {otherAreaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: '#0F2044' }}
                  className="block py-2 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-3 space-y-2">
                <Link
                  href="/practice-areas"
                  style={{ color: '#0F2044' }}
                  className="block py-2 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  View All Practice Areas
                </Link>
                <Link
                  href="/results"
                  style={{ color: '#0F2044' }}
                  className="block py-2 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Results
                </Link>
                <Link
                  href="/about"
                  style={{ color: '#0F2044' }}
                  className="block py-2 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  style={{ color: '#0F2044' }}
                  className="block py-2 text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
