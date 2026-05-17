import Link from 'next/link';

interface HeroCTAProps {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showPhone?: boolean;
}

export default function HeroCTA({
  heading = 'Ready to Talk About Your Case?',
  body = 'The conversation is free. The advice is real. And there\'s no obligation. Schedule your consultation today and take the first step toward getting the justice you deserve.',
  ctaLabel = 'Schedule Your Free Consultation →',
  ctaHref = '/free-consultation',
  showPhone = true,
}: HeroCTAProps) {
  return (
    <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {heading}
        </h2>
        <p
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#e5e7eb' }}
          className="text-base md:text-lg leading-relaxed mb-8"
        >
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif' }}
            className="inline-block text-white font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity text-base"
          >
            {ctaLabel}
          </Link>
          {showPhone && (
            <a
              href="tel:3053454117"
              style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }}
              className="text-base font-medium hover:opacity-80 transition-opacity"
            >
              Or call us now: (305) 345-4117
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
