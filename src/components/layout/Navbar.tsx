"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data/site";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/travel", label: "Travel" },
  { href: "/golf", label: "Golf" },
  { href: "/shop", label: "Shop" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/media-kit", label: "Media Kit" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "glass-light shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <Link href="/" className="group flex flex-col">
            <span
              className={cn(
                "display-heading text-xl font-medium transition-colors",
                scrolled || !isHome ? "text-charcoal" : "text-white"
              )}
            >
              {siteConfig.name}
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] transition-colors",
                scrolled || !isHome ? "text-green" : "text-sand"
              )}
            >
              Fairway Passport · {siteConfig.nationality}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-gold",
                  pathname === link.href
                    ? "text-gold"
                    : scrolled || !isHome
                      ? "text-charcoal"
                      : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partnerships#inquiry"
              className="rounded-full bg-green px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-green-deep hover:shadow-lg"
            >
              Work With Me
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled || !isHome ? "text-charcoal" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-charcoal pt-24 px-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block border-b border-white/10 py-5 text-2xl font-light text-white display-heading"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/partnerships#inquiry"
              className="mt-8 rounded-full bg-gold px-6 py-4 text-center text-charcoal font-medium"
            >
              Work With Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
