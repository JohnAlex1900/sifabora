import { Link } from "wouter";
import ServiceCard from "@/components/shared/ServiceCard";
import {
  faShieldAlt,
  faSearchMinus,
  faChartLine,
  faImage,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"; // import the icon objects

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: faShieldAlt,
      title: "Online Defamation Removal",
      description:
        "We eliminate false and damaging content about you or your business from websites, forums, review sites, and social media platforms.",
      link: "/services#defamation",
    },
    {
      id: 2,
      icon: faSearchMinus,
      title: "Content Suppression & De-indexing",
      description:
        "We push negative content down in search results and work to remove harmful content from search engine indexes entirely.",
      link: "/services#suppression",
    },
    {
      id: 3,
      icon: faChartLine,
      title: "Digital Footprint Protection",
      description:
        "Our 24/7 protection system alerts you to new mentions and potential reputation threats before they escalate.",
      link: "/services#footprint-protection",
    },
    {
      id: 4,
      icon: faImage,
      title: "Private Image Removal",
      description:
        "Rapidly and legally remove unauthorized or intimate images from websites and search engines to protect your privacy.",
      link: "/services#image-removal",
      isNew: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We offer tailored solutions to protect and enhance your digital
            reputation using proven methodologies and advanced technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              isNew={service.isNew}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
