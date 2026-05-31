import { Helmet } from "react-helmet";
import { Link } from "wouter";

const DigitalTraining = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <Helmet>
        <title>Digital Training | Sifabora</title>
        <meta
          name="description"
          content="Workshops and training on cyber awareness, safe device practices, and incident response for families and organisations."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Digital Awareness & Training</h1>
      <p className="mb-6">
        Practical workshops and training sessions that teach families and
        organisations how to protect devices, recognize threats, and respond to
        incidents.
      </p>

      <h2 className="text-xl font-semibold mb-2">Offerings</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Cyber awareness workshops for parents and employees</li>
        <li>Incident response drills and playbooks</li>
        <li>Secure device configuration training</li>
        <li>Custom training for organisational policies</li>
      </ul>

      <Link
        href="/contact"
        className="inline-block bg-primary text-white px-6 py-2 rounded"
      >
        Enquire
      </Link>
    </div>
  );
};

export default DigitalTraining;
