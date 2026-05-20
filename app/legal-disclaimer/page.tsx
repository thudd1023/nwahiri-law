import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | Nwahiri Law',
  description: 'Legal disclaimer for Nwahiri Law regarding attorney advertising, no guarantee of results, and the distinction between general legal information and legal advice.',
};

export default function LegalDisclaimerPage() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'Montserrat, sans-serif', color: '#374151', lineHeight: 1.75, fontSize: '14px' }}>

      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 600, color: '#0F2044', marginBottom: '8px' }}>
        Legal Disclaimer
      </h1>
      <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '48px' }}>
        Last Updated: May 2026 &nbsp;|&nbsp; Nwahiri Law, 13499 Biscayne Blvd, Suite 107, North Miami, FL 33181
      </p>

      <div style={{ padding: '20px 24px', backgroundColor: '#F8F4EE', borderLeft: '3px solid #B8973B', marginBottom: '40px' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#0F2044', fontSize: '1.1rem', fontStyle: 'italic' }}>
          This website is attorney advertising. The information contained herein is for general informational purposes only and does not constitute legal advice. Reading this website or contacting Nwahiri Law does not create an attorney-client relationship.
        </p>
      </div>

      {[
        {
          title: 'Attorney Advertising',
          body: 'This website constitutes attorney advertising under the rules and regulations of the State Bar of Georgia and the Florida Bar. The hiring of a lawyer is an important decision that should not be based solely on advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.',
        },
        {
          title: 'No Attorney-Client Relationship',
          body: 'Nothing on this website — including any contact forms, email communications, or phone calls made before a formal engagement agreement is signed — creates an attorney-client relationship between you and Nwahiri Law or Attorney Tobechuku Nwahiri. An attorney-client relationship is only established when (1) you have consulted with Attorney Nwahiri about your matter, (2) Attorney Nwahiri has agreed to represent you, and (3) you have signed a written fee agreement. Do not send confidential information to our office until an attorney-client relationship has been formally established.',
        },
        {
          title: 'Not Legal Advice',
          body: 'The information provided on this website is intended for general informational and educational purposes only. It does not constitute legal advice and should not be relied upon as such. Laws vary by jurisdiction, and the application of law to specific facts and circumstances requires individualized legal counsel. You should not act, or refrain from acting, based solely on information found on this website. Consult a licensed attorney in your jurisdiction regarding your specific situation.',
        },
        {
          title: 'No Guarantee of Results',
          body: 'Every legal matter is unique, and outcomes depend on the specific facts and circumstances of each case. The case results, verdicts, and settlements described on this website are provided for informational purposes only and represent the results achieved in specific matters. They do not guarantee or predict a similar outcome in any future case. Past results do not guarantee future results. Results in individual cases will vary.',
        },
        {
          title: 'Jurisdictional Limitations',
          body: 'Nwahiri Law is licensed to practice law in the State of Georgia and the State of Florida only. Nothing on this website should be construed as an offer to represent clients in any jurisdiction in which the firm is not licensed. If you are located outside of Georgia or Florida, you should seek counsel from an attorney licensed in your jurisdiction.',
        },
        {
          title: 'Accuracy of Information',
          body: 'While we strive to keep the information on this website accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information on the Site. Laws change frequently, and the information on this website may not reflect the most current legal developments. Any reliance you place on such information is strictly at your own risk.',
        },
        {
          title: 'Third-Party Links',
          body: 'This website may contain links to third-party websites for informational purposes. We have no control over the content, nature, or availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed therein.',
        },
        {
          title: 'Contact and Questions',
          body: 'If you have questions about the content of this website or wish to inquire about legal representation, please contact Nwahiri Law at (305) 345-4117 or info@nwahirilaw.com. We are happy to discuss your situation during a free, confidential consultation.',
        },
      ].map(({ title, body }) => (
        <div key={title} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#0F2044', marginBottom: '10px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
            {title}
          </h2>
          <p>{body}</p>
        </div>
      ))}

    </main>
  );
}
