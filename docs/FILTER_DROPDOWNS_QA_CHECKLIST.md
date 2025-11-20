# Filter Dropdowns - QA Checklist

## 📋 Complete Testing Checklist

### 🎨 Visual Consistency

#### Spacing & Layout

- [ ] **Left padding:** "All Status" text not cut off, 18px padding applied
- [ ] **Right padding:** ChevronDown icon has 16px right spacing from edge
- [ ] **Top/Bottom padding:** Input fields have 12px vertical padding
- [ ] **Row bottom spacing:** Each filter row has 14px bottom padding (pb-3.5)
- [ ] **Grid gap:** 24px gap between filter columns (gap-6)
- [ ] **Alignment:** Reset button aligns with bottom of other filters

#### Typography

- [ ] Label font size: text-sm (14px)
- [ ] Label weight: font-medium
- [ ] Label color: text-foreground
- [ ] Label margin: mb-2 (8px below label)
- [ ] Input text not truncated or ellipsized

#### Icons & Indicators

- [ ] ChevronDown icon visible in all filters
- [ ] ChevronDown positioned: absolute right-4, vertically centered
- [ ] ChevronDown size: h-4 w-4 (16×16px)
- [ ] ChevronDown color: text-muted-foreground
- [ ] ChevronDown rotates 180° when dropdown open
- [ ] Rotation smooth, not jumpy

#### Colors & Borders

- [ ] Border color: #E6E9EA (border-[#E6E9EA])
- [ ] Border radius: 8px (rounded-lg)
- [ ] Focus ring: 2px solid #16A34A (ring-2 ring-[#16A34A])
- [ ] Background: bg-background (white in light mode)
- [ ] Reset button: White bg, green text, green border

---

### 🖱️ Desktop Hover Behavior

#### Hover to Open

- [ ] Hovering over Status filter row opens its dropdown
- [ ] Hovering over BHK filter row opens its dropdown
- [ ] Hovering over Budget filter row opens its dropdown
- [ ] ChevronDown rotates 180° on hover
- [ ] Dropdown opens smoothly (no instant snap)
- [ ] Opening animation takes ~240ms

#### Hover to Close

- [ ] Mouse leaving filter row triggers 250ms debounce timer
- [ ] Dropdown closes after 250ms if mouse stays away
- [ ] Hovering back before 250ms cancels close timer
- [ ] Dropdown stays open when hover returns quickly
- [ ] ChevronDown rotates back to 0° on close
- [ ] Closing animation smooth

#### Multiple Dropdowns

- [ ] Only one dropdown can be open at a time
- [ ] Opening new dropdown closes any previously open dropdown
- [ ] No flicker when switching between dropdowns rapidly
- [ ] Timers properly cleaned up when switching

#### Edge Cases

- [ ] Rapid hover in/out doesn't cause flicker
- [ ] Mouse moving quickly between filters doesn't break state
- [ ] Closing entire Filters panel resets dropdown states
- [ ] Refreshing page resets all dropdown states

---

### 📱 Touch Device Behavior

#### Touch Detection

- [ ] Touch device properly detected (ontouchstart test)
- [ ] Hover-to-open disabled on touch devices
- [ ] Tap/click required to toggle dropdown on touch

#### Tap Interactions

- [ ] Tapping Status filter toggles its dropdown
- [ ] Tapping BHK filter toggles its dropdown
- [ ] Tapping Budget filter toggles its dropdown
- [ ] Tapping same filter again closes dropdown
- [ ] Tapping different filter switches to that dropdown

#### Touch Targets

- [ ] Filter rows at least 44×44px tap target
- [ ] Select elements large enough (48px height recommended)
- [ ] No accidental taps due to small targets
- [ ] Buttons and selects easy to tap on mobile

#### Mobile Layout

- [ ] Filters stack vertically on mobile (grid-cols-1)
- [ ] Full-width filters on small screens
- [ ] Adequate spacing between stacked filters
- [ ] Reset button full-width on mobile

---

### ⌨️ Keyboard Navigation

#### Focus Management

- [ ] Tab moves focus to first filter (Status)
- [ ] Tab continues to next filter (BHK)
- [ ] Tab continues to next filter (Budget)
- [ ] Tab moves to Reset button
- [ ] Shift+Tab moves focus backwards
- [ ] Focus visible indicator clear and distinct

