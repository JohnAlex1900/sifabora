import { Link } from "wouter";
import CaseStudy from "./CaseStudy";
import Testimonial from "./Testimonial";

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Real results from our clients who reclaimed their digital
            reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseStudy
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
            imageAlt="Business executive"
            category="Business Executive"
            title="False Review Removal"
            description="A CEO faced false accusations on review sites that were damaging company reputation and sales. We successfully removed 12 defamatory reviews and suppressed negative search results."
            resultPercentage={87}
            resultText="Improvement in brand sentiment"
            link="/success-stories/business-executive"
          />

          <CaseStudy
            image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
            imageAlt="Healthcare professional"
            category="Healthcare Professional"
            title="Medical Practice Protection"
            description="A physician's practice was targeted by a competitor with false reviews. We removed the defamatory content and built a positive content strategy to restore their reputation."
            resultPercentage={94}
            resultText="Patient trust restored"
            link="/success-stories/healthcare-professional"
          />

          <CaseStudy
            image="https://pixabay.com/get/g4fc1e980428e021c8b5053c957c02a1833e51cf93781be0fd25902509052c22762649573c254a2e83c543c6620c809f099008423d825a3d253fea8f84fbd88e1_1280.jpg"
            imageAlt="Personal privacy case"
            category="Private Individual"
            title="Private Image Removal"
            description="A client had unauthorized personal images distributed online. We successfully removed all images from 17 websites and search engines within 72 hours."
            resultPercentage={100}
            resultText="Content removal success"
            link="/success-stories/private-individual"
          />
        </div>

        {/* Testimonials */}
        <div className="mt-16 pt-12 border-t border-mid-gray border-opacity-50">
          <h3 className="font-inter font-bold text-2xl text-primary mb-8 text-center">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              quote="Sifabora's team worked tirelessly to remove the defamatory content about my business. Their expertise and strategic approach not only solved my immediate problem but gave me tools to protect my reputation going forward."
              authorName="Sarah J."
              authorTitle="Business Owner"
              authorImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
            />

            <Testimonial
              quote="When private images of me were posted online without consent, I was devastated. Sifabora acted quickly and professionally, removing all content within days. Their ongoing protection gives me peace of mind."
              authorName="Michael T."
              authorTitle="Individual Client"
              authorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
