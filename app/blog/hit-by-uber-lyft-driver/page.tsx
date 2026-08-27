import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hit by an Uber or Lyft Driver? What to Do If You\'re in Another Vehicle | Nwahiri Law',
  description: 'If an Uber or Lyft driver hit your car, multiple insurance policies may apply depending on what the driver was doing. Attorney Nwahiri explains your options in Georgia and Florida.',
  alternates: { canonical: 'https://www.nwahirilaw.com/blog/hit-by-uber-lyft-driver' },
  openGraph: {
    title: 'Hit by an Uber or Lyft Driver in Another Vehicle? Here\'s What to Do.',
    description: 'When a rideshare driver causes an accident with your vehicle, Uber or Lyft\'s insurance may apply — but it depends on the driver\'s status. Here\'s what you need to know.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Hit by an Uber or Lyft Driver? What to Do If You\'re in Another Vehicle.',
      description: 'When a rideshare driver hits your vehicle, Uber or Lyft\'s insurance coverage depends on the driver\'s status at the time of the crash. Here are the steps to take and what insurance applies.',
      author: { '@type': 'Person', name: 'Tobechuku Nwahiri', jobTitle: 'Attorney at Law' },
      publisher: { '@type': 'LegalService', name: 'Nwahiri Law', url: 'https://www.nwahirilaw.com' },
      url: 'https://www.nwahirilaw.com/blog/hit-by-uber-lyft-driver',
      datePublished: '2026-06-10',
      keywords: 'hit by Uber driver, hit by Lyft driver, Uber accident another vehicle, rideshare driver hit my car, Uber Lyft accident attorney Georgia Florida',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Uber or Lyft\'s insurance cover me if their driver hit my car?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the driver\'s status. If the driver had a passenger or was en route to pick one up, Uber or Lyft\'s $1 million liability policy applies. If the driver only had the app on with no active trip, a lower-tier policy of $50,000/$100,000/$25,000 applies. If the app was off, only the driver\'s personal auto insurance applies.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I go to the hospital after being hit by an Uber or Lyft driver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — go the same day, even if you feel fine. Whiplash, concussion, and other TBI symptoms often do not appear until 24–72 hours after impact. A concussion is a traumatic brain injury. Documenting your injuries at the ER the same day protects your claim.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if Uber or Lyft\'s insurance applies to my accident?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The driver's app status at the time of the crash determines which coverage tier applies. An attorney can obtain this information through the discovery process if the driver or rideshare company won't provide it voluntarily.",
          },
        },
      ],
    },
  ],
};

const coverageTiers = [
  {
    phase: 'App off',
    label: 'No Uber/Lyft coverage',
    detail: 'The driver\'s personal auto insurance is the only coverage. Uber and Lyft\'s policies do not apply when the driver is not logged into the app.',
    highlight: false,
  },
  {
    phase: 'App on, no trip',
    label: 'Limited coverage: $50K / $100K / $25K',
    detail: 'If the driver was logged in but had no active ride request, Uber/Lyft provides limited liability coverage: $50,000 per person, $100,000 per accident, $25,000 property damage. The driver\'s personal insurance is primary.',
    highlight: false,
  },
  {
    phase: 'En route to pickup or during trip',
    label: '$1 million liability policy',
    detail: 'Once a driver accepts a ride request and is en route to the rider — or during an active trip — Uber and Lyft\'s full $1 million per-occurrence liability policy applies. This is the coverage that matters most in serious injury cases.',
    highlight: true,
  },
];

const steps = [
  {
    n: '01',
    heading: 'Call 911 and request an ambulance',
    body: 'A police report is essential. Get an ambulance even if you believe your injuries are minor — adrenaline masks pain, and TBI symptoms may not appear for hours or days.',
  },
  {
    n: '02',
    heading: 'Go to the ER the same day — this is non-negotiable',
    body: 'Sudden neck movement and head impact from any collision — even at low speeds — can cause traumatic brain injury. A concussion is a TBI. Symptoms like headache, dizziness, nausea, confusion, and memory fog often emerge 24–72 hours after the crash. Waiting to "see how you feel" means no same-day medical documentation. That gap is one of the first things an insurance adjuster will use against you.',
  },
  {
    n: '03',
    heading: 'Document the driver\'s rideshare status',
    body: "Ask the driver whether they had the Uber or Lyft app on, and whether they were on an active trip. If safe to do so, photograph their phone screen showing the app. If they won't say, note the time of the crash — an attorney can obtain app data through the discovery process.",
  },
  {
    n: '04',
    heading: 'Collect all scene information',
    body: "Get the driver's name, license plate, insurance information, and the rideshare company's name. Photograph all vehicles, damage, road conditions, traffic signals, and skid marks. Get names and numbers from every witness.",
  },
  {
    n: '05',
    heading: 'Do not speak to the rideshare company\'s insurer',
    body: "Uber and Lyft's insurance carriers will contact you. Do not give a recorded statement, accept any payment, or sign any document without first speaking to an attorney. Initial settlement offers are nearly always far below what your case is worth.",
  },
  {
    n: '06',
    heading: 'Follow all medical treatment through to completion',
    body: 'Attend every follow-up appointment. See every specialist your doctor refers you to — neurologist, orthopedic surgeon, physical therapist. Insurance companies monitor treatment compliance. Skipping appointments gives them grounds to argue your injuries healed or were not serious.',
  },
  {
    n: '07',
    heading: 'Contact an attorney before anyone else',
    body: 'Rideshare accident claims are legally complex — multiple insurance tiers, multiple potentially liable parties, and rideshare companies with experienced defense teams. The sooner you retain an attorney, the better your evidence and the stronger your claim.',
  },
];

