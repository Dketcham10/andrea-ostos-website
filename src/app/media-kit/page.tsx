import type { Metadata } from "next";
import MediaKitPage from "./MediaKitContent";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Audience statistics, demographics, and partnership opportunities for brands and media.",
};

export default function Page() {
  return <MediaKitPage />;
}
