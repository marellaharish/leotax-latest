import { motion } from "framer-motion";
import React from "react";

/**
 * Lightweight "Aceternity-like" background beams for hero sections.
 * You can replace/extend with official Aceternity registry components later.
 */
export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div className={"absolute inset-0 overflow-hidden " + className}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      {/* soft grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* moving beams */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-[-40%] h-[180%] w-24 rounded-full bg-gradient-to-b from-primary/0 via-primary/25 to-primary/0 blur-2xl"
          style={{ left: `${15 + i * 28}%` }}
          animate={{ y: [0, 60, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
