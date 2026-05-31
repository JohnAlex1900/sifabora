import { Helmet } from "react-helmet";
import { Link } from "wouter";

const MobileCybersecurity = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <Helmet>
        <title>Mobile Cybersecurity | Sifabora</title>
        <meta
          name="description"
          content="Mobile device security services: malware removal, hardening, and recovery guidance for individuals and businesses."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Mobile Cybersecurity & Device Protection
      </h1>
      <p className="mb-6">
        Security assessments, malware detection and removal, device hardening,
        and post-incident recovery for mobile devices. All work is performed
        with owner authorization.
      </p>

      <h2 className="text-xl font-semibold mb-2">Services</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Malware and unauthorized-app detection and removal (owner-authorized)
        </li>
        <li>Secure backup and data recovery</li>
        <li>Privacy hardening and secure configuration</li>
        <li>Guided remediation and follow-up support</li>
      </ul>

      <Link
        href="/contact"
        className="inline-block bg-primary text-white px-6 py-2 rounded"
      >
        Book a Consultation
      </Link>
    </div>
  );
};

export default MobileCybersecurity;
