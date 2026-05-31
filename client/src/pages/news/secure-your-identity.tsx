import React from "react";
import BackButton from "@/components/BackButton";

const SecureIdentityPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <BackButton />

      <h1 className="text-3xl font-bold text-primary mb-2">
        How to Secure Your Online Identity from Data Brokers
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        March 30, 2024 • Privacy Protection
      </p>

      <img
        src="https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1470"
        alt="Online identity security"
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="mb-4">
        Every day, data brokers collect and sell personal information about you—
        including your name, phone number, address, email, and even shopping
        habits. This data is then packaged and sold to marketers, insurers, and
        sometimes even malicious actors.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        1. What Are Data Brokers?
      </h2>
      <p className="mb-4">
        Data brokers are companies that compile information from public records,
        social media, online purchases, and other digital footprints. Well-known
        brokers include Spokeo, Whitepages, PeopleFinder, and Intelius.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        2. Risks of Data Exposure
      </h2>
      <p className="mb-4">
        Personal data in the wrong hands can lead to identity theft, spam,
        scams, and targeted harassment. It also makes you more vulnerable to
        social engineering attacks.
      </p>

      <img
        src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200"
        alt="Cybersecurity risks"
        className="w-full h-auto rounded-lg mb-6"
      />

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        3. How to Opt Out from Major Data Brokers
      </h2>
      <p className="mb-2">
        Many data brokers offer opt-out options — although the process is often
        time-consuming. Some tips:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Visit the broker's website and look for a "privacy" or "opt-out"
          section.
        </li>
        <li>
          Provide proof of identity (some may request ID verification to process
          your request).
        </li>
        <li>
          Use services like{" "}
          <a
            href="https://joindeleteme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            DeleteMe
          </a>{" "}
          or{" "}
          <a
            href="https://onetrep.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            OneRep
          </a>{" "}
          to automate the opt-out process.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        4. Prevent Future Collection
      </h2>
      <p className="mb-4">
        After opting out, take these steps to prevent your data from being
        collected again:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Limit what you share on social media</li>
        <li>Use privacy-focused browsers and search engines</li>
        <li>Disable location tracking on your devices</li>
        <li>Regularly review your digital footprint</li>
      </ul>

      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200"
        alt="Digital privacy control"
        className="w-full h-auto rounded-lg mb-6"
      />

      <h2 className="text-xl font-semibold mb-2 text-secondary">Conclusion</h2>
      <p className="mb-4">
        Taking control of your personal data isn't just a one-time task — it's
        an ongoing commitment. With growing digital threats, removing yourself
        from data broker lists and limiting future exposure is essential to
        protecting your online identity.
      </p>
    </div>
  );
};

export default SecureIdentityPage;
