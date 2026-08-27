import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Do After Being Hit by a Semi-Truck or Commercial Vehicle | Nwahiri Law',
  description: 'Hit by a semi-truck, 18-wheeler, or commercial vehicle? The steps you take immediately after the crash determine what evidence survives and what your claim is worth. Attorney Nwahiri explains.',
  alternates: { canonical: 'https://www.nwahirilaw.com/blog/what-to-do-after-commercial-vehicle-accident' },
  openGraph: {
    title: 'What to Do After Being Hit by a Semi-Truck or Commercial Vehicle',
    description: 'Truck accident claims are different from regular car accidents. Black box data disappears. Trucking companies deploy adjusters immediately. Here is what to do.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What to Do After Being Hit by a Semi-Truck or Commercial Vehicle',
      description: 'Commercial truck accidents involve federal regulations, large insurance policies, and evidence that disappears fast. These are the steps to take immediately after a crash with a semi-truck, 18-wheeler, or commercial vehicle.',
      author: { '@type': 'Person', name: 'Tobechuku Nwahiri', jobTitle: 'Attorney at Law' },
      publisher: { '@type': 'LegalService', name: 'Nwahiri Law', url: 'https://www.nwahirilaw.com' },
      url: 'https://www.nwahirilaw.com/blog/what-to-do-after-commercial-vehicle-accident',
      datePublished: '2026-06-10',
      keywords: 'what to do after truck accident, semi-truck accident steps, commercial vehicle accident attorney, truck accident evidence Georgia Florida, 18-wheeler accident what to do',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should I do immediately after being hit by a semi-truck?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call 911, do not move if you may be injured, and get emergency medical attention. Go to the ER the same day even if you feel fine — TBI and internal injuries may not be immediately painful. Photograph the scene, collect the truck driver\'s information including their employer and DOT number, and contact an attorney before speaking with the trucking company\'s insurer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does black box data survive after a truck accident?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "ECM (black box) data on commercial trucks can be overwritten within 30 days — sometimes sooner — if the truck continues operating. A legal preservation letter must be sent to the trucking company immediately to prevent destruction of this evidence.",
          },
        },
        {
          '@type': 'Question',
          name: 'Should I see a doctor after a truck accident if I don\'t feel hurt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — go to the emergency room the same day. Traumatic brain injury (TBI), including concussion, and soft tissue injuries are common in truck accidents and frequently produce no immediate pain. Even a concussion is a TBI. Symptoms can develop 24–72 hours after the crash. Same-day medical documentation protects your claim.',
          },
        },
      ],
    },
  ],
};

const steps = [
  {
    n: '01',
    heading: 'Call 911 — do not move if you may be injured',
    body: 'The force of a commercial truck collision can cause spinal, neck, and head injuries that are worsened by movement. Wait for emergency responders unless you are in immediate danger from fire or traffic. A police report is mandatory for truck accident claims.',
  },
  {
    n: '02',
    heading: 'Go to the emergency room the same day — even if you feel fine',
    body: 'This is the most critical step after a commercial vehicle accident. Adrenaline suppresses pain after a crash. Traumatic brain injury — including concussion — may produce no symptoms for 24–72 hours. Internal injuries can be life-threatening without visible signs. Sudden neck movement (whiplash) damages soft tissue that does not show on X-rays. Going to the ER the same day creates the medical record your case depends on. Follow every instruction from your doctors, attend every follow-up, and see every specialist they refer you to. Do not stop treatment until your doctors say you have reached maximum medical improvement.',
  },
  {
    n: '03',
    heading: 'Photograph and document everything at the scene',
    body: "Photograph all vehicles from multiple angles, the truck's license plate and DOT number, the company name on the truck, skid marks and road conditions, traffic signals and signage, your visible injuries, and anything the driver says at the scene. If witnesses are present, get their names and phone numbers before they leave.",
  },
  {
    n: '04',
    heading: 'Get the truck driver\'s employer information — not just their personal info',
    body: "Write down the trucking company's name, the truck's USDOT number (displayed on the cab), the driver's CDL information, the cargo shipper if visible, and the name of the insurance company on the driver's documents. This information ties the crash to the commercial entity that bears responsibility.",
  },
  {
    n: '05',
    heading: 'Do not speak to the trucking company or their insurer',
    body: "The trucking company's insurance carrier will contact you — sometimes within hours of the crash. Do not give a recorded statement, accept any payment, or sign any release. Commercial trucking insurers have experienced claims teams whose job is to minimize your recovery. Anything you say can be used against you.",
  },
  {
    n: '06',
    heading: 'Contact an attorney immediately — black box data disappears fast',
    body: "ECM (black box) data on a commercial truck records speed, braking, steering input, and engine data in the moments before impact. This evidence is irreplaceable — but it can be overwritten within 30 days if the truck goes back into service. An attorney sends a legal preservation letter to the trucking company immediately, triggering their duty to preserve all evidence. Every day you wait is a day that evidence may be lost.",
  },
  {
    n: '07',
    heading: 'Follow all medical instructions — completely',
    body: "Insurance adjusters and defense attorneys monitor your treatment. Skipping appointments, stopping physical therapy, or failing to see a referred specialist gives them grounds to argue that your injuries were minor or that you contributed to their severity. Follow your doctor's and attorney's guidance for every aspect of your care.",
  },
];

