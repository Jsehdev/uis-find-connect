import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            UIS LostConnect
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A community-driven lost & found platform for the University of Illinois Springfield campus.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#problem" className="hover:text-primary-foreground transition-colors">The Problem</a></li>
            <li><a href="#solution" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
            <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
            <li><a href="#report" className="hover:text-primary-foreground transition-colors">Report Item</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              lostconnect@uis.edu
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              (217) 206-6600
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              One University Plaza, Springfield, IL
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/15 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} University of Illinois Springfield. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
