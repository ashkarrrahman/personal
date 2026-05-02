# Ashkar Portfolio

Modern React portfolio for Ashkar, a PMP-certified Senior Project Manager / Scrum Master focused on Agile delivery, data programs, stakeholder management, release planning, and AI-ready leadership.

## Project Structure

- `index.html`: SEO shell, structured data, social metadata, and security/privacy browser policies.
- `src/App.jsx`: React application layout and section components.
- `src/content.js`: Editable portfolio content, contact placeholders, strengths, experience, and case studies.
- `src/styles.css`: Responsive visual design.
- `CHANGE_REPORT.md`: Phase-by-phase conversion, refactor, architecture, and security/privacy report.
- `llms.txt`: AI-agent friendly portfolio summary.
- `robots.txt` and `sitemap.xml`: Search crawler support.

## Run Locally

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Before Publishing

- Replace `https://ashkar.example/` in `index.html`, `robots.txt`, and `sitemap.xml` with the real domain.
- Replace placeholder email, LinkedIn, and resume URL in `src/content.js` and the JSON-LD in `index.html`.
- Add a real `resume.pdf` only if it should be publicly downloadable.
- Configure equivalent security headers at the hosting provider level.
