import { Link } from "wouter";

interface CaseStudyCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  resultPercentage: number;
  resultText: string;
}

const CaseStudyCard = ({ 
  image, 
  category, 
  title, 
  description, 
  resultPercentage, 
  resultText 
}: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
      <div className="h-48 bg-gray-200">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="inline-block px-3 py-1 bg-success bg-opacity-10 text-success text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <h3 className="font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-dark-gray mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-bold">{resultPercentage}%</span>
            <span className="text-dark-gray ml-2">{resultText}</span>
          </div>
          <Link href="/success-stories" className="text-secondary hover:underline">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
