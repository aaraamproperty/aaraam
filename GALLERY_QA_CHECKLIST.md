# Gallery Component - QA & Testing Checklist

## Visual Testing

### Desktop (1920x1080+)
- [ ] 4 thumbnails display in a single row
- [ ] Equal spacing between thumbnails (24px gap)
- [ ] Rounded corners visible (12px border-radius)
- [ ] Drop shadow visible on thumbnails
- [ ] Hover effect: slight scale-up (1.03x)
- [ ] Hover effect: gradient overlay appears smoothly
- [ ] "Download Gallery" button aligned top-right
- [ ] Gallery title "Gallery Of Greenscape Cyber Square" displays correctly

### Tablet (768px - 1024px)
- [ ] 4 thumbnails maintain in row layout
- [ ] Proper spacing maintained
- [ ] Touch targets are adequate (min 44x44px)
- [ ] Download button shows icon + text

### Mobile (< 768px)
- [ ] Thumbnails display in 2x2 grid
- [ ] Spacing adjusted appropriately (16px gap)
- [ ] Download button shows icon only
- [ ] All elements remain accessible

## Lightbox Modal Testing

### Opening Modal
- [ ] Click thumbnail opens modal smoothly
- [ ] Fade-in animation smooth (300ms)
- [ ] Background dims to 95% black opacity
- [ ] Correct image displays based on clicked thumbnail
- [ ] Body scroll locked when modal open
- [ ] Focus moves to close button

### Modal Layout
- [ ] Image centered in viewport
- [ ] Image respects max-width: 90vw and max-height: 90vh
- [ ] Image maintains aspect ratio (object-fit: contain)
- [ ] Close button (X) visible in top-right
- [ ] Image counter visible in top-left (e.g., "1 / 4")
- [ ] Left/Right arrow buttons visible
- [ ] Optional caption displays below image
- [ ] Thumbnail strip visible at bottom

### Navigation
- [ ] Click right arrow advances to next image
- [ ] Click left arrow goes to previous image
- [ ] Last image loops back to first (circular)
- [ ] First image loops back to last when going previous
- [ ] Smooth transition between images (fade/scale)
- [ ] Image counter updates correctly
- [ ] Active thumbnail highlighted in bottom strip

### Closing Modal
- [ ] Click X button closes modal
- [ ] Click outside image (on overlay) closes modal
- [ ] Esc key closes modal
- [ ] Smooth fade-out animation
- [ ] Body scroll restored
- [ ] Focus returns to clicked thumbnail

## Keyboard Testing

### When Modal Closed
- [ ] Tab reaches all thumbnails
- [ ] Tab reaches download button
- [ ] Enter on thumbnail opens modal
- [ ] Visible focus ring on focused element

