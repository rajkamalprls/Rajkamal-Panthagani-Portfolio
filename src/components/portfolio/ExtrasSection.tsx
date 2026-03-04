import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Trophy, Lightbulb, Code, Rocket } from "lucide-react";

const participations = [
  {
    title: "Code Your Day — Hyderabad at Microsoft Office",
    description: "Amazing experience learning about Azure AI, GitHub Copilot, and the future of tech. Hands-on sessions with experts like Akash Chekka, Minal Rai, and Pratyusha Thumiki made it truly insightful!",
    icon: Code,
    tag: "Tech",
  },
  {
    title: "Draper Start-Up House Events",
    description: "Attended Marketing Strategies for Startups by eChai Ventures and the Cosmos Hyderabad Developers & Community Meetup. Learned about Cosmos SDK, IBC, NFTs, and real-world marketing strategies for startups.",
    icon: Rocket,
    tag: "Startup",
  },
  {
    title: "DevDays Hyderabad — Swecha Telangana",
    description: "Attended 'From Concept to Code: A Developer's Guide to Agentic Frameworks' led by Koundinya N.V.S.S. Deep dive into agentic systems with live demos of building frameworks.",
    icon: Code,
    tag: "Tech",
  },
  {
    title: "AI Day at CIE IIIT Hyderabad",
    description: "Organized by eChai Ventures. Experts shared insights on idea validation, No-Code/Low-Code platforms, scalable product development, and AI ethics and regulations.",
    icon: Sparkles,
    tag: "AI",
  },
  {
    title: "Innovator's Arena — Start-Up Competition",
    description: "Participated in the start-up competition organized by the Department of MBA at CMR Technical Campus in association with IIC 6.0. A fantastic platform to showcase innovative ideas.",
    icon: Trophy,
    tag: "Competition",
  },
  {
    title: "Mega Management Fest SANKALP 2K24",
    description: "Participated in Ad Mad, Business Quiz, and Creative Brand Spoof Video Making events. Secured 1st Prize in the Ad Mad Contest, demonstrating proficiency in marketing and management.",
    icon: Trophy,
    tag: "Fest",
    highlight: "🏆 1st Prize — Ad Mad Contest",
  },
  {
    title: "IIC Startup Business Idea — CMRTC",
    description: "Presented the Patients Medical Records (PMR) app concept, showcasing how digital medical records can simplify healthcare access for users of all ages.",
    icon: Lightbulb,
    tag: "Startup",
  },
  {
    title: "Samsung Innovation Campus",
    description: "Learned Python coding and programming through Samsung India and ESSCI. Actively participated in hackathons and achieved certifications through this initiative.",
    icon: Code,
    tag: "Learning",
  },
];

const tagColors: Record<string, string> = {
  Tech: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Startup: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  AI: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Competition: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  Fest: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  Learning: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

const ExtrasSection = () => {
  return (
    <section className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-end gap-4"
      >
        <div>
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            Beyond the Desk
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Events & <span className="text-gradient-gold">Participations</span>
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent mb-2" />
      </motion.div>

      {/* Bento-style grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {participations.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.02] rounded-bl-[48px] group-hover:bg-primary/[0.05] transition-colors" />

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/10">
                <event.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-heading font-bold uppercase tracking-wider ${tagColors[event.tag] || "bg-primary/10 text-primary border-primary/20"}`}>
                    {event.tag}
                  </span>
                  {event.highlight && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-heading font-bold">
                      {event.highlight}
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-secondary-foreground mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExtrasSection;
