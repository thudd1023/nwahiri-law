export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0F2044' }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Contact Nwahiri Law
          </h1>
          <p style={{ color: '#e5e7eb', fontFamily: 'Montserrat, sans-serif' }} className="text-lg leading-relaxed max-w-2xl">
            We are here to listen. Your consultation is free, confidential, and carries no obligation.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Phone</p>
            <a href="tel:3053454117" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="text-base font-medium hover:opacity-70 transition-opacity">(305) 345-4117</a>
          </div>
          <div>
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Email</p>
            <a href="mailto:info@nwahirilaw.com" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0F2044' }} className="text-base font-medium hover:opacity-70 transition-opacity">info@nwahirilaw.com</a>
          </div>
          <div>
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Office</p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }} className="text-sm">
              13499 Biscayne Blvd, Suite 107<br />North Miami, FL 33181
            </p>
          </div>
          <div>
            <p style={{ color: '#B8973B', fontFamily: 'Montserrat, sans-serif' }} className="text-xs font-semibold uppercase tracking-widest mb-2">Schedule Online</p>
            <a
              href="https://calendly.com/nwahirilaw/15min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#0F2044', fontFamily: 'Montserrat, sans-serif' }}
              className="inline-block text-white font-semibold px-5 py-2.5 rounded hover:opacity-80 transition-opacity text-sm"
            >
              Book on Calendly →
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <iframe
            width="100%"
            height="1000"
            src="https://app.practicepanther.com/IntakeForm/Create?templateGuid=9a7431e2-7132-4093-90bf-3fb8b0f922a6&isEmbed=true"
            frameBorder="0"
            allowFullScreen
            title="Contact Nwahiri Law — Intake Form"
          />
          <div className="mt-6 p-5 rounded border border-gray-100" style={{ backgroundColor: '#F8F4EE' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }} className="text-xs leading-relaxed">
              <strong style={{ color: '#0F2044' }}>Disclaimer:</strong> The information you submit through this form is confidential and will only be used to evaluate your potential claim. Submitting this form does not create an attorney-client relationship. Do not include highly sensitive information in the initial submission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
