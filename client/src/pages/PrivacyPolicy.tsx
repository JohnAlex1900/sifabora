import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sifabora</title>
        <meta
          name="description"
          content="Learn about how Sifabora collects, uses, and protects your personal information."
        />
        <meta property="og:title" content="Privacy Policy | Sifabora" />
        <meta
          property="og:description"
          content="Learn about how Sifabora collects, uses, and protects your personal information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sifabora.com/privacy-policy" />
      </Helmet>

      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-inter font-bold text-4xl text-primary mb-8">
              Privacy Policy
            </h1>

            <div className="bg-white rounded-lg shadow-custom p-8">
              <div className="prose max-w-none">
                <p className="text-sm text-dark-gray mb-6">
                  Last Updated: July 1, 2023
                </p>

                <h2>Introduction</h2>
                <p>
                  At Sifabora ("we", "our", or "us"), we respect your privacy
                  and are committed to protecting your personal data. This
                  privacy policy will inform you about how we look after your
                  personal data when you visit our website and tell you about
                  your privacy rights and how the law protects you.
                </p>

                <h2>The Data We Collect About You</h2>
                <p>
                  Personal data, or personal information, means any information
                  about an individual from which that person can be identified.
                  We may collect, use, store and transfer different kinds of
                  personal data about you which we have grouped together as
                  follows:
                </p>
                <ul>
                  <li>
                    <strong>Identity Data</strong> includes first name, last
                    name, username or similar identifier.
                  </li>
                  <li>
                    <strong>Contact Data</strong> includes email address,
                    telephone numbers, and postal address.
                  </li>
                  <li>
                    <strong>Technical Data</strong> includes internet protocol
                    (IP) address, browser type and version, time zone setting
                    and location, browser plug-in types and versions, operating
                    system and platform, and other technology on the devices you
                    use to access this website.
                  </li>
                  <li>
                    <strong>Usage Data</strong> includes information about how
                    you use our website and services.
                  </li>
                  <li>
                    <strong>Marketing and Communications Data</strong> includes
                    your preferences in receiving marketing from us and our
                    third parties and your communication preferences.
                  </li>
                </ul>

                <h2>How We Collect Your Personal Data</h2>
                <p>
                  We use different methods to collect data from and about you
                  including through:
                </p>
                <ul>
                  <li>
                    <strong>Direct interactions.</strong> You may give us your
                    Identity and Contact Data by filling in forms or by
                    corresponding with us by post, phone, email or otherwise.
                  </li>
                  <li>
                    <strong>Automated technologies or interactions.</strong> As
                    you interact with our website, we may automatically collect
                    Technical Data about your equipment, browsing actions and
                    patterns.
                  </li>
                  <li>
                    <strong>
                      Third parties or publicly available sources.
                    </strong>{" "}
                    We may receive personal data about you from various third
                    parties and public sources.
                  </li>
                </ul>

                <h2>How We Use Your Personal Data</h2>
                <p>
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your personal data in the following
                  circumstances:
                </p>
                <ul>
                  <li>
                    Where we need to perform the contract we are about to enter
                    into or have entered into with you.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those
                    of a third party) and your interests and fundamental rights
                    do not override those interests.
                  </li>
                  <li>
                    Where we need to comply with a legal or regulatory
                    obligation.
                  </li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorized way, altered or disclosed. In
                  addition, we limit access to your personal data to those
                  employees, agents, contractors and other third parties who
                  have a business need to know.
                </p>

                <h2>Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as
                  necessary to fulfill the purposes we collected it for,
                  including for the purposes of satisfying any legal,
                  accounting, or reporting requirements.
                </p>

                <h2>Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data
                  protection laws in relation to your personal data, including
                  the right to:
                </p>
                <ul>
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  this page and updating the "Last Updated" date at the top of
                  this privacy policy.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our
                  privacy practices, please contact us at:
                </p>
                <p>
                  Email: privacy@sifabora.africa
                  <br />
                  Phone: +254 723 668 666
                  <br />
                  Address: 123 Reputation Ave, Suite 400, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
