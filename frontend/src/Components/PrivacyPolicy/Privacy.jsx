import React from "react";

const Privacy = () => {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
        <span className="block text-gray-600 mb-1">Effective May 23, 2024</span>
        <span className="block text-gray-600">Our privacy policy has been updated</span>
      </header>

      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Content</h2>
        <ol className="list-decimal pl-4">
          <li className="mb-2">
            <a href="#data-collection" className="text-blue-500 hover:underline">Information we collect</a>
          </li>
          <li className="mb-2">
            <a href="#collection-usage" className="text-blue-500 hover:underline">How do we use your data</a>
          </li>
          <li className="mb-2">
            <a href="#information-sharing" className="text-blue-500 hover:underline">How we share information</a>
          </li>
          <li className="mb-2">
            <a href="#choices-obligations" className="text-blue-500 hover:underline">Your choices and obligations</a>
          </li>
          <li className="mb-2">
            <a href="#imp-info" className="text-blue-500 hover:underline">Other important information</a>
          </li>
        </ol>
      </section> */}

      <section className="mb-8" id="data-collection">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Learn...it (referred to as "we," "our," or "us"). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [insert website URL] or use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Information We Collect</h3>
        <p className="text-gray-700 mb-4">
          <strong>Personal Information: </strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Address</li>
            <li>Payment information (for transaction purposes)</li>
          </ul>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Non-Personal Information: </strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Browser type and version</li>
            <li>Time zone setting</li>
            <li>Browser plug-in types and versions</li>
            <li>Operating system and platform</li>
            <li>Information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through, and from our site (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page.</li>
          </ul>
        </p>
      </section>

      <section className="mb-8" id="collection-usage">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          <strong>Personal Information: </strong>
          <ul className="list-disc ml-6 mt-2">
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
            <li>To notify you about changes to our service.</li>
            <li>To ensure that content from our site is presented in the most effective manner for you and your computer.</li>
          </ul>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Non-Personal Information: </strong>
          <ul className="list-disc ml-6 mt-2">
            <li>To administer our site and for internal operations, including troubleshooting, data analysis, testing, research, statistical, and survey purposes.</li>
            <li>To improve our site to ensure that content is presented in the most effective manner for you and your computer.</li>
            <li>To allow you to participate in interactive features of our service, when you choose to do so.</li>
            <li>As part of our efforts to keep our site safe and secure.</li>
          </ul>
        </p>
      </section>

      <section className="mb-8" id="information-sharing">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Disclosure of Your Information</h2>
        <p className="text-gray-700 mb-4">
          <strong>We may share your personal information with: </strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Any member of our group, which means our subsidiaries, our ultimate holding company, and its subsidiaries.</li>
            <li>Selected third parties including business partners, suppliers, and sub-contractors for the performance of any contract we enter into with them or you.</li>
            <li>Analytics and search engine providers that assist us in the improvement and optimization of our site.</li>
          </ul>
        </p>

        <p className="text-gray-700 mb-4">
          <strong>We may disclose your personal information to third parties: </strong>
          <ul className="list-disc ml-6 mt-2">
            <li>In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.</li>
            <li>If Learn...it or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.</li>
            <li>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of Learn...it, our customers, or others.</li>
          </ul>
        </p>
      </section>

      <section className="mb-8" id="choices-obligations">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Rights</h2>
        <ul className="text-gray-700 list-disc ml-6 mt-2">
          <li>Access information held about you.</li>
          <li>Request the correction of inaccurate or incomplete information we hold about you.</li>
          <li>Request the deletion or removal of personal data when there is no compelling reason for its continued processing.</li>
          <li>Object to the processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground.</li>
          <li>Request the restriction of processing of your personal data.</li>
          <li>Request the transfer of your personal data to another party.</li>
        </ul>
      </section>

      <section className="mb-8" id="imp-info">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We have implemented measures designed to secure your personal data from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to this Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes we make to our Privacy Policy in the future will be posted on this page. Please check back frequently to see any updates or changes to our Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or complaints about this Privacy Policy, please contact us at:
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

export default Privacy;
