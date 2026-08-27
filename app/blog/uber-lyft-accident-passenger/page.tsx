import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Do If You\'re Injured as a Passenger in an Uber or Lyft | Nwahiri Law',
  description: 'Were you a passenger in an Uber or Lyft when an accident happened? Attorney Nwahiri explains what to do immediately, what insurance applies, and why going to the hospital matters — even if you feel fine.',
  alternates: { canonical: 'https://www.nwahirilaw.com/blog/uber-lyft-accident-passenger' },
  openGraph: {
    title: 'What to Do If You\'re Injured as a Passenger in an Uber or Lyft',
    description: 'Rideshare passenger in an accident? You have rights against the driver, Uber/Lyft, and other parties. Here\'s exactly what to do — and why going to the hospital right away matters.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Injured as a Passenger in an Uber or Lyft? Here\'s What to Do.',
      description: 'If you were hurt as a rideshare passenger, multiple insurance policies may apply — and the steps you take in the hours and days after the crash can make or break your case.',
      author: { '@type': 'Person', name: 'Tobechuku Nwahiri', jobTitle: 'Attorney at Law' },
      publisher: { '@type': 'LegalService', name: 'Nwahiri Law', url: 'https://www.nwahirilaw.com' },
      url: 'https://www.nwahirilaw.com/blog/uber-lyft-accident-passenger',
      datePublished: '2026-06-10',
      keywords: 'Uber accident passenger, Lyft accident passenger, rideshare accident attorney, what to do after Uber accident, Uber Lyft injury claim Georgia Florida',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Whose insurance pays if I am injured as an Uber or Lyft passenger?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you are a confirmed passenger in an active Uber or Lyft trip, the rideshare company\'s $1 million liability policy applies. If the at-fault driver was a third party (not your Uber/Lyft driver), their insurance is primary. An attorney can identify every policy available to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I go to the hospital after an Uber or Lyft accident even if I feel fine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — always. Traumatic brain injury (TBI), including concussion, whiplash, and internal injuries can be present without immediate pain. Symptoms often develop 24–72 hours after a crash. Going to the ER the same day creates the medical documentation your case depends on.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I accept Uber or Lyft\'s settlement offer after an accident?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Do not accept any settlement or sign any release without speaking to an attorney first. Rideshare company offers are typically far below the full value of your claim, and signing a release ends your ability to pursue additional compensation.',
          },
        },
      ],
    },
  ],
};

const steps = [
  {
    n: '01',
    heading: 'Call 911 — even if injuries seem minor',
    body: 'A police report creates an official record of the crash. Without it, the rideshare company and their insurer will dispute the facts. Request an ambulance even if you think you are not badly hurt.',
  },
  {
    n: '02',
    heading: 'Go to the emergency room the same day',
    body: 'This is the single most important step. Do not wait to see how you feel the next day. Traumatic brain injury — including concussion — and soft tissue injuries often produce no immediate pain. The adrenaline of a crash masks symptoms that emerge 24–72 hours later. Going to the ER immediately creates the medical documentation your case depends on, and tells the insurance company your injuries were serious enough to seek same-day treatment.',
  },
  {
    n: '03',
    heading: 'Screenshot your ride in the app',
    body: 'Before closing the Uber or Lyft app, screenshot your active trip — it shows the driver\'s name, vehicle, and trip status at the moment of the crash. This is critical to establish which insurance tier applies.',
  },
  {
    n: '04',
    heading: 'Collect information at the scene',
    body: 'Get the names, insurance information, and contact details of all drivers involved. Photograph all vehicles, the crash scene, road conditions, and your visible injuries. Get the names and phone numbers of any witnesses.',
  },
  {
    n: '05',
    heading: 'Do not give statements to insurance adjusters',
    body: 'The rideshare company\'s insurance team will contact you quickly. Do not give a recorded statement, accept any payment, or sign anything without speaking to an attorney. Anything you say can be used to reduce your recovery.',
  },
  {
    n: '06',
    heading: 'Follow every treatment instruction',
    body: 'After your ER visit, follow up with every specialist your doctor refers you to — neurologist, orthopedist, physical therapist. Do not skip appointments. A gap in treatment gives the insurance company grounds to argue your injuries were not serious or that something else caused them.',
  },
  {
    n: '07',
    heading: 'Contact an attorney before speaking to anyone else',
    body: 'Rideshare accident claims involve multiple insurance policies and multiple potentially liable parties. An experienced attorney identifies every source of recovery and protects you from the tactics insurers use to minimize your claim.',
  },
];

