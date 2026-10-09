<!-- BEGIN:nextjs-agent-rules -->

# Next.js Project Rules

**This is NOT the Next.js you know.**

This version may contain breaking changes to APIs, conventions, and file structure. Before writing or changing code, read the relevant documentation in:

```text
node_modules/next/dist/docs/
```

Follow current APIs and respect deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Overview

This is a **personal portfolio website for a local politician**.

The website presents his work, development projects, campaigns, vision, news, events, and public activities to voters, supporters, media, and the local community.

The primary goals are:

> **1. The website must be fast and smooth on every device, including slow mobile networks.**
> **2. All content must be SEO-friendly so people can easily find him and his work through search engines.**

Every other decision comes after these two.

This is **not** an e-commerce site, SaaS dashboard, admin panel, or social network.

The website should feel:

- Trustworthy and credible
- Professional and modern
- Approachable and human
- Clear and easy for ordinary citizens to read
- Focused on real work and real results

A visitor should quickly understand:

- Who he is
- What he has done for the community
- What he is working on now
- What he stands for and plans to do
- What is happening next (events, campaigns)
- How to contact him or his office

---

# Priority Order

When goals conflict, decide in this order:

1. **Performance** (speed, smoothness, Core Web Vitals)
2. **SEO** (discoverability, structured content)
3. **Accuracy and honesty of content**
4. **Mobile experience**
5. **Accessibility**
6. **Visual polish**

Visual polish must never cost noticeable speed or break SEO fundamentals.

---

# Design & Technology

- Next.js App Router
- Tailwind CSS
- shadcn/ui
- TypeScript
- Custom design tokens in `globals.css`
- Figma-based UI implementation

Use the Figma MCP when relevant to understand the intended design.

Preserve the existing visual identity, spacing, typography, colors, gradients, imagery, and overall design direction unless a change is explicitly requested.

---

# Project Structure

Follow this structure:

```text
src/
├── app/
│   ├── (marketing)/
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── ui/
│   └── shared/
│
├── features/
├── hooks/
├── lib/
├── config/
└── types/
```

### Rules

- `src/app/` is primarily for routing and route-level files.
- Route-specific components belong in `_components/`.
- Shared UI primitives belong in `src/components/ui/`.
- Shared reusable components belong in `src/components/shared/`.
- Feature-specific logic and static data belong in `src/features/<feature-name>/`.
- Shared hooks belong in `src/hooks/`.
- Framework-agnostic utilities (including SEO and structured-data helpers) belong in `src/lib/`.
- App-wide configuration (site name, URL, social links, default metadata) belongs in `src/config/`.
- Shared TypeScript types belong in `src/types/`.

Do not create unnecessary folders or architecture.

If a new file does not clearly fit the structure, ask before creating a new architectural pattern.

---

# Routing & URLs

Use route groups such as `(marketing)` to organize pages without affecting URLs.

Likely sections (create only what is requested):

```text
/                  Home
/about             Biography and background
/works             Development works and projects
/works/[slug]      Individual work or project
/campaigns         Campaigns and initiatives
/campaigns/[slug]  Individual campaign
/news              News and updates
/news/[slug]       Individual update
/events            Upcoming and past events
/gallery           Photos and videos
/contact           Contact and inquiry
```

URL rules:

- Clean, lowercase, hyphenated, human-readable slugs.
- Slugs should describe the content (`/works/union-road-renovation`, not `/works/123`).
- Never change a published URL without adding a redirect.
- One canonical URL per page.

This project does **not** need `(auth)`, `dashboard/`, or `admin/` unless explicitly requested.

---

# Layout Container

Use the shared **`info-container`** class (defined in `app/globals.css`) for page and section content width:

- Centered content with horizontal inset and **`max-width: 1440px`**

Wrap sections, page blocks, navbar inner content, and footer inner content in `info-container` unless the user **explicitly** asks to break out for a specific component (for example, a full-bleed hero).

Do not remove or replace `info-container` with ad-hoc max-width wrappers without a clear reason.

---

# Link Rule

Always use the project's custom `LinkTo` component.

Do **not** directly import:

```tsx
import Link from "next/link";
```

If `LinkTo` needs additional functionality, extend `LinkTo` instead.