export default function CommercialVehicleAccidentPage() {
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
            Truck Accidents · Georgia &amp; Florida
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1 }} className="text-4xl md:text-5xl mb-6">
            What to Do After Being Hit by a Semi-Truck or Commercial Vehicle
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
            Being hit by a semi-truck, 18-wheeler, delivery vehicle, or other commercial truck is categorically different from a regular car accident. The vehicles weigh 20–30 times more than a passenger car. The damage is severe. And the other side — the trucking company and their commercial insurer — starts building their defense the moment the crash happens.
          </p>
          <p className="mb-10">
            The steps you take in the hours immediately after the crash determine what evidence survives, how strong your medical documentation is, and ultimately, what your case is worth.
          </p>

          {/* TBI Warning */}
          <div className="mb-10 p-6" style={{ backgroundColor: '#0F2044', borderLeft: '4px solid #B8973B' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              A Concussion Is a Traumatic Brain Injury — Go to the Hospital Now
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat, sans-serif', fontSize: '13px', lineHeight: 1.8 }}>
              Commercial truck accidents routinely cause traumatic brain injury — including concussion — even when the victim walks away from the scene. The force of impact causes the brain to move inside the skull. Symptoms including headache, dizziness, confusion, memory loss, sleep changes, and mood shifts often do not appear until 24–72 hours later. If you hit your head or experienced sudden neck movement in the crash, go to the emergency room today. Follow your doctor&rsquo;s instructions for all follow-up care, including specialist referrals. Your attorney will coordinate with your treatment team to document the full impact of your injury on your case.
            </p>
          </div>

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.2 }} className="mb-8">
            7 Steps to Take After a Commercial Truck Accident
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
            Why Truck Accident Evidence Disappears Faster Than You Think
          </h2>

          <p className="mb-5">
            Commercial trucks carry multiple types of evidence that are irreplaceable — and all of it has a short shelf life:
          </p>

          <ul className="mb-8 space-y-3" style={{ paddingLeft: '1.5rem' }}>
            {[
              'ECM (black box) data — records speed, braking, and steering input before impact. Can be overwritten within 30 days if the truck returns to service.',
              'Driver electronic logs (ELDs) — record hours of service, rest breaks, and driving time. Stored electronically and can be purged.',
              'Dashcam and cargo camera footage — some carriers retain footage as little as 72 hours unless preserved.',
              'Maintenance and inspection records — reveal prior brake failures, tire problems, or load violations.',
              'Cell phone records — show whether the driver was on the phone or using an app at the time of the crash.',
              'Surveillance camera footage from nearby businesses or intersections — often overwritten within 1–2 weeks.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#B8973B', flexShrink: 0, marginTop: '2px' }}>—</span>
                <span style={{ fontSize: '14px' }}>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-10">
            The moment an attorney is retained, a preservation letter goes to the trucking company creating a legal obligation to retain all of this evidence. The trucking company&rsquo;s legal team is already working on their case. You need yours working on yours immediately.
          </p>

          {/* Pull quote */}
          <blockquote className="my-10 py-6 px-8" style={{ borderLeft: '3px solid #B8973B', backgroundColor: '#F8F4EE' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              &ldquo;The trucking company has a legal team. Their insurer has a claims department. They start building their case while you&rsquo;re still at the hospital. Your attorney needs to start the same day.&rdquo;
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
                q: 'What should I do immediately after being hit by a semi-truck?',
                a: "Call 911, do not move if you may be injured, and get emergency medical attention. Go to the ER the same day even if you feel fine — TBI and internal injuries may not be immediately painful. Photograph the scene, collect the truck driver's information including their employer and DOT number, and contact an attorney before speaking with the trucking company's insurer.",
              },
              {
                q: 'How long does black box data survive after a truck accident?',
                a: "ECM (black box) data on commercial trucks can be overwritten within 30 days — sometimes sooner — if the truck continues operating. A legal preservation letter must be sent to the trucking company immediately to prevent destruction of this evidence.",
              },
              {
                q: "Should I see a doctor after a truck accident if I don't feel hurt?",
                a: "Yes — go to the emergency room the same day. Traumatic brain injury (TBI), including concussion, and soft tissue injuries are common in truck accidents and frequently produce no immediate pain. Even a concussion is a TBI. Symptoms can develop 24–72 hours after the crash. Same-day medical documentation protects your claim.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-6" style={{ borderBottom: '1px solid rgba(15,32,68,0.08)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.15rem', fontWeight: 600 }} className="mb-3">{faq.q}</h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.85 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <Link href="/practice-areas/truck-accidents/miami" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              Truck Accident Attorney — Miami &rarr;
            </Link>
            <Link href="/practice-areas/truck-accidents/atlanta" style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.08em' }} className="font-semibold uppercase hover:opacity-70">
              Truck Accident Attorney — Atlanta &rarr;
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
            Hit by a truck or commercial vehicle?
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
