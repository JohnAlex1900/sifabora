import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

const Testimonial = ({ quote, authorName, authorTitle, authorImage }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6 relative">
      <div className="absolute -top-4 -left-4 text-5xl text-primary opacity-20">
        <FaQuoteLeft />
      </div>
      <p className="text-dark-gray mb-6 italic">
        {quote}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
          <img 
            src={authorImage}
            alt={authorName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-inter font-medium text-primary">{authorName}</h4>
          <p className="text-sm text-dark-gray">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
