"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { siteConfig } from "@/lib/data/site";
import { formatNumber } from "@/lib/utils";
import { images, sized } from "@/lib/data/images";

const categories = [
  {
    title: "Tourism Campaigns",
    description: "Destination marketing with authentic golf-travel storytelling.",
  },
  {
    title: "Golf Brands",
    description: "Equipment, apparel, and technology partnerships with credibility.",
  },
  {
    title: "Luxury Resorts",
    description: "Resort reviews, stay experiences, and hospitality content.",
  },
  {
    title: "Airlines & Travel",
    description: "Travel day content, destination launches, and loyalty campaigns.",
  },
  {
    title: "Apparel & Lifestyle",
    description: "Co-designed collections and lifestyle brand integrations.",
  },
  {
    title: "Health & Wellness",
    description: "Fitness, recovery, and performance content for active audiences.",
  },
];

const testimonials = [
  {
    quote:
      "Andrea delivered our highest-performing campaign of the year. Her content drove a 12% increase in bookings.",
    author: "Sarah Chen",
    role: "VP Marketing, Four Seasons",
  },
  {
    quote:
      "Authentic, professional, and incredibly engaging. She understands brand storytelling like few athletes do.",
    author: "James Wright",
    role: "Director of Partnerships, Emirates",
  },
  {
    quote:
      "Our co-branded collection sold out in the first week. Andrea's influence across the Americas is unmatched in women's golf.",
    author: "Lisa Park",
    role: "Brand Director, Lululemon",
  },
];

const caseStudies = [
  {
    brand: "Four Seasons",
    metric: "12% booking uplift",
    result: "Resort partner across 8 properties worldwide",
    image: sized.card("golfCourse"),
  },
  {
    brand: "Emirates x Andrea Ostos",
    metric: "890K video views",
    result: "15% uplift in premium route bookings",
    image: sized.card("airplane"),
  },
  {
    brand: "Lululemon Golf Collection",
    metric: "15K units sold",
    result: "Sold out in 7 days, 2 restocks required",
    image: sized.card("fitness"),
  },
];

export default function PartnershipsContent() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            src={images.dubai}
            alt="Partnership"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 section-padding w-full pt-32">
          <div className="mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-gold mb-4"
            >
              Brand Partnerships
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="display-heading text-5xl md:text-7xl text-white font-light max-w-4xl"
            >
              Let&apos;s Create Something Exceptional Together.
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: formatNumber(siteConfig.stats.followers), label: "Followers" },
              { value: `${siteConfig.stats.engagement}%`, label: "Engagement" },
              { value: formatNumber(siteConfig.stats.reach), label: "Monthly Reach" },
              { value: "20", label: "Brand Partners" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="display-heading text-4xl text-gold font-light">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partnership Categories"
            title="How We Can Work Together"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-charcoal/5 p-8 hover:border-green/30 hover:shadow-lg transition-all"
              >
                <h3 className="display-heading text-xl mb-3">{cat.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-padding bg-sand-light/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Results"
            title="Case Studies"
            subtitle="Measurable impact from recent brand collaborations."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <SiteImage
                    src={study.image}
                    alt={study.brand}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="display-heading text-xl mb-2">{study.brand}</h3>
                  <p className="text-gold text-sm font-medium mb-2">
                    {study.metric}
                  </p>
                  <p className="text-sm text-charcoal/60">{study.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Partners Say"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-charcoal/5 p-8"
              >
                <Quote className="text-gold mb-4" size={24} />
                <p className="text-charcoal/70 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-medium text-sm">{t.author}</p>
                  <p className="text-xs text-charcoal/50">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-green-deep">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-white">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Start a Conversation"
                subtitle="Whether you're a global brand or a boutique resort, let's explore how we can create something unforgettable together."
                light
              />
              <p className="text-white/60 text-sm mt-4">
                Response within 48 hours · {siteConfig.email}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <InquiryForm type="sponsorship" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
