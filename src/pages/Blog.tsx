import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";

const Blog = () => {
  const featuredPost = {
    image: officeImage,
    title: "Top 10 Locations for Office Spaces in Mumbai 2024",
    date: "November 15, 2025",
    excerpt: "Discover the most sought-after commercial hubs in Mumbai that offer the perfect blend of connectivity, infrastructure, and business opportunities.",
    category: "Offices",
  };

  const blogPosts = [
    {
      image: retailImage,
      title: "How to Choose the Perfect Retail Location",
      date: "November 10, 2025",
      excerpt: "Key factors to consider when selecting a retail space that drives foot traffic and sales.",
      category: "Shops",
    },
    {
      image: officeImage,
      title: "Commercial Leasing Guide for Startups",
      date: "November 5, 2025",
      excerpt: "Everything startups need to know about leasing commercial spaces in India.",
      category: "Leasing Tips",
    },
    {
      image: retailImage,
      title: "Market Trends: Commercial Real Estate 2024",
      date: "October 28, 2025",
      excerpt: "Analysis of current market trends and predictions for commercial real estate in major Indian cities.",
      category: "Market Trends",
    },
    {
      image: officeImage,
      title: "Co-working vs Traditional Office: Which is Right for You?",
      date: "October 20, 2025",
      excerpt: "Compare the benefits and drawbacks of co-working spaces versus traditional office leases.",
      category: "Offices",
    },
  ];

  const categories = ["All Posts", "Offices", "Shops", "Leasing Tips", "Market Trends"];

  const latestPosts = [
    { title: "5 Tips for Negotiating Commercial Leases", date: "Nov 12, 2025" },
    { title: "Understanding Commercial Property Taxes", date: "Nov 8, 2025" },
    { title: "Best Areas for Retail Shops in Bangalore", date: "Nov 3, 2025" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${officeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Insights & Industry News
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Stay updated with the latest trends and tips in commercial real estate
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-3xl overflow-hidden border border-border hover:border-accent transition-all shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mb-4">
                  Featured
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-fit">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-card rounded-3xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="md:col-span-2 p-6">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-3 mb-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                      <Button
                        variant="ghost"
                        className="text-accent hover:text-accent/80 p-0 h-auto font-semibold"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-card rounded-3xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground hover:font-medium"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Latest Posts */}
              <div className="bg-card rounded-3xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Latest Posts</h3>
                <div className="space-y-4">
                  {latestPosts.map((post, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h4 className="text-sm font-semibold text-foreground hover:text-accent transition-colors cursor-pointer mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-accent rounded-3xl p-6 text-accent-foreground">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-sm mb-4 text-accent-foreground/90">
                  Subscribe to our newsletter for the latest insights
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-full mb-3 text-foreground bg-background border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
