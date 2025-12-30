# TitanFlow

Modern SaaS platform for managing your business workflow efficiently.

## Project Overview

TitanFlow is a comprehensive business workflow management solution designed to streamline operations and boost productivity. This repository contains both the marketing website and backend infrastructure.

## Repository Structure

```
TitanFlow/
├── website/              # GitHub Pages website
│   ├── index.html       # Landing page
│   ├── features.html    # Features page
│   ├── pricing.html     # Pricing page
│   ├── robots.txt       # SEO robots file
│   ├── sitemap.xml      # SEO sitemap
│   └── assets/
│       ├── css/         # Stylesheets
│       ├── js/          # JavaScript files
│       └── images/      # Image assets
├── business/            # Backend placeholder
├── .github/
│   └── workflows/
│       └── deploy.yml   # Auto-deployment workflow
└── README.md
```

## Features

- **Responsive Design**: Mobile-first approach ensuring great experience on all devices
- **SEO Optimized**: Comprehensive meta tags, robots.txt, and sitemap.xml
- **Auto-deployment**: Automated GitHub Pages deployment on push to main branch
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized assets and minimal dependencies

## Local Development Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git installed on your machine
- (Optional) A local web server for development

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/neoseek/TitanFlow.git
   cd TitanFlow
   ```

2. **View the website locally:**
   
   Option A - Using Python (recommended):
   ```bash
   cd website
   python3 -m http.server 8000
   ```
   Then open http://localhost:8000 in your browser.

   Option B - Using Node.js:
   ```bash
   cd website
   npx serve .
   ```

   Option C - Open directly:
   Simply open `website/index.html` in your browser (some features may not work without a server).

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy from the `/website` directory

### Manual Deployment

If needed, you can manually trigger deployment:
1. Go to the "Actions" tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Accessing the Live Site

Once deployed, your site will be available at:
```
https://neoseek.github.io/TitanFlow/
```

## Making Changes

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the appropriate files

3. **Test locally** using the local development setup

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** to merge into main

## Website Structure

### Pages

- **index.html**: Main landing page with hero section and feature preview
- **features.html**: Detailed features and capabilities
- **pricing.html**: Pricing plans and FAQ

### Assets

- **CSS**: Modern, mobile-responsive stylesheets with flexbox and grid layouts
- **JavaScript**: Smooth scrolling, animations, and interactive elements
- **Images**: Placeholder directory for logos, screenshots, and graphics

## SEO Optimization

The website includes:
- Meta descriptions and keywords for all pages
- Open Graph tags for social media sharing
- Twitter Card tags
- Sitemap for search engine indexing
- Robots.txt for crawler guidance
- Semantic HTML structure
- Mobile-responsive viewport settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

Copyright © 2025 TitanFlow. All rights reserved.

## Support

For questions or issues, please open an issue in the GitHub repository.
