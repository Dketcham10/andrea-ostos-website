import Link from "next/link";
import { Camera, Video, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { Newsletter } from "@/components/shared/Newsletter";

const footerLinks = {
  Explore: [
    { href: "/about", label: "About" },
    { href: "/travel", label: "Travel Hub" },
    { href: "/golf", label: "Golf Hub" },
    { href: "/shop", label: "Shop My Gear" },
    { href: "/partnerships", label: "Partnerships" },
  ],
  Business: [
    { href: "/media-kit", label: "Media Kit" },
    { href: "/partnerships#inquiry", label: "Work With Me" },
    { href: "/partnerships#case-studies", label: "Case Studies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="section-padding border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="display-heading text-3xl md:text-4xl font-light mb-4">
                Stay in the Loop
              </h3>
              <p className="text-white/60 max-w-md leading-relaxed">
                Weekly updates with travel recommendations, golf tips,
                behind-the-scenes stories, and upcoming tournaments.
              </p>
            </div>
            <Newsletter variant="footer" />
          </div>
        </div>
      </div>

      <div className="section-padding !py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <Link href="/" className="display-heading text-2xl font-medium">
                {siteConfig.name}
              </Link>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">
                {siteConfig.tagline}
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Camera size={20} />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="YouTube"
                >
                  <Video size={20} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="Twitter"
                >
                  <Share2 size={20} />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
                Contact
              </h4>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
              <p className="mt-4 text-xs text-white/40">
                For sponsorship inquiries, speaking engagements, and media
                requests.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white/60 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
