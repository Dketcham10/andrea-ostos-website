export type ShopCategory =
  | "golf-clubs"
  | "golf-balls"
  | "apparel"
  | "golf-shoes"
  | "hats-accessories"
  | "travel-gear"
  | "content-creation"
  | "recovery-fitness"
  | "technology"
  | "travel-products";

export interface ShopProduct {
  id: string;
  name: string;
  brand: string;
  category: ShopCategory;
  imageKey: string;
  review: string;
  whySheUsesIt: string;
  affiliateUrl: string;
  discountCode?: string;
  discountPercent?: number;
  price?: string;
  featured?: boolean;
  monthlyFavorite?: boolean;
  promoEndsAt?: string;
}

export interface PartnerDiscount {
  id: string;
  brand: string;
  logo: string;
  description: string;
  category: string;
  code: string;
  savings: string;
  affiliateUrl: string;
  featured?: boolean;
}

export interface BagItem {
  id: string;
  slot: string;
  name: string;
  brand: string;
  model: string;
  why: string;
  benefits: string[];
  affiliateUrl: string;
  discountCode?: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  category: string;
  story: string;
  whyPartner: string;
  currentOffer?: string;
  code?: string;
  affiliateUrl: string;
  featuredProductIds: string[];
}

export interface SocialProofItem {
  id: string;
  type: "review" | "testimonial" | "ugc";
  author: string;
  content: string;
  productName?: string;
  rating?: number;
}

export interface CategoryMeta {
  id: ShopCategory;
  label: string;
  emoji: string;
  description: string;
}
