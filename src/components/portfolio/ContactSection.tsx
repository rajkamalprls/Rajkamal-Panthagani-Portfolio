import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, ExternalLink, Youtube, Facebook, Camera, AtSign, MessageCircle, Send, Users, Sparkles, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "rajkamalpanthagani@gmail.com", href: "mailto:rajkamalpanthagani@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9581929676", href: "tel:+919581929676" },
  { icon: MapPin, label: "Location", value: "Karimnagar / Hyderabad, India", href: null },
];

const personalSocials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rajkamalprls", accent: "hsl(210,80%,55%)" },
  { icon: Github, label: "GitHub", href: "https://github.com/rajkamalprls", accent: "hsl(0,0%,50%)" },
  { icon: ExternalLink, label: "Topmate", href: "https://topmate.io/rajkamalprls", accent: "hsl(160,60%,45%)" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rajkamalpanthagani", accent: "hsl(330,70%,55%)" },
  { icon: AtSign, label: "Threads", href: "https://www.threads.com/@rajkamalpanthagani", accent: "hsl(0,0%,45%)" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@rajkamal_panthagani", accent: "hsl(0,80%,55%)" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1Ai6hEqXH5/", accent: "hsl(220,70%,55%)" },
  { icon: Camera, label: "Snapchat", href: "https://www.snapchat.com/add/rajkamalprls", accent: "hsl(55,90%,50%)" },
];

const tssContact = [
  { icon: Mail, label: "Email", value: "contact.thestudentspot@gmail.com", href: "mailto:contact.thestudentspot@gmail.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 9581929676", href: "tel:+919581929676" },
];

const tssSocials = [
  { icon: MessageCircle, label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I", accent: "hsl(142,70%,45%)" },
  { icon: MessageCircle, label: "Chat for Collab", href: "https://wa.me/919581929676?text=Hello+TheStudentSpot%21", accent: "hsl(152,60%,45%)" },
  { icon: Send, label: "Telegram", href: "https://t.me/thestudentspot", accent: "hsl(200,80%,55%)" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/the_studentspot", accent: "hsl(330,70%,55%)" },
  { icon: AtSign, label: "Threads", href: "https://www.threads.com/@the_studentspot", accent: "hsl(0,0%,45%)" },
  { icon: Linkedin, label: "LinkedIn Page", href: "https://www.linkedin.com/company/thestudentspot/", accent: "hsl(210,80%,55%)" },
  { icon: ExternalLink, label: "X (Twitter)", href: "https://x.com/the_studentspot", accent: "hsl(200,10%,35%)" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@thestudentspot", accent: "hsl(0,80%,55%)" },
];

type TabId = "personal" | "tss";

// Floating particle component
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/10"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Social card with enhanced animations
const SocialCard = ({ s, i }: { s: typeof personalSocials[0]; i: number }) => (
  <motion.a
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    whileHover={{ y: -6, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="relative flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
  >
    {/* Hover background glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 20% 50%, ${s.accent.replace(')', ' / 0.08)')}, transparent 70%)`,
      }}
    />
    {/* Animated border shimmer */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{
        boxShadow: `0 0 20px ${s.accent.replace(')', ' / 0.15)')}, inset 0 0 20px ${s.accent.replace(')', ' / 0.05)')}`,
      }}
    />
    {/* Glow dot */}
    <motion.div
      className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
      style={{ backgroundColor: s.accent }}
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: s.accent }}
      whileHover={{ rotate: [0, -8, 8, 0] }}
      transition={{ duration: 0.5 }}
    >
      <s.icon className="w-5 h-5 text-white" />
    </motion.div>
    <div className="flex-1 min-w-0 relative z-10">
      <span className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{s.label}</span>
    </div>
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, x: -8 }}
      whileHover={{ opacity: 1, x: 0 }}
    >
      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
    </motion.div>
  </motion.a>
);

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("personal");

  return (
    <section className="relative space-y-10">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Large ambient glows */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/[0.04] blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-accent/[0.05] blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[150px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="15%" size={6} />
        <FloatingParticle delay={1.2} x="85%" y="25%" size={4} />
        <FloatingParticle delay={0.6} x="70%" y="70%" size={8} />
        <FloatingParticle delay={2} x="25%" y="80%" size={5} />
        <FloatingParticle delay={1.5} x="50%" y="10%" size={4} />
        <FloatingParticle delay={0.8} x="90%" y="60%" size={6} />
        <FloatingParticle delay={2.5} x="15%" y="50%" size={3} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.p
          className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Let's Connect
        </motion.p>
        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
          Get In <span className="text-gradient-gold">Touch</span>
        </h2>
        <motion.p
          className="text-secondary-foreground text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Reach out for collaborations, opportunities, or just a friendly hello.
        </motion.p>
        {/* Decorative line */}
        <motion.div
          className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Contact Info Cards */}
      <div className="flex flex-col sm:flex-row gap-3">
        {contactInfo.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 relative flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
          >
            {/* Card hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <motion.div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: "80%" }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-md shadow-primary/10 flex-shrink-0"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <item.icon className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <div className="min-w-0 relative z-10">
              <p className="text-[11px] font-heading font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-sm text-foreground hover:text-primary font-medium break-all transition-colors">{item.value}</a>
              ) : (
                <p className="text-sm text-foreground font-medium">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tab Switcher */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="inline-flex rounded-xl bg-secondary/80 backdrop-blur-sm border border-border p-1 gap-1 shadow-lg shadow-primary/5">
          {[
            { id: "personal" as TabId, label: "Rajkamal", icon: Users },
            { id: "tss" as TabId, label: "The Student Spot", icon: Sparkles },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-heading font-semibold transition-colors ${
                activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="contactTab"
                  className="absolute inset-0 bg-gradient-gold rounded-lg shadow-lg shadow-primary/20"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <tab.icon className={`w-4 h-4 relative z-10 ${activeTab === tab.id ? "" : ""}`} />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "personal" ? (
          <motion.div
            key="personal"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {personalSocials.map((s, i) => (
                <SocialCard key={s.label} s={s} i={i} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tss"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-4"
          >
            {/* TSS Contact strip */}
            <div className="grid sm:grid-cols-2 gap-3">
              {tssContact.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="relative flex items-center gap-4 p-5 rounded-2xl bg-card border border-primary/15 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-md shadow-primary/10 flex-shrink-0"
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div className="min-w-0 relative z-10">
                    <p className="text-[11px] font-heading font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm text-foreground font-medium truncate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* TSS socials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {tssSocials.map((s, i) => (
                <SocialCard key={s.label} s={s} i={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-8 border-t border-border text-center"
      >
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rajkamal Panthagani.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
