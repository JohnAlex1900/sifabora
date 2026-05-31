import { Helmet } from "react-helmet";
import { Link } from "wouter";

const Services = () => {
  const services = [
    {
      id: "defamation",
      title: "Online Defamation Removal",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "We eliminate false and damaging content about you or your business from websites, forums, review sites, and social media platforms.",
      features: [
        "Content analysis and legal classification",
        "Strategic outreach to content publishers",
        "Legal notices and takedown requests",
        "Search engine de-indexing",
        "Content verification and confirmation",
        "Ongoing protection after removal",
      ],
      benefitTitle: "Why remove defamatory content?",
      benefits: [
        "Protect your professional reputation",
        "Prevent loss of business and opportunities",
        "Reduce stress and emotional impact",
        "Restore accurate public perception",
        "Prevent further spread of false information",
      ],
    },
    {
      id: "suppression",
      title: "Content Suppression & De-indexing",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "When direct removal isn't possible, we push negative content down in search results and work to remove harmful content from search engine indexes entirely.",
      features: [
        "Strategic positive content creation",
        "Authority site profile building",
        "Search algorithm optimization",
        "Targeted backlinking strategies",
        "Regular search result checks",
        "De-indexing requests to search engines",
      ],
      benefitTitle: "Benefits of content suppression",
      benefits: [
        "Effectively hide negative content from view",
        "Works when direct removal isn't possible",
        "Promotes accurate, positive information",
        "Provides lasting search result improvements",
        "Suppresses multiple listings simultaneously",
      ],
    },
    {
      id: "footprint-protection",
      title: "Digital Footprint Protection",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Our 24/7 protection system alerts you to new mentions and potential reputation threats before they escalate.",
      features: [
        "Real-time mention alerts across platforms",
        "Sentiment analysis of new content",
        "Early threat detection system",
        "Regular reputation status reports",
        "Personalized alert settings",
        "Immediate response recommendations",
      ],
      benefitTitle: "Why protection matters",
      benefits: [
        "Identify threats before they cause damage",
        "Respond quickly to potential issues",
        "Measure effectiveness of reputation strategy",
        "Understand your online presence comprehensively",
        "Protection from repeated attacks",
      ],
    },
    {
      id: "image-removal",
      title: "Private Image Removal",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Rapidly and legally remove unauthorized or intimate images from websites and search engines to protect your privacy.",
      features: [
        "Emergency response protocol",
        "Direct website takedown requests",
        "Copyright claim filings when applicable",
        "Search engine de-indexing",
        "Legal assessment and action planning",
        "Global removal approach for international sites",
      ],
      benefitTitle: "Private image protection",
      benefits: [
        "Rapid removal to minimize exposure",
        "Complete elimination across multiple platforms",
        "Confidential handling of sensitive matters",
        "Legal protection of your image rights",
        "Prevention of further distribution",
      ],
      isNew: true,
    },
    {
      id: "mobile-security",
      title: "Mobile Cybersecurity & Device Protection",
      image:
        "https://images.unsplash.com/photo-1528795099601-5a666d7043f0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Security assessments, malware detection and removal, device hardening, and recovery guidance performed only with owner authorization.",
      features: [
        "Malware and unauthorized-app detection and removal (owner-authorized)",
        "Device health assessments and secure configuration",
        "Secure data backup and recovery guidance",
        "Post-cleanup remediation and follow-up support",
        "Owner-authorized manual inspections by experts",
      ],
      benefitTitle: "Why mobile security matters",
      benefits: [
        "Protect personal and company devices",
        "Reduce risk of data leakage",
        "Prevent unauthorized access",
        "Maintain device performance and stability",
      ],
      isNew: true,
    },
    {
      id: "parental-controls",
      title: "Parental Controls & Family Safety",
      image:
        "https://images.unsplash.com/photo-1580894894513-4d5a68a1c4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Tools, setup assistance and guidance to help families enforce age-appropriate device controls and safe browsing for children.",
      features: [
        "Device-level parental control setup",
        "Content filtering and app restrictions",
        "Family account configuration best practices",
      ],
      benefitTitle: "Family safety benefits",
      benefits: [
        "Protect children from harmful content",
        "Encourage healthy device habits",
        "Privacy-first parental oversight",
      ],
    },
    {
      id: "employee-device-management",
      title: "Employee Device Management",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Enterprise-grade device management and policy enforcement that balances security with employee privacy.",
      features: [
        "MDM setup and policy enforcement",
        "Secure configuration and app whitelisting",
        "Owner-authorized remote wipe workflows",
      ],
      benefitTitle: "Business benefits",
      benefits: [
        "Reduce corporate risk",
        "Enforce compliance",
        "Protect company data",
      ],
    },
    {
      id: "anti-theft",
      title: "Lost Phone & Anti-Theft",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Owner-authorized recovery workflows, tracking best practices, and coordination guidance to protect lost or stolen devices.",
      features: [
        "Owner-authorized remote lock/wipe guidance",
        "Recovery best-practices and carrier coordination",
      ],
      benefitTitle: "Anti-theft benefits",
      benefits: [
        "Limit data exposure after loss",
        "Increase chances of recovery",
        "Reduce post-loss compromise",
      ],
    },
    {
      id: "digital-training",
      title: "Digital Awareness & Training",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Workshops and training for families and businesses on cyber awareness, secure device practices, and incident response.",
      features: [
        "Cyber awareness workshops",
        "Incident response drills",
        "Secure device configuration training",
      ],
      benefitTitle: "Training benefits",
      benefits: [
        "Better preparedness",
        "Reduced human risk",
        "Stronger security culture",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sifabora | Services</title>
        <meta
          name="description"
          content="Comprehensive services to protect and restore your digital reputation, devices, and online presence."
        />
        <meta property="og:title" content="Sifabora | Services" />
        <meta
          property="og:description"
          content="Comprehensive services to protect and restore your digital reputation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sifabora.com/services" />
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive solutions to protect and restore your digital
              reputation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-bold text-3xl text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-lg">
              Our integrated approach addresses all aspects of digital
              reputation protection, from immediate threat removal to long-term
              protection strategies.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 mb-12`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative">
                      {service.isNew && (
                        <span className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                          NEW
                        </span>
                      )}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h2 className="font-bold text-3xl text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-dark-gray mb-6 text-lg">
                      {service.description}
                    </p>
                    <h3 className="font-bold text-xl text-primary mb-4">
                      What We Do
                    </h3>
                    <ul className="mb-8 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 mt-1 text-secondary">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="bg-light-gray rounded-lg p-8">
                  <h3 className="font-bold text-xl text-primary mb-4">
                    {service.benefitTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="bg-white p-4 rounded-md shadow-sm"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-accent bg-opacity-20 flex items-center justify-center mr-3">
                            <i className="fas fa-star text-primary text-sm"></i>
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-3xl text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  How long does it typically take to remove defamatory content?
                </h3>
                <p className="text-dark-gray">
                  The timeline varies based on several factors, including the
                  platform hosting the content, its nature, and whether legal
                  intervention is required. Simple removals can occur within
                  24-48 hours, while more complex cases may take 2-4 weeks. We
                  provide timeline estimates at the beginning of each case.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  What if content can't be completely removed?
                </h3>
                <p className="text-dark-gray">
                  When direct removal isn't possible, we implement our content
                  suppression strategy to push negative content down in search
                  results while promoting positive information. This effectively
                  makes the content virtually invisible to most searchers, even
                  if it technically still exists.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  Is your private image removal service confidential?
                </h3>
                <p className="text-dark-gray">
                  Absolutely. We handle all image removal cases with complete
                  confidentiality. Our team uses secure communication channels,
                  and we never store the sensitive content after case
                  completion. Your privacy is our highest priority throughout
                  the process.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  How do you detect new threats?
                </h3>
                <p className="text-dark-gray">
                  Our systems use advanced algorithms to scan websites, social
                  media platforms, forums, and other online spaces for mentions
                  of your name or brand. It analyzes sentiment and flags
                  potentially harmful content for immediate review, allowing us
                  to respond quickly before reputation damage occurs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-xl text-primary mb-2">
                  Do you guarantee results?
                </h3>
                <p className="text-dark-gray">
                  While we can't guarantee specific outcomes in every case due
                  to factors outside our control, we maintain a strong success
                  rate across our services. We're transparent about the
                  likelihood of success in your specific situation and only
                  proceed with strategies we believe will be effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl mb-6">
            Ready to Protect Your Reputation?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is standing by to help you address your specific digital
            reputation concerns.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
