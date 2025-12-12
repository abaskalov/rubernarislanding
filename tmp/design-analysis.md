# Figma Design Analysis

## Design Dimensions
- Desktop: 1280px wide
- Design optimized for MacBook Air viewport

## Typography
**Primary Font: Advent Pro** (Google Fonts)
- ExtraBold (800): Headings (20px nav, 32px card titles, 50px contact, 100px section headings)
- Bold (700): Tech stack category labels (24px)
- Medium (500): Project descriptions (24px)
- Regular (400): Body text (24px)

**Secondary Fonts:**
- ABeeZee Regular: Logo text (24px)
- Font Awesome 6 Pro Solid: Icons (envelope, paper-plane)

## Color Palette
```css
--color-red: #F95355;        /* Hero section background */
--color-lavender: #BCB6CE;   /* Cross-platform section */
--color-beige: #B4A688;      /* Tech stack section */
--color-grey: #C7C8D2;       /* Portfolio section background */
--color-white: #FFFFFF;      /* Backgrounds, card badges */
--color-black: #000000;      /* Text, icons */
```

## Layout Structure

### 1. Header (data-node-id="4:95")
- Fixed position at top
- Padding: 40px
- Three sections: Logo (left), Brand icon (center), Navigation (right)
- Logo text: "Команда ответственных разработчиков" (3 lines, ABeeZee, 24px)
- Navigation buttons: СТЕК, СДЕЛАНО, КОНТАКТЫ (Advent Pro ExtraBold, 20px)
- Underline animation on hover (opacity: 0 by default)

### 2. Hero Section (data-node-id="91:104")
- Background: #F95355
- Height: 672px (calculated: 832px section - 160px from other elements)
- Cloud icon (imgGroup6): 526px × 500px centered
- Content centered vertically and horizontally

### 3. Cross-Platform Section (data-node-id="20:2655")
- Background: #BCB6CE
- Two-column layout with 80px gap
- Left: Device illustration (500px wide, 316px high)
- Right: Heading (100px font) + description (24px)
- Padding: 0 40px
- Section spacing: 200px gap between sections

### 4. Database Section (data-node-id="107:2083")
- Background: White
- Centered layout with 60px gap
- Database illustration (523px × 500px)
- Heading + description (max-width: 800px, centered)

### 5. Tech Stack Section (data-node-id="100:2218")
- Background: #B4A688
- Two-column layout with 60px gap
- Left: Database layers icon (500px wide)
- Right: Heading + tech list
- Tech list formatted with bold category labels

### 6. Portfolio Grid (data-node-id="152:6896")
- Background: #C7C8D2
- Grid container: 1060px wide
- Grid: 2 columns with 60px gap
- Card structure:
  - Image: 500px × 400px with 40px border-radius
  - Title with year badge (white bg, 8px border-radius)
  - Description below (24px, Medium weight)

**Projects:** (8 total)
1. ПОМНИ (2024)
2. AM-GROUP.KZ (2023)
3. ACCORDIX (2024)
4. ELEKTROGROUP.KZ (2024)
5. DOZP.KZ (2018)
6. ОБМЕННИК КРИПТОВАЛЮТ (2020)
7. ИИ-АССИСТЕНТ (2025)
8. ПОВОД (2025)

### 7. Contact Section (data-node-id="117:6481")
- Background: Dark (appears black/dark grey in design)
- Centered content with 40px gaps
- Heading: 100px Advent Pro ExtraBold
- Contact links with Font Awesome icons (50px)
- Email: info@rubernaris.com
- Social: @rubernaris

## Spacing System
- Section vertical gaps: 200px
- Inner content gaps: 40px (small), 60px (medium), 80px (large)
- Container padding: 40px horizontal
- Card gaps: 60px in portfolio grid
- Border radius: 40px (images), 8px (badges), 6px (underlines)

## Animations/Interactions
From Tailwind classes with opacity-0:
- Navigation button underlines: opacity 0 → 1 on hover
- Transition on hover effects (cursor-pointer on nav items)
- Scroll-based animations likely needed for sections

## Images Exported
✅ 8 project images (img2 through img9)
❌ SVG icons still need to be checked/exported:
  - Cloud hero icon (imgGroup6)
  - Device illustration (imgGenerativeObject1)
  - Database complex illustration (imgGenerativeObject)
  - Tech stack icon (imgGroup through imgGroup5)
  - Logo icon (img, img1)

## Responsive Considerations
- Desktop design: 1280px
- Need to create breakpoints for:
  - Mobile: Single column, stack all two-column layouts
  - Tablet: Maintain 2-column grid for portfolio
  - Reduce font sizes proportionally
  - Adjust section padding
