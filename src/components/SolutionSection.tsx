import { LogIn, FileText, Building2, PackageCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: LogIn,
    step: "01",
    title: "Log In with UIS NetID",
    desc: "Sign in securely using your University of Illinois Springfield NetID credentials.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Report It",
    desc: "Fill out a quick form describing your lost or found item with details and a photo.",
  },
  {
    icon: Building2,
    step: "03",
    title: "Drop Off at Union Front Desk",
    desc: "If you found an item, bring it to the Student Union front desk for safe keeping.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Claim It",
    desc: "Browse reported items, verify ownership, and pick it up from the Union front desk.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Four Simple Steps to <span className="gold-accent">Reconnect</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          UIS LostConnect makes it effortless to report, match, and recover lost items on campus.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <AnimatedSection key={s.step} delay={i * 0.15}>
            <div className="relative bg-card rounded-2xl p-8 card-elevated border border-border text-center">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-bg text-sm font-bold">
                Step {s.step}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
