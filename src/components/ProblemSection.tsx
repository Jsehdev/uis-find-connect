import { CreditCard, KeyRound, Laptop, Backpack } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: CreditCard, label: "Student IDs", desc: "Lost in classrooms and hallways daily" },
  { icon: KeyRound, label: "Keys", desc: "Misplaced between dorms and buildings" },
  { icon: Laptop, label: "Laptops", desc: "Left behind in libraries and labs" },
  { icon: Backpack, label: "Bags", desc: "Forgotten at the cafeteria or gym" },
];

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">The Problem</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Losing Things on Campus Is <span className="gold-accent">Too Common</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Every semester, hundreds of items go missing across UIS. Without a centralized system, most never find their way back.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 text-center card-elevated border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
