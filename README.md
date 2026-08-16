# Andrea Ostos Website

A premium personal brand website for professional golfer and content creator Andrea Ostos.

Built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**.

## Live Site

https://dketcham10.github.io/andrea-ostos-website/

## Local Preview

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero video, world map, brand partners, content feed |
| `/about` | Visual storytelling biography |
| `/travel` | Travel hub — destinations, reviews, tips |
| `/golf` | Golf hub — schedule, achievements, course tracker |
| `/partnerships` | Sponsor-focused page with case studies & inquiry form |
| `/media-kit` | Audience stats, demographics, downloadable media kit |

## Customization

Replace placeholder content in `src/lib/data/`:

- `site.ts` — name, email, social links, stats
- `destinations.ts` — travel map locations
- `content.ts` — partners, content feed, milestones

## CMS Integration

Sanity scaffold is in `src/lib/sanity/client.ts`. See comments for setup steps.

## Deployment

Deploy to Vercel, Netlify, or any Next.js-compatible host:

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion
- TypeScript
- Lucide Icons

## Client Notes

- Client: **Andrea Ostos** — professional golfer from Mexico
- Replace placeholder photos with Andrea's real photography and video
- Forms are front-end only — wire to email service (Resend, Formspree, etc.)
- Newsletter needs Mailchimp/ConvertKit integration
- Media kit PDF download is a placeholder button
