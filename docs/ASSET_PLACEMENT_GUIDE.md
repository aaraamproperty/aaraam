# Asset Placement Guide for Paradise Group

This guide shows exactly where to place the asset files you mentioned.

## Files You Need to Upload

### 1. Paradise Hero Image
**Source File:** `/mnt/data/8c117329-8bfa-4656-a083-d2a04824ce5b.png`  
**Destination:** `public/assets/hero-images/paradise-group-hero.png`

**Steps:**
1. Copy the file from `/mnt/data/8c117329-8bfa-4656-a083-d2a04824ce5b.png`
2. Rename it to `paradise-group-hero.png`
3. Place it in `public/assets/hero-images/` directory

### 2. Sai World One Brochure
**Source File:** `/mnt/data/Sai World One Leaflet_9x16 in For E PDF Hires.pdf`  
**Destination:** `public/assets/brochures/sai-world-one-leaflet.pdf`

**Steps:**
1. Copy the PDF from `/mnt/data/Sai World One Leaflet_9x16 in For E PDF Hires.pdf`
2. Rename it to `sai-world-one-leaflet.pdf`
3. Place it in `public/assets/brochures/` directory

### 3. Paradise Logo (Already Exists ✓)
**Current Location:** `src/assets/Properies/Paradise Group/Paradise Logo.png`  
**Status:** Already in place, no action needed

## Directory Structure After Upload

```
public/
└── assets/
    ├── hero-images/
    │   └── paradise-group-hero.png          ← Upload here
    └── brochures/
        ├── sai-world-one-leaflet.pdf        ← Upload here
        └── sai-world-pyramid.pdf            ← Upload when available

src/
└── assets/
    └── Properies/
        └── Paradise Group/
            └── Paradise Logo.png            ✓ Already exists
```

## Quick Upload Commands

If you have command-line access, you can use these commands:

### Windows (PowerShell)
```powershell
# Copy hero image
Copy-Item "/mnt/data/8c117329-8bfa-4656-a083-d2a04824ce5b.png" "public/assets/hero-images/paradise-group-hero.png"

# Copy brochure
Copy-Item "/mnt/data/Sai World One Leaflet_9x16 in For E PDF Hires.pdf" "public/assets/brochures/sai-world-one-leaflet.pdf"
```

### Manual Upload via VS Code
1. Right-click on `public/assets/hero-images/` folder
2. Select "Upload Files..."
3. Choose the hero image file
4. Rename to `paradise-group-hero.png`
5. Repeat for brochure in `public/assets/brochures/`

## Verification

After uploading, verify the files exist:

```powershell
# Check hero image
Test-Path "public/assets/hero-images/paradise-group-hero.png"

# Check brochure
Test-Path "public/assets/brochures/sai-world-one-leaflet.pdf"

# Check Paradise logo (should already exist)
Test-Path "src/assets/Properies/Paradise Group/Paradise Logo.png"
```

All three should return `True`.

## What Happens Next

Once these files are in place:
1. ✅ Home page Paradise card will display the logo
2. ✅ Paradise Group landing page will show the hero image
3. ✅ Project detail pages will display the images
4. ✅ Brochure modal will load the PDF when clicked

## Placeholder for Sai World Pyramid

The second project (Sai World Pyramid) currently uses placeholder paths:
- **Brochure:** `public/assets/brochures/sai-world-pyramid.pdf`
- **Images:** Currently uses the same Paradise hero image

When you have the actual assets for Sai World Pyramid:
1. Upload the brochure as `sai-world-pyramid.pdf`
2. Update `src/data/paradiseGroup.ts` with the correct image paths

## Need Help?

If files don't appear after upload:
1. Check file names match exactly (case-sensitive)
2. Refresh the dev server: `Ctrl+C` then `npm run dev`
3. Clear browser cache: `Ctrl+Shift+R`
4. Check browser console for 404 errors

---

**Important:** The paths `/mnt/data/...` are from your file system. You need to manually copy these files to the public directory of the project.
