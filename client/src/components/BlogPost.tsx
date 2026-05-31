import { Link } from "wouter";

interface BlogPostProps {
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const BlogPost = ({
  image,
  imageAlt,
  date,
  category,
  title,
  description,
  link,
}: BlogPostProps) => {
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
        <div className="flex items-center mb-4 text-sm text-dark-gray">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        <h3 className="font-inter font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-dark-gray mb-4">{description}</p>
        <Link href={link} className="text-secondary hover:underline font-medium">
          Read article
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
