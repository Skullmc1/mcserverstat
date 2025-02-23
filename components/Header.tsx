"use client";

import { Github, CandyCane } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b border-dark-100"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <CandyCane className="w-7 h-7 text-brand-500 transform group-hover:scale-110 transition-transform" />
            </motion.div>
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 bg-[200%_auto] animate-shimmer bg-clip-text text-transparent">
              IsItUp
            </span>
          </Link>
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="https://github.com/Skullmc1"
              target="_blank"
              className="hover:text-brand-400 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
