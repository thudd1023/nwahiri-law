import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Nwahiri Law',
  description: 'Terms of Use for the Nwahiri Law website, including acceptable use, intellectual property, disclaimers, and governing law.',
};

export default function TermsOfUsePage() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'Montserrat, sans-serif', color: '#374151', lineHeight: 1.75, fontSize: '14px' }}>

      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 600, color: '#0F2044', marginBottom: '8px' }}>
        Terms of Use
      </h1>
      <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '48px' }}>
        Last Updated: May 2026 &nbsp;|&nbsp; Nwahiri Law, 13499 Biscayne Blvd, Suite 107, North Miami, FL 33181
      </p>

      {[
        {
          title: 'Acceptance of Terms',
          body: 'By accessing or using the Nwahiri Law website at nwahirilaw.com (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Site. We reserve the right to modify these Terms at any time. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.',
        },
        {
          title: 'Use of the Site',
          body: `You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the Site. You may not:

• Use the Site in any way that violates applicable federal, state, or local laws or regulations.
• Transmit any unsolicited or unauthorized advertising or promotional material.
• Attempt to gain unauthorized access to any portion of the Site or any systems connected to it.
• Engage in any conduct that could damage, disable, overburden, or impair the Site.
• Use automated tools to scrape, crawl, or extract data from the Site without our express written permission.`,
        },
        {
          title: 'Intellectual Property',
          body: 'All content on this Site — including but not limited to text, graphics, logos, images, audio clips, and software — is the property of Nwahiri Law or its content suppliers and is protected by applicable intellectual property laws. You may view and print pages from the Site for your personal, non-commercial use only. Any other use, reproduction, modification, distribution, transmission, or republication of Site content without express written permission from Nwahiri Law is strictly prohibited.',
        },
        {
          title: 'No Attorney-Client Relationship',
          body: 'Use of this Site and any communication through it does not create an attorney-client relationship between you and Nwahiri Law. Please review our Legal Disclaimer for full details.',
        },
        {
          title: 'Disclaimer of Warranties',
          body: 'The Site and all content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Nwahiri Law does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or usefulness of any information on the Site.',
        },
        {
          title: 'Limitation of Liability',
          body: 'To the fullest extent permitted by applicable law, Nwahiri Law, its attorneys, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site or its content — even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising out of or relating to these Terms or the Site shall not exceed the amount you paid to access the Site (which, for a free website, is zero).',
        },
        {
          title: 'Third-Party Links and Content',
          body: 'The Site may contain links to third-party websites or resources. These links are provided solely for convenience and do not imply endorsement of those third-party sites. We have no control over the content, products, or services offered by third parties and accept no responsibility or liability for their content, privacy practices, or practices.',
        },
        {
          title: 'Privacy',
          body: 'Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.',
        },
        {
          title: 'Indemnification',
          body: 'You agree to defend, indemnify, and hold harmless Nwahiri Law and its officers, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your violation of these Terms or your use of the Site.',
        },
        {
          title: 'Governing Law and Dispute Resolution',
          body: 'These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Site shall be resolved in the state or federal courts located in Miami-Dade County, Florida, and you consent to the personal jurisdiction of such courts.',
        },
        {
          title: 'Severability',
          body: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.',
        },
        {
          title: 'Entire Agreement',
          body: 'These Terms, together with our Privacy Policy and Legal Disclaimer, constitute the entire agreement between you and Nwahiri Law with respect to your use of the Site and supersede all prior agreements, understandings, or representations.',
        },
        {
          title: 'Contact Us',
          body: 'If you have questions about these Terms of Use, please contact us:\n\nNwahiri Law\n13499 Biscayne Blvd, Suite 107\nNorth Miami, FL 33181\nPhone: (305) 345-4117\nEmail: info@nwahirilaw.com',
        },
      ].map(({ title, body }) => (
        <div key={title} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#0F2044', marginBottom: '10px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ whiteSpace: 'pre-line' }}>{body}</p>
        </div>
      ))}

    </main>
  );
}
