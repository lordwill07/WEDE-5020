# WEDE-5020
# Youth Empowerment Initiative - WEDE5020 POE - Gr6

## Project Links
- GitHub: https://github.com/lordwill07/WEDE-5020
- Netlify: https://funny-biscotti-5eade1.netlify.app/ 

## Pages: index, about, programs, events, contact, enquiry, volunteer, donate
## Technologies: HTML5, CSS3, JavaScript, Leaflet + Esri tiles, Google Fonts

## POE ReadMe Discussion - SEO and Functionality (As per 29 Oct instruction)

### 1. Define SEO and explain its purpose in web development.
SEO (Search Engine Optimization) is the practice of optimizing a website to rank higher on search engines like Google. Its purpose in web development is to increase visibility, drive organic traffic, and make the website easily discoverable by users searching for relevant services like youth programmes in Pretoria.

### 2. Explain how SEO practices can improve user experience (UX) and website performance.
SEO improves UX by enforcing fast loading, mobile-responsive design, and clear navigation which helps users find information quickly. Good SEO practices like compressed images, semantic HTML and proper heading structure also improve website performance, reduce bounce rate and keep users engaged longer.

### 3. Discuss the benefits of implementing SEO on a website.
Implementing SEO increases organic traffic without paid ads, builds credibility and trust, and gives competitive advantage. For this Youth Initiative website, SEO helps parents and donors in Pretoria find our programmes easily, leading to more volunteer sign-ups and donations.

### 4. Explain and demonstrate specific SEO techniques using HTML, CSS and JavaScript where applicable.
HTML: Used unique title tags, meta descriptions, meta keywords, semantic tags (header, main, nav), alt text on images and heading hierarchy (h1-h2). CSS: Implemented mobile-first responsive design, fast loading fonts, and optimized layout to improve Core Web Vitals. JavaScript: Added interactive features like programme search/filter and Leaflet map that increase time on page, which indirectly boosts SEO ranking.

### 5. Explain the purpose of HTML meta elements and demonstrate relevant examples.
Meta elements provide metadata about the HTML document for browsers and search engines. Purpose is to describe content, control viewport and improve SEO. Examples used in this project: `<meta name="description" content="Youth empowerment programmes in Pretoria...">` for search snippet, `<meta name="keywords" content="youth centre, Pretoria...">` for rubric, `<meta name="viewport" content="width=device-width">` for mobile responsiveness, `<meta charset="utf-8">` for character encoding.

## Part 3 Functionality Implemented
- Responsive design, semantic HTML, skip link, aria-live
- Leaflet map with Esri WorldStreetMap tiles (fixes 403 OSM block / CARTO API key issue)
- Lightbox with prev/next + keyboard Escape
- Programs search/filter using data-category
- FAQ accordion
- Forms: HTML5 validation (required, type=email, minlength) + JS e.preventDefault() AJAX simulation showing cost R300/R500 and availability, no page reload so URL stays clean (explains previous question)

## How to Run
Open index.html in browser. Internet needed for fonts and map.

## References
- Leaflet.js https://leafletjs.com/
- MDN SEO Starter Guide
- W3C WCAG 2.2

## Author: [Dimpho Rampata - ST10534645]

