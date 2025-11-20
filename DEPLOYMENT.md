# GitHub Pages Deployment Guide

## Overview
This project is configured to automatically deploy to GitHub Pages at **aaraamproperties.com** whenever changes are pushed to the `main` branch.

## Current Configuration

### 1. GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Trigger**: Automatically runs on push to `main` branch
- **Build Tool**: Bun
- **Output**: Deploys the `dist` folder to GitHub Pages

### 2. Custom Domain
- **Domain**: aaraamproperties.com
- **CNAME File**: `public/CNAME` contains the domain configuration
- **Note**: The CNAME file will be automatically copied to the `dist` folder during build

### 3. Vite Configuration
- **Base Path**: Set to `/` for custom domain
- **Build Output**: `dist` folder

## GitHub Repository Settings Required

To complete the setup, ensure these settings are configured in your GitHub repository:

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/aaraamproperty/aaraam`
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 2: Verify Workflow Permissions
1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## DNS Configuration

Ensure your domain registrar has these DNS records configured:

### Option A: Using A Records (Recommended)
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: aaraamproperty.github.io
```

### Option B: Using CNAME (Alternative)
```
Type: CNAME
Name: @
Value: aaraamproperty.github.io

Type: CNAME
Name: www
Value: aaraamproperty.github.io
```

## How to Deploy

### Automatic Deployment
Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Check out your code
2. Install dependencies with Bun
3. Build the project
4. Deploy to GitHub Pages
5. Your site will be live at aaraamproperties.com within 1-2 minutes

### Manual Deployment
You can also trigger deployment manually:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Monitoring Deployments

### Check Deployment Status
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Monitor the build and deploy jobs
4. Look for green checkmarks indicating success

### View Deployment History
1. Go to **Settings** → **Pages**
2. Scroll down to see recent deployments
3. Each deployment shows the commit hash and timestamp

## Troubleshooting

### Deployment Fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify that `bun run build` works locally

### Custom Domain Not Working
- Verify DNS records are properly configured (can take up to 48 hours to propagate)
- Check that CNAME file contains: `aaraamproperties.com`
- In GitHub Pages settings, ensure custom domain is set to `aaraamproperties.com`
- Enable "Enforce HTTPS" after DNS propagates

### Build Errors
- Run `bun install` and `bun run build` locally to identify issues
- Check for TypeScript errors or missing dependencies
- Review the build logs in the Actions tab

## Local Development

### Install Dependencies
```bash
bun install
```

### Run Development Server
```bash
bun run dev
```
Access at: http://localhost:8080

### Build for Production
```bash
bun run build
```

### Preview Production Build
```bash
bun run preview
```

## Project Structure
```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── public/
│   └── CNAME                 # Custom domain configuration
├── src/                      # Source code
├── dist/                     # Build output (auto-generated)
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## Important Notes

1. **CNAME File**: The `public/CNAME` file is crucial for custom domain. Don't delete it!
2. **Base Path**: Keep `base: "/"` in `vite.config.ts` for custom domains
3. **HTTPS**: GitHub Pages automatically provides SSL for custom domains
4. **Build Time**: Typical deployments take 1-2 minutes
5. **Cache**: Browser caching may require a hard refresh (Ctrl+F5) to see changes

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domains on GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

Last Updated: November 20, 2025
