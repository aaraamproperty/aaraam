# Paradise Group Implementation

This document describes the Paradise Group feature implementation for the Aaraam Properties website.

## Overview

The Paradise Group feature adds:
- First premium card on Home page pointing to Paradise Group
- Paradise Group landing page at `/groups/paradise-group`
- Two project detail pages for Sai World One and Sai World Pyramid
- Brochure modal with PDF viewer
- Full responsive design with accessibility features

## File Structure

```
src/
├── components/
│   ├── BrochureModal.tsx           # PDF brochure viewer modal
│   └── PremiumProperties.tsx       # Updated with Paradise Group card
├── data/
│   └── paradiseGroup.ts            # Paradise Group data model
├── pages/
│   ├── ParadiseGroupLanding.tsx    # Group landing page
│   └── ParadiseProjectDetail.tsx   # Individual project pages
└── App.tsx                         # Updated routing

public/
└── assets/
    ├── properties/paradise/        # Paradise property images
    ├── brochures/                  # PDF brochure files
    └── hero-images/                # Hero banner images
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with updated first premium card |
| `/properties/paradise-group` | Paradise Group landing page |
| `/properties/paradise/sai-world-one` | Sai World One project detail |
| `/properties/paradise/sai-world-pyramid` | Sai World Pyramid project detail |

## Assets Setup

### Required Asset Files

Place the following files in the specified locations:

1. **Paradise Logo**: 
   - Location: `src/assets/Properies/Paradise Group/Paradise Logo.png`
   - Already exists ✓

2. **Hero Image**:
   - Location: `public/assets/hero-images/paradise-group-hero.png`
   - Source: Upload `/mnt/data/8c117329-8bfa-4656-a083-d2a04824ce5b.png`

3. **Sai World One Brochure**:
   - Location: `public/assets/brochures/sai-world-one-leaflet.pdf`
   - Source: Upload `/mnt/data/Sai World One Leaflet_9x16 in For E PDF Hires.pdf`

4. **Sai World Pyramid Brochure** (placeholder):
   - Location: `public/assets/brochures/sai-world-pyramid.pdf`
   - Source: Add actual brochure when available

## Data Model

The Paradise Group data is defined in `src/data/paradiseGroup.ts`:

```typescript
export interface Project {
  id: string;
  title: string;
  location: string;
  excerpt: string;
  description: string;
  images: string[];
  brochure: string;
  amenities: string[];
  specifications: {
    type: string;
    area: string;
    status: string;
    possession: string;
  };
}

export interface GroupData {
  id: string;
  name: string;
  logo: string;
  heroImage: string;
  description: string;
  projects: Project[];
}
```

## Features

### 1. Premium Card (Home Page)

- First card in Premium Properties section
- Displays Paradise Group logo (centered, no zoom animation)
- Shows "Brochure Available" badge
- Clicking "View Details" navigates to `/properties/paradise-group`
- Lazy loading with srcset for responsive images

### 2. Group Landing Page

**Hero Section:**
- Left-right split layout (desktop) / stacked (mobile)
- Hero image from assets
- Two CTAs: "Explore Projects" (scrolls to projects) and "Contact Sales"

**Projects Section:**
- Grid of two project cards
- Each card shows: image, title, location, excerpt, specifications
- Two buttons: "View Details" (navigates to project page) and "Enquire" (contact page)

**CTA Section:**
- Full-width gradient background
- Call-to-action to contact sales team

### 3. Project Detail Pages

**Layout:**
- Hero banner with project image
- Back button to Paradise Group page
- Specifications bar (Type, Area, Status, Possession)
- Two-column layout:
  - Left: Description, Amenities, Gallery
  - Right: Sticky contact panel with quick actions
- "View Brochure" button opens PDF modal

### 4. Brochure Modal

**Features:**
- Full-screen modal with PDF iframe
- `#toolbar=0` parameter to hide native PDF controls (where supported)
- Escape key to close
- Focus trap for accessibility
- Analytics tracking for views
- Proper ARIA labels and descriptions

