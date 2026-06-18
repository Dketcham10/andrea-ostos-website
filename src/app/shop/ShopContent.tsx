"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Copy,
  Check,
  ExternalLink,
  Star,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Newsletter } from "@/components/shared/Newsletter";
import { ProductCard } from "@/components/shop/ProductCard";
import { StickyDiscountBar } from "@/components/shop/StickyDiscountBar";
import { BagExperience } from "@/components/shop/BagExperience";
import { useShopPreferences } from "@/hooks/useShopPreferences";
import {
  shopHero,
  categories,
  partnerDiscounts,
  partnerBrands,
  socialProof,
  monthlyFavorites,
  travelEssentials,
  creatorToolkit,
  packLikeAPro,
  monthlyPromoEndsAt,
  getProductsByCategory,
  getProductById,
} from "@/lib/data/shop";
import { images } from "@/lib/data/images";
import { affiliateLink, copyToClipboard, getPromoTimeLeft } from "@/lib/shop/utils";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import type { ShopCategory } from "@/types/shop";

function CountdownTimer({ endsAt }: { endsAt: string }) {
  const [time, setTime] = useState(getPromoTimeLeft(endsAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getPromoTimeLeft(endsAt));
    }, 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  if (time.expired) {
    return <span className="text-sm text-charcoal/50">Offer expired</span>;
  }

  return (
    <div className="flex items-center gap-3 text-sm font-mono">
      <Clock size={16} className="text-gold" />
      {[
        { v: time.days, l: "d" },
        { v: time.hours, l: "h" },
        { v: time.minutes, l: "m" },
        { v: time.seconds, l: "s" },
      ].map(({ v, l }) => (
        <span key={l} className="rounded-lg bg-charcoal px-2 py-1 text-white text-xs">
          {String(v).padStart(2, "0")}
          {l}
        </span>
      ))}
    </div>
  );
}

