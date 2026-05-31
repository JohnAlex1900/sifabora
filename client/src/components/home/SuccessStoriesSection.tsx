import CaseStudyCard from "@/components/shared/CaseStudyCard";
import TestimonialCard from "@/components/shared/TestimonialCard";

const SuccessStoriesSection = () => {
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
  ];

  return (
    <section id="success-stories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mt-16 pt-12 border-t border-gray-300 border-opacity-50">
          <h3 className="font-bold text-3xl md:text-4xl text-primary mb-4 text-center">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
