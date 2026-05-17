import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F2044', fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — High-Value Cases */}
          <div>
            <h3
              style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif' }}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
            >
              High-Value Cases
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Truck Accident Attorney', href: '/practice-areas/truck-accidents' },
                { label: 'Traumatic Brain Injury', href: '/practice-areas/traumatic-brain-injury' },
                { label: 'Uber & Lyft Accidents', href: '/practice-areas/uber-lyft-accidents' },
                { label: 'Slip & Fall', href: '/practice-areas/slip-and-fall' },
                { label: 'Car Accidents', href: '/practice-areas/car-accidents' },
                { label: 'Wrongful Death', href: '/practice-areas/wrongful-death' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Additional Services */}
          <div>
            <h3
              style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif' }}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
            >
              Additional Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Criminal Defense', href: '/practice-areas/criminal-defense' },
                { label: 'DUI Defense', href: '/practice-areas/dui' },
                { label: 'Civil Rights Violations', href: '/practice-areas/civil-rights' },
                { label: 'Excessive Force', href: '/practice-areas/excessive-force' },
                { label: 'Civil Asset Forfeiture', href: '/practice-areas/civil-asset-forfeiture' },
                { label: 'Premises Liability', href: '/practice-areas/premises-liability' },
                { label: 'Negligent Security', href: '/practice-areas/negligent-security' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Firm */}
          <div>
            <h3
              style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif' }}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
            >
              Firm
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'About Attorney Nwahiri', href: '/about' },
                { label: 'Case Results & Settlements', href: '/results' },
                { label: 'Free Consultation', href: '/free-consultation' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3
              style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif' }}
              className="text-lg font-semibold mb-5 uppercase tracking-wider"
            >
              Contact
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="tel:3053454117" className="hover:text-white transition-colors font-medium text-white">
                  (305) 345-4117
                </a>
              </li>
              <li>
                <a href="mailto:info@nwahirilaw.com" className="hover:text-white transition-colors">
                  info@nwahirilaw.com
                </a>
              </li>
              <li>
                13499 Biscayne Blvd, Suite 107<br />
                North Miami, FL 33181
              </li>
              <li className="italic" style={{ color: '#B8973B' }}>
                Licensed in Georgia &amp; Florida
              </li>
              <li className="pt-2">
                <a
                  href="https://calendly.com/nwahirilaw/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#BE1823' }}
                  className="inline-block text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
                >
                  Schedule Free Consultation &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo / tagline */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span
              style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
              className="text-xl font-bold tracking-widest uppercase"
            >
              Nwahiri Law
            </span>
            <p className="text-gray-400 text-xs mt-1">Personal Injury &amp; Civil Rights Attorney | Georgia &amp; Florida</p>
          </div>
          <p className="text-gray-500 text-xs">
            Attorney Advertising. Results may vary. Prior outcomes do not guarantee future results.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>&copy; 2026 Nwahiri Law. All rights reserved.</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Legal Disclaimer</Link>
              <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
              <Link href="/ai-info" className="hover:text-gray-300 transition-colors">Information for AI &amp; LLMs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