#### Dropdown Interactions

- [ ] Focusing select element opens dropdown
- [ ] Arrow Up/Down navigate dropdown options
- [ ] Enter/Space selects highlighted option
- [ ] Selecting option closes dropdown
- [ ] Escape key closes dropdown
- [ ] Escape returns focus to select trigger

#### Keyboard-Only Usage

- [ ] Can navigate entire filter panel with keyboard only
- [ ] Can select all filter options without mouse
- [ ] Can reset filters using keyboard
- [ ] No keyboard traps (focus can always move)

---

### ♿ Accessibility

#### ARIA Attributes

- [ ] aria-label="Filter by project status" on Status select
- [ ] aria-label="Filter by BHK" on BHK select
- [ ] aria-label="Filter by budget" on Budget select
- [ ] aria-expanded="false" when dropdown closed
- [ ] aria-expanded="true" when dropdown open
- [ ] aria-label="Reset all filters" on Reset button

#### Screen Reader Support

- [ ] Screen reader announces filter labels correctly
- [ ] Screen reader announces dropdown open/closed state
- [ ] Screen reader announces selected option
- [ ] Screen reader announces filter count changes
- [ ] Screen reader can navigate options with arrow keys

#### Focus Indicators

- [ ] Focus ring visible on all interactive elements
- [ ] Focus ring color: #16A34A (green)
- [ ] Focus ring thickness: 2px
- [ ] Focus ring not clipped by parent containers
- [ ] Focus ring works in high contrast mode

#### Semantic HTML

- [ ] Proper label elements used
- [ ] Select elements are native (not divs with role)
- [ ] Button elements for Reset button
- [ ] Landmark regions properly defined

---

### 🎬 Animation & Motion

#### Reduced Motion Support

- [ ] prefers-reduced-motion media query detected
- [ ] ChevronDown rotation instant when motion reduced
- [ ] Dropdown open/close instant when motion reduced
- [ ] Main Filters panel respects reduced motion
- [ ] No animation flicker or jarring transitions

#### Animation Smoothness

- [ ] ChevronDown rotation at 60fps
- [ ] No stuttering or frame drops
- [ ] Smooth on low-end devices
- [ ] GPU acceleration working (check DevTools)

#### Timing & Easing

- [ ] ChevronDown rotation: 240ms duration
- [ ] Easing: cubic-bezier(0.22, 0.9, 0.35, 1)
- [ ] Debounce close: 250ms delay
- [ ] Animations feel natural, not robotic

---

### 🔧 Functional Testing

#### Filter Selection

- [ ] Selecting "Under Construction" filters properties correctly
- [ ] Selecting "2 BHK" filters properties correctly
- [ ] Selecting "₹2 - ₹4 Cr" filters properties correctly
- [ ] Multiple filters work together correctly
- [ ] "All Status/BHK/Budget" shows all properties

#### Reset Functionality

- [ ] Reset button clears Status filter to "All Status"
- [ ] Reset button clears BHK filter to "All BHK"
- [ ] Reset button clears Budget filter to "All Budget"
- [ ] Reset button shows all properties
- [ ] Reset button accessible via keyboard

#### State Persistence

- [ ] Selected filters persist when closing/reopening panel
- [ ] Selected filters persist when scrolling page
- [ ] Filters reset properly on page refresh
- [ ] No stale state from previous sessions

---

### 🌐 Browser Compatibility

#### Desktop Browsers

- [ ] Chrome (latest): All features working
- [ ] Firefox (latest): All features working
- [ ] Safari (latest): All features working
- [ ] Edge (latest): All features working

#### Mobile Browsers

- [ ] Mobile Safari (iOS): Touch and tap working
- [ ] Chrome (Android): Touch and tap working
- [ ] Firefox (Android): Touch and tap working
- [ ] Samsung Internet: Touch and tap working

#### Specific Tests

- [ ] ChevronDown rotation works in all browsers
- [ ] Hover debounce works in all browsers
- [ ] Touch detection works on all devices
- [ ] Animations smooth in all browsers

---

### 🚀 Performance

#### Load Time

- [ ] Filters panel renders in <100ms
- [ ] No visible layout shift when opening
- [ ] Icons load instantly (SVG inlined)
- [ ] No flash of unstyled content (FOUC)

#### Runtime Performance

