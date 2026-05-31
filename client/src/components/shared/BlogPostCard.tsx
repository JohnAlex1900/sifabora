import { Link } from "wouter";

interface BlogPostCardProps {
  image: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  link: string;
}

const BlogPostCard = ({
  image,
  date,
  category,
  title,
  summary,
  link,
}: BlogPostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
      <div className="h-48 bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4 text-sm text-dark-gray">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        <h3 className="font-bold text-xl text-primary mb-3">{title}</h3>
        <p className="text-dark-gray mb-4">{summary}</p>
        <Link
          href={link}
          className="text-secondary hover:underline font-medium"
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
