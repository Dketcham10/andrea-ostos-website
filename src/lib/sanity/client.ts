/**
 * Sanity CMS client scaffold.
 *
 * Setup:
 * 1. Create a project at https://sanity.io
 * 2. Add env vars to .env.local:
 *    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 *    NEXT_PUBLIC_SANITY_DATASET=production
 *    SANITY_API_TOKEN=your_token
 * 3. Run: npm install @sanity/client next-sanity
 * 4. Uncomment the client below and wire schemas in sanity/schema/
 */

// import { createClient } from "@sanity/client";

// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2024-01-01",
//   useCdn: process.env.NODE_ENV === "production",
// });

export const cmsEnabled = false;
