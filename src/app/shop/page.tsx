import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop My Gear",
  description:
    "Shop Andrea Ostos's favorite golf gear, travel essentials, apparel, and creator tools. Exclusive discount codes and affiliate picks she genuinely uses.",
  keywords: [
    "golf gear",
    "affiliate shop",
    "golf discounts",
    "travel essentials",
    "LPGA gear",
    "Andrea Ostos shop",
  ],
};

export default function ShopPage() {
  return <ShopContent />;
}
