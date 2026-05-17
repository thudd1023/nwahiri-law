import Link from 'next/link';

interface PracticeAreaHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PracticeAreaHero({ title, subtitle, breadcrumb }: PracticeAreaHeroProps) {
  return (
    <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {breadcrumb && (
          <p
            style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
            className="text-sm font-medium uppercase tracking-widest mb-4"
          >
            <Link href="/practice-areas" className="hover:opacity-70 transition-opacity">
              Practice Areas
            </Link>
            {' '}&rarr; {breadcrumb}
          </p>
        )}
        <h1
          style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/free-consultation"
            style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
            className="inline-block text-white font-semibold px-7 py-3.5 rounded hover:opacity-90 transition-opacity"
          >
            Get Your Free Consultation &rarr;
          </Link>
          <a
            href="tel:3053454117"
            style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', fontFamily: 'Montserrat, sans-serif' }}
            className="inline-block border font-medium px-7 py-3.5 rounded hover:border-white transition-colors"
          >
            (305) 345-4117
          </a>
        </div>
      </div>
    </section>
  );
}
