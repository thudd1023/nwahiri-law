import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can You Sue Jackson Memorial Hospital? | Nwahiri Law',
  description: 'Jackson Memorial is a government-run hospital, so claims work differently than a normal lawsuit. Attorney Tobechuku Nwahiri explains sovereign immunity, notice deadlines, and damage caps.',
  alternates: { canonical: 'https://www.nwahirilaw.com/blog/can-you-sue-jackson-memorial-hospital' },
  openGraph: {
    title: 'Can You Sue Jackson Memorial Hospital? | Nwahiri Law',
    description: 'Jackson Memorial is a government-run hospital, so claims work differently than a normal lawsuit. Attorney Tobechuku Nwahiri explains sovereign immunity, notice deadlines, and damage caps.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Can You Sue Jackson Memorial Hospital? What Miami-Dade Patients Need to Know',
      description: 'Jackson Memorial is operated by the Public Health Trust, a government entity. Claims against it are governed by Florida sovereign immunity law — not standard negligence rules.',
      author: { '@type': 'Person', name: 'Tobechuku Nwahiri', jobTitle: 'Attorney at Law' },
      publisher: { '@type': 'LegalService', name: 'Nwahiri Law', url: 'https://www.nwahirilaw.com' },
      url: 'https://www.nwahirilaw.com/blog/can-you-sue-jackson-memorial-hospital',
      datePublished: '2026-05-20',
      keywords: 'sue Jackson Memorial Hospital, Jackson Memorial lawsuit, Florida sovereign immunity, public hospital negligence attorney Miami',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Jackson Memorial Hospital protected from lawsuits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — but as a government-run facility it has procedural protections (notice deadlines, damage caps) that private hospitals do not. An experienced attorney can navigate these requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do I have to file a claim against Jackson Memorial Hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Notice of Claim deadlines under Florida's sovereign immunity law are short and unforgiving. Contact an attorney immediately — do not wait to see how your recovery progresses.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the damage cap for claims against Jackson Memorial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Florida's sovereign immunity statute (Fla. Stat. § 768.28) caps most damages at $200,000 per person and $300,000 per incident, absent a special legislative claims bill. An attorney can advise whether exceptions apply to your situation.",
          },
        },
      ],
    },
  ],
};

export default function JacksonMemorialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: '#0A1A38' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }}
            className="uppercase font-semibold mb-8 inline-block hover:text-white transition-colors"
          >
            &larr; Back to Blog
          </Link>
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold mb-4 mt-6">
            Government Liability · Miami-Dade
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl mb-6">
            Can You Sue Jackson Memorial Hospital? What Miami-Dade Patients Need to Know
          </h1>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', marginTop: '1.25rem' }} className="flex items-center gap-6">
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>
              By Attorney Tobechuku Nwahiri
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>
              Nwahiri Law — Miami-Dade, FL
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article style={{ backgroundColor: 'white' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.9, color: '#374151' }}>

          <p className="mb-6">
            Jackson Memorial Hospital treats more trauma patients than almost any hospital in the country — and because it is run by the Public Health Trust, a Miami-Dade County government agency, injury and negligence claims against it do not follow the same rules as a lawsuit against a private hospital.
          </p>

          <p className="mb-10">
            Most people assume a public hospital cannot be held responsible. It can. The process is just different, and it rewards a lawyer who already knows the rules.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            Why Jackson Memorial Is Different From a Private Hospital
          </h2>

          <p className="mb-5">
            Because Jackson Memorial is a government entity, claims against it are governed by Florida&rsquo;s sovereign immunity statute, <strong>Fla. Stat. § 768.28</strong>. That law:
          </p>

          <ul className="mb-8 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'Requires a formal Notice of Claim to be filed with the Florida Department of Financial Services and the Public Health Trust before a lawsuit can proceed',
              'Imposes a strict notice deadline — missing it can permanently bar your claim',
              'Caps most damages at $200,000 per person / $300,000 per incident, absent a special legislative claims bill',
              'Involves government attorneys and procedures most personal injury firms rarely encounter',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-10">
            This is exactly the kind of case many firms turn away — the process is slower, the damages are capped, and it requires experience most general injury lawyers do not have.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            Attorney Nwahiri Is Not Afraid to Sue the Government
          </h2>

          <p className="mb-6">
            Attorney Tobechuku Nwahiri has built part of his practice specifically around holding government agencies accountable — from hospitals like Jackson Memorial to law enforcement agencies in excessive force and civil rights cases. When content he wrote about suing Jackson Memorial Hospital reached a wide audience online, it resonated because most people assume a public hospital can get away with negligence. It cannot — the process is just different.
          </p>

          <p className="mb-10">
            Attorney Nwahiri has handled cases involving the Public Health Trust and understands the procedural requirements, the notice deadlines, and how to present these cases for maximum recovery within the statutory framework — including pursuing a legislative claims bill when the damages exceed the cap.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            What To Do If You Were Harmed at Jackson Memorial
          </h2>

          <ul className="mb-10 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'Request your complete medical records as soon as possible',
              'Do not sign any settlement or release from the Public Health Trust without legal review',
              'Contact an attorney immediately — the Notice of Claim deadline is short and strictly enforced',
              'Keep records of lost wages, ongoing treatment, and how the injury has affected your daily life',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Pull quote */}
          <blockquote
            className="my-10 py-6 px-8"
            style={{ borderLeft: '3px solid #B8973B', backgroundColor: '#F8F4EE' }}
          >
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              &ldquo;Most people assume a public hospital cannot be held responsible. It can. The process is just different — and it rewards a lawyer who already knows the rules.&rdquo;
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', marginTop: '12px', letterSpacing: '0.08em' }} className="uppercase font-semibold">
              — Attorney Tobechuku Nwahiri
            </p>
          </blockquote>

          {/* FAQ */}
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-6 mt-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-0" style={{ borderTop: '1px solid rgba(15,32,68,0.08)' }}>
            {[
              {
                q: 'Is Jackson Memorial Hospital protected from lawsuits?',
                a: 'No — but as a government-run facility it has procedural protections (notice deadlines, damage caps) that private hospitals do not. An experienced attorney can navigate these requirements.',
              },
              {
                q: 'How long do I have to file a claim against Jackson Memorial Hospital?',
                a: "Notice of Claim deadlines under Florida's sovereign immunity law are short and unforgiving. Contact an attorney immediately — do not wait to see how your recovery progresses.",
              },
              {
                q: 'What is the damage cap for claims against Jackson Memorial?',
                a: "Florida's sovereign immunity statute caps most damages at $200,000 per person and $300,000 per incident, absent a special legislative claims bill. An attorney can advise whether exceptions apply to your situation.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-6" style={{ borderBottom: '1px solid rgba(15,32,68,0.08)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.15rem', fontWeight: 600 }} className="mb-3">
                  {faq.q}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.85 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="mt-10" style={{ color: '#6b7280', fontSize: '12px', fontStyle: 'italic' }}>
            <strong style={{ color: '#374151' }}>Attorney Advertising.</strong> This content is for informational purposes only and does not constitute legal advice. Reading this article does not create an attorney-client relationship. Results vary based on the facts of each case.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Harmed at Jackson Memorial or another government facility?
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }} className="mb-8">
            Free, confidential case review · No fee unless we win · (305) 345-4117
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }}
              className="text-white font-semibold uppercase hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:3053454117"
              style={{ border: '1px solid rgba(184,151,59,0.5)', color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }}
              className="font-semibold uppercase hover:opacity-80 transition-opacity"
            >
              Call (305) 345-4117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
