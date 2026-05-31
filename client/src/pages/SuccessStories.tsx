import { Helmet } from "react-helmet";
import { Link } from "wouter";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import TestimonialCard from "@/components/shared/TestimonialCard";

const SuccessStories = () => {
  const caseStudies = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80",
      category: "Business Executive",
      title: "False Review Removal",
      description:
        "A CEO faced false accusations on review sites that were damaging company reputation and sales. We successfully removed 12 defamatory reviews and suppressed negative search results.",
      resultPercentage: 87,
      resultText: "Improvement in brand sentiment",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80",
      category: "Healthcare Professional",
      title: "Medical Practice Protection",
      description:
        "A physician's practice was targeted by a competitor with false reviews. We removed the defamatory content and built a positive content strategy to restore their reputation.",
      resultPercentage: 94,
      resultText: "Patient trust restored",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80",
      category: "Private Individual",
      title: "Private Image Removal",
      description:
        "A client had unauthorized personal images distributed online. We successfully removed all images from 17 websites and search engines within 72 hours.",
      resultPercentage: 100,
      resultText: "Content removal success",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1573164713289-0f94a79f0096?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80",
      category: "Small Business",
      title: "Negative Search Result Suppression",
      description:
        "A local restaurant was struggling with negative content dominating their search results. We implemented a comprehensive suppression strategy to rebuild their online presence.",
      resultPercentage: 92,
      resultText: "Increase in customer visits",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80",
      category: "Corporate Brand",
      title: "Crisis Management",
      description:
        "When a major company faced a sudden reputational crisis, we implemented rapid response protocols to contain the damage and rebuild public trust through strategic communications.",
      resultPercentage: 78,
      resultText: "Recovery in brand trust metrics",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80",
      category: "Public Figure",
      title: "Comprehensive Reputation Rebuild",
      description:
        "A public figure faced multiple sources of negative information online. We created a long-term strategy combining removal, suppression, and positive content development.",
      resultPercentage: 85,
      resultText: "Positive search result dominance",
    },
  ];

  const testimonials = [
    {
      id: 1,
      content:
        "Sifabora's team worked tirelessly to remove the defamatory content about my business. Their expertise and strategic approach not only solved my immediate problem but gave me tools to protect my reputation going forward.",
      author: "Sarah J.",
      position: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 2,
      content:
        "When private images of me were posted online without consent, I was devastated. Sifabora acted quickly and professionally, removing all content within days. Their ongoing protection gives me peace of mind.",
      author: "Michael T.",
      position: "Individual Client",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 3,
      content:
        "As a physician, my online reputation is critical to my practice. After competitors posted false reviews, Sifabora not only removed them but helped me establish a stronger online presence that accurately reflects my practice's quality.",
      author: "Dr. Rebecca L.",
      position: "Healthcare Professional",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 4,
      content:
        "The protection service Sifabora provides has been invaluable. They've caught and addressed several potential issues before they could affect my business. Their proactive approach has saved us from multiple reputation threats.",
      author: "David K.",
      position: "Restaurant Owner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Success Stories | Sifabora Digital Reputation Protection</title>
        <meta
          name="description"
          content="Discover how Sifabora has successfully helped clients restore and protect their digital reputation with real case studies and testimonials."
        />
        <meta
          property="og:title"
          content="Success Stories | Sifabora Digital Reputation Protection"
        />
        <meta
          property="og:description"
          content="Real results from our clients who reclaimed their digital reputation with Sifabora's expert services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sifabora.com/success-stories"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-6">
              Success Stories
            </h1>
            <p className="text-xl opacity-90">
              Real results from real clients who reclaimed their digital
              reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl text-primary mb-4">
              Client Case Studies
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              These stories represent just a few examples of how we've helped
              our clients overcome digital reputation challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                image={study.image}
                category={study.category}
                title={study.title}
                description={study.description}
                resultPercentage={study.resultPercentage}
                resultText={study.resultText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl text-primary mb-8 text-center">
              Featured Success Story
            </h2>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
                    alt="Featured case study"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 bg-success bg-opacity-10 text-success text-sm font-medium rounded-full">
                      E-commerce Business
                    </span>
                  </div>
                  <h3 className="font-bold text-2xl text-primary mb-4">
                    Overcoming a Coordinated Attack
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">
                      The Challenge
                    </h4>
                    <p className="text-dark-gray mb-4">
                      An e-commerce startup faced a coordinated attack from a
                      competitor, resulting in dozens of fake negative reviews
                      across multiple platforms, damaging forum posts, and
                      misleading social media content. Their sales dropped by
                      40% within weeks.
                    </p>

                    <h4 className="font-semibold text-lg mb-2">Our Approach</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 text-secondary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <span>
                          Forensic analysis to identify the coordinated nature
                          of the attack
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 text-secondary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <span>
                          Platform-specific removal requests with evidence of
                          review manipulation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 text-secondary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <span>
                          Legal cease and desist action against the competitor
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 text-secondary">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <span>
                          Comprehensive protection system implementation
                        </span>
                      </li>
                    </ul>

                    <h4 className="font-semibold text-lg mb-2">The Results</h4>
                    <p className="text-dark-gray">
                      Within 30 days, we removed 94% of the false content. Sales
                      recovered to previous levels within 60 days, and our
                      ongoing protection has prevented similar attacks. The
                      company has since expanded to three new markets.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="bg-light-gray p-3 rounded-md">
                      <div className="text-primary font-bold text-2xl">94%</div>
                      <div className="text-sm">Content removal rate</div>
                    </div>
                    <div className="bg-light-gray p-3 rounded-md">
                      <div className="text-primary font-bold text-2xl">30</div>
                      <div className="text-sm">Days to resolution</div>
                    </div>
                    <div className="bg-light-gray p-3 rounded-md">
                      <div className="text-primary font-bold text-2xl">45%</div>
                      <div className="text-sm">
                        Sales increase post-recovery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about their experience working with Sifabora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                image={testimonial.image}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="mb-8">
              <div className="inline-flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="fas fa-star text-yellow-400 text-xl mx-1"
                    ></i>
                  ))}
                </div>
                <span className="ml-3 text-2xl font-bold">4.9/5</span>
              </div>
              <p className="text-dark-gray mt-2">
                Average client satisfaction rating
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Become Our Next Success Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
