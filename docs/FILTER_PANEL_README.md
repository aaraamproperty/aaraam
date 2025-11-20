# Filter Panel - Hover-Based UI Documentation

## Overview

The Properties page filter panel features hover-to-open behavior on desktop, with click/tap fallback for touch devices. Active category tabs and the Reset button use Aaraam's brand green (#16A34A) for visual consistency.

---

## 🎨 Visual Design

### Color Variables

```css
/* Brand Colors (from index.css) */
--corporate-green: 142 76% 36%; /* #16A34A - Primary brand green */
--accent: 142 76% 36%; /* #16A34A - Accent color */
--muted-color: #6b7a7a; /* Inactive tab color */
--panel-shadow: 0 8px 24px rgba(10, 30, 20, 0.08); /* Elevation shadow */
```

### Component Styling

**Category Tabs (ALL / RESIDENTIAL / COMMERCIAL):**

- **Active state:** Text color `#16A34A` with green underline (0.5px height)
- **Hover state:** Text color changes to `#16A34A`
- **Inactive state:** `text-muted-foreground` (gray)
- **Transition:** 150ms ease for color changes

**FILTERS Button:**

- **Default:** Outline style with gray border
- **Hover (inactive):** Border color `#16A34A`, text color `#16A34A`
- **Active:** Background `#16A34A`, white text, green border
- **Icon:** `SlidersHorizontal` from lucide-react (4x4 size)

**Reset Filters Button:**

