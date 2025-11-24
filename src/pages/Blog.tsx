import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-commercial.jpg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  blogCategories,
  getArticlesByCategory,
  BlogArticle,
} from "@/data/blogArticles";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayedArticles, setDisplayedArticles] = useState<BlogArticle[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
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

  // Update displayed articles when category changes
  useEffect(() => {
    console.log("Blog component mounted, category:", selectedCategory);
    const articles = getArticlesByCategory(selectedCategory);
    console.log("Fetched articles:", articles.length);
    setDisplayedArticles(articles);
    setVisibleCount(6); // Reset visible count when category changes
    // Scroll to grid section smoothly
    const gridSection = document.getElementById("blog-grid");
    if (gridSection) {
      setTimeout(() => {
        gridSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedCategory]);

  const articlesToShow = displayedArticles.slice(0, visibleCount);
  const hasMore = visibleCount < displayedArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingChatbot />

      {/* Hero Section */}
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

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <nav
            role="tablist"
            aria-label="Blog categories"
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 justify-center"
          >
            {blogCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={selectedCategory === category.id}
                aria-controls={`panel-${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  relative px-5 py-2.5 rounded-xl whitespace-nowrap font-semibold text-sm
                  transition-all duration-300 ease-smooth outline-none
                  ${
                    selectedCategory === category.id
                      ? "text-accent bg-accent/10"
                      : "text-accent bg-transparent hover:bg-accent hover:text-white focus:bg-accent focus:text-white"
                  }
                `}
                style={{
                  transform: prefersReducedMotion ? "none" : undefined,
                }}
              >
                {category.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Blog Grid Section */}
      <section id="blog-grid" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Results count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.1,
              duration: prefersReducedMotion ? 0 : 0.5,
            }}
            className="mb-8"
          >
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold text-primary">
                {articlesToShow.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-primary">
                {displayedArticles.length}
              </span>{" "}
              {displayedArticles.length === 1 ? "article" : "articles"}
            </p>
          </motion.div>

          {/* Cards Grid - Full Width */}
          <div
            role="tabpanel"
            id={`panel-${selectedCategory}`}
            aria-labelledby={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {articlesToShow.map((article, index) => (
              <BlogCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {/* No articles message */}
          {articlesToShow.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">
                No articles found in this category yet.
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.3,
                duration: prefersReducedMotion ? 0 : 0.5,
              }}
              className="mt-12 text-center"
            >
              <Button
                onClick={handleLoadMore}
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-12 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Load More Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
