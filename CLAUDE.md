# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 12.3.1 website for a veterinary practice (Tierarztpraxis Quehenberger) specializing in pugs and bulldogs. The site is built with React 18.2.0 and uses GraphQL (Hygraph CMS) for content management.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Opens on http://localhost:3000

### Building for Production
```bash
npm build
```
This runs `next build` followed by `next-sitemap` (postbuild hook)

### Linting
```bash
npm run lint
```

### Starting Production Server
```bash
npm start
```

## Architecture

### Pages and Routing
- **Next.js Pages Router** (not App Router) - all pages in `/pages` directory
- Pages are `.js` or `.jsx` files that export React components
- Dynamic routes: `/pages/blogpost/[urlName].jsx`, `/pages/unserteam/[vorname].jsx`, `/pages/aerzteteam/[name].jsx`, `/pages/dogs/[name].jsx`
- API routes in `/pages/api/` - serverless functions

### Layout System
- Global layout wrapper in `/components/layout.js` wraps all pages via `_app.js`
- Layout includes Nav and Footer components
- All pages automatically get navigation and footer without explicit imports

### Data Fetching with GraphQL
- **CMS**: Hygraph (formerly GraphCMS) - headless CMS
- **GraphQL API endpoint**: `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldvym66h1yur01rt68nqghfb/master`
- **Service layer** pattern: all GraphQL queries centralized in `/services/`
  - `/services/index.js` - team members, videos, dogs, services/leistungen, team photos, vacation notices
  - `/services/blogService.js` - blog posts
  - `/services/leistungsService.js` - service descriptions for bulldogs/pugs
- Uses `graphql-request` library with `gql` template tags
- Data fetching happens in `getStaticProps` for SSG or `getServerSideProps` for SSR

### Content Types in CMS
Key GraphQL types managed in Hygraph:
- **TeamMembers** - veterinary staff (ordered by `num_ASC`)
- **ChristianIrises** - top-level team members (veterinarians)
- **DogMembers** - practice dogs
- **NeuerBlogPosts** - blog posts with rich text content
- **LeistungenBullys** - specialized services for bulldogs/pugs
- **YtVideos** - YouTube video links and descriptions
- **TeamFotos** - team photos
- **Urlaubs** - vacation/holiday notices with display flag

### Styling
- **CSS Modules** with SCSS - all styles in `/styles/` directory
- Module naming: `ComponentName.module.scss`
- Global styles: `/styles/globals.css`
- Import modules: `import styles from '../styles/ComponentName.module.scss'`

### Image Handling
- Uses Next.js `<Image>` component from `next/image`
- Configured domains in `next.config.js`:
  - `media.graphassets.com`
  - `external-vie1-1.xx.fbcdn.net`
  - `eu-central-1-shared-euc1-02.graphassets.com`
- Add new image domains to `next.config.js` if needed

### Components
- Components in `/components/` directory
- Mostly `.jsx` files
- Key reusable components:
  - **Hero** components (Hero, InfoHero, InfoHeroLeft, InfoHeroRight, InfoHeroHigh)
  - **Mops** (pug) components (MopsIntro, MopsInfoLeft, MopsInfoRight, MopsInfoLeftSec)
  - **Team** components (FullTeam, TeamImage)
  - **Social/External**: FacebookFeed, VideoFeed, Google (Maps)
  - **Layout**: Nav/Nav, Footer/Footer
  - **Content blocks**: Block, Frame, Urlaub, Aktuelles

## Key Technical Details

### Environment Variables
- YouTube API key: `process.env.API_KEY` (used in `/pages/api/youtube.js`)
- Site URL: `process.env.SITE_URL` (fallback: https://www.tierarztpraxis-quehenberger.at/)
- Create `.env.local` for local development

### Next.js Configuration (`next.config.js`)
```javascript
{
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}
```

### SEO and Sitemap
- Uses `next-sitemap` package
- Config in `next-sitemap.config.js`
- Automatically generates sitemap.xml and robots.txt on build
- Manual robots.txt in `/public/robots.txt`

### Rich Text Rendering
- Hygraph returns rich text as `{ raw }` objects
- Need to parse and render using appropriate rich text renderer (check existing implementations)

### Node Version
- **Required Node version**: 22.x (specified in package.json engines)
- Ensure correct Node version when deploying

## Common Patterns

### Adding a New Page
1. Create `.js` or `.jsx` file in `/pages/`
2. Export default React component
3. Add data fetching with `getStaticProps` or `getServerSideProps` if needed
4. Layout wrapper automatically applied via `_app.js`

### Adding a New GraphQL Query
1. Add query function to appropriate service file in `/services/`
2. Use `gql` template tag and `request()` from `graphql-request`
3. Return normalized data structure
4. Import and use in page's `getStaticProps`/`getServerSideProps`

### Adding New Content Types from CMS
1. Create query in service file
2. Match field names to Hygraph schema (case-sensitive)
3. Use connections pattern: `{Type}Connection { edges { node { ... } } }`
4. Consider ordering with `orderBy` parameter

### Working with Images from CMS
1. Images from Hygraph come as `{ url }` objects
2. Use Next.js `Image` component: `<Image src={foto.url} ... />`
3. Add domain to `next.config.js` if not already present
4. Always provide `width` and `height` or use `layout="fill"`

## Project-Specific Context

### Target Audience
- German-speaking veterinary practice
- Focus on brachycephalic breeds (pugs, bulldogs)
- Content is in German

### Special Features
- **Komplex Lappen Technik** - specialized surgical technique for pugs
- **Qualzucht** (torture breeding) awareness content
- **YouTube integration** via API for video content
- **Facebook integration** for social feed
- **Google Maps** integration for location
- **Cookie consent** (react-cookie-consent)
- **WhatsApp floating widget** (react-floating-whatsapp)
- **Vacation notices** - dynamic content from CMS to show practice closures

### Animation
- Uses `framer-motion` for animations
- Check existing components for animation patterns before implementing new ones