- **Background:** `#16A34A` (solid green)
- **Text:** White (#ffffff)
- **Border:** 2px solid `#16A34A`
- **Shadow:** `shadow-md` (elevated appearance)
- **Hover:** 90% opacity on background and border
- **Icon:** X icon from lucide-react

---

## 🖱️ Hover Behavior (Desktop)

### Opening the Panel

1. **Mouse enters FILTERS button** → Panel opens immediately
2. **Panel remains open** while mouse is over button OR panel area
3. **No click required** for desktop users

### Closing the Panel

1. **Mouse leaves both button and panel** → 250ms debounce timer starts
2. **Timer completes** → Panel closes with fade-out animation
3. **Mouse re-enters before timer** → Timer canceled, panel stays open

### Debounce Timing

```typescript
const CLOSE_DEBOUNCE = 250; // milliseconds

// Prevents accidental closure when moving between button and panel
```

**Why 250ms?**

- Long enough to prevent flicker during mouse movement
- Short enough to feel responsive
- Matches common UX patterns (tooltips, dropdowns)

---

## 📱 Touch & Mobile Behavior

### Touch Device Detection

```typescript
const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;
```

### Touch-Specific Features

1. **Hover disabled** - `handleFilterMouseEnter/Leave` return early on touch devices
2. **Click/tap to toggle** - FILTERS button toggles panel open/closed
3. **Close button** - Additional X button inside panel for easy dismissal
4. **Full-screen modal** (mobile <768px) - Panel overlays entire screen for better UX

### Mobile Styling (@media max-width: 768px)

```css
#filtersPanel {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: var(--background);
  padding: 1.5rem;
  overflow-y: auto;
}
```

**Mobile animation:** Slide up from bottom (300ms duration)

---

## ⌨️ Keyboard Accessibility

### Keyboard Navigation

| Key               | Action                           |
| ----------------- | -------------------------------- |
| `Tab`             | Focus FILTERS button             |
| `Enter` / `Space` | Toggle panel open/closed         |
| `Escape`          | Close panel (when open)          |
| `Tab` (in panel)  | Navigate through filter controls |
| `Shift + Tab`     | Navigate backwards               |

### Focus Management

```typescript
const handleFilterKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    setShowMoreFilters(!showMoreFilters);
  } else if (e.key === "Escape" && showMoreFilters) {
    setShowMoreFilters(false);
  }
};
```

**Focus trap** (recommended future enhancement):

```typescript
// Trap focus inside panel when open via keyboard
// Return focus to FILTERS button when closed
```

### ARIA Attributes

**FILTERS Button:**

```tsx
<Button
  id="filtersBtn"
  aria-label="Toggle additional filters"
  aria-expanded={showMoreFilters}      // true/false
  aria-haspopup="true"
  aria-controls="filtersPanel"
  tabIndex={0}
>
```

**Filter Panel:**

```tsx
<div
  id="filtersPanel"
  role="dialog"
  aria-label="Additional filters"
  aria-hidden={!showMoreFilters}       // Hides from screen readers when closed
>
```

---

## 🎬 Animations & Timing

### Open Animation

```css
@keyframes filter-slide-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Duration: 280ms */
/* Easing: cubic-bezier(0.22, 0.9, 0.35, 1) */
```

**Why these values?**

- **280ms:** Fast enough to feel instant, slow enough to be perceptible
- **translateY(-8px):** Subtle slide creates spatial relationship with button
- **Cubic-bezier:** Spring-like easing for premium feel

### Close Animation

Reverse of open animation (fade out + slide up)

### Touch/Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .filter-panel-open {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

**Respects user preferences** - No animation if motion is reduced

---

## 🔧 Implementation Details

### State Management

```typescript
// Touch detection
const [isTouchDevice, setIsTouchDevice] = useState(false);

// Hover state
const [isFilterHovered, setIsFilterHovered] = useState(false);

// Debounce timer
const [closeTimerRef, setCloseTimerRef] = useState<NodeJS.Timeout | null>(null);

// Panel visibility
const [showMoreFilters, setShowMoreFilters] = useState(false);
```

### Hover Handlers

```typescript
// Button hover enter
const handleFilterMouseEnter = () => {
  if (isTouchDevice) return; // Skip on touch devices
  if (closeTimerRef) {
    clearTimeout(closeTimerRef);
    setCloseTimerRef(null);
  }
  setShowMoreFilters(true);
  setIsFilterHovered(true);
};

// Button/Panel hover leave
const handleFilterMouseLeave = () => {
  if (isTouchDevice) return;
  const timer = setTimeout(() => {
    setShowMoreFilters(false);
    setIsFilterHovered(false);
  }, 250); // 250ms debounce
  setCloseTimerRef(timer);
};

// Panel hover enter (cancel close timer)
const handlePanelMouseEnter = () => {
  if (isTouchDevice) return;
  if (closeTimerRef) {
    clearTimeout(closeTimerRef);
    setCloseTimerRef(null);
  }
};

// Panel hover leave (start close timer)
const handlePanelMouseLeave = () => {
  if (isTouchDevice) return;
  const timer = setTimeout(() => {
    setShowMoreFilters(false);
    setIsFilterHovered(false);
  }, 250);
  setCloseTimerRef(timer);
};
```

### JSX Structure

```tsx
{
  /* Hover-enabled wrapper */
}
<div
  className="relative"
  onMouseEnter={handleFilterMouseEnter}
  onMouseLeave={handleFilterMouseLeave}
>
  <Button
    id="filtersBtn"
    onClick={() => setShowMoreFilters(!showMoreFilters)}
    onKeyDown={handleFilterKeyDown}
    // ... props
  >
    FILTERS
  </Button>
</div>;

{
  /* Panel with hover handlers */
}
{
  showMoreFilters && (
    <div
      id="filtersPanel"
      onMouseEnter={handlePanelMouseEnter}
      onMouseLeave={handlePanelMouseLeave}
      // ... props
    >
      {/* Filter controls */}
    </div>
  );
}
```

---

## 🎨 Customization Guide

### Change Debounce Timing

```typescript
// In handleFilterMouseLeave and handlePanelMouseLeave
const timer = setTimeout(() => {
  setShowMoreFilters(false);
  setIsFilterHovered(false);
}, 300); // Change 250 to your preferred ms (e.g., 300, 400)
```

**Recommended range:** 200-400ms

- **<200ms:** Too sensitive, may flicker
- **>400ms:** Feels sluggish

### Change Animation Duration

```css
/* In index.css */
.filter-panel-open {
  animation: filter-slide-in 320ms cubic-bezier(0.22, 0.9, 0.35, 1) forwards;
  /* Change 280ms to 320ms for slower animation */
}
```

**Recommended range:** 220-350ms

### Change Brand Color

```tsx
// In Properties.tsx - Update all instances of #16A34A

// Tab active color
className={`... ${selectedPropertyType === "ALL" ? "text-[#0DAE5B]" : "..."}`}

// Underline color
<span className="... bg-[#0DAE5B]" />

// FILTERS button active
className="bg-[#0DAE5B] text-white border-[#0DAE5B] ..."

// Reset button
className="... bg-[#0DAE5B] border-[#0DAE5B] ..."
```

**Or use CSS variable:**

```css
:root {
  --brand-green-rgb: 13, 174, 91; /* For #0DAE5B */
}
```

```tsx
className = "bg-[rgb(var(--brand-green-rgb))]";
```

### Disable Hover (Force Click Only)

```typescript
// Set isTouchDevice to true permanently
const [isTouchDevice] = useState(true);

// Or remove hover handlers from JSX
// <div className="relative"> {/* Remove onMouseEnter/Leave */}
```

---

## ✅ QA Checklist

### Visual Testing

- [ ] **Tab active state** - Green text + green underline visible
- [ ] **Tab hover** - Text color changes to green on hover
- [ ] **FILTERS button hover** - Border and text turn green
- [ ] **FILTERS button active** - Green background with white text
- [ ] **Reset button** - Green background, white text, green border, shadow visible
- [ ] **Panel animation** - Smooth slide-in/fade from top (280ms)
- [ ] **Color consistency** - All green elements use #16A34A

### Functional Testing (Desktop)

- [ ] **Hover to open** - Panel opens when mouse enters FILTERS button
- [ ] **Stay open on panel** - Panel remains open when mouse moves into panel area
- [ ] **Debounce works** - Panel doesn't close if mouse quickly re-enters
- [ ] **Close on leave** - Panel closes 250ms after mouse leaves both areas
- [ ] **Click toggle** - Click FILTERS button toggles panel (redundant with hover)

### Functional Testing (Touch/Mobile)

- [ ] **Touch detection** - Device correctly identified as touch
- [ ] **Hover disabled** - Panel doesn't open on hover (touch devices)
- [ ] **Tap to toggle** - Tapping FILTERS button opens/closes panel
- [ ] **Close button** - X button appears inside panel on touch devices
- [ ] **Close button works** - Tapping X closes panel
- [ ] **Full-screen modal** (<768px) - Panel overlays screen on mobile

### Keyboard Testing

- [ ] **Tab to FILTERS** - Button receives focus with visible indicator
- [ ] **Enter/Space** - Toggles panel open/closed
- [ ] **Escape** - Closes panel when open
- [ ] **Tab in panel** - Can navigate through all filter controls
- [ ] **Focus visible** - All interactive elements show focus ring

### Screen Reader Testing

- [ ] **FILTERS button** - Announces "Toggle additional filters, button"
- [ ] **aria-expanded** - Announces "expanded" when open, "collapsed" when closed
- [ ] **aria-haspopup** - Announces "has popup"
- [ ] **Panel role** - Announces "dialog" or "region"
- [ ] **aria-hidden** - Panel hidden from screen reader when closed
- [ ] **Filter labels** - All selects have proper labels

### Accessibility Testing

- [ ] **Reduced motion** - Animation disabled with `prefers-reduced-motion: reduce`
- [ ] **Color contrast** - Green text on white ≥4.5:1 (WCAG AA)
- [ ] **Focus indicators** - All controls have visible 2px green focus ring
- [ ] **No keyboard traps** - Can tab out of panel
- [ ] **Touch targets** - All buttons ≥44x44px

### Responsive Testing

- [ ] **Desktop (>1024px)** - Hover behavior works, panel positioned correctly
- [ ] **Tablet (768-1024px)** - Hover or click works, panel visible
- [ ] **Mobile (<768px)** - Full-screen modal, click-only, close button present
- [ ] **Horizontal scroll** - Tabs scroll horizontally on small screens

### Cross-Browser Testing

- [ ] **Chrome** - Hover, animations, colors work
- [ ] **Firefox** - Hover, animations, colors work
- [ ] **Safari** - Hover, animations, colors work (especially cubic-bezier)
- [ ] **Edge** - Hover, animations, colors work
- [ ] **Mobile Safari** - Touch detection, modal, animations work
- [ ] **Android Chrome** - Touch detection, modal, animations work

### Performance Testing

- [ ] **No layout shift** - Panel opening doesn't shift other content
- [ ] **Smooth animation** - 60fps animation (check DevTools Performance)
- [ ] **No memory leaks** - `closeTimerRef` cleaned up properly
- [ ] **Fast hover** - Panel opens within 50ms of hover

---

## 🐛 Troubleshooting

### Panel doesn't open on hover

**Cause:** Touch device detected incorrectly or handlers not attached  
**Fix:** Check `isTouchDevice` state, verify `onMouseEnter` on wrapper div

```typescript
console.log("Is touch device:", isTouchDevice);
```

### Panel flickers when moving mouse

**Cause:** Debounce timing too short or handlers conflicting  
**Fix:** Increase debounce to 300-400ms

```typescript
const timer = setTimeout(() => { ... }, 300); // Increase from 250
```

### Panel doesn't close on leave

**Cause:** `closeTimerRef` not set or cleared incorrectly  
**Fix:** Verify timer logic in `handleFilterMouseLeave`

```typescript
console.log("Close timer set:", !!closeTimerRef);
```

### Hover works on touch device

**Cause:** Touch detection failed  
**Fix:** Force touch mode

```typescript
const [isTouchDevice] = useState(true); // Override detection
```

### Animation too fast/slow

**Cause:** CSS duration mismatch  
**Fix:** Adjust animation duration in `index.css`

```css
.filter-panel-open {
  animation: filter-slide-in 400ms...; /* Increase from 280ms */
}
```

### Green color wrong shade

**Cause:** Hardcoded hex instead of CSS variable  
**Fix:** Use HSL value from design system

```tsx
// Current: #16A34A
// If wrong, replace with exact Aaraam brand color
className = "text-[hsl(var(--corporate-green))]";
```

### Reset button not green

**Cause:** Variant prop overriding className  
**Fix:** Remove `variant="outline"` and use direct className

```tsx
<Button
  className="w-full bg-[#16A34A] text-white border-2 border-[#16A34A] ..."
  // No variant prop
>
```

### Panel not full-screen on mobile

**Cause:** Mobile CSS not applied  
**Fix:** Check media query breakpoint

```css
@media (max-width: 768px) {
  #filtersPanel {
    position: fixed !important; /* Force */
    inset: 0;
  }
}
```

---

## 🚀 Future Enhancements

### Recommended Additions

1. **Focus trap**

   ```typescript
   import { FocusTrap } from "@headlessui/react";

   <FocusTrap active={showMoreFilters && !isTouchDevice}>
     {/* Panel content */}
   </FocusTrap>;
   ```

2. **Click outside to close**

   ```typescript
   useEffect(() => {
     const handleClickOutside = (e: MouseEvent) => {
       if (!panelRef.current?.contains(e.target as Node)) {
         setShowMoreFilters(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
   ```

3. **Smooth scroll to results**

   ```typescript
   useEffect(() => {
     if (showMoreFilters) {
       document
         .getElementById("main-content")
         ?.scrollIntoView({ behavior: "smooth" });
     }
   }, [showMoreFilters]);
   ```

4. **Filter count badge**
   ```tsx
   <Button>
     FILTERS
     {activeFilterCount > 0 && (
       <span className="ml-2 bg-[#16A34A] text-white rounded-full px-2 py-0.5 text-xs">
         {activeFilterCount}
       </span>
     )}
   </Button>
   ```

---

## 📚 References

- [Aaraam Design System](../src/index.css) - Color variables
- [Properties Component](../src/pages/Properties.tsx) - Implementation
- [ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) - Accessibility
- [Pointer Events API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) - Touch detection

---

**Last Updated:** November 20, 2025  
**Status:** Production Ready ✅  
**Maintained by:** Aaraam Properties Dev Team
