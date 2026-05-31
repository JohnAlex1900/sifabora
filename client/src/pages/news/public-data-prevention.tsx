import React from "react";
import BackButton from "@/components/BackButton";

const PublicDataPreventionPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <BackButton />

      <h1 className="text-3xl font-bold text-primary mb-2">
        How Cybercriminals Use Public Data Against You (and How to Stop Them)
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        February 12, 2024 • Digital Security
      </p>

      <img
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1548"
        alt="Threat actor at work"
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="mb-4">
        You may not realize it, but a lot of your personal information is
        already public—and cybercriminals know exactly how to use it. From
        social media posts to leaked databases, this data can be used to
        impersonate you, crack your passwords, or even launch phishing attacks.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        1. What Public Data Are Attackers Targeting?
      </h2>
      <p className="mb-4">Attackers mine details like your:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Full name, birthdate, and home address</li>
        <li>Email addresses and phone numbers</li>
        <li>Employment history from LinkedIn</li>
        <li>Photos and social media posts</li>
        <li>Leaked credentials from data breaches</li>
      </ul>

      <img
        src="https://images.unsplash.com/photo-1584433144859-1fc5ecf53e59?q=80&w=1200"
        alt="Public data breach"
        className="w-full h-auto rounded-lg mb-6"
      />

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        2. How That Data Is Used Against You
      </h2>
      <p className="mb-4">
        Once collected, this data can be weaponized in several ways:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Phishing Attacks:</strong> Tailored emails that seem
          trustworthy due to personal info.
        </li>
        <li>
          <strong>Password Cracking:</strong> Using known data to guess
          passwords (e.g., pet names, birthdays).
        </li>
        <li>
          <strong>Social Engineering:</strong> Pretending to be someone you're
          connected to in order to gain more access.
        </li>
        <li>
          <strong>Identity Theft:</strong> Using your information to open
          accounts or commit fraud.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        3. How to Protect Yourself
      </h2>
      <p className="mb-2">Practical steps to reduce your exposure:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Use unique, strong passwords and enable two-factor authentication
        </li>
        <li>
          Remove yourself from people search sites and data brokers (see our
          <a
            href="/news/secure-identity-data-brokers"
            className="text-blue-600 underline"
          >
            {" "}
            previous post
          </a>
          )
        </li>
        <li>Limit what you share on social platforms</li>
        <li>Use a password manager and privacy-focused tools</li>
        <li>
          Regularly check your email and phone number for breaches using tools
          like
          <a
            href="https://haveibeenpwned.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {" "}
            HaveIBeenPwned
          </a>
        </li>
      </ul>

      <img
        src="https://images.unsplash.com/photo-1591696331116-7b7d06d99f3e?q=80&w=1200"
        alt="Digital protection"
        className="w-full h-auto rounded-lg mb-6"
      />

      <h2 className="text-xl font-semibold mb-2 text-secondary">
        Final Thoughts
      </h2>
      <p className="mb-4">
        In a digital world, your best defense is awareness. While you can't
        control every database leak or online mention, you can take proactive
        steps to limit what attackers can learn about you—and stop attacks
        before they happen.
      </p>
    </div>
  );
};

export default PublicDataPreventionPage;
