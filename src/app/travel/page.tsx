import type { Metadata } from "next";
import TravelContent from "./TravelContent";

export const metadata: Metadata = {
  title: "Travel Hub",
  description:
    "Golf destinations, resort reviews, travel guides, and bucket-list courses from around the world.",
};

export default function TravelPage() {
  return <TravelContent />;
}