- [ ] Hovering doesn't cause lag or jank
- [ ] Opening/closing dropdown is instant
- [ ] No memory leaks from timers
- [ ] Cleanup functions work properly

#### Animation Performance

- [ ] Animations run at 60fps
- [ ] No dropped frames during rotation
- [ ] No reflow/repaint during animation
- [ ] GPU acceleration active (check will-change)

---

### 📐 Responsive Design

#### Desktop (≥1024px)

- [ ] 4 columns: Status | BHK | Budget | Reset
- [ ] Adequate spacing between columns (gap-6)
- [ ] Filters not cramped or overlapping

#### Tablet (768px - 1023px)

- [ ] 2 columns: Status + BHK | Budget + Reset
- [ ] Adequate spacing maintained
- [ ] Touch targets large enough

#### Mobile (<768px)

- [ ] 1 column: Stacked vertically
- [ ] Full-width filters
- [ ] Reset button at bottom
- [ ] Adequate vertical spacing (gap-6)

---

### 🧪 Edge Cases

#### Rapid Interactions

- [ ] Rapid hover in/out doesn't break state
- [ ] Clicking multiple filters quickly doesn't cause errors
- [ ] Fast scrolling doesn't break hover state
- [ ] Rapid open/close doesn't cause flicker

#### Boundary Conditions

- [ ] No properties matching filters shows "No properties found"
- [ ] Filters work with 1 property in dataset
- [ ] Filters work with 1000+ properties in dataset
- [ ] Empty filter options handled gracefully

#### Error Handling

- [ ] Invalid filter values rejected
- [ ] Console has no errors or warnings
- [ ] Missing icons don't break layout
- [ ] Failed animation fallback works

---

## 🎯 Critical Path Tests (Must Pass)

### Priority 1 (Blocker)

1. [ ] "All Status" text not cut off
2. [ ] Hover opens dropdown on desktop
3. [ ] Tap toggles dropdown on mobile
4. [ ] Keyboard navigation works
5. [ ] Screen reader announces states

### Priority 2 (High)

6. [ ] ChevronDown rotates correctly
7. [ ] Animations smooth and performant
8. [ ] Reduced motion respected
9. [ ] All browsers supported
10. [ ] Reset button works correctly

### Priority 3 (Medium)

11. [ ] Debounce timing optimal
12. [ ] Touch targets large enough
13. [ ] Focus indicators clear
14. [ ] No console errors
15. [ ] Responsive on all screen sizes

---

## 📊 Test Results Template

```
Date: ___________
Tester: ___________
Browser: ___________
Device: ___________

Visual Consistency:    [ ] Pass  [ ] Fail
Desktop Hover:         [ ] Pass  [ ] Fail
Touch Behavior:        [ ] Pass  [ ] Fail
Keyboard Navigation:   [ ] Pass  [ ] Fail
Accessibility:         [ ] Pass  [ ] Fail
Animation/Motion:      [ ] Pass  [ ] Fail
Functional Testing:    [ ] Pass  [ ] Fail
Browser Compatibility: [ ] Pass  [ ] Fail
Performance:           [ ] Pass  [ ] Fail
Responsive Design:     [ ] Pass  [ ] Fail
Edge Cases:            [ ] Pass  [ ] Fail

Notes:
_______________________________________
_______________________________________
_______________________________________
```

---

## 🐛 Common Issues & Fixes

### Issue: Text Cut Off

**Symptom:** "All Status" shows as "ll Status"  
**Check:** `px-[18px]` applied to select  
**Fix:** Ensure padding-left present

### Issue: ChevronDown Not Rotating

**Symptom:** Icon doesn't rotate when dropdown opens  
**Check:** `openDropdown === 'status'` condition  
**Fix:** Verify state updates correctly

### Issue: Hover Not Working

**Symptom:** Dropdown doesn't open on hover  
**Check:** `isTouchDevice` state  
**Fix:** Ensure touch detection not firing on desktop

### Issue: Dropdown Flickers

**Symptom:** Dropdown opens/closes rapidly  
**Check:** Debounce timer (250ms)  
**Fix:** Verify timer clearTimeout logic

### Issue: Keyboard Trap

**Symptom:** Can't tab out of dropdown  
**Check:** Focus management code  
**Fix:** Ensure Escape closes and returns focus

---

**Last Updated:** November 20, 2025  
**Version:** 1.0  
**Status:** Ready for QA
