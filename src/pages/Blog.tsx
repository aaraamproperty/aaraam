import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowRight,
  Search,
  User,
  Clock,
  Tag,
  Share2,
} from "lucide-react";
import officeImage from "@/assets/office-space.jpg";
import retailImage from "@/assets/retail-shop.jpg";
import heroImage from "@/assets/hero-commercial.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const allBlogPosts = [
    {
      id: "post-1",
      image: officeImage,
      title: "Top 10 Locations for Office Spaces in Mumbai 2024",
      slug: "/blog/top-10-locations-office-spaces-mumbai-2024",
      date: "November 15, 2025",
      publishedAt: "2025-11-15",
      excerpt:
        "Discover the most sought-after commercial hubs in Mumbai that offer the perfect blend of connectivity, infrastructure, and business opportunities.",
      category: "Buying Guide",
      tags: ["Mumbai", "Office Space", "Commercial"],
      author: { name: "Pratik Sharma", avatar: officeImage },
      readingTime: "5 min",
      featured: true,
    },
    {
      id: "post-2",
      image: retailImage,
      title: "How to Choose the Perfect Retail Location",
      slug: "/blog/how-to-choose-perfect-retail-location",
      date: "November 10, 2025",
      publishedAt: "2025-11-10",
      excerpt:
        "Key factors to consider when selecting a retail space that drives foot traffic and sales. Location, demographics, and visibility matter.",
      category: "Commercial Property",
      tags: ["Retail", "Location", "Business"],
      author: { name: "Sneha Reddy", avatar: retailImage },
      readingTime: "4 min",
      featured: false,
    },
    {
      id: "post-3",
      image: officeImage,
      title: "Commercial Leasing Guide for Startups",
      slug: "/blog/commercial-leasing-guide-startups",
      date: "November 5, 2025",
      publishedAt: "2025-11-05",
      excerpt:
        "Everything startups need to know about leasing commercial spaces in India. From documentation to negotiation strategies.",
      category: "Expert Talks",
      tags: ["Startups", "Leasing", "Guide"],
      author: { name: "Amit Patel", avatar: officeImage },
      readingTime: "6 min",
      featured: false,
    },
    {
      id: "post-4",
      image: retailImage,
      title: "Market Trends: Commercial Real Estate 2024",
      slug: "/blog/market-trends-commercial-real-estate-2024",
      date: "October 28, 2025",
      publishedAt: "2025-10-28",
      excerpt:
        "Analysis of current market trends and predictions for commercial real estate in major Indian cities. Expert insights included.",
      category: "Life Style",
      tags: ["Market Trends", "Analysis", "2024"],
      author: { name: "Rajesh Kumar", avatar: retailImage },
      readingTime: "7 min",
      featured: false,
    },
    {
      id: "post-5",
      image: officeImage,
      title: "Co-working vs Traditional Office: Which is Right for You?",
      slug: "/blog/coworking-vs-traditional-office",
      date: "October 20, 2025",
      publishedAt: "2025-10-20",
      excerpt:
        "Compare the benefits and drawbacks of co-working spaces versus traditional office leases for your business.",
      category: "Buying Guide",
      tags: ["Co-working", "Office", "Comparison"],
      author: { name: "Priya Sharma", avatar: officeImage },
      readingTime: "5 min",
      featured: false,
    },
    {
      id: "post-6",
      image: retailImage,
      title: "NRI Investment Guide: Commercial Properties in India",
      slug: "/blog/nri-investment-guide-commercial-properties",
      date: "October 15, 2025",
      publishedAt: "2025-10-15",
      excerpt:
        "Complete guide for NRIs looking to invest in commercial real estate in India. Tax implications and legal requirements covered.",
      category: "NRI's",
      tags: ["NRI", "Investment", "Guide"],
      author: { name: "Arun Mehta", avatar: retailImage },
      readingTime: "8 min",
      featured: false,
    },
    {
      id: "post-7",
      image: officeImage,
      title: "Building Community Spaces: The Future of Commercial Real Estate",
      slug: "/blog/building-community-spaces-future",
      date: "October 10, 2025",
      publishedAt: "2025-10-10",
      excerpt:
        "How community-focused commercial spaces are reshaping the real estate landscape and creating value.",
      category: "Community",
      tags: ["Community", "Future", "Innovation"],
      author: { name: "Neha Singh", avatar: officeImage },
      readingTime: "6 min",
      featured: false,
    },
    {
      id: "post-8",
      image: retailImage,
      title: "5 Tips for Negotiating Commercial Leases",
      slug: "/blog/5-tips-negotiating-commercial-leases",
      date: "October 5, 2025",
      publishedAt: "2025-10-05",
      excerpt:
        "Master the art of negotiation with these proven strategies for getting the best commercial lease terms.",
      category: "Expert Talks",
      tags: ["Negotiation", "Tips", "Leasing"],
      author: { name: "Vikram Desai", avatar: retailImage },
      readingTime: "4 min",
      featured: false,
    },
  ];

  // Categories matching PS Group structure
  const categories = [
    "All",
    "Buying Guide",
    "Commercial Property",
    "Expert Talks",
    "Life Style",
    "NRI's",
    "Community",
  ];

  // Filter posts based on category and search
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All" ||
      post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allBlogPosts.find((post) => post.featured);
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  const recentPosts = allBlogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Section - PS Group Style */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        className="relative pt-32 pb-16 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#004861]/95" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.2,
              duration: prefersReducedMotion ? 0 : 0.8,
            }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Insights & Expert Advice
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Stay informed with the latest trends, tips, and industry news in
              commercial real estate
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2.5 rounded-full whitespace-nowrap font-medium
                  transition-all duration-240 ease-smooth
                  text-gray-600 hover:text-white hover:bg-[#16A34A]
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post - Only show when no category is selected or "All" is selected */}
      {featuredPost &&
        (selectedCategory === "" || selectedCategory === "All") && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="py-8 bg-[#F7F7F7]"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-240">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80 overflow-hidden group">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-xs font-medium text-white bg-[#16A34A] px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-[#16A34A] bg-[#16A34A]/10 px-3 py-1 rounded-full w-fit mb-2">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#004861] mb-3">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readingTime}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="bg-white text-[#16A34A] border-2 border-[#16A34A] hover:bg-[#16A34A] hover:text-white rounded-full w-fit px-6 py-2 transition-all duration-240">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

      {/* Blog Grid with Sidebar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold text-[#004861]">
                {filteredPosts.length}
              </span>{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Blog Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.1,
                      duration: prefersReducedMotion ? 0 : 0.5,
                    }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#16A34A] hover:shadow-lg transition-all duration-240 group"
                  >
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-[#16A34A] px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#004861] mb-3 line-clamp-2 group-hover:text-[#16A34A] transition-colors duration-240">
                        {post.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {post.author.name}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readingTime}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded hover:bg-[#16A34A]/10 hover:text-[#16A34A] transition-colors duration-240 cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        className="text-[#16A34A] hover:text-white p-0 h-auto font-semibold text-sm"
                      >
                        Read Full Article{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              {hasMorePosts && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
                  className="mt-12 text-center"
                >
                  <Button
                    onClick={handleLoadMore}
                    className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white rounded-full px-8 py-3"
                  >
                    Load More Articles
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#004861] mb-4">
                  Search Articles
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition-all duration-240"
                  />
                </div>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#004861] mb-4">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <h4 className="text-sm font-semibold text-[#004861] group-hover:text-[#16A34A] transition-colors duration-240 mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#004861] mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories
                    .filter((cat) => cat !== "All")
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                        block w-full text-left px-4 py-2 rounded-full text-sm font-medium
                        transition-all duration-240
                        ${
                          selectedCategory === category
                            ? "bg-[#16A34A] text-white"
                            : "text-gray-600 hover:bg-[#16A34A]/10 hover:text-[#16A34A]"
                        }
                      `}
                      >
                        {category}
                      </button>
                    ))}
                </div>
              </motion.div>

              {/* Newsletter Subscription */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                className="bg-[#16A34A] rounded-2xl p-6 text-white shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                <p className="text-sm mb-4 text-white/90">
                  Get the latest commercial real estate insights delivered to
                  your inbox
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full mb-3 text-gray-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="w-full bg-white text-[#004861] hover:bg-white/90 rounded-full font-semibold">
                  Subscribe Now
                </Button>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#004861] mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Commercial Property",
                    "Investment",
                    "Real Estate Tips",
                    "Market Trends",
                    "NRI Investment",
                    "Lease",
                  ].map((tag) => (
                    <button
                      key={tag}
                      className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-[#16A34A]/10 hover:text-[#16A34A] transition-colors duration-240"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
