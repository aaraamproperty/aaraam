import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogArticle } from "@/data/blogArticles";
import { useState, useEffect } from "react";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroLuxuryHome from "@/assets/hero-luxury-home.jpg";
import officeSpace from "@/assets/office-space.jpg";
import propertyShowcase from "@/assets/property-showcase.jpg";
import retailShop from "@/assets/retail-shop.jpg";

interface BlogCardProps {
  article: BlogArticle;
  index?: number;
}

const BlogCard = ({ article, index = 0 }: BlogCardProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Cycle through available images
  const images = [
    heroCommercial,
    heroLuxuryHome,
    officeSpace,
    propertyShowcase,
    retailShop,
  ];
  const cardImage = images[index % images.length];

  // Get category display name
  const getCategoryName = (categoryId: string): string => {
    const categoryMap: { [key: string]: string } = {
      "buying-guide": "Buying Guide",
      "commercial-property": "Commercial Property",
      "expert-talks": "Expert Talks",
      "life-style": "Life Style",
      nris: "NRI's",
      community: "Community",
    };
    return categoryMap[categoryId] || categoryId;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.08,
        duration: prefersReducedMotion ? 0 : 0.5,
      }}
      className="group bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(18,40,30,0.06)] hover:shadow-[0_20px_60px_rgba(18,40,30,0.12)] transition-all duration-300 ease-smooth flex flex-col h-full"
      style={{
        transform: prefersReducedMotion ? "none" : undefined,
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -6,
              scale: 1.02,
            }
      }
    >
      {/* Image */}
      <Link to={`/blog/${article.slug}`} className="block relative overflow-hidden">
        <div className="relative h-[220px] md:h-[180px] lg:h-[220px] overflow-hidden bg-gray-200">
          <img
            src={cardImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-103"
            style={{
              aspectRatio: "16/9",
              transform: prefersReducedMotion ? "none" : undefined,
            }}
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block text-xs font-semibold text-white bg-accent px-3 py-1.5 rounded-full shadow-md">
              {getCategoryName(article.category)}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <Link to={`/blog/${article.slug}`}>
          <h3 className="text-xl font-bold text-primary mb-3 line-clamp-1 group-hover:text-accent transition-colors duration-300">
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        {/* Read Full Article Button */}
        <div className="mt-auto">
          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center justify-center w-full h-[52px] md:h-12 px-6 bg-white text-accent font-semibold rounded-full border-2 border-accent transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label={`Read full article: ${article.title}`}
            style={{
              transform: prefersReducedMotion ? "none" : undefined,
            }}
          >
            Read full article
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
