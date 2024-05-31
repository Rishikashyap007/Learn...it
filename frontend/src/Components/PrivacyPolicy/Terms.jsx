import React from "react";

const Terms = () => {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Terms & Policies</h1>
        <span className="block text-gray-600 mb-1">Effective May 23, 2024</span>
        <span className="block text-gray-600">Our terms as per the FA '24 - '25</span>
      </header>
      <p className="text-gray-700 mb-8">
        Welcome to Learn...it ("Learn...it"). By accessing or using our website, mobile application, or any other services we provide (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.
      </p>

      <section className="mb-8" id="contract">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Acceptance of Terms</h2>
        <p className="text-gray-700">
          By using our Services, you affirm that you are at least 18 years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms.
        </p>
      </section>

      <section className="mb-8" id="changes">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to Terms</h2>
        <p className="text-gray-700">
          We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-8" id="use-of-services">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Use of Services</h2>
        <div className="text-gray-700 mb-4">
          <strong>Eligibility</strong>
          <p>Our Services are available only to individuals who are at least 18 years old. By using our Services, you represent and warrant that you meet this requirement.</p>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Account Registration</strong>
          <p>To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and agree not to disclose your password to any third party.</p>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Prohibited Conduct</strong>
          <p>You agree not to:</p>
          <ul className="list-disc ml-6">
            <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law.</li>
            <li>Harass, threaten, demean, embarrass, or otherwise harm any other user of our Services.</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent yourself, your age, or your affiliation with any person or entity.</li>
            <li>Interfere with or disrupt the operation of our Services or servers or networks connected to our Services.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8" id="intellectual-property">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Intellectual Property</h2>
        <p className="text-gray-700">
          All content and materials available on our Services, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of Learn...it and are protected by applicable copyright and trademark law. You are not permitted to modify, copy, reproduce, create derivative works from, republish, upload, post, transmit, or distribute in any way any content or materials from our Services without prior written permission from us.
        </p>
      </section>

      <section className="mb-8" id="user-content">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Content</h2>
        <div className="text-gray-700 mb-4">
          <strong>Responsibility of User Content</strong>
          <p>You are solely responsible for all content that you upload, post, email, transmit, or otherwise make available via our Services ("User Content"). By making any User Content available through our Services, you grant Learn...it a worldwide, non-exclusive, royalty-free license to use, copy, modify, distribute, and display such User Content in connection with operating and providing our Services.</p>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Prohibited Content</strong>
          <p>You agree not to post or make available any User Content that:</p>
          <ul className="list-disc ml-6">
            <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
            <li>Infringes the intellectual property rights of any party.</li>
            <li>Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8" id="privacy-policy">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Privacy Policy</h2>
        <p className="text-gray-700">
          Your use of our Services is also governed by our Privacy Policy, which can be found at [Privacy Policy URL]. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
        </p>
      </section>

      <section className="mb-8" id="termination">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Termination</h2>
        <p className="text-gray-700">
          We may terminate or suspend your access to our Services, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms.
        </p>
      </section>

      <section className="mb-8" id="limitation-of-liability">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Limitation of Liability</h2>
        <p className="text-gray-700">
          To the maximum extent permitted by applicable law, in no event shall Learn...it be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the Services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the Services.
        </p>
      </section>

      <section className="mb-8" id="governing-law">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Governing Law</h2>
        <p className="text-gray-700">
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Learn...it is headquartered, without regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or complaints about these Terms, please contact us at:
          <br />
          Email:{" "}
          <a href="mailto:support@learnit.com" className="text-blue-500 hover:underline">
            support@learnit.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default Terms;
