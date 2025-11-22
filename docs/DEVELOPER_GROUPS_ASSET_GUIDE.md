# Developer Groups Asset Placement Guide

## 📁 Directory Structure

All developer logos and assets should be placed in:
```
public/
└── assets/
    ├── developers/          ← Place all developer logos here
    │   ├── tescon-logo.png
    │   ├── kaamdhenu-logo.png
    │   ├── greenscape-logo.png
    │   └── dreams-logo.jpg
    ├── hero-images/         ← Place hero images here
    │   └── paradise-group-hero.png
    └── brochures/           ← Place PDF brochures here
        └── sai-world-one-leaflet.pdf
```

## 📥 Required Asset Files

### 1. Tescon Logo
**Source:** `/mnt/data/logo-1.png`  
**Destination:** `public/assets/developers/tescon-logo.png`

### 2. Kaamdhenu Builders Logo
**Source:** `/mnt/data/Kamdhenu_Builders.png`  
**Destination:** `public/assets/developers/kaamdhenu-logo.png`

### 3. Paradise Group Logo
**Status:** ✅ Already exists  
**Location:** `src/assets/Properies/Paradise Group/Paradise Logo.png`

### 4. Paradise Hero Image
**Source:** `/mnt/data/8c117329-8bfa-4656-a083-d2a04824ce5b.png`  
**Destination:** `public/assets/hero-images/paradise-group-hero.png`

### 5. GreenScape Logo
**Source:** `/mnt/data/greenscape-logo.png`  
**Destination:** `public/assets/developers/greenscape-logo.png`

### 6. Dreams Group Logo
**Source:** `/mnt/data/Dreams Group.jpg`  
**Destination:** `public/assets/developers/dreams-logo.jpg`

### 7. Sai World One Brochure
**Source:** `/mnt/data/Sai World One Leaflet_9x16 in For E PDF Hires.pdf`  
**Destination:** `public/assets/brochures/sai-world-one-leaflet.pdf`

## 🚀 Quick Upload Steps

### Windows PowerShell Commands:

```powershell
# Navigate to project directory
cd "D:\Aaraam Properties\aaraam"

# Copy Tescon logo
Copy-Item "/mnt/data/logo-1.png" "public/assets/developers/tescon-logo.png"

# Copy Kaamdhenu logo
Copy-Item "/mnt/data/Kamdhenu_Builders.png" "public/assets/developers/kaamdhenu-logo.png"

# Copy GreenScape logo
Copy-Item "/mnt/data/greenscape-logo.png" "public/assets/developers/greenscape-logo.png"

# Copy Dreams Group logo
Copy-Item "/mnt/data/Dreams Group.jpg" "public/assets/developers/dreams-logo.jpg"

# Copy Paradise hero image
Copy-Item "/mnt/data/8c117329-8bfa-4656-a083-d2a04824ce5b.png" "public/assets/hero-images/paradise-group-hero.png"

# Copy Sai World One brochure
Copy-Item "/mnt/data/Sai World One Leaflet_9x16 in For E PDF Hires.pdf" "public/assets/brochures/sai-world-one-leaflet.pdf"
```

### Manual Upload via VS Code:

1. **For each logo file:**
   - Right-click on `public/assets/developers/` folder
   - Select "Upload Files..."
   - Choose the logo file
   - Rename according to the destination name above

2. **For hero image:**
   - Upload to `public/assets/hero-images/`
   - Rename to `paradise-group-hero.png`

3. **For brochure:**
   - Upload to `public/assets/brochures/`
   - Rename to `sai-world-one-leaflet.pdf`

## ✅ Verification Checklist

After uploading all files, verify they exist:

```powershell
# Check all files exist
Test-Path "public/assets/developers/tescon-logo.png"
Test-Path "public/assets/developers/kaamdhenu-logo.png"
Test-Path "public/assets/developers/greenscape-logo.png"
Test-Path "public/assets/developers/dreams-logo.jpg"
Test-Path "public/assets/hero-images/paradise-group-hero.png"
Test-Path "public/assets/brochures/sai-world-one-leaflet.pdf"
Test-Path "src/assets/Properies/Paradise Group/Paradise Logo.png"
```

All commands should return `True`.

## 🎯 What Each File Is Used For

| File | Used In | Purpose |
|------|---------|---------|
| tescon-logo.png | Home premium card #1 | Tescon developer card |
| kaamdhenu-logo.png | Home premium card #2 | Kaamdhenu developer card |
| Paradise Logo.png | Home premium card #3 | Paradise developer card |
| greenscape-logo.png | Home premium card #4 | GreenScape developer card |
| dreams-logo.jpg | Home premium card #5 | Dreams Group developer card |
| paradise-group-hero.png | Paradise Group landing page | Hero section background |
| sai-world-one-leaflet.pdf | Sai World One project page | Brochure modal viewer |

## 🔄 After Uploading

1. **Restart dev server** (if it was running):
   ```powershell
   # In the terminal running npm run dev
   # Press Ctrl+C, then run:
   npm run dev
   ```

2. **Clear browser cache**:
   - Press `Ctrl + Shift + R` to hard refresh

3. **Test the implementation**:
   - Visit `http://localhost:5173/`
   - Scroll to Premium Properties section
   - Verify all 5 cards show correct logos
   - Click each "View Details" to test navigation

## 📝 Notes

- The `/mnt/data/` paths are from your file system or upload location
- You need to manually download these files and place them in the project
- File names must match exactly (case-sensitive on Linux/Mac)
- PNG files are preferred for logos (transparent backgrounds)
- JPG is acceptable but no transparency

## 🆘 Troubleshooting

**Images not loading:**
- Check file paths match exactly
- Verify files are in correct directories
- Clear browser cache
- Check browser console for 404 errors

**PDF not displaying:**
- Ensure PDF file exists at specified path
- Try different browser
- Check browser console for errors

---

**Last Updated:** November 21, 2025