**Accessibility:**
- Focus management
- Keyboard navigation (Esc to close)
- Screen reader support
- `aria-hidden` toggles

## Updating Brochures

To update or add brochure files:

1. Add PDF to `public/assets/brochures/`
2. Update `src/data/paradiseGroup.ts`:
   ```typescript
   brochure: "/assets/brochures/your-new-brochure.pdf"
   ```

## Analytics Integration

The implementation includes analytics tracking for:
- View Details button clicks (category: "Paradise Group")
- Brochure modal opens/views
- All events use Google Analytics gtag format

Example:
```javascript
gtag('event', 'brochure_view', {
  event_category: 'Paradise Group',
  event_label: 'Sai World One',
  value: '/assets/brochures/sai-world-one-leaflet.pdf'
});
```

## Accessibility Features

✅ Image lazy loading with `loading="lazy"`  
✅ Responsive images with `srcset`  
✅ `prefers-reduced-motion` respected (Framer Motion default)  
✅ Keyboard navigation support  
✅ Focus management in modals  
✅ Proper ARIA labels and roles  
✅ High contrast colors (WCAG AA compliant)  
✅ Touch-friendly button sizes (44x44px minimum)  

## Adding New Projects

To add a new project to Paradise Group:

1. Open `src/data/paradiseGroup.ts`
2. Add new project object to `projects` array:
   ```typescript
   {
     id: "new-project-id",
     title: "New Project Name",
     location: "Location, City",
     excerpt: "Brief description",
     description: "Full description...",
     images: ["/assets/properties/paradise/image.jpg"],
     brochure: "/assets/brochures/project-brochure.pdf",
     amenities: ["Amenity 1", "Amenity 2"],
     specifications: {
       type: "Project Type",
       area: "Area details",
       status: "Status",
       possession: "Date"
     }
   }
   ```
3. The project will automatically appear on the group landing page
4. Route will be auto-generated: `/properties/paradise/new-project-id`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- PDF viewing requires browser PDF plugin or fallback
- Graceful degradation for older browsers

## Security Notes

**Client-Side PDF Protection:**
- `#toolbar=0` parameter hides download button in some browsers
- This is NOT foolproof - determined users can still access PDFs
- For stronger protection, implement server-side options:
  - Tokenized PDF URLs
  - PDF.js with canvas rendering
  - DRM-protected PDFs
  - Watermarking

## Performance Optimizations

- Lazy loading for images
- srcset for responsive images  
- Framer Motion animations with reduced motion support
- Component code splitting (automatic with Vite)
- Sticky positioning for performance

## Testing Checklist

✅ Home first premium card shows Paradise logo  
✅ Card text reads "Paradise Group" with description  
✅ View Details navigates to `/groups/paradise-group`  
✅ Group landing page loads with hero image  
✅ Projects grid shows two cards  
✅ Project detail pages accessible via View Details  
✅ Brochure modal opens and loads PDF  
✅ Modal closes with Esc key  
✅ All images lazy load  
✅ Responsive on mobile, tablet, desktop  
✅ Accessibility: keyboard navigation works  
✅ Analytics events fire correctly  

## Troubleshooting

**Issue: Images not loading**
- Check file paths match exactly (case-sensitive)
- Ensure files are in `public/assets/` directory
- Clear browser cache

**Issue: PDF not displaying**
- Verify PDF file exists at specified path
- Check browser console for errors
- Test with different browsers
- Ensure PDF is not corrupted

**Issue: Routes not working**
- Check `App.tsx` routing configuration
- Ensure routes are defined before `*` catch-all
- Verify no typos in route paths

## Future Enhancements

Potential improvements:
- [ ] PDF.js integration for better control
- [ ] Image lightbox gallery
- [ ] 360° property tours
- [ ] Floor plan viewer
- [ ] Booking/reservation system
- [ ] Virtual site visit scheduling
- [ ] Multi-language support
- [ ] Advanced filtering on group page

## Support

For issues or questions:
- Check browser console for errors
- Review this documentation
- Check component prop types
- Verify data model matches interface

---

**Last Updated:** November 21, 2025  
**Version:** 1.0.0