---

# shadcn/ui Rule

Before creating a UI component:

1. Check whether an existing shadcn/ui component solves the problem.
2. Use it if available.
3. If it needs customization, compose/extend it.
4. Do not duplicate shadcn/ui components.
5. Do not directly modify shadcn/ui base components.
6. Only build from scratch when no suitable shadcn/ui component exists.

---

# Performance (Top Priority)

The site must feel instant and smooth, especially on mid-range and low-end phones with slow connections.

### Targets

- **LCP** under 2.5 s
- **INP** under 200 ms
- **CLS** under 0.1
- Lighthouse Performance, SEO, Accessibility, and Best Practices: aim for 90+ on mobile

### Rendering

- Prefer **static generation** (SSG) for every public page. Use ISR (`revalidate`) only when content genuinely changes often (for example, news).
- Prefer **Server Components**. Do not add `"use client"` unless required (state, effects, browser APIs, event handlers).
- Keep client components **small and at the leaf level**. Never mark a whole page or layout as a client component for one interactive element.
- Avoid client-side data fetching. Content should be in the HTML on first load.
- Use `generateStaticParams` for dynamic routes (`works/[slug]`, `news/[slug]`, etc.).

### Images (largest performance factor)

- Always use `next/image` with correct `width`/`height` or `fill` plus `sizes`.
- Set `priority` only on the single above-the-fold LCP image per page. Everything else is lazy.
- Provide meaningful `sizes` so mobile never downloads desktop-sized images.
- Prefer modern formats (AVIF/WebP via Next.js optimization).
- Compress source files before adding them. Avoid multi-megabyte originals in `public/`.
- Reserve space for every image to prevent layout shift.
- Use `placeholder="blur"` for large hero or gallery images when it helps perceived speed.

### Fonts

- Use `next/font` only. Never load fonts from a `<link>` tag or external CSS.
- Limit to the fewest families and weights needed.
- Use `display: "swap"` and subset appropriately (including Bengali subset only if the site actually uses Bengali).

### Video & Embeds

- Never autoplay heavy video above the fold.
- Use a **lightweight facade** (thumbnail + play button) for YouTube/Facebook/other embeds and load the real iframe only on click.
- Do not embed social feeds or widgets that pull in large third-party scripts.

### JavaScript & Dependencies

- Add a dependency only when clearly necessary. Check bundle impact first.
- Prefer CSS over JavaScript for animation and layout.
- Keep animations minimal, subtle, and GPU-friendly (`transform`, `opacity`). Respect `prefers-reduced-motion`.
- Use `next/dynamic` only for heavy, below-the-fold, or interaction-triggered components (lightbox, maps, galleries).
- Avoid heavy animation libraries unless explicitly approved.
- Load analytics (if any) with `next/script` and `strategy="afterInteractive"` or lazier. Keep third-party scripts to a minimum.

### Navigation Smoothness

- Rely on Next.js prefetching through `LinkTo`.
- Use `loading.tsx` or skeletons only where they prevent layout jumps. Do not add loading states to static pages.
- Avoid layout shift from late-loading banners, fonts, or images.

### Caching

- Use proper cache headers for static assets (handled by Next.js; do not override without reason).
- Keep the root layout lean. Anything in it ships on every page.

---

# SEO (Top Priority)

Every public page must be search-friendly by default.

### Metadata

- Use the Next.js **Metadata API** (`metadata` or `generateMetadata`) on every page.
- Every page needs a **unique** `title` and `description`.
- Titles: clear, descriptive, roughly 50–60 characters. Use a title template in the root layout (for example `%s | <Politician Name>`).
- Descriptions: roughly 140–160 characters, written for humans, specific to the page.
- Set `metadataBase` and a **canonical** URL on every page.
- Provide **Open Graph** and **Twitter card** metadata with a proper share image (1200×630) for every page and dynamic content item.
- Use `openGraph.type: "article"` with `publishedTime` / `modifiedTime` for news and updates.
- Set `robots` correctly. Public pages are indexable; do not accidentally ship `noindex`.

### Technical SEO Files

