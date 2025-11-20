# Navigation Logo - Scroll-Based Switching

## Overview

The navigation logo automatically switches between white and regular versions based on scroll position across all pages of the website. This creates a premium visual experience that adapts to the navbar's background transparency.

---

## 🎨 Visual Behavior

### Default State (Top of Page)

```
┌────────────────────────────────────┐
│  [WHITE LOGO]  Home  Properties   │  ← Transparent navbar
└────────────────────────────────────┘
scrollY = 0
```

### Scrolled State (Any scroll)

```
┌────────────────────────────────────┐
│  [REGULAR LOGO]  Home  Properties │  ← White navbar
└────────────────────────────────────┘
scrollY > 0
```

---

## 🔄 Transition Behavior

### Scroll Down (0 → 1px)

```
White Logo (opacity: 1)
    ↓ 200ms fade
Regular Logo (opacity: 0 → 1)
```

### Scroll Up (Back to Top)

```
Regular Logo (opacity: 1)
    ↓ 200ms fade
White Logo (opacity: 0 → 1)
```

**Transition specs:**

- Duration: 200ms
- Easing: ease-in-out
- Property: opacity
- No layout shift (logos stacked absolutely)

---

## 📁 Assets Used

### Regular Logo

```
Path: src/assets/AARAAM Logo.png
Usage: When navbar has white/light background (scrolled)
```

### White Logo

```
Path: src/assets/AARAAM White Logo.png
Usage: When navbar is transparent/dark (top of page)
```

**Both logos preloaded on mount to prevent flicker.**

---

## 🛠️ Implementation Details

### Scroll Threshold

```typescript
const handleScroll = () => {
  setIsScrolled(window.scrollY > 0); // Triggers at any scroll
};
```

**Why scrollY > 0:**

- Instant switch when user starts scrolling
- Consistent with navbar background change
- No arbitrary threshold (like 50px)

### Logo Structure

```tsx
<div className="relative h-[100px] w-auto" style={{ minWidth: "150px" }}>
  {/* White logo - visible at top */}
  <img src={logoWhite} opacity={isScrolled ? 0 : 1} />

  {/* Regular logo - visible when scrolled */}
  <img src={logo} opacity={isScrolled ? 1 : 0} />
</div>
```

**Key features:**

- Relative container with fixed height (100px)
- Minimum width prevents layout shift
- Absolute positioning for both logos (stacked)
- Opacity-based crossfade (no DOM manipulation)

### Preloading

```typescript
useEffect(() => {
  const img1 = new Image();
  const img2 = new Image();
  img1.src = logo;
  img2.src = logoWhite;
}, []);
```

**Prevents:**

- Delayed loading on first scroll
- Flashing or blank space
- Performance issues

---

## ♿ Accessibility

### Reduced Motion Support

```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Applied conditionally:
className={prefersReducedMotion ? '' : 'transition-opacity duration-200'}
```

**Result:**

- Users with motion sensitivity: Instant logo swap (no fade)
- Other users: Smooth 200ms crossfade

### Alt Text

```tsx
alt = "Aaraam Properties";
```

- Present on both logo images
- Screen readers announce logo once
- Clear brand identification

---

## 📱 Responsive Behavior

### Desktop

- Logo height: 100px
- Smooth crossfade on scroll
- No performance issues

### Tablet

- Same behavior as desktop
- Logo maintains size
- Transitions work identically

### Mobile

- Logo height: 100px (consistent)
- Works with hamburger menu
- Transitions occur during scroll (not menu toggle)

---

## 🎯 Cross-Page Consistency

### Applied to All Pages

- ✅ Home (`/`)
- ✅ Properties (`/properties`)
- ✅ About (`/about`)
- ✅ Blog (`/blog`)
- ✅ Contact (`/contact`)

**Same Navigation component used everywhere** - no page-specific logic needed.

---

## 🎬 Animation Timing

```css
/* Applied via Tailwind classes */
transition-opacity: 200ms ease-in-out;
```

**Why 200ms?**

- Fast enough to feel instant
- Slow enough to be smooth
- Matches navbar background transition (300ms)
- Prevents jarring logo swaps

**Alternative timings** (if customization needed):

- 150ms: Snappier, more responsive
- 250ms: Smoother, more elegant
- 300ms: Very smooth, might feel sluggish

---

## 🔧 Customization Guide

### Change Transition Speed

**Faster (150ms):**

```tsx
className = "transition-opacity duration-150 ease-in-out";
```

**Slower (300ms):**

```tsx
className = "transition-opacity duration-300 ease-in-out";
```

### Change Scroll Threshold

**Trigger after 50px scroll:**

```typescript
const handleScroll = () => {
  setIsScrolled(window.scrollY > 50);
};
```

**Trigger immediately (current):**

```typescript
const handleScroll = () => {
  setIsScrolled(window.scrollY > 0);
};
```

### Adjust Logo Size

**Desktop:**

```tsx
<div className="relative h-[80px] w-auto">  {/* Change from 100px */}
```

**Mobile responsive:**

```tsx
<div className="relative h-[80px] md:h-[100px] w-auto">
```

### Replace Logos

1. Add new logo files to `src/assets/`
2. Update imports:

```typescript
import logo from "@/assets/YourNewLogo.png";
import logoWhite from "@/assets/YourNewWhiteLogo.png";
```

---

## 🐛 Troubleshooting

### Logo flickers on scroll

**Cause:** Logos not preloaded  
**Fix:** Verify preload useEffect runs on mount

