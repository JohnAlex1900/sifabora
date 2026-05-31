import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import CaseStudy from "@/components/CaseStudy";
import Testimonial from "@/components/Testimonial";
import { ButtonLink } from "@/components/ui/button-link";

const SuccessStoriesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Success Stories | Sifabora</title>
        <meta
          name="description"
          content="Read real success stories and testimonials from Sifabora clients who have reclaimed their digital reputation."
        />
        <meta property="og:title" content="Success Stories | Sifabora" />
        <meta
          property="og:description"
          content="Read real success stories and testimonials from Sifabora clients who have reclaimed their digital reputation."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sifabora.com/success-stories"
        />
      </Helmet>

      <section className="gradient-bg py-16 relative">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bS0xMi0yNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptLTEyLTI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-white mb-6">
            Success Stories
          </h1>
          <p className="text-white text-opacity-90 text-lg md:text-xl max-w-3xl mx-auto">
            Real results from our clients who successfully reclaimed their
            digital reputation with our help.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-inter font-bold text-3xl text-primary mb-12 text-center">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudy
              image="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
              imageAlt="Small business owner"
              category="Small Business"
              title="Competitor Smear Campaign"
              description="A local business was targeted by a competitor with false accusations. We identified the source, removed the damaging content, and implemented protective measures."
              resultPercentage={76}
              resultText="Increase in customer inquiries"
              link="/success-stories/small-business"
            />

            <CaseStudy
              image="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
              imageAlt="Public figure"
              category="Public Figure"
              title="Celebrity Impersonation"
              description="A public figure suffered from multiple fake accounts impersonating them online. We worked to remove all unauthorized accounts and strengthen the client's verified online presence."
              resultPercentage={100}
              resultText="Fake accounts removed"
              link="/success-stories/public-figure"
            />

            <CaseStudy
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
              imageAlt="Corporate executive"
              category="Corporate"
              title="Executive Profile Management"
              description="A C-level executive needed to improve their professional image after misleading information spread online. We created a strategic content plan to highlight their achievements."
              resultPercentage={92}
              resultText="Positive search results"
              link="/success-stories/corporate-executive"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-inter font-bold text-3xl text-primary mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              quote="As a physician, my online reputation directly impacts my practice. After misleading reviews appeared, Sifabora helped remove them and implement strategies to prevent future issues. Patient confidence has been fully restored."
              authorName="Dr. Jennifer L."
              authorTitle="Healthcare Professional"
              authorImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
            />

            <Testimonial
              quote="The team at Sifabora exceeded my expectations. They not only removed the defamatory content but also created a protective strategy that continues to safeguard my online presence. Their expertise is unmatched."
              authorName="Robert K."
              authorTitle="Corporate Executive"
              authorImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-inter font-bold text-3xl text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
              Join our growing list of clients who have successfully reclaimed
              their digital reputation. Our team is ready to develop a
              customized strategy for your specific situation.
            </p>
            <ButtonLink href="/contact" variant="white" size="lg">
              Get a Free Consultation
            </ButtonLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStoriesPage;