- `src/app/sitemap.ts` must list all public pages and all dynamic content (works, campaigns, news, events) with accurate `lastModified`.
- `src/app/robots.ts` must allow crawling and point to the sitemap.
- Keep these in sync whenever a new page or content type is added.

### Structured Data (JSON-LD)

Add JSON-LD using small server-rendered helpers in `src/lib/`. Use only schema.org types that match real content:

- `Person` for the politician (name, job title, image, sameAs social profiles) on the home and about pages
- `WebSite` on the home page
- `BreadcrumbList` on nested pages
- `NewsArticle` / `Article` for news and updates
- `Event` for events (with real dates and locations)
- `ImageObject` / `VideoObject` for key media when appropriate
- `ContactPage` / `Organization` details for the office, if real data exists

Never include structured data that does not match visible page content.

### Content Structure

- Exactly **one `<h1>`** per page, containing the page's main topic.
- Logical heading hierarchy (`h1` → `h2` → `h3`). Never skip levels for styling.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `time`, `figure`/`figcaption`.
- Write real, readable text content. Do not hide important content inside images, canvases, or client-only rendering.
- Internal linking: connect related works, campaigns, and news. Use descriptive anchor text, never "click here".
- Include a visible **published / updated date** on news, works, and campaigns using `<time dateTime="...">`.
- Add breadcrumbs on nested pages.

### Images & Media

- Every meaningful image needs **descriptive alt text** (what is shown, where, and context). Decorative images use `alt=""`.
- Use descriptive file names (`union-road-inauguration-2026.webp`, not `IMG_4021.webp`).
- Add captions for important photos when helpful.

### Language & Local SEO

- Set the correct `lang` attribute on `<html>`.
- If the site supports more than one language, ask before introducing i18n routing. If approved, use proper `hreflang` alternates and localized metadata.
- Write naturally for the local audience. Include the real constituency, area, and region names where relevant, since people search by place. Do not keyword-stuff.

### Do Not

- Keyword-stuff, create doorway pages, or publish thin duplicate content.
- Block crawlers or hide content behind interactions or login.
- Use misleading titles or descriptions.

---

# Content Rules (Politician Portfolio)

The website should communicate the politician's real work and public role, such as:

- Biography and background
- Development works and completed projects
- Ongoing and planned initiatives
- Campaigns and public programs
- Vision and priorities
- News, statements, and updates
- Public events and community activities
- Photo and video gallery
- Contact and public inquiry channels

Only use information that actually exists in the project/business requirements or has been provided by the client.

**Never invent:**

- Projects, works, or achievements
- Statistics, budgets, or beneficiary numbers
- Promises, manifesto points, or policy positions
- Quotes or statements
- Endorsements, testimonials, or supporters
- Awards, titles, or positions held
- Dates, locations, or events
- Party affiliations or alliances
- Media coverage or press mentions

If information is unavailable, use clearly marked placeholder structure or ask. Do not fabricate.

### Accuracy & Responsibility

- Every project, campaign, or claim should carry a **date** and, where possible, a location.
- Do not make claims about opponents or other individuals. No defamatory, inflammatory, or misleading content.
- Keep a respectful, factual, and community-focused tone.
- Credit photographers and sources when required.
- Do not publish private personal information of citizens, such as phone numbers, addresses, or identifiable photos of private individuals, without clear consent.
- Political content may be subject to local election and campaign regulations. If a feature touches fundraising, donations, voter data, or election-period messaging, **stop and ask** before building it.

---

# Content Management

- Prefer **static, typed content** stored in `src/features/<feature>/` (for example a typed array or MDX files) for works, campaigns, news, and events.
- Every content item should have at least: `slug`, `title`, `summary`, `date`, `coverImage` (with alt), and, where relevant, `location` and `body`.
- Define shared types in `src/types/`.
- Do not introduce a database, CMS, or API layer unless explicitly requested. If a CMS is later added, it must still produce statically generated, SEO-complete pages.

---

# Page & Portfolio Presentation

The portfolio of **works and campaigns** is the main focus.

Make information easy to scan:

- Clear cover image, title, short summary, date, and location
- Simple filters or categories only when the content volume justifies it
- Clear before/after, progress, or outcome information when real data exists
- Strong calls to action: contact, follow, attend event, share
- Easy sharing links for news and events (plain links, no heavy share widgets)