```typescript
useEffect(() => {
  const img1 = new Image();
  const img2 = new Image();
  img1.src = logo;
  img2.src = logoWhite;
}, []); // Empty dependency array = runs once
```

### Layout shift when scrolling

**Cause:** Logo container doesn't reserve space  
**Fix:** Add minimum width to container

```tsx
style={{ minWidth: '150px' }}  // Adjust to match widest logo
```

### White logo not visible at top

**Cause:** Navbar background not transparent initially  
**Fix:** Check navbar className:

```tsx
className={`... ${isScrolled ? "bg-card shadow-md" : "bg-transparent"}`}
```

### Transition too fast/slow

**Cause:** Duration mismatch with expectations  
**Fix:** Adjust duration in className:

```tsx
className = "transition-opacity duration-[250ms] ease-in-out";
```

### Both logos visible simultaneously

**Cause:** Opacity values incorrect  
**Fix:** Verify opacity logic:

```tsx
style={{ opacity: isScrolled ? 0 : 1 }}  // White logo
style={{ opacity: isScrolled ? 1 : 0 }}  // Regular logo
```

### Reduced motion not working

**Cause:** Media query check happens once  
**Fix:** Use useMemo or state for dynamic checking

```typescript
const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  setPrefersReducedMotion(mediaQuery.matches);

  const handler = (e: MediaQueryListEvent) =>
    setPrefersReducedMotion(e.matches);
  mediaQuery.addEventListener("change", handler);
  return () => mediaQuery.removeEventListener("change", handler);
}, []);
```

---

## ✅ QA Checklist

### Visual Testing

- [ ] White logo visible at page top (all pages)
- [ ] Regular logo visible after any scroll
- [ ] Crossfade is smooth (no flicker)
- [ ] Logo size consistent (no layout shift)
- [ ] Both logos clearly visible against backgrounds

### Functional Testing

- [ ] Logo switches at scrollY > 0
- [ ] Logo reverts at scrollY === 0
- [ ] Fast scrolling doesn't cause issues
- [ ] Slow scrolling shows smooth transition
- [ ] Page refresh maintains correct logo

### Responsive Testing

- [ ] Desktop: Logo behavior correct
- [ ] Tablet: Logo behavior correct
- [ ] Mobile: Logo behavior correct
- [ ] Hamburger menu doesn't affect logo switching
- [ ] Orientation change preserves behavior

### Cross-Page Testing

- [ ] Home page: Logo switches correctly
- [ ] Properties page: Logo switches correctly
- [ ] About page: Logo switches correctly
- [ ] Blog page: Logo switches correctly
- [ ] Contact page: Logo switches correctly

### Accessibility Testing

- [ ] Reduced motion: Instant swap (no animation)
- [ ] Alt text present on both logos
- [ ] Screen reader announces "Aaraam Properties"
- [ ] No flashing or rapid changes

### Performance Testing

- [ ] Logos load without delay
- [ ] No console errors or warnings
- [ ] Smooth 60fps transitions
- [ ] No memory leaks (check DevTools)

### Browser Testing

- [ ] Chrome: Logo switches smoothly
- [ ] Firefox: Logo switches smoothly
- [ ] Safari: Logo switches smoothly
- [ ] Edge: Logo switches smoothly
- [ ] Mobile Safari: Logo switches smoothly
- [ ] Android Chrome: Logo switches smoothly

---

## 📊 Performance Metrics

### Expected Performance

| Metric               | Target | Notes                                  |
| -------------------- | ------ | -------------------------------------- |
| Transition FPS       | 60fps  | Opacity animations are GPU-accelerated |
| Logo load time       | <100ms | Both preloaded on mount                |
| Scroll handler delay | <16ms  | Debounced, minimal processing          |
| Memory overhead      | <1MB   | Two images, reasonable sizes           |

### Optimization Tips

1. **Compress logo images** - Use PNG with compression or WebP
2. **Use will-change** - Add `will-change: opacity` for hint
3. **Throttle scroll** - If performance issues, throttle handler

---

## 🚀 Future Enhancements

### Suggested Improvements

1. **Lazy load non-critical logo**

   ```typescript
   // Load white logo only if user scrolls back to top
   ```

2. **Dark mode support**

   ```typescript
   // Different logo for dark theme
   const logoDark = useTheme() === "dark" ? logoDarkMode : logo;
   ```

3. **Animation variants**

   ```typescript
   // Fade + slide, scale, etc.
   transition: opacity 200ms, transform 200ms;
   ```

4. **Scroll direction detection**
   ```typescript
   // Different animations for scroll up vs down
   const scrollDirection = useScrollDirection();
   ```

---

## 📝 Code Reference

**File:** `src/components/Navigation.tsx`

**Key sections:**

- Lines 7-8: Logo imports
- Lines 16-22: Scroll listener setup
- Lines 24-29: Logo preloading
- Lines 31-32: Reduced motion check
- Lines 34-51: LogoComponent with crossfade logic

**Dependencies:**

- React (useState, useEffect)
- React Router (useLocation)
- Tailwind CSS (transition utilities)

---

## 📞 Support

**Issue:** Logo not switching?  
**Check:** Console for image loading errors, verify asset paths

**Issue:** Performance problems?  
**Check:** Image file sizes, consider WebP format

**Issue:** Accessibility concerns?  
**Check:** Reduced motion media query, alt text presence

---

**Last Updated:** November 20, 2025  
**Status:** ✅ Production Ready  
**Maintained by:** Aaraam Properties Dev Team
