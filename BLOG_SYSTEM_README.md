# Blog System Documentation

## Overview

The Aaraam Properties blog system is a category-driven article platform featuring 6 content categories with 6 articles each (36 total). The system includes a filterable blog listing page and individual article detail pages with full SEO support.

## File Structure

```
src/
├── data/
│   └── blogArticles.ts          # Blog data model and helper functions
├── components/
│   └── BlogCard.tsx              # Reusable blog card component
├── pages/
│   ├── Blog.tsx                  # Main blog listing page
│   └── BlogArticlePage.tsx       # Individual article detail page
```

## Categories

The blog includes 7 filter tabs:

1. **All** - Shows all articles (36 total)
2. **Buying Guide** - 6 articles about property purchase guidance
3. **Commercial Property** - 6 articles about office/retail/warehouse spaces
4. **Expert Talks** - 6 articles with professional insights
5. **Life Style** - 6 articles about modern workspaces and amenities
6. **NRI's** - 6 articles for Non-Resident Indian investors
7. **Community** - 6 articles about building communities in commercial spaces

## Routes

- **Blog Listing**: `/blog`
- **Article Detail**: `/blog/:slug`

Example: `/blog/ultimate-guide-buying-commercial-property`

## Data Model

### BlogArticle Interface

```typescript
interface BlogArticle {
  id: string;                 // Unique identifier (e.g., "bg-1")
  slug: string;               // URL slug (e.g., "ultimate-guide-buying-commercial-property")
  title: string;              // Article title
  category: string;           // Category ID (e.g., "buying-guide")
  author: string;             // Author name
  date: string;               // Publication date (YYYY-MM-DD format)
  excerpt: string;            // Short description (160 chars max)
  hero: string;               // Hero image path
  content: string;            // Full article HTML content
  tags: string[];             // Article tags
  readingTime: string;        // Reading time estimate (e.g., "8 min read")
}
```

## Adding New Articles

### Step 1: Add Article Data

Edit `src/data/blogArticles.ts` and add a new article object to the `blogArticles` array:

```typescript
{
  id: "cp-7",
  slug: "new-article-slug",
  title: "Your Article Title",
  category: "commercial-property",  // Use existing category ID
  author: "Author Name",
  date: "2025-11-25",
  excerpt: "Brief description of the article content...",
  hero: "/assets/blog/commercial/new-article.jpg",
  content: "<p>Full HTML content here...</p>",
  tags: ["Tag1", "Tag2", "Tag3"],
  readingTime: "5 min read",
}
```

### Step 2: Add Hero Image

Place your hero image in:
```
public/assets/blog/[category-name]/[image-name].jpg
```

Image specifications:
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **Format**: JPG or PNG
- **Size**: < 300KB (optimized for web)

### Step 3: Article Content

The `content` field accepts HTML. For rich articles, use:

```html
<p>Introduction paragraph...</p>

<h2>Section Heading</h2>
<p>Section content...</p>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>

<blockquote>
  <p>Important quote or callout</p>
</blockquote>

<h3>Subsection</h3>
<p>More content...</p>
```

## Adjusting Display Settings

### Change Articles Per Category

Default: 6 articles shown initially per category

To modify, edit `src/pages/Blog.tsx`:

```typescript
const [visibleCount, setVisibleCount] = useState(6); // Change this number
```

### Change Load More Increment

Edit the `handleLoadMore` function in `src/pages/Blog.tsx`:

```typescript
const handleLoadMore = () => {
  setVisibleCount((prev) => prev + 6); // Change the increment
};
```

### Change Grid Layout

Modify the grid classes in `src/pages/Blog.tsx`:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
  {/* Cards */}
