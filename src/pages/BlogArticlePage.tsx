import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Share2,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import BlogCard from "@/components/BlogCard";
import {
  getArticleBySlug,
  getRelatedArticles,
  BlogArticle,
} from "@/data/blogArticles";
import { Helmet } from "react-helmet";

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogArticle | undefined>(undefined);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (slug) {
      const foundArticle = getArticleBySlug(slug);
      if (foundArticle) {
        setArticle(foundArticle);
        setRelatedArticles(getRelatedArticles(slug, 3));
        // Scroll to top on article load
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Article not found, redirect to blog
        navigate("/blog");
      }
    }
  }, [slug, navigate]);

  if (!article) {
    return null; // Or a loading spinner
  }

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

  const categoryName = getCategoryName(article.category);
  const shareUrl = window.location.href;

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{article.title} | Aaraam Properties Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.hero} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.hero} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            image: article.hero,
            datePublished: article.date,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Aaraam Properties",
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
            description: article.excerpt,
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingChatbot />

      {/* Article Content */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            className="mb-6"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.1,
              duration: prefersReducedMotion ? 0 : 0.5,
            }}
            className="mb-4"
          >
            <span className="inline-block text-sm font-semibold text-white bg-accent px-4 py-1.5 rounded-full">
              {categoryName}
            </span>
          </motion.div>

          {/* Article Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.2,
              duration: prefersReducedMotion ? 0 : 0.5,
            }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight"
          >
            {article.title}
          </motion.h1>

          {/* Meta Info & Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.3,
              duration: prefersReducedMotion ? 0 : 0.5,
            }}
            className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200"
          >
            {/* Meta */}
            <div className="flex items-center gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{article.readingTime}</span>
              </div>
            </div>

            {/* Share Icons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 flex items-center gap-2">
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-accent text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  shareUrl
                )}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-accent text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-accent text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.4,
              duration: prefersReducedMotion ? 0 : 0.6,
            }}
            className="mb-10 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={article.hero}
              alt={article.title}
              loading="eager"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.5,
              duration: prefersReducedMotion ? 0 : 0.6,
            }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.2,
                duration: prefersReducedMotion ? 0 : 0.5,
              }}
              className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center"
            >
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
              {relatedArticles.map((relatedArticle, index) => (
                <BlogCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogArticlePage;
