import { Link } from "wouter";

interface CaseStudyProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  resultPercentage: number;
  resultText: string;
  link: string;
}

const CaseStudy = ({
  image,
  imageAlt,
  category,
  title,
  description,
  resultPercentage,
  resultText,
  link
}: CaseStudyProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
      <div className="h-48 bg-gray-200">
        <img 
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="inline-block px-3 py-1 bg-success bg-opacity-10 text-success text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <h3 className="font-inter font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-dark-gray mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-bold">{resultPercentage}%</span>
            <span className="text-dark-gray ml-2">{resultText}</span>
          </div>
          <Link href={link} className="text-secondary hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
