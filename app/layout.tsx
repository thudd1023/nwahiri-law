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
  url: 'https://www.nwahirilaw.com',
  telephone: '305-345-4117',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13499 Biscayne Blvd, Suite 107',
    addressLocality: 'North Miami',
    addressRegion: 'FL',
    postalCode: '33181',
  },
  areaServed: ['Georgia', 'Florida'],
  founder: { '@type': 'Person', name: 'Tobechuku Nwahiri' },
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
