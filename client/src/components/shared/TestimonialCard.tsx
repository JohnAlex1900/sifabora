interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  image: string;
}

const TestimonialCard = ({ content, author, position, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6 relative">
      <div className="absolute -top-4 -left-4 text-5xl text-primary opacity-20">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="text-dark-gray mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
          <img 
            src={image} 
            alt={`${author}, ${position}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-primary">{author}</h4>
          <p className="text-sm text-dark-gray">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
