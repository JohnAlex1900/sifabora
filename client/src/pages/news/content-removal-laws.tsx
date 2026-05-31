import React from "react";
import BackButton from "@/components/BackButton";

const ContentRemovalLawsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <BackButton />

      <h1 className="text-3xl font-bold text-primary mb-2">
        New Global Laws on Content Removal Requests: What Changed in 2024
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        January 8, 2024 • Legal Updates
      </p>

      <img
        src="https://images.unsplash.com/photo-1659869764315-dc3d188141fe?q=80&w=1470"
        alt="Law books and gavel"
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="mb-4">
        2024 has brought significant global changes to how individuals and
        organizations can request the removal of online content. From defamation
        to outdated personal data, the legal frameworks governing content
        takedown are becoming more defined and accessible — but also more
        complex.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        What Are Content Removal Requests?
      </h2>
      <p className="mb-4">
        These are formal legal requests made to platforms, search engines, or
        site owners to delete or de-index harmful or outdated content. Common
        reasons include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Defamatory articles or blog posts</li>
        <li>Revenge porn or private photos shared without consent</li>
        <li>Inaccurate or outdated professional records</li>
        <li>Personal data violating GDPR or similar laws</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        Key Legal Changes in 2024
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>EU Digital Services Act (DSA):</strong> Platforms must now
          respond to removal requests within 7 days and provide transparency on
          decisions.
        </li>
        <li>
          <strong>India's IT Rules 2024 Update:</strong> Adds a new appeals
          tribunal and mandates quicker response times for removal of sensitive
          content.
        </li>
        <li>
          <strong>U.S. State-Level Updates:</strong> California and New York
          have passed stronger online privacy and defamation response laws,
          expanding individual rights.
        </li>
        <li>
          <strong>Australia:</strong> Courts now allow expedited content
          takedowns under the Online Safety Act amendments.
        </li>
      </ul>

      <img
        src="https://images.unsplash.com/photo-1630975665804-b063ad3fcad2?q=80&w=1200"
        alt="Legal changes"
        className="w-full h-auto rounded-lg mb-6"
      />

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        What It Means for You
      </h2>
      <p className="mb-4">
        These changes mean you may have more legal power than ever to clean up
        your online presence. But it also means following the proper channels
        and meeting the burden of proof. Some steps you can take:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Document the content and its impact</li>
        <li>Review the platform’s removal request procedures</li>
        <li>Consult with a legal expert if necessary</li>
        <li>Follow up regularly and request transparency reports</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        Final Thoughts
      </h2>
      <p className="mb-4">
        As online reputation becomes a legal battleground, understanding your
        rights is critical. These 2024 changes are a step toward greater
        accountability and user control — and they could help you take back
        control of your online narrative.
      </p>
    </div>
  );
};

export default ContentRemovalLawsPage;
