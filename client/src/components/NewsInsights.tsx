import { Link } from "wouter";
import BlogPost from "./BlogPost";
import { Button } from "@/components/ui/button";

const NewsInsights = () => {
  return (
    <section id="news" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-primary mb-4">News & Insights</h2>
          <p className="text-lg max-w-3xl mx-auto">Stay informed with the latest trends and strategies in digital reputation management.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPost 
            image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
            imageAlt="Digital reputation management strategies"
            date="June 15, 2023"
            category="Reputation Management"
            title="5 Strategies to Protect Your Business from Online Defamation"
            description="Learn proactive measures you can take to shield your business from potential reputation attacks and respond effectively when issues arise."
            link="/news/strategies-protect-business-online-defamation"
          />
          
          <BlogPost 
            image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
            imageAlt="Online privacy protection"
            date="May 28, 2023"
            category="Privacy Protection"
            title="Understanding Your Legal Rights When Private Images Are Shared Online"
            description="A comprehensive guide to the legal protections available when facing unauthorized sharing of private images and effective removal strategies."
            link="/news/legal-rights-private-images-shared-online"
          />
          
          <BlogPost 
            image="https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
            imageAlt="Search engine optimization"
            date="April 10, 2023"
            category="SEO Strategy"
            title="How Search Engines Process Removal Requests: What You Need to Know"
            description="An insider's look at how major search engines handle content removal requests and how to increase your chances of successful removal."
            link="/news/search-engines-removal-requests"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link href="/news">
            <Button variant="outline" className="inline-block font-inter font-medium border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all duration-300">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
