import { Link } from "wouter";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            We offer tailored solutions to protect and enhance your digital
            reputation using proven methodologies and advanced technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Online Defamation Removal"
            description="We eliminate false and damaging content about you or your business from websites, forums, review sites, and social media platforms."
            icon="shield"
            link="/services#defamation-removal"
          />

          <ServiceCard
            title="Content Suppression & De-indexing"
            description="We push negative content down in search results and work to remove harmful content from search engine indexes entirely."
            icon="search"
            link="/services#content-suppression"
          />

          <ServiceCard
            title="Digital Footprint Protection"
            description="Our 24/7 protection system alerts you to new mentions and potential reputation threats before they escalate."
            icon="chart"
            link="/services#footprint-protection"
          />

          <ServiceCard
            title="Private Image Removal"
            description="Rapidly and legally remove unauthorized or intimate images from websites and search engines to protect your privacy."
            icon="image"
            link="/services#image-removal"
            isNew={true}
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="inline-block bg-primary text-white font-inter font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