function DiscountCard({
  discount,
}: {
  discount: (typeof partnerDiscounts)[0];
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(discount.code);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-green/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="display-heading text-2xl font-light">{discount.logo}</p>
          <p className="text-xs uppercase tracking-wider text-green mt-1">
            {discount.category}
          </p>
        </div>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-charcoal">
          {discount.savings}
        </span>
      </div>
      <p className="text-sm text-charcoal/60 leading-relaxed flex-1">
        {discount.description}
      </p>
      <div className="mt-6 space-y-3">
        <button
          type="button"
          onClick={handleCopy}
          className="flex w-full items-center justify-between rounded-xl bg-sand-light/50 px-4 py-3 text-sm font-medium hover:bg-sand-light transition-colors"
        >
          <span>
            Use code: <strong className="text-green font-mono">{discount.code}</strong>
          </span>
          {copied ? (
            <Check size={16} className="text-green" />
          ) : (
            <Copy size={16} className="text-charcoal/40" />
          )}
        </button>
        <a
          href={affiliateLink(discount.affiliateUrl, `discount-${discount.id}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green py-3 text-sm font-medium text-white hover:bg-green-deep transition-colors"
        >
          Shop Now
          <ChevronRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function ShopContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ShopCategory | "all">("all");
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const { favorites, recent, toggleFavorite, trackView } = useShopPreferences();

  const filteredProducts = useMemo(() => {
    let list = getProductsByCategory(category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.review.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, category]);

  const recentProducts = recent
    .map((id) => getProductById(id))
    .filter(Boolean);

  const favoriteProducts = favorites
    .map((id) => getProductById(id))
    .filter(Boolean);

  const selectedBrand = partnerBrands.find((b) => b.id === activeBrand);

  return (
    <>
      <StickyDiscountBar />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <SiteImage
            src={images.golfHero}
            alt="Andrea Ostos lifestyle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        </div>
        <div className="relative z-10 section-padding w-full !pb-16">
          <div className="mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-gold mb-4"
            >
              Shop My Gear
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="display-heading text-4xl md:text-6xl lg:text-7xl text-white font-light max-w-4xl leading-tight"
            >
              {shopHero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-white/75 max-w-2xl leading-relaxed"
            >
              {shopHero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium text-charcoal hover:bg-gold-light transition-colors"
              >
                Shop My Gear
              </a>
              <a
                href="#discounts"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                View Exclusive Discounts
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support copy */}
      <section className="bg-green-deep py-6 text-center text-white">
        <p className="text-sm md:text-base px-4">
          Purchases through my links support my journey at no extra cost to you.{" "}
          <span className="text-gold">Thank you for riding with me.</span> — {siteConfig.name}
        </p>
      </section>

      {/* Discount Hub */}
      <section id="discounts" className="section-padding bg-sand-light/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Exclusive Offers"
            title="Your Discount Hub"
            subtitle="Active partner codes — copy, shop, and save on gear I genuinely use."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerDiscounts.map((d) => (
              <DiscountCard key={d.id} discount={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Favorites of the Month */}
      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3 flex items-center gap-2">
                <Sparkles size={14} /> Favorites of the Month
              </p>
              <h2 className="display-heading text-3xl md:text-5xl font-light">
                June Picks — Limited Time
              </h2>
            </div>
            <CountdownTimer endsAt={monthlyPromoEndsAt} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyFavorites.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                isFavorite={favorites.includes(p.id)}
                onToggleFavorite={toggleFavorite}
                onView={trackView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section id="products" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Browse"
            title="Shop By Category"
            subtitle="Filter by category or search for something specific."
          />

          <div className="mb-8 flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, brands..."
                className="w-full rounded-full border border-charcoal/10 bg-white py-3.5 pl-12 pr-4 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
              />
            </div>
          </div>

          <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                category === "all"
                  ? "bg-green text-white"
                  : "bg-sand-light/50 text-charcoal/60 hover:text-charcoal"
              )}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap",
                  category === cat.id
                    ? "bg-green text-white"
                    : "bg-sand-light/50 text-charcoal/60 hover:text-charcoal"
                )}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          {/* Recently viewed & favorites */}
          {(recentProducts.length > 0 || favoriteProducts.length > 0) && (
            <div className="mb-12 space-y-8">
              {recentProducts.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-charcoal/40 mb-4">
                    Recently Viewed
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {recentProducts.slice(0, 4).map((p) =>
                      p ? (
                        <ProductCard
                          key={p.id}
                          product={p}
                          compact
                          isFavorite={favorites.includes(p.id)}
                          onToggleFavorite={toggleFavorite}
                          onView={trackView}
                        />
                      ) : null
                    )}
                  </div>
                </div>
              )}
              {favoriteProducts.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-charcoal/40 mb-4">
                    Saved Favorites
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {favoriteProducts.map((p) =>
                      p ? (
                        <ProductCard
                          key={p.id}
                          product={p}
                          compact
                          isFavorite
                          onToggleFavorite={toggleFavorite}
                          onView={trackView}
                        />
                      ) : null
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isFavorite={favorites.includes(p.id)}
                  onToggleFavorite={toggleFavorite}
                  onView={trackView}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-charcoal/50 py-12">
              No products match your search. Try a different category or keyword.
            </p>
          )}
        </div>
      </section>

      {/* What's In My Bag */}
      <section className="section-padding bg-sand-light/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tour Bag"
            title="What's In My Bag?"
            subtitle="Click any club to see why I trust it — and shop the exact setup."
            align="center"
          />
          <BagExperience />
        </div>
      </section>

      {/* Travel Essentials */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Pack Like a Pro"
                title="Travel Essentials"
                subtitle="Everything I pack for 200+ travel days a year."
              />
              <ul className="space-y-3 mb-8">
                {packLikeAPro.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-charcoal/70"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 text-green text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={affiliateLink("https://www.awaytravel.com", "pack-like-pro")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white hover:bg-green-deep transition-colors"
              >
                Shop Travel Gear
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {travelEssentials.slice(0, 4).map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isFavorite={favorites.includes(p.id)}
                  onToggleFavorite={toggleFavorite}
                  onView={trackView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creator Toolkit */}
      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Creator Toolkit"
            title="How I Make Content"
            subtitle="Replicate my setup — cameras, audio, editing, and more."
            light
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {creatorToolkit.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                isFavorite={favorites.includes(p.id)}
                onToggleFavorite={toggleFavorite}
                onView={trackView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Trusted Partners"
            title="Partner Brands"
            subtitle="Click a brand to see our story, current offers, and featured products."
            align="center"
          />

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {partnerBrands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                onClick={() =>
                  setActiveBrand(activeBrand === brand.id ? null : brand.id)
                }
                className={cn(
                  "rounded-2xl border px-8 py-6 transition-all",
                  activeBrand === brand.id
                    ? "border-green bg-green/5 shadow-md"
                    : "border-charcoal/10 bg-white hover:border-green/30 hover:shadow-sm"
                )}
              >
                <p className="display-heading text-xl font-light">{brand.name}</p>
                <p className="text-xs text-charcoal/50 mt-1">{brand.category}</p>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedBrand && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="rounded-2xl border border-charcoal/5 bg-white p-8 shadow-lg mb-8">
                  <h3 className="display-heading text-2xl mb-2">{selectedBrand.name}</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-4">
                    {selectedBrand.story}
                  </p>
                  <p className="text-sm text-charcoal/60 italic mb-4">
                    &ldquo;{selectedBrand.whyPartner}&rdquo;
                  </p>
                  {selectedBrand.currentOffer && (
                    <p className="text-gold font-medium text-sm mb-6">
                      {selectedBrand.currentOffer}
                    </p>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {selectedBrand.featuredProductIds.map((pid) => {
                      const p = getProductById(pid);
                      return p ? (
                        <ProductCard
                          key={p.id}
                          product={p}
                          compact
                          isFavorite={favorites.includes(p.id)}
                          onToggleFavorite={toggleFavorite}
                          onView={trackView}
                        />
                      ) : null;
                    })}
                  </div>
                  <a
                    href={affiliateLink(selectedBrand.affiliateUrl, `brand-${selectedBrand.id}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-green font-medium text-sm hover:underline"
                  >
                    Visit {selectedBrand.name}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-sand-light/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Social Proof"
            title="What Fans Are Saying"
            subtitle="Real reviews from people who shop through my recommendations."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {socialProof.map((item, i) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-white p-6 shadow-sm border border-charcoal/5"
              >
                {item.rating && (
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                )}
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  &ldquo;{item.content}&rdquo;
                </p>
                <footer className="mt-4 pt-4 border-t border-charcoal/5">
                  <p className="text-sm font-medium">{item.author}</p>
                  {item.productName && (
                    <p className="text-xs text-green mt-0.5">{item.productName}</p>
                  )}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-green-deep text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-heading text-3xl md:text-4xl font-light mb-4">
            Get My Best Deals Before Anyone Else
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Exclusive discount codes, product launches, travel recommendations,
            golf tips, and brand giveaways — delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <Newsletter variant="footer" />
          </div>
        </div>
      </section>
    </>
  );
}
