# Properties Page Implementation Guide

## Overview

This document explains the implementation of the Properties (Projects) page, following the PS Group reference structure with Aaraam Properties branding.

## Features Implemented

### 1. **PS Group-Style Layout**

- Simplified hero with search controls
- Grid/Map view toggle
- Collapsible filter panels
- Property type tabs (ALL/Residential/Commercial)
- Real-time filtering with active result count

### 2. **Enhanced Property Cards**

- Responsive 4-column grid (desktop) → 2-column (tablet) → 1-column (mobile)
- Status badges (color-coded: green for ready, orange for under construction)
- GPU-accelerated hover animations:
  - Image: `scale(1.02)` → `scale(1.06)` with 360ms cubic-bezier transition
  - Overlay: `opacity(0.18)` → `opacity(0)` with 280ms fade
  - CTA buttons: `translateY(6px)` → `translateY(0)` with opacity fade-in
- Lazy loading images with proper alt text

### 3. **Advanced Filtering System**

- **Search**: Text search across name, location, and summary
- **Region**: Mumbai, Delhi, Bangalore, Pune, or ALL
- **Property Type**: Residential, Commercial, or ALL (tabs)
- **More Filters** (collapsible):
  - Project Status (Under Construction / Ready to Move / Ready to Live In)
  - BHK Configuration (2/3/4/5 BHK)
  - Approximate Budget (ranges in Crores)
  - Reset All button

### 4. **Accessibility Features**

- Full keyboard navigation (tab order preserved)
- ARIA labels on all interactive elements
- `aria-live` regions for filter result announcements
- `aria-pressed` states on toggle buttons
- Skip to main content link
- Focus visible states with ring indicators
- Respects `prefers-reduced-motion` (falls back to instant transforms)

### 5. **Map View Integration**

- Toggle between Grid and Map views
- Map view placeholder with integration instructions
- State preservation when switching views

---

## Customization Guide

### Changing Colors

Colors are defined using Tailwind classes. The brand palette used:

```css
Primary (Navy):    #004861  → text-[#004861] / bg-[#004861]
Success (Green):   #16A34A  → text-[#16A34A] / bg-[#16A34A]
Accent (Orange):   #FF9500  → text-[#FF9500] / bg-[#FF9500]
Gold:              #FFD700  → text-[#FFD700] / bg-[#FFD700]
```

**To change the accent color** (currently orange `#FF9500`):

1. Find all instances of `#FF9500` in `Properties.tsx`
2. Replace with your hex color (e.g., `#3B82F6` for blue)
3. Update the active state indicator colors

**To change the primary action color** (currently green `#16A34A`):

1. Search for `bg-[#16A34A]` and `text-[#16A34A]`
2. Replace with your desired hex value

### Adjusting Animation Timings

Current animation specifications:

```typescript
// Image hover
transform: scale(1.06)
transition: 360ms cubic-bezier(0.22, 0.9, 0.35, 1)

// Overlay fade
opacity: 0
transition: 280ms ease-in-out

// CTA button reveal
translateY: 0
opacity: 1
transition: 280ms ease-in-out
```

**To modify timings:**

1. Open `src/pages/Properties.tsx`
2. Find the `style` props in the property card section:
   ```typescript
   style={{
     transform: hoveredCard === property.id ? 'scale(1.06)' : 'scale(1.02)',
     transitionTimingFunction: 'cubic-bezier(0.22, 0.9, 0.35, 1)'
   }}
   ```
3. Adjust values:
   - **Faster**: `duration-[250ms]`
   - **Slower**: `duration-[450ms]`
   - **Different easing**: Try `cubic-bezier(0.4, 0, 0.2, 1)` for smoother

**To disable animations** (accessibility):
Add `@media (prefers-reduced-motion: reduce)` styles will automatically apply instant transitions.

### Modifying Filter Options

**Add a new region:**

```tsx
// Line ~270 in Properties.tsx
<select value={selectedRegion} ...>
  <option value="ALL">ALL</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Chennai">Chennai</option> {/* New */}
</select>
```

**Add a new budget range:**

```tsx
// Line ~410 in Properties.tsx
<option>Above ₹10 Cr</option> {/* New */}

// Then add filter logic in useEffect (line ~155):
case "Above ₹10 Cr":
  filtered = filtered.filter(p => budgetValue(p.price) >= 10);
  break;
```

**Add a new property status:**

```tsx
// Update Property interface (line ~13):
status: "Under Construction" | "Ready to Move" | "Ready to Live In" | "Coming Soon"

// Add to filter dropdown (line ~380):
<option>Coming Soon</option>
```

### Changing Grid Layout

Current: 4 columns (desktop) → 2 columns (tablet) → 1 column (mobile)

```tsx
// Line ~510
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

**For 3-column desktop layout:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**For 5-column on wide screens:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
```

### Adjusting Card Spacing

Current gap: `gap-6` (1.5rem / 24px)

**Tighter spacing:**

```tsx
gap-4  → 1rem (16px)
```

**Looser spacing:**

```tsx
gap-8  → 2rem (32px)
```

### Image Optimization

**Enable lazy loading:**
Already implemented with `loading="lazy"` attribute

**Add responsive images:**

```tsx
<img
  src={property.image}
  srcSet={`${property.imageSmall} 400w, ${property.imageMedium} 800w, ${property.image} 1200w`}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  alt={...}
/>
```

**Optimize for WebP:**

1. Convert images to WebP format
2. Update image paths in property data
3. Add fallback:
   ```tsx
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <img src="image.jpg" alt="..." />
   </picture>
   ```