export default function HitByUberLyftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: '#0A1A38' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.08em' }} className="uppercase font-semibold mb-8 inline-block hover:text-white transition-colors">
            &larr; Back to Blog
          </Link>
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em' }} className="uppercase font-semibold mb-4 mt-6">
            Rideshare Accidents · Georgia &amp; Florida
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl mb-6">
            Hit by an Uber or Lyft Driver? Here&rsquo;s What to Do If You&rsquo;re in Another Vehicle.
          </h1>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', marginTop: '1.25rem' }} className="flex items-center gap-6">
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>By Attorney Tobechuku Nwahiri</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>Nwahiri Law — Georgia &amp; Florida</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article style={{ backgroundColor: 'white' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', lineHeight: 1.9, color: '#374151' }}>

          <p className="mb-6">
            When an Uber or Lyft driver causes an accident that injures you in another vehicle, the insurance picture is more complicated than a standard car accident claim — and getting it wrong can cost you significantly.
          </p>
          <p className="mb-10">
            The key question is: <strong>what was the driver doing at the time of the crash?</strong> The answer determines which insurance policy applies — and how much coverage is available to you.
          </p>

          {/* TBI Warning */}
          <div className="mb-10 p-6" style={{ backgroundColor: '#0F2044', borderLeft: '4px solid #B8973B' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Go to the Hospital Immediately — Even Without Obvious Pain
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.8 }}>
              Any collision that involves sudden neck movement or your head striking a surface can cause a traumatic brain injury. A concussion <em>is</em> a TBI — and symptoms including headache, dizziness, confusion, and memory problems frequently do not appear until 24–72 hours after the crash. Go to the emergency room the same day, describe every symptom, and follow your doctor&rsquo;s and attorney&rsquo;s directions for all follow-up care.
            </p>
          </div>

          {/* Coverage tiers */}
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-6">
            Which Insurance Applies Depends on the Driver&rsquo;s Status
          </h2>
          <div className="space-y-4 mb-10">
            {coverageTiers.map((tier, i) => (
              <div key={i} className="p-5" style={{
                backgroundColor: tier.highlight ? '#F8F4EE' : 'white',
                border: tier.highlight ? '1px solid #B8973B' : '1px solid rgba(15,32,68,0.12)',
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.15em', color: '#B8973B' }} className="uppercase font-semibold">{tier.phase}</span>
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.1rem', fontWeight: 600 }} className="mb-2">{tier.label}</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563', fontSize: '13px', lineHeight: 1.8 }}>{tier.detail}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-8">
            7 Steps to Take After Being Hit by a Rideshare Driver
          </h2>
          <div className="space-y-8 mb-12">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-6">
                <div style={{ color: '#B8973B', fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, width: '2.5rem' }}>
                  {step.n}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.2rem', fontWeight: 600 }} className="mb-2">{step.heading}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.85, color: '#4b5563' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote className="my-10 py-6 px-8" style={{ borderLeft: '3px solid #B8973B', backgroundColor: '#F8F4EE' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              &ldquo;The driver&rsquo;s app status determines which insurance applies — and that information disappears quickly. The first call you make after calling 911 should be to an attorney.&rdquo;
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280', fontSize: '12px', marginTop: '12px', letterSpacing: '0.08em' }} className="uppercase font-semibold">
              — Attorney Tobechuku Nwahiri
            </p>
          </blockquote>

          {/* FAQ */}
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-6 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-0" style={{ borderTop: '1px solid rgba(15,32,68,0.08)' }}>
            {[
              {
                q: "Does Uber or Lyft's insurance cover me if their driver hit my car?",
                a: "It depends on the driver's status. If the driver had a passenger or was en route to pick one up, Uber or Lyft's $1 million liability policy applies. If the driver only had the app on with no active trip, a lower-tier policy of $50,000/$100,000/$25,000 applies. If the app was off, only the driver's personal auto insurance applies.",
              },
              {
                q: 'Should I go to the hospital after being hit by an Uber or Lyft driver?',
                a: 'Yes — go the same day, even if you feel fine. Whiplash, concussion, and other TBI symptoms often do not appear until 24–72 hours after impact. A concussion is a traumatic brain injury. Documenting your injuries at the ER the same day protects your claim.',
              },
              {
                q: "How do I know if Uber or Lyft's insurance applies to my accident?",
                a: "The driver's app status at the time of the crash determines which coverage tier applies. An attorney can obtain this information through the discovery process if the driver or rideshare company won't provide it voluntarily.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-6" style={{ borderBottom: '1px solid rgba(15,32,68,0.08)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.15rem', fontWeight: 600 }} className="mb-3">{faq.q}</h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.85 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/practice-areas/uber-lyft-accidents" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              Learn about our Uber &amp; Lyft accident practice &rarr;
            </Link>
          </div>

          <p className="mt-10" style={{ color: '#6b7280', fontSize: '12px', fontStyle: 'italic' }}>
            <strong style={{ color: '#374151' }}>Attorney Advertising.</strong> This content is for informational purposes only and does not constitute legal advice. Results vary based on the facts of each case.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Hit by an Uber or Lyft driver?
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }} className="mb-8">
            Free, confidential case review · No fee unless we win · Georgia &amp; Florida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation" style={{ backgroundColor: '#BE1823', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="text-white font-semibold uppercase hover:opacity-90 transition-opacity">
              Get a Free Consultation
            </Link>
            <a href="tel:3053454117" style={{ border: '1px solid rgba(184,151,59,0.5)', color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.12em', padding: '16px 32px' }} className="font-semibold uppercase hover:opacity-80 transition-opacity">
              Call (305) 345-4117
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
