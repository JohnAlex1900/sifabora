import { Link } from "wouter";
import { FaShieldAlt, FaSearchMinus, FaChartLine, FaImage, FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "shield" | "search" | "chart" | "image";
  link: string;
  isNew?: boolean;
}

const ServiceCard = ({ title, description, icon, link, isNew = false }: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "shield":
        return <FaShieldAlt className="text-primary text-2xl" />;
      case "search":
        return <FaSearchMinus className="text-primary text-2xl" />;
      case "chart":
        return <FaChartLine className="text-primary text-2xl" />;
      case "image":
        return <FaImage className="text-primary text-2xl" />;
      default:
        return <FaShieldAlt className="text-primary text-2xl" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-custom p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className={`w-14 h-14 rounded-full ${icon === "image" ? "bg-accent bg-opacity-30" : "bg-primary bg-opacity-10"} flex items-center justify-center mb-6`}>
        {getIcon()}
      </div>
      <h3 className="font-inter font-bold text-xl text-primary mb-3 flex items-center">
        {title}
        {isNew && (
          <span className="ml-2 text-xs bg-accent px-2 py-1 rounded-full text-primary">NEW</span>
        )}
      </h3>
      <p className="flex-grow text-dark-gray mb-5">{description}</p>
      <Link href={link} className="text-primary font-inter font-medium flex items-center">
        Learn more
        <FaArrowRight className="ml-2 text-sm" />
      </Link>
    </div>
  );
};

export default ServiceCard;
