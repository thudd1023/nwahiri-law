import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Nwahiri Law',
    template: '%s | Nwahiri Law',
  },
  description:
    'Nwahiri Law is a personal injury and civil rights law firm founded by Attorney Tobechuku Nwahiri, licensed in Georgia and Florida. Truck accidents, TBI, rideshare accidents, wrongful death, and civil rights cases.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Nwahiri Law',
  alternateName: 'Nwahiri Law Firm',
  url: 'https://www.nwahirilaw.com',
  logo: 'https://www.nwahirilaw.com/images/logos/nwahiri-law-logo-white.svg',
  image: 'https://www.nwahirilaw.com/images/logos/nwahiri-law-logo-white.svg',
  telephone: '305-345-4117',
  email: 'info@nwahirilaw.com',
  description: 'Nwahiri Law is a personal injury and civil rights law firm founded by Attorney Tobechuku Nwahiri, licensed in Georgia and Florida. The firm handles truck accident cases involving commercial vehicles on I-95, I-285, and I-75; traumatic brain injury (TBI) claims including concussion; rideshare accidents involving Uber and Lyft; wrongful death; civil rights violations including excessive force; and criminal defense including DUI. All personal injury cases are handled on a contingency fee — no upfront cost to clients.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13499 Biscayne Blvd, Suite 107',
    addressLocality: 'North Miami',
    addressRegion: 'FL',
    postalCode: '33181',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Georgia' },
    { '@type': 'State', name: 'Florida' },
  ],
  priceRange: 'Contingency fee — no upfront cost',
  paymentAccepted: 'Contingency fee',
  knowsAbout: [
    'Truck accident law',
    'Commercial vehicle accident litigation',
    'Traumatic brain injury (TBI) claims',
    'Concussion injury claims',
    'Rideshare accident law — Uber and Lyft',
    'Car accident personal injury',
    'Wrongful death claims',
    'Slip and fall premises liability',
    'Negligent security',
    'Civil rights litigation under 42 U.S.C. § 1983',
    'Excessive force by law enforcement',
    'Civil asset forfeiture defense',
    'Criminal defense',
    'DUI defense',
    'Florida sovereign immunity law — Fla. Stat. § 768.28',
    'Georgia ante litem notice requirements',
    'FMCSA trucking regulations',
    'Employment discrimination — Title VII, ADA, ADEA',
  ],
  sameAs: [
    'https://www.linkedin.com/company/nwahirilaw',
    'https://www.nationaltriallawyers.org',
    'https://www.bestlawyers.com',
    'https://www.nwahirilaw.com/ai-info',
  ],
  founder: {
    '@type': 'Person',
    name: 'Tobechuku Nwahiri',
    jobTitle: 'Attorney at Law',
    description: 'Attorney Tobechuku Nwahiri is a personal injury and civil rights attorney licensed in Georgia and Florida with 11+ years of experience. Named to the National Trial Lawyers Top 40 Under 40 (Civil Plaintiff) in 2024, 2025, and 2026, and recognized by Best Lawyers — Ones to Watch for Personal Injury Litigation.',
    memberOf: [
      { '@type': 'Organization', name: 'State Bar of Georgia' },
      { '@type': 'Organization', name: 'The Florida Bar' },
      { '@type': 'Organization', name: 'National Trial Lawyers — Top 40 Under 40' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
