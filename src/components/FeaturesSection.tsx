import { Search, ShieldAlert, BellRing, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Search,
    title: "Quick Search & Filter",
    desc: "Find items by category, location, date, or keyword in seconds.",
  },
  {
    icon: ShieldAlert,
    title: "No Fake Claims",
    desc: "Verified NetID login and claim validation ensure only legitimate owners recover items.",
  },
  {
    icon: BellRing,
    title: "Instant Notifications",
    desc: "Get real-time email and push alerts when your item is potentially found.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Login",
    desc: "UIS student authentication ensures only verified users access the system.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Features</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Built for <span className="gold-accent">Campus Life</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Powerful tools designed specifically for the UIS community.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="flex gap-5 bg-card rounded-2xl p-7 card-elevated border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <f.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-card-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