---

## Data Structure

Properties are defined using the `Property` interface:

```typescript
interface Property {
  id: number; // Unique identifier
  image: string; // Path to image
  name: string; // Display name
  location: string; // Full address
  price: string; // Display price
  area: string; // Square footage
  type: "Residential" | "Commercial";
  category: string; // Subcategory
  status: "Under Construction" | "Ready to Move" | "Ready to Live In";
  bhk?: string; // Optional: for residential
  summary: string; // Brief description
}
```

### Adding New Properties

1. Open `src/pages/Properties.tsx`
2. Find the `properties` array (line ~28)
3. Add new object following the schema:

```typescript
{
  id: 11,
  image: myNewImage,
  name: "My New Property",
  location: "Area, City",
  price: "₹X.X Cr onwards",
  area: "XXXX sq.ft",
  type: "Residential", // or "Commercial"
  category: "Apartment",
  status: "Under Construction",
  bhk: "3 BHK",
  summary: "Brief description here"
}
```

### Loading from External API

Replace the static array with an API call:

```typescript
const [properties, setProperties] = useState<Property[]>([]);

useEffect(() => {
  fetch("/api/properties")
    .then((res) => res.json())
    .then((data) => setProperties(data))
    .catch((err) => console.error("Failed to load properties:", err));
}, []);
```

---

## Performance Optimizations

### Current Optimizations

- **GPU-accelerated animations**: Using `transform` and `opacity`
- **Lazy loading**: Images load as they enter viewport
- **Debounced filtering**: Real-time with useEffect
- **Staggered card animations**: `animationDelay` for smooth entry

### Additional Recommendations

1. **Image Compression**

   - Use WebP format (30-50% smaller than JPEG)
   - Compress to ~80% quality
   - Max width: 1200px for card images

2. **Code Splitting**

   ```tsx
   const BookSiteVisitModal = lazy(
     () => import("@/components/BookSiteVisitModal")
   );
   ```

3. **Virtual Scrolling**
   For 100+ properties, consider `react-window`:

   ```tsx
   import { FixedSizeGrid } from "react-window";
   ```

4. **Caching**
   Add service worker for offline support and faster loads

---

## Accessibility Checklist

✅ **Keyboard Navigation**

- All filters are keyboard accessible
- Cards can be focused and activated with Enter
- Logical tab order maintained

✅ **Screen Readers**

- All images have descriptive alt text
- ARIA labels on controls
- Live regions announce filter changes
- Skip to content link

✅ **Visual**

- Color contrast ratios meet WCAG AA (4.5:1+)
- Focus indicators visible on all interactive elements
- Text resizable to 200% without breaking layout

✅ **Motion**

- Respects `prefers-reduced-motion`
- No autoplay animations
- All transitions optional

✅ **Forms & Controls**

- Clear labels on all inputs
- Error states announced
- Button purposes clear from text

---

## Browser Support

**Tested & Supported:**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Fallbacks:**

- CSS Grid → Flexbox (older browsers)
- WebP → JPEG/PNG (automatic with `<picture>`)
- Modern JS → Babel transpilation

---

## Map Integration

The map view is currently a placeholder. To integrate:

### Google Maps

```tsx
import { GoogleMap, Marker } from "@react-google-maps/api";

// In map view section:
<GoogleMap
  mapContainerStyle={{ width: "100%", height: "600px" }}
  center={{ lat: 19.076, lng: 72.8777 }}
  zoom={11}
>
  {filteredProperties.map((property) => (
    <Marker
      key={property.id}
      position={property.coordinates}
      onClick={() => selectProperty(property.id)}
    />
  ))}
</GoogleMap>;
```

### Mapbox

```tsx
import Map, { Marker } from "react-map-gl";

<Map
  initialViewState={{
    longitude: 72.8777,
    latitude: 19.076,
    zoom: 11,
  }}
  mapStyle="mapbox://styles/mapbox/streets-v11"
>
  {filteredProperties.map((property) => (
    <Marker
      key={property.id}
      longitude={property.coordinates.lng}
      latitude={property.coordinates.lat}
    />
  ))}
</Map>;
```

Add `coordinates: { lat: number; lng: number }` to Property interface.

---

## File Structure

```
src/
├── pages/
│   └── Properties.tsx          # Main page component (665 lines)
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── Footer.tsx              # Footer
│   ├── FloatingChatbot.tsx     # Chat widget
│   └── BookSiteVisitModal.tsx  # Booking modal
└── assets/
    ├── office-space.jpg        # Property images
    └── retail-shop.jpg

docs/
├── property-schema.json        # JSON schema definition
├── sample-properties.json      # Sample dataset (10 properties)
└── PROPERTIES_README.md        # This file
```

---

## Troubleshooting

### Filters not working

- Check that `useEffect` dependencies include all filter state variables
- Verify property data matches filter values exactly (case-sensitive)

### Images not loading

- Check image paths are correct
- Verify images are in `src/assets/` or `public/`
- Check import statements

### Animations laggy

- Ensure `will-change-transform` is applied
- Check for large image file sizes (compress to <500KB)
- Test in production build (dev mode is slower)

### Map view empty

- Map integration requires API keys and additional libraries
- Follow integration guide above
- Add property coordinates to dataset

---

## Support

For questions or issues:

1. Check TypeScript errors in IDE
2. Review browser console for runtime errors
3. Verify all imports resolve correctly
4. Check filter logic in `useEffect`

## License

This implementation follows Aaraam Properties design system and brand guidelines.
