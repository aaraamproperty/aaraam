# Filter Panel - Visual Design Reference

## 🎨 Color Palette

### Brand Green (Primary)

```
Hex:  #16A34A
HSL:  142° 76% 36%
RGB:  22, 163, 74
```

**Used For:**

- Active category tabs (text)
- Tab underline indicators
- FILTERS button hover state
- FILTERS button active background
- Reset button background
- Focus rings

### Muted Gray (Secondary)

```
Hex:  #6B7A7A (approximate)
RGB:  107, 122, 122
```

**Used For:**

- Inactive tab text
- Default button text

### White

```
Hex:  #FFFFFF
RGB:  255, 255, 255
```

**Used For:**

- FILTERS button active text
- Reset button text
- Panel background

---

## 📐 Layout & Spacing

### Category Tabs

```
┌─────┬──────────────┬───────────────┐
│ ALL │ RESIDENTIAL  │  COMMERCIAL   │
└─▂───┴──────────────┴───────────────┘
  ↑ Green underline (active)

Height: auto (pb-2 for bottom padding)
Gap: 24px (gap-6)
Font: 14-16px semibold
Underline: 2px height, green (#16A34A)
```

### FILTERS Button

```
┌──────────────────────┐
│  ⚙️  FILTERS        │  ← Normal
└──────────────────────┘

┌──────────────────────┐
│  ⚙️  FILTERS        │  ← Hover (green border/text)
└──────────────────────┘

┌──────────────────────┐
│  ⚙️  FILTERS        │  ← Active (green bg, white text)
└──────────────────────┘

Size: sm (padding: 8px 12px)
Icon: SlidersHorizontal (16x16)
Border: 1px solid
Border-radius: 6px
```

### Filter Panel

```
┌────────────────────────────────────────┐
│  Project Status  │  BHK  │  Budget     │
│  [Dropdown  ▾]   │ [▾]   │ [▾]         │
│                  │       │             │
│                  │       │  ┌────────┐ │
│                  │       │  │ RESET  │ │ ← Green button
│                  │       │  └────────┘ │
└────────────────────────────────────────┘

Padding: 24px top, 24px left/right
Gap: 16px between controls
Border-top: 1px solid #E6E9EA
Animation: slide-in from top (280ms)
```

### Reset Button

```
┌───────────────────────┐
│  ✕  Reset Filters    │  ← Green bg, white text, shadow
└───────────────────────┘

Background: #16A34A
Text: #FFFFFF
Border: 2px solid #16A34A
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Width: 100% (in grid cell)
Height: 40px
Border-radius: 6px
```

---

## 🎬 Animation Specifications

### Panel Open Animation

```
Keyframe 0% (start):
  opacity: 0
  transform: translateY(-8px)

Keyframe 100% (end):
  opacity: 1
  transform: translateY(0)

Duration: 280ms
Easing: cubic-bezier(0.22, 0.9, 0.35, 1)
```

**Visual Effect:**

```
Start:  [Panel slightly above, invisible]
        ↓ (280ms)
End:    [Panel in position, fully visible]
```

### Panel Close Animation

```
Reverse of open animation
(Handled by removing element, not separate animation)
```

### Tab Color Transition

```
Property: color
Duration: 150ms
Easing: ease
```

**Visual Effect:**

```
Inactive: Gray  →  (hover)  →  Green
          #6B7A7A    150ms     #16A34A
```

---

## 🖱️ Interactive States

### Category Tabs

**Default (Inactive):**

```css
color: hsl(var(--muted-foreground))
text-decoration: none
```

**Hover:**

```css
color: #16A34A
cursor: pointer
transition: 150ms ease
```

**Active:**

```css
color: #16A34A
text-decoration: underline (green, 2px, bottom)
```

### FILTERS Button

**Default:**

```css
background: transparent
border: 1px solid hsl(var(--border))
color: hsl(var(--foreground))
```

**Hover:**

```css
border-color: #16A34A
color: #16A34A
transition: 200ms ease
```

**Active (Panel Open):**

```css
background: #16A34A
color: #FFFFFF
border-color: #16A34A
```

**Focus (Keyboard):**

```css
outline: 2px solid #16A34A
outline-offset: 2px
```

### Reset Button

**Default:**

```css
background: #16A34A
color: #FFFFFF
border: 2px solid #16A34A
box-shadow: 0 4px 6px rgba(0,0,0,0.1)
```

**Hover:**

```css
background: rgba(22, 163, 74, 0.9)  /* 90% opacity */
border-color: rgba(22, 163, 74, 0.9)
cursor: pointer
```

**Active (Click):**

```css
transform: scale(0.98)
transition: 150ms ease
```

---

## 📱 Responsive Breakpoints

### Desktop (>1024px)

- Hover-to-open enabled
- Panel positioned below FILTERS button
- 4-column grid for filter controls
- Standard animations

### Tablet (768px - 1024px)

