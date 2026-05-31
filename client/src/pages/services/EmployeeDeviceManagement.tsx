import { Helmet } from "react-helmet";
import { Link } from "wouter";

const EmployeeDeviceManagement = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <Helmet>
        <title>Employee Device Management | Sifabora</title>
        <meta
          name="description"
          content="Enterprise device management services to secure company mobile devices and enforce policy compliance."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Employee Device Management</h1>
      <p className="mb-6">
        Device management and compliance services for businesses to ensure
        employee devices meet security standards and company policies while
        respecting privacy.
      </p>

      <h2 className="text-xl font-semibold mb-2">Key services</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Mobile Device Management (MDM) setup and policy enforcement</li>
        <li>Secure configuration and app whitelisting</li>
        <li>Remote wipe and lost-device workflows (owner-authorized)</li>
        <li>Privacy-respecting oversight and compliance reporting</li>
      </ul>

      <Link
        href="/contact"
        className="inline-block bg-primary text-white px-6 py-2 rounded"
      >
        Get Started
      </Link>
    </div>
  );
};

export default EmployeeDeviceManagement;
