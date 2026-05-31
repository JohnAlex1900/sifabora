import { Link } from "wouter";
import BlogPostCard from "@/components/shared/BlogPostCard";

const NewsSection = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1663090859310-97a1af639a29?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 14, 2025",
      category: "Reputation Management",
      title: "How to Remove Negative Content from Google Search",
      summary:
        "Step-by-step guide to help individuals and businesses request removal of damaging content from Google search results.",
      link: "/news/how-to-remove-negative-content",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 30, 2024",
      category: "Privacy Protection",
      title: "How to Secure Your Online Identity from Data Brokers",
      summary:
        "Learn how to opt out from data brokers and prevent your personal information from being sold online.",
      link: "/news/secure-identity-data-brokers",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 12, 2024",
      category: "Digital Security",
      title:
        "How Cybercriminals Use Public Data Against You (and How to Stop Them)",
      summary:
        "Discover how cybercriminals leverage publicly available data and steps to safeguard your digital footprint.",
      link: "/news/public-data-prevention",
    },
  ];

  return (
    <section id="news" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-primary mb-4">
            News & Insights
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Stay informed with the latest trends and strategies in digital
            reputation management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              image={post.image}
              date={post.date}
              category={post.category}
              title={post.title}
              summary={post.summary}
              link={post.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-block font-medium border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
