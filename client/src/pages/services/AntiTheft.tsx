import { Helmet } from "react-helmet";
import { Link } from "wouter";

const AntiTheft = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <Helmet>
        <title>Lost Phone & Anti-Theft | Sifabora</title>
        <meta
          name="description"
          content="Anti-theft and lost device services, including recovery workflows and remote protection measures."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Lost Phone & Anti-Theft</h1>
      <p className="mb-6">
        Practical assistance for lost or stolen devices including
        owner-authorized remote protection workflows, recovery guidance, and
        coordination with carriers when available.
      </p>

      <h2 className="text-xl font-semibold mb-2">Includes</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Owner-authorized remote lock/wipe guidance</li>
        <li>Recovery and tracking best-practices</li>
        <li>Carrier and law-enforcement coordination advice</li>
        <li>Security steps to prevent post-loss compromise</li>
      </ul>

      <Link
        href="/contact"
        className="inline-block bg-primary text-white px-6 py-2 rounded"
      >
        Contact Support
      </Link>
    </div>
  );
};

export default AntiTheft;
