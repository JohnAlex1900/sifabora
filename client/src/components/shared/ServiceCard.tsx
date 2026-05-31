import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  link: string;
  isNew?: boolean;
}

const ServiceCard = ({
  icon,
  title,
  description,
  link,
  isNew = false,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div
        className={`w-14 h-14 rounded-full ${
          isNew ? "bg-primary bg-opacity-30" : "bg-primary bg-opacity-10"
        } flex items-center justify-center mb-6`}
      >
        <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
      </div>
      <h3 className="font-bold text-xl text-primary mb-3 flex items-center">
        {title}
        {isNew && (
          <span className="ml-2 text-xs bg-accent px-2 py-1 rounded-full text-primary">
            NEW
          </span>
        )}
      </h3>
      <p className="flex-grow text-dark-gray mb-5">{description}</p>
      <Link href={link} className="text-primary font-medium flex items-center">
        Learn more
        <i className="fas fa-arrow-right ml-2 text-sm"></i>
      </Link>
    </div>
  );
};

export default ServiceCard;
