# GitHub Copilot Instructions for Landing Page Project

## Project Overview
This is a simple, clean, and modern HTML/CSS landing page repository. The design is based on a Figma desktop design that needs to be converted to a responsive, adaptive layout for all device sizes.

## Code Style & Principles
- **Keep it Simple, Stupid (KISS)**: Write straightforward, easy-to-understand code
- **Vanilla HTML/CSS**: No frameworks or build tools unless absolutely necessary
- **Semantic HTML**: Use proper HTML5 semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`, etc.)
- **Clean, Modern Design**: Follow modern web design principles with clean spacing and typography
- **Mobile-First**: Design with mobile in mind first, then enhance for larger screens

## Responsive Design Guidelines
- Create fluid, adaptive layouts that work on all device sizes:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px and above
- Use CSS media queries for breakpoints
- Prefer relative units (rem, em, %, vw/vh) over fixed pixels where appropriate
- Use CSS Grid and Flexbox for layouts
- Ensure images are responsive with `max-width: 100%`

## CSS Organization
- Use CSS custom properties (variables) for colors, spacing, and typography
- Follow a logical organization: reset → variables → base styles → layout → components → utilities
- Use BEM naming convention or simple, semantic class names
- Keep specificity low, avoid deep nesting

## File Structure
```
/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── images/             # Image assets
├── .gitignore
└── README.md           # Project documentation
```

## Best Practices
- Write accessible HTML (proper alt text, ARIA labels when needed, semantic structure)
- Optimize images before committing (use modern formats like WebP when possible)
- Test on multiple screen sizes and browsers
- Keep CSS organized and commented for maintainability
- Use meaningful class names that describe purpose, not appearance
- Avoid inline styles
- Comment complex CSS or layout decisions

## Performance Considerations
- Minimize CSS and remove unused styles
- Optimize images and use appropriate formats
- Use system fonts or limit web font usage
- Avoid unnecessary JavaScript unless required for functionality

## Figma Integration
- Use Figma MCP tools to extract design context directly
- **ALWAYS include `dirForAssetWrites` parameter** when calling Figma tools: `/Users/aaa/Work/landing/images`
- Export all assets to `/images` directory
- Store temporary Figma output (React/Tailwind code) in `/tmp` directory
- Convert Figma-generated React+Tailwind code to vanilla HTML/CSS
- Extract fonts from Figma design (check font-family in generated code)
- Implement animations and interactions from Figma prototype
- Example: `dirForAssetWrites: "/Users/aaa/Work/landing/images"`

## When Helping with Code
- Prioritize simplicity and readability
- Suggest modern CSS features (Grid, Flexbox, custom properties)
- Ensure all suggestions maintain responsive design
- Follow the established structure and conventions
- Explain complex solutions with comments
