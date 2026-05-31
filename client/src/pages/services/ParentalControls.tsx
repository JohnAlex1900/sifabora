import { Helmet } from "react-helmet";
import { Link } from "wouter";

const ParentalControls = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <Helmet>
        <title>Parental Controls | Sifabora</title>
        <meta
          name="description"
          content="Parental control tools and guidance to help families keep children safe online."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Parental Controls & Family Safety
      </h1>
      <p className="mb-6">
        Practical tools, configuration assistance, and educational guidance to
        help families keep children safe on mobile devices and online platforms.
      </p>

      <h2 className="text-xl font-semibold mb-2">What we offer</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Device-level parental controls and safe browsing configuration</li>
        <li>Age-appropriate content filters and app restrictions</li>
        <li>Family account setup and oversight best practices</li>
        <li>Privacy-first guidance for parental oversight</li>
      </ul>

      <Link
        href="/contact"
        className="inline-block bg-primary text-white px-6 py-2 rounded"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default ParentalControls;
