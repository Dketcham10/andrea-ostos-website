import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of a professional golfer, global explorer, and trusted brand partner.",
};

export default function AboutPage() {
  return <AboutContent />;
}