export default function UberLyftPassengerPage() {
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
            Injured as a Passenger in an Uber or Lyft? Here&rsquo;s What to Do.
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
            Being a passenger in an Uber or Lyft when a crash happens puts you in a complicated position. You did everything right — you got in a rideshare instead of driving. But now you are injured, confused about who is responsible, and likely being contacted by insurance companies who do not have your interests in mind.
          </p>
          <p className="mb-10">
            Here is exactly what to do — and why the steps you take in the first few hours matter enormously.
          </p>

          {/* TBI Warning Box */}
          <div className="mb-10 p-6" style={{ backgroundColor: '#0F2044', borderLeft: '4px solid #B8973B' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Critical: Go to the Hospital — Even If You Feel Fine
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.8 }}>
              Sudden neck movement and head impacts — even in low-speed crashes — can cause traumatic brain injury (TBI). A concussion <em>is</em> a TBI. Symptoms including headaches, confusion, memory problems, dizziness, and mood changes often do not appear until 24–72 hours after the crash. By then, if you have not been evaluated, the insurance company will argue your injuries were caused by something else. Get to an emergency room the same day.
            </p>
          </div>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-8">
            7 Steps to Take After an Uber or Lyft Accident as a Passenger
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

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            What Insurance Applies When You Are an Uber or Lyft Passenger?
          </h2>

          <p className="mb-5">
            When you are a confirmed passenger in an active trip, Uber and Lyft each maintain a <strong>$1 million per-occurrence liability policy</strong>. This applies regardless of which driver caused the crash:
          </p>

          <ul className="mb-8 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'If your Uber or Lyft driver caused the crash — Uber/Lyft\'s $1M policy covers your injuries',
              'If another driver caused the crash — that driver\'s insurance is primary; Uber/Lyft\'s policy may provide supplemental coverage',
              'If both drivers share fault — multiple policies may apply',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span style={{ fontSize: '14px' }}>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-10">
            Do not assume the rideshare company will pay you fairly. Their insurance team works for them, not for you. An attorney identifies every applicable policy and pursues maximum recovery from all available sources.
          </p>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-5">
            Understand the TBI Risk — Even From Low-Speed Crashes
          </h2>

          <p className="mb-5">
            One of the most commonly missed injuries after a rideshare accident is traumatic brain injury. Many people associate TBI with severe impacts — but even a crash at 25–30 mph can cause the brain to move inside the skull. A concussion is a form of TBI.
          </p>

          <ul className="mb-6 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'Headache or pressure in the head',
              'Nausea or vomiting',
              'Dizziness, balance problems, or blurred vision',
              'Difficulty concentrating or remembering the crash',
              'Feeling slowed down or foggy',
              'Sleep disturbances — sleeping more than usual, or unable to sleep',
              'Mood changes, irritability, or anxiety appearing days after the crash',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span style={{ fontSize: '14px' }}>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-10">
            If you experience any of these symptoms after an Uber or Lyft accident, tell your doctor immediately. A TBI diagnosis substantially affects the value of your case — but only if it is documented. Follow your doctor&rsquo;s treatment plan completely, including any referrals to specialists.
          </p>

          {/* Pull quote */}
          <blockquote className="my-10 py-6 px-8" style={{ borderLeft: '3px solid #B8973B', backgroundColor: '#F8F4EE' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              &ldquo;A concussion is a traumatic brain injury. People minimize it because they can walk away from the crash — but TBI can affect your work, your relationships, and your quality of life for months or years. Get evaluated the same day.&rdquo;
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
                q: 'Whose insurance pays if I am injured as an Uber or Lyft passenger?',
                a: "When you are a confirmed passenger in an active Uber or Lyft trip, the rideshare company's $1 million liability policy applies. If the at-fault driver was a third party, their insurance is primary. An attorney identifies every policy available to you.",
              },
              {
                q: 'Should I go to the hospital after an Uber or Lyft accident even if I feel fine?',
                a: 'Yes — always. Traumatic brain injury (TBI), including concussion, and soft tissue injuries can be present without immediate pain. Symptoms often develop 24–72 hours after a crash. Going to the ER the same day creates the medical documentation your case depends on.',
              },
              {
                q: "Should I accept Uber or Lyft's settlement offer after an accident?",
                a: "No. Do not accept any settlement or sign any release without speaking to an attorney first. Rideshare company offers are typically far below the full value of your claim, and signing a release ends your ability to pursue additional compensation.",
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
            <strong style={{ color: '#374151' }}>Attorney Advertising.</strong> This content is for informational purposes only and does not constitute legal advice. Reading this article does not create an attorney-client relationship. Results vary based on the facts of each case.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F2044' }} className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2 }} className="text-3xl md:text-4xl mb-4">
            Injured as an Uber or Lyft passenger?
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
