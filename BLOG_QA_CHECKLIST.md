# Blog System QA Checklist

## Visual & Functional Testing

### Category Tabs (/blog)

- [ ] **All 7 tabs visible**: All | Buying Guide | Commercial Property | Expert Talks | Life Style | NRI's | Community
- [ ] **Active tab styling**: Green text (`text-accent`) with green background tint (`bg-accent/10`)
- [ ] **Underline animation**: Animated underline follows active tab smoothly
- [ ] **Hover states**: Inactive tabs show hover effect (green tint on hover)
- [ ] **Sticky behavior**: Tab bar sticks to top when scrolling down
- [ ] **Mobile scroll**: Tabs scrollable horizontally on mobile (no wrapping)
- [ ] **Keyboard navigation**: Can tab through categories with Tab key
- [ ] **ARIA attributes**: role="tablist", role="tab", aria-selected present

### Blog Grid Layout

#### Desktop (≥1200px)
- [ ] **3-column grid**: Cards arranged in 3 columns
- [ ] **28px gap**: Consistent spacing between cards (gap-7)
- [ ] **Equal heights**: Cards in same row have equal height
- [ ] **Button alignment**: "Read full article" buttons align horizontally
- [ ] **Image height**: 220px consistent across all cards
- [ ] **Full container width**: No sidebar, grid uses full content width

#### Tablet (768-1199px)
- [ ] **2-column grid**: Cards arranged in 2 columns
- [ ] **Responsive images**: Images scale properly
- [ ] **Card spacing**: Maintains visual balance

#### Mobile (<768px)
- [ ] **1-column grid**: Cards stack vertically
- [ ] **Full-width cards**: Cards span container width
- [ ] **Tap targets**: Buttons are 48px+ height (easy to tap)
- [ ] **Text readability**: All text legible on small screens

### Individual Card Design

- [ ] **Image**: 
  - [ ] Loads with lazy loading
  - [ ] 16:9 aspect ratio maintained
  - [ ] No layout shift when loading
  - [ ] Placeholder background (gray) while loading
  
- [ ] **Category badge**:
  - [ ] Always visible (top-left of image)
  - [ ] Green background with white text
  - [ ] Proper category name displayed
  - [ ] Rounded pill shape (rounded-full)

- [ ] **Title**:
  - [ ] Single line with ellipsis if too long
  - [ ] 20px font size (text-xl)
  - [ ] Bold font weight
  - [ ] Teal color (text-primary)

- [ ] **Excerpt**:
  - [ ] 2 lines maximum with ellipsis
  - [ ] 15px font size
  - [ ] Gray color (text-gray-600)
  - [ ] Line height comfortable for reading

- [ ] **Meta row**:
  - [ ] Author icon + name
  - [ ] Calendar icon + date
  - [ ] Clock icon + reading time
  - [ ] All items visible
  - [ ] Proper spacing between items

- [ ] **Button**:
  - [ ] Text: "Read full article"
  - [ ] Always visible (not hover-only)
  - [ ] 48px height (h-12)
  - [ ] Full width of card
  - [ ] Green background (bg-accent)
  - [ ] White text
  - [ ] Rounded full (rounded-full)
  - [ ] Arrow icon on right

### Card Interactions

- [ ] **Hover effects** (desktop only):
  - [ ] Card lifts up (-6px translateY)
  - [ ] Card scales slightly (1.02)
  - [ ] Shadow intensifies
  - [ ] Image zooms (scale 1.03)
  - [ ] Transitions smooth (300ms)
  - [ ] Title color changes to green

- [ ] **Reduced motion**:
  - [ ] Hover effects disabled when prefers-reduced-motion
  - [ ] No scale/transform applied
  - [ ] Instant transitions instead of animated

- [ ] **Click behavior**:
  - [ ] Clicking card image → article page
  - [ ] Clicking title → article page
  - [ ] Clicking button → article page
  - [ ] Correct article loads

### Category Filtering

- [ ] **All tab**:
  - [ ] Shows all 36 articles
  - [ ] Default selected on page load
  - [ ] Shows count "Showing X of 36 articles"

