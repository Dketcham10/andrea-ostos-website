"use client";

import { motion } from "framer-motion";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline } from "@/components/home/Timeline";
import { images, sized } from "@/lib/data/images";

const values = [
  {
    title: "Authenticity",
    description:
      "Every story, every partnership, every post — rooted in genuine passion for golf and adventure.",
  },
  {
    title: "Excellence",
    description:
      "On the course and off, a commitment to the highest standards in everything I do.",
  },
  {
    title: "Adventure",
    description:
      "Life is too short for ordinary fairways. I chase extraordinary experiences around the globe.",
  },
  {
    title: "Community",
    description:
      "Building a global family of golf lovers, travelers, and dreamers who inspire each other.",
  },
];

export function AboutContent() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            src={images.golfHero}
            alt="Andrea Ostos on the golf course"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        </div>
        <div className="relative z-10 section-padding w-full !pb-16">
          <div className="mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-gold mb-4"
            >
              About
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="display-heading text-5xl md:text-7xl text-white font-light max-w-4xl"
            >
              More Than a Golfer. A Global Storyteller from Mexico.
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                eyebrow="My Story"
                title="From Mexico to Global Stages"
              />
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  I picked up my first club at age seven on a course in Los Cabos,
                  Mexico. What started as weekend rounds with my family became a
                  lifelong obsession — and eventually, a professional career on the
                  LPGA Tour.
                </p>
                <p>
                  Growing up Mexican, I never saw many golfers who looked like me
                  on TV. That fueled something deeper — a drive to represent my
                  country on the world&apos;s biggest stages and prove that golf
                  belongs to everyone.
                </p>
                <p>
                  But golf was never just about the scorecard. It was the gateway
                  to the world. Every tournament took me somewhere new. Every course
                  told a different story. I started sharing those stories — in
                  English and Spanish — and people connected in ways I never
                  expected.
                </p>
                <p>
                  Today, I&apos;m a professional golfer, content creator, and brand
                  partner to some of the world&apos;s most iconic companies. I&apos;ve
                  played 127 courses across 34 countries, built an audience of 800K+
                  followers, and turned my passion for golf, travel, and Mexican
                  culture into a platform that inspires millions across the Americas
                  and beyond.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <SiteImage
                src={sized.card("golfSwing")}
                alt="Golf course"
                className="rounded-2xl aspect-[3/4] object-cover"
              />
              <SiteImage
                src={sized.card("mexicoCoast")}
                alt="Los Cabos, Mexico"
                className="rounded-2xl aspect-[3/4] object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-deep text-white">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            eyebrow="Mission"
            title="Inspiring the Next Generation"
            subtitle="To show the world that golf is for everyone — and to proudly represent Mexico on every fairway, in every country, on every adventure."
            light
            align="center"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What I Stand For"
            title="Values"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-charcoal/5 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="display-heading text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
    </>
  );
}