</div>
```

Options:
- **2-column desktop**: `lg:grid-cols-2`
- **4-column desktop**: `lg:grid-cols-4`
- **Adjust gap**: `gap-4`, `gap-6`, `gap-8`

## Card Specifications

### Desktop (≥1200px)
- **Layout**: 3 columns
- **Image Height**: 220px
- **Button Height**: 48px (h-12)
- **Border Radius**: 12px (rounded-xl)
- **Shadow**: 0 10px 30px rgba(18,40,30,0.06)

### Tablet (768-1199px)
- **Layout**: 2 columns
- **Image Height**: 200px

### Mobile (<768px)
- **Layout**: 1 column
- **Image Height**: 220px
- **Button Height**: 48px (increased tap target)

## SEO Features

Each article page includes:

1. **HTML Meta Tags**
   - Title: `{Article Title} | Aaraam Properties Blog`
   - Description from excerpt
   - Open Graph tags for social sharing
   - Twitter Card tags

2. **JSON-LD Structured Data**
   - Schema.org Article markup
   - Author information
   - Publisher details
   - Publication date

3. **Social Sharing**
   - Facebook share button
   - Twitter share button
   - LinkedIn share button

## Accessibility Features

- **Semantic HTML**: Proper use of `<article>`, `<nav>`, `<time>`, `<address>`
- **ARIA Labels**: All interactive elements have descriptive labels
- **Keyboard Navigation**: Tab-accessible category filters with `role="tablist"`
- **Focus States**: Visible focus outlines on all interactive elements
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Alt Text**: All images have descriptive alt attributes
- **Color Contrast**: WCAG AA compliant text and button contrast

## Animation & Transitions

- **Card Hover**: translateY(-6px) + scale(1.02)
- **Image Hover**: scale(1.03)
- **Tab Switch**: Spring animation with layoutId
- **Load More**: Fade-in animation
- **Timing**: 300ms duration with "smooth" easing

All animations respect `prefers-reduced-motion: reduce`.

## Helper Functions

Available in `src/data/blogArticles.ts`:

### getArticlesByCategory
```typescript
getArticlesByCategory(categoryId: string): BlogArticle[]
```
Returns all articles for a specific category. Use "all" for all articles.

### getArticleBySlug
```typescript
getArticleBySlug(slug: string): BlogArticle | undefined
```
Finds a single article by its slug.

### getRelatedArticles
```typescript
getRelatedArticles(currentSlug: string, limit: number = 3): BlogArticle[]
```
Returns related articles from the same category (excludes current article).

## Color Tokens

The blog uses existing Aaraam color tokens:

- **Primary (Dark Teal)**: `#004861` - `text-primary`, `bg-primary`
- **Accent (Green)**: `#16A34A` - `text-accent`, `bg-accent`
- **Background**: `bg-white`, `bg-gray-50`
- **Text**: `text-gray-600`, `text-gray-500`

## Typography Scale

- **Hero Title**: `text-4xl md:text-5xl lg:text-6xl`
- **Article Title**: `text-4xl md:text-5xl`
- **Card Title**: `text-xl`
- **Body Text**: `text-base` (15-16px)
- **Meta Info**: `text-xs` (12px)

## Performance Optimizations

1. **Lazy Loading**: All images use `loading="lazy"` except hero images
2. **Image Optimization**: Proper aspect ratios prevent layout shift
3. **Code Splitting**: Article pages loaded on-demand via React Router
4. **Staggered Animations**: Cards animate in sequence for smoother UX
5. **Pagination**: Load More button prevents rendering all articles at once

## Testing Checklist

Before deploying new articles:

- [ ] Article appears in correct category
- [ ] Image loads correctly and maintains aspect ratio
- [ ] Title and excerpt display properly (no overflow)
- [ ] Author, date, and reading time are accurate
- [ ] Tags are relevant and properly formatted
- [ ] Article content renders HTML correctly
- [ ] Share buttons generate correct links
- [ ] Related articles show (same category)
- [ ] Mobile responsive (test on actual devices)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast passes WCAG AA
- [ ] Images have descriptive alt text

## Troubleshooting

### Article Not Showing
- Check category ID matches exactly (case-sensitive)
- Verify slug is unique
- Ensure article is added to `blogArticles` array

### Image Not Loading
- Verify image path starts with `/assets/blog/`
- Check file exists in `public/assets/blog/[category]/`
- Ensure image filename matches exactly (case-sensitive)

### Wrong Category Display
- Check `category` field uses ID (e.g., "buying-guide") not title
- Verify category exists in `blogCategories` array

### Routing Not Working
- Article route `/blog/:slug` must come AFTER `/blog` in App.tsx
- Check slug doesn't contain spaces or special characters
- Use hyphens for multi-word slugs

## Future Enhancements

Potential features for future development:

- Search functionality
- Category filtering via URL parameters (`/blog?category=buying-guide`)
- Pagination instead of Load More
- Author pages
- Article series/collections
- Comments system
- Reading progress indicator
- Print-friendly version
- RSS feed
- Newsletter integration

## Support

For questions or issues with the blog system, contact the development team or refer to the project documentation.

---

**Last Updated**: November 23, 2025  
**Version**: 1.0.0  
**Maintained by**: Aaraam Properties Development Team