Avoid unnecessary complexity. Visitors should find what they need in one or two taps.

---

# Image Rules

Images are stored under:

```text
public/images/pages/{page}/
```

For dark-mode pages:

```text
white/
dark/
shared/
```

For pages without dark mode, store images directly inside the page folder.

### Important

Do not unnecessarily:

- Replace approved images
- Modify photography
- Change SVG artwork
- Change image colors
- Distort or crop images in misleading ways
- Replace Figma assets with random stock images
- Use stock photos to represent real events, works, or people

Use responsive and optimized images (see Performance).

---

# Responsive & User-Friendly Design

The website must work smoothly on mobile, tablet, laptop, and desktop.

**Mobile comes first.** Most local visitors will arrive from a phone, often on a slow network.

Avoid:

- Horizontal scrolling
- Tiny text
- Difficult navigation
- Oversized unnecessary sections
- Excessive animations
- Confusing interactions
- Pop-ups, interstitials, and cookie-style overlays that block content

Important information and CTAs must stay easy to reach on small screens.

---

# Accessibility

Use accessible:

- Semantic HTML
- Buttons and links
- Forms with proper labels and error messages
- Navigation with visible focus states
- Keyboard interactions
- Dialogs
- Images with appropriate alt text
- Sufficient color contrast and readable font sizes

Do not use ARIA unnecessarily when native HTML already provides the correct behavior.

Accessibility and SEO reinforce each other. Treat both as required, not optional.

---

# Contact & Forms

- Keep forms minimal (name, contact method, message).
- Prefer simple `mailto:`, `tel:`, and social links when a form is not required.
- If a form is built, use Server Actions or a route handler, validate on the server, and add basic spam protection that does not hurt UX or speed.
- Collect only the data that is needed and avoid storing sensitive personal data unnecessarily.

---

# Code Quality

Write clean, production-grade TypeScript.

Prefer:

- Clear naming
- Reusable components
- Small focused components
- Strong typing
- Minimal duplication
- Existing project patterns
- Maintainable code

Avoid:

- Unnecessary `any`
- Dead code
- Unused imports
- Duplicate components
- Unnecessary dependencies
- Over-engineering
- Large monolithic components

---

# Figma & Design Preservation

When implementing UI:

- Check the relevant Figma design when available.
- Follow the intended layout, typography, colors, spacing, imagery, gradients, and design language.

Do not redesign existing sections simply because you prefer another style.

Technical improvements should not unintentionally change the visual design.

---

# Modification Safety

When modifying existing code:

- Do not delete functionality unnecessarily.
- Do not remove files without a reason.
- Do not replace working components unnecessarily.
- Do not change existing content without understanding it.
- Do not change images, SVGs, gradients, or visual styles unless required.
- Do not change published URLs or SEO metadata without considering ranking impact.
- Preserve existing behavior unless a change is explicitly requested.

When a change could significantly affect the design, architecture, performance, SEO, or existing functionality, explain it before making the change.

---

# Pre-Completion Checklist

Before finishing any page or feature, verify:

**Performance**
- [ ] Server Component by default; `"use client"` only where required
- [ ] Only one `priority` image (the LCP image); the rest lazy
- [ ] All images use `next/image` with `sizes` and reserved dimensions
- [ ] No new heavy dependency or third-party script added without need
- [ ] No layout shift from fonts, images, or embeds

**SEO**
- [ ] Unique `title`, `description`, canonical, and Open Graph metadata
- [ ] Exactly one `<h1>` and a logical heading hierarchy
- [ ] Descriptive alt text and file names
- [ ] Added to `sitemap.ts`; JSON-LD added where relevant
- [ ] Visible date (`<time>`) on dated content; breadcrumbs on nested pages

**Quality**
- [ ] Works well on mobile and is keyboard accessible
- [ ] Uses `LinkTo`, `info-container`, and shadcn/ui rules
- [ ] No invented or unverifiable content

---

# Core Principle

> **Build a fast, smooth, and highly discoverable portfolio that presents a local politician's real work and vision clearly, honestly, and professionally to the people he serves.**

Every technical decision should support:

**Speed + Search visibility + Accurate content + Excellent mobile experience.**
