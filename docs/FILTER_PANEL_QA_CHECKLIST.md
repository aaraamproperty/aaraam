# Filter Panel - QA Checklist

## Quick Testing Guide

### ✅ Visual Checks

- [ ] Category tabs (ALL/RESIDENTIAL/COMMERCIAL) use green (#16A34A) when active
- [ ] Tab underline indicator is green, not orange
- [ ] Tabs turn green on hover
- [ ] FILTERS button shows green border/text on hover
- [ ] FILTERS button has green background when active
- [ ] Reset button is green with white text and shadow
- [ ] Filter panel slides in smoothly (280ms)

### ✅ Desktop Hover Behavior

- [ ] Hover over FILTERS button opens panel
- [ ] Panel stays open when moving mouse into panel area
- [ ] Panel closes 250ms after mouse leaves both areas
- [ ] No flicker when moving between button and panel
- [ ] Click still toggles panel (fallback)

### ✅ Touch/Mobile Behavior

- [ ] Hover doesn't work on touch devices
- [ ] Tap FILTERS button to open/close panel
- [ ] Close button (X) appears inside panel
- [ ] Panel is full-screen modal on mobile (<768px)
- [ ] Can scroll panel content on mobile

### ✅ Keyboard Navigation

- [ ] Tab focuses FILTERS button
- [ ] Enter/Space toggles panel
- [ ] Escape closes panel
- [ ] Can tab through all filter controls
- [ ] Focus indicators visible (green ring)

### ✅ Screen Reader

- [ ] FILTERS button announces "expanded/collapsed"
- [ ] Panel role="dialog" announced
- [ ] Panel hidden from screen reader when closed
- [ ] All filter labels readable

### ✅ Accessibility

- [ ] Reduced motion: animation disabled
- [ ] Color contrast: green on white ≥4.5:1
- [ ] Touch targets: all buttons ≥44px
- [ ] No keyboard traps

### ✅ Responsive

- [ ] Desktop: hover works, panel positioned correctly
- [ ] Tablet: hover or click works
- [ ] Mobile: click-only, full-screen modal
- [ ] Tabs scroll horizontally on small screens

### ✅ Cross-Browser

- [ ] Chrome: all features work
- [ ] Firefox: all features work
- [ ] Safari: animations smooth
- [ ] Mobile Safari: touch detection works
- [ ] Edge: all features work

---

## 🐛 Common Issues

| Issue                       | Solution                                  |
| --------------------------- | ----------------------------------------- |
| Panel doesn't open on hover | Check `isTouchDevice` is false on desktop |
| Panel flickers              | Increase debounce from 250ms to 300ms     |
| Green color wrong           | Verify using #16A34A everywhere           |
| Hover works on mobile       | Touch detection failed, check console     |
| Animation jerky             | Check GPU acceleration, reduce motion     |

---

## 🎯 Acceptance Criteria

✅ **All green elements use #16A34A**  
✅ **Hover-to-open works on desktop**  
✅ **Click-to-toggle works on touch**  
✅ **Panel animates smoothly (280ms)**  
✅ **250ms debounce prevents flicker**  
✅ **Keyboard accessible (Enter/Space/Esc)**  
✅ **Screen reader compliant**  
✅ **Reduced motion supported**  
✅ **Mobile full-screen modal**

---

**Pass Criteria:** All 9 acceptance criteria must pass  
**Test Date:** ******\_\_\_******  
**Tested By:** ******\_\_\_******  
**Status:** ⬜ Pass / ⬜ Fail
