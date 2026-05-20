import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nwahiri Law',
  description: 'Privacy Policy for Nwahiri Law including cookie policy, data collection practices, and your rights under applicable privacy laws.',
};

const section = (title: string, content: React.ReactNode) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#0F2044', marginBottom: '12px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
      {title}
    </h2>
    {content}
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px', fontFamily: 'Montserrat, sans-serif', color: '#374151', lineHeight: 1.75, fontSize: '14px' }}>

      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 600, color: '#0F2044', marginBottom: '8px' }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '48px' }}>
        Last Updated: May 2026 &nbsp;|&nbsp; Nwahiri Law, 13499 Biscayne Blvd, Suite 107, North Miami, FL 33181
      </p>

      {section('Overview', (
        <p>Nwahiri Law (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Firm&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website at nwahirilaw.com (the &ldquo;Site&rdquo;). Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.</p>
      ))}

      {section('Information We Collect', (
        <>
          <p><strong>Information You Provide Directly:</strong> When you contact us, submit a consultation request, or communicate with our office, we may collect your name, email address, phone number, and any information you voluntarily share about your legal matter.</p>
          <p style={{ marginTop: '12px' }}><strong>Information Collected Automatically:</strong> When you visit the Site, certain information is automatically collected, including your IP address, browser type, operating system, referring URLs, pages visited, and time spent on pages. This is collected through cookies and similar tracking technologies described below.</p>
        </>
      ))}

      {section('Cookie Policy', (
        <>
          <p>We use cookies and similar tracking technologies to improve your experience on our Site, analyze usage patterns, and deliver relevant advertising. Below is a description of the cookies we use:</p>

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8973B', marginBottom: '10px' }}>
              Essential Cookies
            </h3>
            <p>These cookies are necessary for the Site to function properly and cannot be disabled. They do not store any personally identifiable information.</p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8973B', marginBottom: '10px' }}>
              Analytics Cookies — Google Analytics
            </h3>
            <p>We use Google Analytics (provided by Google LLC) to understand how visitors interact with our Site. Google Analytics collects information such as how often users visit the Site, what pages they visit, and what other sites they used before coming to our Site. We use this information to improve our Site and services. Google Analytics collects only the IP address assigned to you on the date you visit the Site, not your name or other identifying information. We do not combine the information collected through Google Analytics with personally identifiable information.</p>
            <p style={{ marginTop: '8px' }}>You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: '#0F2044' }}>Google Analytics Opt-out Browser Add-on</a>.</p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8973B', marginBottom: '10px' }}>
              Advertising Cookies — Google Ads
            </h3>
            <p>We use Google Ads (Google LLC) to display advertisements on third-party websites after you have visited our Site. Google uses cookies to serve ads based on your prior visits. You can opt out of personalized Google advertising by visiting <a href="https://www.google.com/settings/ads" style={{ color: '#0F2044' }}>Google Ads Settings</a> or through the <a href="https://optout.aboutads.info/" style={{ color: '#0F2044' }}>Digital Advertising Alliance opt-out tool</a>.</p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8973B', marginBottom: '10px' }}>
              Advertising Cookies — Meta (Facebook &amp; Instagram)
            </h3>
            <p>We use the Meta Pixel (Meta Platforms, Inc.) to measure the effectiveness of our advertising on Facebook and Instagram, and to reach people who have visited our Site with relevant ads on Meta platforms. The Meta Pixel collects information about your activity on our Site and associates it with your Facebook or Instagram account if you are logged in. You can manage your Meta advertising preferences through <a href="https://www.facebook.com/privacy/policies/cookies" style={{ color: '#0F2044' }}>Meta&rsquo;s Cookie Policy</a> or through your Facebook settings under &ldquo;Ad Preferences.&rdquo;</p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8973B', marginBottom: '10px' }}>
              Advertising Cookies — LinkedIn
            </h3>
            <p>We may use the LinkedIn Insight Tag (LinkedIn Corporation, a subsidiary of Microsoft) to enable in-depth campaign reporting and to help us learn about website visitors who may take actions on our Site. LinkedIn collects data including IP address, device and browser characteristics, and page events. You can opt out of LinkedIn tracking through your <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" style={{ color: '#0F2044' }}>LinkedIn account settings</a>.</p>
          </div>
        </>
      ))}

      {section('How We Use Your Information', (
        <ul style={{ paddingLeft: '20px' }}>
          <li>To respond to your inquiries and provide legal consultation scheduling</li>
          <li>To improve and optimize our website and user experience</li>
          <li>To deliver relevant advertising about our legal services</li>
          <li>To analyze usage trends and measure advertising effectiveness</li>
          <li>To comply with applicable laws and legal obligations</li>
          <li>To protect the security and integrity of our Site</li>
        </ul>
      ))}

      {section('How We Share Your Information', (
        <>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:</p>
          <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
            <li><strong>Service Providers:</strong> We share information with third-party vendors (such as Google, Meta, and LinkedIn) who assist us in operating our Site and delivering advertising, subject to their respective privacy policies.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid legal processes.</li>
            <li><strong>Protection of Rights:</strong> We may disclose information to protect the rights, property, or safety of Nwahiri Law, our clients, or others.</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Important:</strong> Communications through this website do not establish an attorney-client relationship. Do not send confidential or sensitive information through the contact form until an attorney-client relationship has been formally established.</p>
        </>
      ))}

      {section('Your Privacy Rights', (
        <>
          <p><strong>California Residents (CCPA):</strong> If you are a California resident, you have the right to know what personal information we collect, the right to request deletion of your personal information, and the right to opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact us at info@nwahirilaw.com.</p>
          <p style={{ marginTop: '12px' }}><strong>European Residents (GDPR):</strong> If you are located in the European Economic Area, you have rights of access, rectification, erasure, restriction of processing, data portability, and objection. To exercise these rights, contact us at info@nwahirilaw.com.</p>
          <p style={{ marginTop: '12px' }}><strong>Cookie Opt-Out:</strong> You can control cookies through your browser settings. Note that disabling certain cookies may impact the functionality of the Site. You may also use the opt-out tools described in the Cookie Policy section above.</p>
        </>
      ))}

      {section('Data Retention', (
        <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. Contact information from consultation requests is retained in accordance with applicable record-keeping requirements for legal matters.</p>
      ))}

      {section('Third-Party Links', (
        <p>Our Site may contain links to third-party websites, including scheduling platforms and social media. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
      ))}

      {section('Children&rsquo;s Privacy', (
        <p>Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
      ))}

      {section('Changes to This Policy', (
        <p>We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes by updating the &ldquo;Last Updated&rdquo; date at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised policy.</p>
      ))}

      {section('Contact Us', (
        <>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <p style={{ marginTop: '12px' }}>
            <strong>Nwahiri Law</strong><br />
            13499 Biscayne Blvd, Suite 107<br />
            North Miami, FL 33181<br />
            Phone: (305) 345-4117<br />
            Email: info@nwahirilaw.com
          </p>
        </>
      ))}

    </main>
  );
}
