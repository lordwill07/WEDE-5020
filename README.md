# WEDE-5020 | Youth Empowerment Initiative - POE Part 3

**Student:** Dimpho Rampata - ST10534645 | Group 6
**Module:** WEDE5020 - Web Development

## Live Links
- **GitHub Repository:** https://github.com/lordwill07/WEDE-5020
- **Live Website (Netlify):** https://funny-biscotti-5eade1.netlify.app/
- **Alternative (GitHub Pages):** https://lordwill07.github.io/WEDE-5020/

##  Website Pages (8 Pages)
`index.html` | `about.html` | `programs.html` | `events.html` | `contact.html` | `enquiry.html` | `volunteer.html` | `donate.html` + `sitemap.xml` + `robots.txt`

## Technologies Used
- HTML5 Semantic + SEO
- CSS3 Responsive (Mobile-first)
- JavaScript (ES6)
- Leaflet.js + Esri WorldStreetMap Tiles
- Google Fonts (Lato, Poppins, Playfair Display)

## POE ReadMe Discussion - SEO and Functionality

### 1. Define SEO and explain its purpose in web development.
SEO (Search Engine Optimization) is the practice of optimizing a website to improve its ranking on search engines like Google. Its purpose in web development is to increase visibility, drive organic (free) traffic, and ensure the website is easily discoverable by users searching for relevant services, such as youth programmes in Pretoria.

### 2. Explain how SEO practices can improve UX and Website Performance.
SEO improves UX by requiring fast-loading, mobile-responsive design and clear navigation with breadcrumb and skip-links, which helps users find information quickly. Practices like image lazy-loading (`loading="lazy"`), compressed images, semantic HTML5 (`header, main, nav, footer`) and proper heading hierarchy (h1 → h2 → h3) improve Core Web Vitals, reduce bounce rate, and keep users engaged longer.

### 3. Discuss the benefits of implementing SEO on a website.
SEO provides sustainable organic traffic without paid ads, builds credibility/trust via high Google ranking, and offers competitive advantage. For this Youth Initiative website, SEO helps parents, learners and donors in Pretoria find our programmes easily on Google, leading to more volunteer sign-ups, event attendance and donations.

### 4. Explain and demonstrate specific SEO techniques using HTML, CSS and JavaScript.
**HTML:** Unique `<title>` per page, unique `<meta name="description">`, semantic tags, descriptive `alt` text on all images, canonical links `<link rel="canonical">`, sitemap.xml and robots.txt.
**CSS:** Mobile-first responsive design, `preconnect` for Google Fonts to improve LCP, optimized layout avoiding layout shifts.
**JavaScript:** Interactive programme search/filter (`data-category`) and Leaflet map with Esri tiles that increase dwell time and user engagement, which indirectly boosts SEO ranking signals.

### 5. Explain the purpose of HTML meta elements and demonstrate relevant examples.
Meta elements provide metadata about the HTML document for browsers and search engines.
- `<meta name="description" content="Discover youth workshops...">` - Shows snippet in Google search results.
- `<meta name="viewport" content="width=device-width, initial-scale=1">` - Essential for mobile responsiveness (Google mobile-first indexing).
- `<meta name="keywords" content="youth events Pretoria...">`.
- `<meta charset="utf-8">` - Ensures correct character rendering.
- Open Graph ready for social sharing.

## Part 3 Functionality Implemented

1.  **Responsive + Accessibility:** Semantic HTML, skip-to-content link, `aria-live="polite"` on form feedback, `aria-expanded` on accordion, keyboard navigation (Enter/Space/Escape/Arrow keys).
2.  **Map - Leaflet + Esri:** Uses `Esri.WorldStreetMap` tiles instead of OSM to fix 403 block and CARTO API key issue. No API key needed, stable for student project.
3.  **Lightbox Gallery:** Custom lightbox in `events.html` with Prev/Next buttons, close on overlay click, Escape key, ArrowLeft/ArrowRight, and `aria-modal`.
4.  **Programs Search/Filter:** Live search `input` + filter buttons using `data-filter` and `data-category` attributes.
5.  **FAQ Accordion:** Accessible accordion with `role="button"` and `tabindex`.
6.  **Forms (4 Forms):** `enquiry-form`, `contact-form`, `volunteer-form`, `donate-form` all use HTML5 validation (`required`, `type="email"`, `minlength`) + JS `e.preventDefault()` + `checkValidity()` + `reportValidity()` to prevent page reload. Shows dynamic Cost (R200-R1000 / Free) and Availability (e.g., "Spaces available next week", "Tax certificate in 48 hours") and stays on same page so URL stays clean (fixes previous `?` query string issue).

##  Project Structure




