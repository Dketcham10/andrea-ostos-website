import { Hero } from "@/components/home/Hero";
import { WorldMap } from "@/components/home/WorldMap";
import { BrandPartners } from "@/components/home/BrandPartners";
import { ContentFeed } from "@/components/home/ContentFeed";
import { Timeline } from "@/components/home/Timeline";
import { BucketListTracker } from "@/components/fan/BucketListTracker";
import { CourseRankings } from "@/components/fan/CourseRankings";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Newsletter } from "@/components/shared/Newsletter";
import { Button } from "@/components/shared/Button";
import { siteConfig } from "@/lib/data/site";
import { formatNumber } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />

      <WorldMap />
      <BrandPartners />
      <ContentFeed />

      {/* Stats banner */}
      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: formatNumber(siteConfig.stats.followers), label: "Followers" },
              { value: formatNumber(siteConfig.stats.reach), label: "Monthly Reach" },
              { value: `${siteConfig.stats.engagement}%`, label: "Engagement Rate" },
              { value: String(siteConfig.stats.countries), label: "Countries Visited" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="display-heading text-4xl md:text-5xl text-gold font-light">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <BucketListTracker />
      <CourseRankings />

      {/* Newsletter CTA */}
      <section className="section-padding bg-sand-light/50">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Stay Connected"
            title="Get Updates from Andrea"
            subtitle="Weekly travel recommendations, golf tips, behind-the-scenes stories, and tournament updates — delivered to your inbox."
            align="center"
          />
          <div className="max-w-md mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-green text-white text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="display-heading text-4xl md:text-5xl font-light mb-6">
            Ready to Create Something Exceptional?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Partner with one of golf&apos;s most influential global personalities.
          </p>
          <Button href="/partnerships#inquiry" variant="secondary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
