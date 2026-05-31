import { Helmet } from "react-helmet";
import { Link } from "wouter";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sifabora Digital Reputation Protection</title>
        <meta
          name="description"
          content="Discover how Sifabora helps individuals and businesses protect, manage, and restore their digital reputations across all online platforms with expert-driven strategies."
        />
        <meta
          property="og:title"
          content="About Sifabora | Digital Reputation Protection"
        />
        <meta
          property="og:description"
          content="Learn how Sifabora empowers clients with proven reputation management solutions to protect their presence across the web."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sifabora.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Protecting Your Digital Identity, One Click at a Time
            </h1>
            <p className="text-xl opacity-90">
              Sifabora is your trusted partner in online reputation protection,
              privacy management, and digital recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="font-bold text-3xl text-primary mb-6">
                What Drives Us
              </h2>
              <p className="text-dark-gray mb-6">
                At Sifabora, we believe your digital presence is as important as
                your physical one. Whether you're a public figure, a business
                owner, or a private individual, our goal is to protect what
                matters to you online — your identity, your reputation, and your
                peace of mind.
              </p>
              <p className="text-dark-gray mb-6">
                From removing damaging content to suppressing harmful search
                results and securing your online footprint, we provide
                end-to-end solutions backed by technology, legal frameworks, and
                ethical practices.
              </p>
              <p className="text-dark-gray">
                In an age of misinformation, cyberbullying, and public scrutiny,
                we give you back control — ensuring your digital story is told
                truthfully, respectfully, and with your consent.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sifabora mission"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl text-primary mb-8 text-center">
              Our Journey
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2013
                  </div>
                  <div className="h-full w-1 bg-primary bg-opacity-20 mt-2 hidden md:block"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary mb-2">
                    Founded With Purpose
                  </h3>
                  <p className="text-dark-gray">
                    Sifabora was launched with a single vision: to shield people
                    from online harm. What started as a small initiative to help
                    individuals remove defamatory content grew into a
                    full-service digital defense agency.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2016
                  </div>
                  <div className="h-full w-1 bg-primary bg-opacity-20 mt-2 mb-2 hidden md:block"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary mb-2">
                    Scaling to Serve Businesses
                  </h3>
                  <p className="text-dark-gray">
                    As online threats evolved, so did we. Sifabora expanded to
                    support startups, SMBs, and enterprise-level clients with
                    brand protection, review oversight, and crisis response
                    tailored to modern challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2019
                  </div>
                  <div className="h-full w-1 bg-primary bg-opacity-20 mt-2 mb-2 hidden md:block"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary mb-2">
                    Building Smart Technology
                  </h3>
                  <p className="text-dark-gray">
                    We engineered proprietary detection systems and content
                    suppression tools, enabling real-time alerts and automated
                    interventions to neutralize threats before they escalate.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary mb-2">
                    Global Impact & Personalized Solutions
                  </h3>
                  <p className="text-dark-gray">
                    Today, Sifabora operates across continents, industries, and
                    languages. We continue to innovate, recently launching our
                    Private Image Removal and Platform Complaint Services —
                    fast, discreet, and fully customized to client needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl mb-6">
            Start Protecting Your Reputation Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're facing a crisis or simply being proactive, our team
            is ready to provide the support, strategy, and solutions you need.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
