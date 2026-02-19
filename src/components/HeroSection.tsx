import { motion } from "framer-motion";
import { Search, MapPinPlus } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl floating" />
    <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl floating-delayed" />

    <div className="container mx-auto px-4 py-32 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold gold-bg mb-6">
            University of Illinois Springfield
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          UIS{" "}
          <span className="text-gradient">LostConnect</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Helping Students Reconnect with Lost Items — fast, secure, and community-driven.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#report"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl gold-bg font-bold text-base shadow-lg hover:shadow-xl transition-shadow"
          >
            <Search className="w-5 h-5" />
            Report Lost Item
          </a>
          <a
            href="#report"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-foreground/10 backdrop-blur text-primary-foreground border border-primary-foreground/20 font-bold text-base hover:bg-primary-foreground/20 transition-colors"
          >
            <MapPinPlus className="w-5 h-5" />
            Report Found Item
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 40C840 52 960 68 1080 72C1200 76 1320 68 1380 64L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
          className="fill-background"
        />
      </svg>
    </div>
  </section>
);

export default HeroSection;
