import type { Metadata } from "next";
import GolfContent from "./GolfContent";

export const metadata: Metadata = {
  title: "Golf Hub",
  description:
    "Tournament schedule, career achievements, swing videos, and course reviews from around the world.",
};

export default function GolfPage() {
  return <GolfContent />;
}
