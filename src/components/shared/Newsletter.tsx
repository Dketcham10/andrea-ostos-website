"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterProps {
  variant?: "inline" | "footer" | "section";
}

export function Newsletter({ variant = "section" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 text-green"
      >
        <Check size={20} />
        <span className="font-medium">Welcome aboard! Check your inbox soon.</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={cn(
          "flex flex-col sm:flex-row gap-3",
          variant === "footer" && "sm:gap-2"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className={cn(
            "flex-1 rounded-full px-5 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-gold",
            variant === "footer"
              ? "bg-white/10 text-white placeholder:text-white/40 border border-white/20"
              : "bg-white text-charcoal border border-charcoal/10 shadow-sm"
          )}
        />
        <button
          type="submit"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",
            variant === "footer"
              ? "bg-gold text-charcoal hover:bg-gold-light"
              : "bg-green text-white hover:bg-green-deep"
          )}
        >
          Subscribe
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
