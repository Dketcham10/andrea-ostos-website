import type { Metadata } from "next";
import PartnershipsContent from "./PartnershipsContent";

export const metadata: Metadata = {
  title: "Brand Partnerships",
  description:
    "Partner with a professional golfer and global content creator. Sponsorship opportunities, case studies, and inquiry form.",
};

export default function PartnershipsPage() {
  return <PartnershipsContent />;
}