- [ ] **Category tabs** (test each):
  - [ ] **Buying Guide**: Shows exactly 6 articles
  - [ ] **Commercial Property**: Shows exactly 6 articles
  - [ ] **Expert Talks**: Shows exactly 6 articles
  - [ ] **Life Style**: Shows exactly 6 articles
  - [ ] **NRI's**: Shows exactly 6 articles
  - [ ] **Community**: Shows exactly 6 articles

- [ ] **Switching categories**:
  - [ ] Smooth page scroll to grid section
  - [ ] Active tab updates immediately
  - [ ] Grid re-renders with correct articles
  - [ ] Count updates correctly
  - [ ] Visible count resets to 6

### Load More Functionality

- [ ] **Button appearance**:
  - [ ] Only shows when more articles available
  - [ ] Centered below grid
  - [ ] Green background, white text
  - [ ] 48px height

- [ ] **Button behavior**:
  - [ ] Loads 6 more articles on click
  - [ ] Button disappears when all articles shown
  - [ ] Smooth fade-in of new cards
  - [ ] Staggered animation delay

### Article Page (/blog/:slug)

#### Header & Navigation
- [ ] **Back button**:
  - [ ] "Back to Blog" link present
  - [ ] Arrow icon on left
  - [ ] Links to /blog
  - [ ] Hover effect (color change to green)

- [ ] **Category badge**:
  - [ ] Shows correct category
  - [ ] Green background, white text
  - [ ] Rounded pill shape

- [ ] **Title**:
  - [ ] Large, bold (4xl → 5xl responsive)
  - [ ] Teal color
  - [ ] Readable line height

#### Meta Information
- [ ] **Author**: Icon + name displayed
- [ ] **Date**: Icon + formatted date (Month Day, Year)
- [ ] **Reading time**: Icon + estimate
- [ ] **All icons**: Properly sized and aligned