### When Modal Open
- [ ] Tab cycles through: close button → prev arrow → next arrow → thumbnail strip → back to close
- [ ] Focus trapped within modal (doesn't reach elements behind)
- [ ] Left Arrow key navigates to previous image
- [ ] Right Arrow key navigates to next image
- [ ] Esc key closes modal
- [ ] Visible focus ring on all interactive elements

## Touch & Mobile Testing

### Swipe Gestures
- [ ] Swipe left on image advances to next
- [ ] Swipe right on image goes to previous
- [ ] Swipe threshold works correctly (50px)
- [ ] No accidental navigation on small movements
- [ ] Smooth animation after swipe

### Touch Interactions
- [ ] Tap thumbnail opens modal
- [ ] Tap close button closes modal
- [ ] Tap outside image closes modal
- [ ] Tap arrows navigate images
- [ ] Tap thumbnails in strip navigate
- [ ] No double-tap zoom interference
- [ ] Touch targets meet minimum size (44x44px)

## Accessibility Testing

### Screen Reader (NVDA/JAWS/VoiceOver)
- [ ] Thumbnails announced as buttons with proper labels
- [ ] "View [alt text]" announced for each thumbnail
- [ ] Modal announced as dialog when opened
- [ ] Image counter announced (e.g., "1 of 4")
- [ ] Navigation buttons have clear labels
- [ ] "Previous image" and "Next image" announced
- [ ] "Close gallery" announced for X button
- [ ] Image captions read aloud
- [ ] Active thumbnail marked with aria-current

### Keyboard-Only Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Tab order logical (top to bottom, left to right)
- [ ] Focus visible at all times
- [ ] No keyboard traps
- [ ] Focus returns to origin after modal closes

### High Contrast Mode
- [ ] Borders and outlines visible
- [ ] Text readable
- [ ] Focus indicators visible
- [ ] Button states distinguishable

### Reduced Motion
- [ ] Animations respect prefers-reduced-motion
- [ ] Instant transitions when motion reduced
- [ ] Functionality preserved without animations

## Performance Testing

### Loading Performance
- [ ] Thumbnails lazy-load (check Network tab)
- [ ] Images not loaded until scrolled into view
- [ ] Full-size images load only in lightbox
- [ ] No CLS (Cumulative Layout Shift)
- [ ] Fast FCP (First Contentful Paint)

### Runtime Performance
- [ ] Modal opens in < 100ms
- [ ] Image transitions smooth (60fps)
- [ ] No jank or stuttering
- [ ] Next image prefetches correctly
- [ ] Check Chrome DevTools Performance tab

### Memory Usage
- [ ] No memory leaks when opening/closing repeatedly
- [ ] Event listeners cleaned up properly
- [ ] Images unload when not in view (if implemented)

## Cross-Browser Testing

### Chrome/Edge
- [ ] All features work
- [ ] Animations smooth
- [ ] Touch events work on touch devices

### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Safari (macOS)
- [ ] All features work
- [ ] Backdrop-blur works or degrades gracefully
- [ ] Animations smooth

### Safari (iOS)
- [ ] Touch events work correctly
- [ ] Swipe gestures work
- [ ] Modal doesn't cause page scrolling
- [ ] Safari toolbar doesn't interfere

## Image Quality Testing

- [ ] Images sharp on standard displays
- [ ] Images sharp on Retina/HiDPI displays
- [ ] WebP format supported
- [ ] Fallback works if WebP not supported
- [ ] No pixelation or compression artifacts
- [ ] Colors accurate

## Error Handling

- [ ] Missing image shows alt text
- [ ] Broken image links don't crash component
- [ ] Download button handles missing URL gracefully
- [ ] Console shows no errors in normal use

## SEO & Meta

- [ ] Alt text meaningful and descriptive
- [ ] Images have appropriate file names
- [ ] Captions provide context
- [ ] No missing alt attributes

## Specific to CyberSquare

- [ ] Gallery appears only on /properties/greenscape/cybersquare
- [ ] Title reads "Gallery Of Greenscape Cyber Square"
- [ ] 4 images display correctly:
  - [ ] Image 1: Exterior angle 1
  - [ ] Image 2: Architectural design
  - [ ] Image 3: Central plaza
  - [ ] Image 4: Aerial view
- [ ] Captions match each image
- [ ] Download button present (even if placeholder)

## Browser Console Checks

- [ ] No errors in console
- [ ] No warnings (except expected ones)
- [ ] React DevTools shows proper component structure
- [ ] No memory leaks visible in Memory profiler

## Responsive Breakpoints

Test at these specific widths:
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1366px (Laptop)
- [ ] 1920px (Desktop)
- [ ] 2560px (Large desktop)

## Final Approval Checklist

- [ ] Design matches reference mockup
- [ ] All interactions smooth and intuitive
- [ ] No accessibility violations
- [ ] Performance meets standards
- [ ] Works across all target browsers
- [ ] Mobile experience excellent
- [ ] Code reviewed and approved
- [ ] Documentation complete

## Bug Reporting Template

If you find an issue, report it with:
- Browser & version
- Screen size / device
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/video if possible
- Console errors (if any)

## Notes

- Test with real devices when possible, not just Chrome DevTools
- Test with actual screen readers
- Test on slower networks (throttle in DevTools)
- Test with keyboard only (unplug mouse)
- Test with high contrast mode enabled
- Test with animations disabled (prefers-reduced-motion)

## Sign-off

- [ ] QA Engineer: _________________ Date: _______
- [ ] Designer: _________________ Date: _______
- [ ] Developer: _________________ Date: _______
- [ ] Product Owner: _________________ Date: _______
