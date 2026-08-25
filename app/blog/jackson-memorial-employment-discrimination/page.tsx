import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jackson Memorial Employment Discrimination Attorney | Nwahiri Law',
  description: 'Jackson Memorial Hospital employees who face discrimination, wrongful termination, or retaliation have civil rights protections. Attorney Nwahiri explains your options.',
  alternates: { canonical: 'https://www.nwahirilaw.com/blog/jackson-memorial-employment-discrimination' },
  openGraph: {
    title: 'Jackson Memorial Employment Discrimination Attorney | Nwahiri Law',
    description: 'If you work at Jackson Memorial and faced discrimination, retaliation, or wrongful termination, federal and Florida civil rights laws may protect you.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Jackson Memorial Employment Discrimination: What Employees Need to Know',
      description: 'Jackson Memorial Hospital is one of Miami-Dade\'s largest employers. Employees who face discrimination, retaliation, or wrongful termination may have claims under federal and Florida law.',
      author: { '@type': 'Person', name: 'Tobechuku Nwahiri', jobTitle: 'Attorney at Law' },
      publisher: { '@type': 'LegalService', name: 'Nwahiri Law', url: 'https://www.nwahirilaw.com' },
      url: 'https://www.nwahirilaw.com/blog/jackson-memorial-employment-discrimination',
      datePublished: '2026-06-01',
      keywords: 'Jackson Memorial employment discrimination, Jackson Memorial wrongful termination, Miami-Dade hospital discrimination attorney, Public Health Trust employee rights',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I sue Jackson Memorial Hospital for employment discrimination?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Jackson Memorial employees are protected by Title VII of the Civil Rights Act, the Americans with Disabilities Act, the Age Discrimination in Employment Act, and the Florida Civil Rights Act. Because Jackson Memorial is operated by the Public Health Trust (a government entity), additional procedural steps may apply, including EEOC charge filing deadlines.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the deadline to file an employment discrimination claim against Jackson Memorial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For federal claims under Title VII, you generally must file an EEOC charge within 300 days of the discriminatory act. Florida state law claims have their own deadlines. Missing these deadlines can permanently bar your claim — contact an attorney immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Public Health Trust status affect my employment discrimination claim?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Potentially. Because Jackson Memorial is operated by a government entity, sovereign immunity rules and special procedural requirements may apply to some claims. An experienced civil rights attorney will identify which laws give you the strongest path forward.',
          },
        },
      ],
    },
  ],
};

export default function JacksonMemorialEmploymentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            Civil Rights · Employment · Miami-Dade
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl mb-6">
            Jackson Memorial Employment Discrimination: What Employees Need to Know
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
            Jackson Memorial Hospital is one of the largest public employers in Miami-Dade County — with thousands of nurses, physicians, technicians, administrative staff, and support workers. As a government-operated institution run by the Public Health Trust, it is subject to federal civil rights laws and, in some cases, Florida's own civil rights statutes.
          </p>

          <p className="mb-10">
            If you work or worked at Jackson Memorial and experienced discrimination, harassment, retaliation, or wrongful termination, you may have actionable claims — and the deadline to pursue them can be short.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            What Laws Protect Jackson Memorial Employees?
          </h2>

          <p className="mb-5">
            As an employee of the Public Health Trust, you are protected by a layered set of federal and Florida laws:
          </p>

          <ul className="mb-8 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'Title VII of the Civil Rights Act — prohibits discrimination based on race, color, religion, sex, and national origin',
              'Americans with Disabilities Act (ADA) — protects employees with disabilities from discrimination and requires reasonable accommodation',
              'Age Discrimination in Employment Act (ADEA) — protects employees 40 and older from age-based discrimination',
              'Florida Civil Rights Act (FCRA) — mirrors federal protections and adds state-specific remedies',
              '42 U.S.C. § 1983 — allows civil rights claims against government actors, including public hospital administrators',
              'First Amendment protections — government employees who speak out on matters of public concern have constitutional protections private employees do not',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            Common Discrimination Scenarios at Jackson Memorial
          </h2>

          <ul className="mb-10 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'Denied promotion or advancement based on race, gender, or national origin',
              'Terminated or disciplined after reporting misconduct, unsafe conditions, or fraud (whistleblower retaliation)',
              'Subjected to a hostile work environment based on race, sex, or disability',
              'Denied reasonable accommodation for a medical condition or disability',
              'Passed over for positions or pay increases because of age',
              'Retaliated against for filing a prior discrimination complaint or supporting a coworker\'s complaint',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            The Government Employer Factor
          </h2>

          <p className="mb-6">
            Because Jackson Memorial is operated by the Public Health Trust — a Miami-Dade County government agency — your employment discrimination case has features that a claim against a private hospital would not. Government employers may raise sovereign immunity defenses on certain claims, and some causes of action require exhausting administrative remedies (like an EEOC charge) before a lawsuit can be filed.
          </p>

          <p className="mb-10">
            The EEOC charge deadline for federal discrimination claims is typically <strong>300 days</strong> from the discriminatory act. Missing this deadline can permanently extinguish your federal claim. State claims under the Florida Civil Rights Act must be filed with the Florida Commission on Human Relations within <strong>365 days</strong>.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            What to Do If You Experienced Discrimination at Jackson Memorial
          </h2>

          <ul className="mb-10 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'Document everything — save emails, texts, HR communications, and performance reviews',
              'Note dates, witnesses, and specific statements made to you',
              'Do not sign any separation agreement or release without legal review',
              'Contact an attorney before filing with the EEOC — the agency process protects your rights but does not maximize your recovery on its own',
              'Act quickly — deadlines for discrimination claims are measured in days, not years',
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
              &ldquo;Government employees have rights that private employees do not — but they also face procedural traps that private employees don&rsquo;t. The window to act is short. Do not wait.&rdquo;
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
                q: 'Can I sue Jackson Memorial Hospital for employment discrimination?',
                a: 'Yes. Jackson Memorial employees are protected by Title VII, the ADA, the ADEA, and the Florida Civil Rights Act. Because Jackson Memorial is a government entity, additional procedural steps — including EEOC charge filing deadlines — may apply. Contact an attorney before those deadlines pass.',
              },
              {
                q: 'What is the deadline to file an employment discrimination claim against Jackson Memorial?',
                a: 'For federal claims under Title VII, you generally must file an EEOC charge within 300 days of the discriminatory act. Florida state law claims must be filed with the Florida Commission on Human Relations within 365 days. Missing these deadlines can permanently bar your claim.',
              },
              {
                q: 'Does the Public Health Trust status affect my employment discrimination claim?',
                a: 'Potentially. Because Jackson Memorial is operated by a government entity, sovereign immunity rules and special procedural requirements may apply to some claims. An experienced civil rights attorney will identify which laws give you the strongest path forward.',
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
            Experienced discrimination at Jackson Memorial?
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }} className="mb-8">
            Free, confidential case review · Time-sensitive deadlines apply · (305) 345-4117
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