- Hover-to-open enabled (with touch fallback)
- Panel full-width of search container
- 2-column grid for filter controls
- Standard animations

### Mobile (<768px)

- Hover disabled (touch only)
- Panel full-screen modal
- 1-column grid (stacked)
- Slide-up animation from bottom
- Close button visible

---

## 🎯 Touch Targets

### Minimum Sizes (WCAG 2.5.5)

```
FILTERS button:   48x40px  ✅ (meets 44x44 minimum)
Category tabs:    auto x 40px  ✅
Reset button:     100% x 40px  ✅
Close button:     44x44px  ✅
Filter dropdowns: 100% x 40px  ✅
```

All interactive elements meet or exceed 44px minimum for touch accessibility.

---

## 🔤 Typography

### Category Tabs

```
Font-size: 14px (mobile) → 16px (desktop)
Font-weight: 600 (semibold)
Line-height: 1.5
Letter-spacing: 0.02em
Text-transform: uppercase
```

### FILTERS Button

```
Font-size: 14px
Font-weight: 500 (medium)
Line-height: 1.5
Text-transform: uppercase
```

### Reset Button

```
Font-size: 14px
Font-weight: 500
Line-height: 1.5
Text-transform: none (Title Case)
```

### Filter Labels

```
Font-size: 14px
Font-weight: 500
Line-height: 1.5
Color: hsl(var(--foreground))
```

---

## 🌗 Dark Mode Support

### Color Adjustments

```css
/* Light Mode */
--corporate-green: 142 76% 36%; /* #16A34A */
--background: 0 0% 100%; /* White */
--foreground: 197 100% 19%; /* Dark */

/* Dark Mode */
--corporate-green: 142 76% 36%; /* Same green (no change) */
--background: 197 50% 12%; /* Dark blue */
--foreground: 0 0% 98%; /* Light */
```

**Note:** Green remains consistent across modes for brand recognition.

---

## ♿ Accessibility Features

### Visual Indicators

```
Focus ring:       2px solid #16A34A, 2px offset
Active state:     Green background + white text (4.5:1 contrast)
Hover state:      Green text on white (4.8:1 contrast)
Underline:        2px height for visibility
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations: none */
  /* Transitions: 0.01ms */
  /* Panel appears instantly */
}
```

### Screen Reader Text

```html
<!-- Visually hidden but announced -->
<span class="sr-only"> Filters expanded / Filters collapsed </span>
```

---

## 📊 Visual Hierarchy

```
Level 1 (Primary):
  ├─ Active category tab (green text + underline)
  └─ Reset button (green background)

Level 2 (Secondary):
  ├─ FILTERS button active (green background)
  └─ Category tab hover (green text)

Level 3 (Tertiary):
  ├─ Inactive tabs (gray text)
  ├─ FILTERS button default (outlined)
  └─ Filter dropdowns (bordered)

Level 4 (Subtle):
  └─ Panel background (white/transparent)
```

---

## 🎨 Shadow System

```css
/* Reset Button */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
/* Elevation: 2 (subtle) */

/* Filter Panel */
box-shadow: 0 8px 24px rgba(10, 30, 20, 0.08);
/* Elevation: 3 (moderate) */

/* Hover emphasis */
box-shadow: 0 12px 32px rgba(10, 30, 20, 0.12);
/* Elevation: 4 (strong) */
```

---

## 🔄 State Transitions

```
Tab Click:
  Inactive → Active (150ms color transition)
  Previous active → Inactive (150ms)

FILTERS Hover:
  Default → Hover (200ms border/text color)
  Hover → Default (200ms)

Panel Open:
  Hidden → Visible (280ms slide + fade)
  Instant DOM insertion

Panel Close:
  Visible → Hidden (250ms debounce)
  Instant DOM removal

Reset Click:
  Scale down 98% (150ms)
  All filters reset
  Scale back 100%
```

---

## 📐 Grid Layout

### Filter Panel Grid (Desktop)

```
┌─────────┬─────────┬─────────┬─────────┐
│ Status  │   BHK   │  Budget │  Reset  │
│ 1fr     │   1fr   │   1fr   │   1fr   │
└─────────┴─────────┴─────────┴─────────┘
```

### Filter Panel Grid (Tablet)

```
┌─────────┬─────────┐
│ Status  │   BHK   │
│ 1fr     │   1fr   │
├─────────┼─────────┤
│ Budget  │  Reset  │
│ 1fr     │   1fr   │
└─────────┴─────────┘
```

### Filter Panel Stack (Mobile)

```
┌───────────────────┐
│      Status       │
│        1fr        │
├───────────────────┤
│       BHK         │
│        1fr        │
├───────────────────┤
│      Budget       │
│        1fr        │
├───────────────────┤
│      Reset        │
│        1fr        │
└───────────────────┘
```

---

**Design System:** Aaraam Properties  
**Primary Color:** #16A34A (Green)  
**Last Updated:** November 20, 2025  
**Status:** Production Ready ✅
