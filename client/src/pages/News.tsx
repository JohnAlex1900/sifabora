import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import BlogPostCard from "@/components/shared/BlogPostCard";

const News = () => {
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
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1659869764315-dc3d188141fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 8, 2024",
      category: "Legal Updates",
      title:
        "New Global Laws on Content Removal Requests: What Changed in 2024",
      summary:
        "Review of recent international legal frameworks impacting online defamation and content removal rights.",
      link: "/news/content-removal-laws-2024",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 19, 2023",
      category: "Personal Branding",
      title: "How to Build a Strong Personal Brand on LinkedIn",
      summary:
        "Strategies to boost your digital reputation and build trust through professional networks like LinkedIn.",
      link: "/news/linkedin-personal-branding",
    },
  ];

  const categories = [
    "All Categories",
    ...new Set(blogPosts.map((post) => post.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredPosts =
    selectedCategory === "All Categories"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>News & Insights | Sifabora Digital Reputation Protection</title>
        <meta
          name="description"
          content="Stay informed with the latest trends, strategies and updates in digital reputation management from Sifabora's experts."
        />
        <meta
          property="og:title"
          content="News & Insights | Sifabora Digital Reputation Protection"
        />
        <meta
          property="og:description"
          content="Latest insights and strategies for protecting your digital reputation from Sifabora's industry experts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sifabora.com/news" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News & Insights
          </h1>
          <p className="text-xl opacity-90">
            Stay informed with the latest trends and strategies in digital
            reputation management.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl font-bold text-primary mb-4 md:mb-0">
              Our Latest Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-light-gray text-dark-gray hover:bg-primary hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
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
        </div>
      </section>
    </>
  );
};

export default News;
