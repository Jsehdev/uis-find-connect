import { useState } from "react";
import { Search, MapPin, Package, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const sampleItems = [
  { id: 1, name: "Blue Backpack", location: "Brookens Library", type: "found", date: "Feb 20" },
  { id: 2, name: "Student ID Card", location: "PAC", type: "found", date: "Feb 19" },
  { id: 3, name: "Silver Laptop Charger", location: "HSB Room 201", type: "lost", date: "Feb 18" },
  { id: 4, name: "Black Wallet", location: "Student Union", type: "found", date: "Feb 18" },
  { id: 5, name: "Car Keys (Honda)", location: "Parking Lot B", type: "lost", date: "Feb 17" },
  { id: 6, name: "AirPods Pro Case", location: "UHB", type: "found", date: "Feb 16" },
  { id: 7, name: "Water Bottle (Green)", location: "BRK Gym", type: "found", date: "Feb 15" },
  { id: 8, name: "Graphing Calculator", location: "HSB Room 106", type: "lost", date: "Feb 15" },
];

const ProblemSection = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "lost" | "found">("all");
  const [selectedItem, setSelectedItem] = useState<typeof sampleItems[0] | null>(null);
  const [requested, setRequested] = useState(false);
  const [claimDescription, setClaimDescription] = useState("");
  const [claimDate, setClaimDate] = useState("");
  const [claimEmail, setClaimEmail] = useState("");

  const filtered = sampleItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  const handleRequest = () => {
    setRequested(true);
    setTimeout(() => {
      setRequested(false);
      setSelectedItem(null);
      setClaimDescription("");
      setClaimDate("");
      setClaimEmail("");
    }, 2500);
  };

  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Browse Items</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Lost & Found <span className="gold-accent">Dashboard</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Search for your missing item or browse recent reports from the UIS community.
          </p>
        </AnimatedSection>

        {/* Search & Filters */}
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by item name or location..."
              className="w-full rounded-2xl border border-input bg-card pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring card-elevated text-base"
            />
          </div>
          <div className="flex gap-2 justify-center">
            {(["all", "lost", "found"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "all" ? "All Items" : f === "lost" ? "Lost" : "Found"}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full text-left bg-card rounded-2xl p-5 card-elevated border border-border hover:border-primary/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          item.type === "lost"
                            ? "bg-destructive/10 text-destructive"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold text-card-foreground mb-1 truncate group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Package className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="text-lg font-medium">No items found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        )}

        {/* Request Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
              onClick={() => !requested && setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-2xl p-8 max-w-md w-full border border-border shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {requested ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full gold-bg flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Request Sent!</h3>
                    <p className="text-muted-foreground text-sm">You'll be notified once verified.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">{selectedItem.name}</h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          {selectedItem.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span
                          className={`font-semibold ${
                            selectedItem.type === "lost" ? "text-destructive" : "text-green-600"
                          }`}
                        >
                          {selectedItem.type === "lost" ? "Lost" : "Found"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Reported</span>
                        <span className="text-foreground font-medium">{selectedItem.date}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Your Email</label>
                        <input
                          type="email"
                          value={claimEmail}
                          onChange={(e) => setClaimEmail(e.target.value)}
                          placeholder="your.email@uis.edu"
                          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          {selectedItem.type === "found" ? "Describe the item to verify ownership" : "Describe where/when you found it"}
                        </label>
                        <textarea
                          value={claimDescription}
                          onChange={(e) => setClaimDescription(e.target.value)}
                          placeholder={selectedItem.type === "found" ? "Describe unique details only the owner would know..." : "Describe where and how you found this item..."}
                          rows={3}
                          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                          {selectedItem.type === "found" ? "When did you lose it?" : "When did you find it?"}
                        </label>
                        <input
                          type="date"
                          value={claimDate}
                          onChange={(e) => setClaimDate(e.target.value)}
                          className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleRequest}
                      disabled={!claimEmail || !claimDescription || !claimDate}
                      className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {selectedItem.type === "found" ? "Request This Item" : "I Found This Item"}
                    </button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Requires UIS NetID verification
                    </p>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProblemSection;
