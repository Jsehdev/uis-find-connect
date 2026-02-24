import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const locations = ["Brookens Library", "PAC", "Student Union", "HSB", "UHB", "BRK", "Parking Lot", "Other"];

const ReportForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<"lost" | "found">("lost");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="report" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Report</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Submit a <span className="gold-accent">Report</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Help the community by reporting a lost or found item.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="bg-card rounded-2xl p-8 card-elevated border border-border">
            {/* Toggle */}
            <div className="flex rounded-xl bg-muted p-1 mb-8">
              {(["lost", "found"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    type === t
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t === "lost" ? "Lost Item" : "Found Item"}
                </button>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Report Submitted!</h3>
                <p className="text-muted-foreground">We'll notify you when a match is found.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Item Name - both forms */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Item Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Blue backpack"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Location - both forms */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
                  <select
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select location</option>
                    {locations.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>

                {/* Description - both forms */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe the item in detail..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {type === "lost" ? "Submit Lost Report" : "Submit Found Report"}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReportForm;