#### Share Buttons
- [ ] **Facebook**: Present with icon
- [ ] **Twitter**: Present with icon
- [ ] **LinkedIn**: Present with icon
- [ ] **Hover effect**: Background changes to green
- [ ] **Click behavior**: Opens share dialog (currently #)

#### Content Section
- [ ] **Hero image**:
  - [ ] Full width
  - [ ] 16:9 aspect ratio
  - [ ] Eager loading (not lazy)
  - [ ] Rounded corners
  - [ ] Shadow effect

- [ ] **Article content**:
  - [ ] HTML renders correctly
  - [ ] Proper typography (prose styles)
  - [ ] Readable line length
  - [ ] Comfortable line height

- [ ] **Tags section**:
  - [ ] "Tags:" label present
  - [ ] All tags displayed
  - [ ] Hashtag prefix (#)
  - [ ] Clickable appearance
  - [ ] Hover effect (green background)

#### Related Articles
- [ ] **Section present**: Only if related articles exist
- [ ] **Heading**: "Related Articles" centered
- [ ] **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- [ ] **Cards**: Use same BlogCard component
- [ ] **Filtering**: Shows articles from same category
- [ ] **Exclude current**: Current article not shown
- [ ] **Limit**: Maximum 3 articles shown

### SEO & Meta Tags

- [ ] **Document title**: Check browser tab shows "{Title} | Aaraam Properties Blog"
- [ ] **Meta description**: Check in page source
- [ ] **Open Graph tags**: Present in HTML head
- [ ] **Twitter Card tags**: Present in HTML head
- [ ] **JSON-LD**: Check structured data in page source
- [ ] **Schema validation**: Validate with Google Rich Results Test

### Accessibility Testing

#### Keyboard Navigation
- [ ] **Tab order**: Logical flow through page
- [ ] **Category tabs**: Tabbable and activatable with Enter/Space
- [ ] **Card links**: Tabbable
- [ ] **Buttons**: Tabbable and activatable
- [ ] **Focus indicators**: Visible on all interactive elements
- [ ] **Skip to content**: Consider adding (not implemented)

#### Screen Reader
- [ ] **ARIA labels**: All interactive elements labeled
- [ ] **Image alt text**: All images have descriptive alt (currently placeholder)
- [ ] **Heading hierarchy**: Proper H1 → H2 → H3 structure
- [ ] **Semantic HTML**: article, nav, time, address tags used
- [ ] **Landmarks**: role="navigation", role="tablist" present

#### Color Contrast
- [ ] **Text on white**: Passes WCAG AA (4.5:1 minimum)
- [ ] **Button text**: White on green passes contrast
- [ ] **Meta text**: Gray passes contrast ratio
- [ ] **Hover states**: Maintain sufficient contrast

#### Motion
- [ ] **Reduced motion**: Test with browser setting enabled
- [ ] **Animations disabled**: Transforms and scales disabled
- [ ] **Instant transitions**: Smooth but instant state changes
- [ ] **No motion sickness**: No excessive movement

### Performance Testing

- [ ] **Initial load**: Page loads quickly (<2s)
- [ ] **Image loading**: Lazy load works (images load as scrolled)
- [ ] **LCP**: Hero image loads fast (eager loading)
- [ ] **CLS**: No layout shift when images load
- [ ] **FID**: Page interactive quickly
- [ ] **Lighthouse score**: Run and check scores
  - [ ] Performance > 90
  - [ ] Accessibility > 95
  - [ ] Best Practices > 90
  - [ ] SEO > 90

### Browser Testing

- [ ] **Chrome**: All features work
- [ ] **Firefox**: All features work
- [ ] **Safari**: All features work
- [ ] **Edge**: All features work
- [ ] **Mobile Chrome**: Touch interactions work
- [ ] **Mobile Safari**: Touch interactions work

### Responsive Testing

- [ ] **Desktop 1920px**: Grid looks balanced
- [ ] **Laptop 1366px**: No horizontal scroll
- [ ] **Tablet 768px**: 2-column grid works
- [ ] **Mobile 375px**: Cards stack properly
- [ ] **Mobile 320px**: Smallest screens supported
- [ ] **Orientation change**: Layout adapts correctly

### Error Handling

- [ ] **Invalid slug**: Redirects to /blog
- [ ] **Missing article**: Graceful handling
- [ ] **Missing image**: Placeholder shows
- [ ] **Empty category**: "No articles found" message
- [ ] **Network error**: Appropriate error state

### Content Validation

- [ ] **All 36 articles**: Present in data file
- [ ] **6 per category**: Each category has exactly 6
- [ ] **Unique IDs**: No duplicate article IDs
- [ ] **Unique slugs**: No duplicate slugs
- [ ] **Valid dates**: All dates in YYYY-MM-DD format
- [ ] **Reading times**: All have reading time estimates
- [ ] **Authors**: All have author names
- [ ] **Tags**: All have at least 1 tag

### Sidebar Removal Verification

- [ ] **No Search box**: Search widget removed
- [ ] **No Recent Articles**: Widget removed
- [ ] **No Categories sidebar**: Sidebar list removed
- [ ] **No Stay Informed**: Newsletter widget removed
- [ ] **No Popular Tags**: Tags widget removed
- [ ] **Full width grid**: No empty space on right
- [ ] **No layout shift**: Removal doesn't break layout

## Additional QA Notes

### Test Data Status
- **Images**: All using placeholder paths (need real images)
- **Content**: All using placeholder HTML (need real content)
- **Social links**: All pointing to "#" (need real URLs)

### Known Placeholder Items
1. Hero images: `/assets/blog/{category}/{name}.jpg`
2. Article content: `<p>{Category} content here...</p>`
3. Social share URLs: Currently "#"
4. Publisher logo: Referenced as "/logo.png"

### Pre-Production Checklist
- [ ] Replace all 36 hero images
- [ ] Add real article HTML content
- [ ] Update social media URLs
- [ ] Add publisher logo for JSON-LD
- [ ] Test with real images (file sizes, loading)
- [ ] Verify all links work
- [ ] Run full Lighthouse audit
- [ ] Test on real mobile devices
- [ ] User acceptance testing

---

**Testing Date**: __________  
**Tested By**: __________  
**Browser Version**: __________  
**Device**: __________  
**Issues Found**: __________  

**Sign-off**: __________ (Pass/Fail)
