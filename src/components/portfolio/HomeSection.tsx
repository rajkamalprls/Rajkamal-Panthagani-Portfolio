import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Instagram, Sparkles, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const roles = ["Entrepreneur", "MBA Graduate", "Programmer", "Photographer", "Community Builder"];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajkamal-panthagani-b211b216a/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/rajkamalprls", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/rajkamalpanthagani/", label: "Instagram" },
];

const stats = [
  { icon: Users, value: "20,000+", label: "Community Members" },
  { icon: Sparkles, value: "100+", label: "Events Hosted" },
  { icon: MapPin, value: "India", label: "Based In" },
];

const HomeSection = ({ onNavigate }: { onNavigate: (tab: string) => void }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/[0.05] blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/[0.03] blur-[140px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[
          { x: "8%", y: "12%", size: 6, delay: 0 },
          { x: "80%", y: "20%", size: 4, delay: 1.5 },
          { x: "65%", y: "75%", size: 7, delay: 0.8 },
          { x: "20%", y: "85%", size: 5, delay: 2.2 },
          { x: "45%", y: "8%", size: 4, delay: 1 },
          { x: "92%", y: "55%", size: 5, delay: 0.4 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
      </div>
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center w-full">
        {/* Text — 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-3"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-heading font-semibold text-primary tracking-wide uppercase">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-gradient-gold">Rajkamal</span>
            <br />
            <span className="text-gradient-gold">Panthagani</span>
          </h1>

          <div className="mt-4 h-8 flex items-center">
            <span className="text-lg sm:text-xl text-muted-foreground font-heading font-medium">
              {displayed}
              <span className="text-primary animate-pulse">|</span>
            </span>
          </div>

          <p className="text-secondary-foreground mt-6 max-w-xl leading-relaxed">
            Building at the intersection of technology, community, and entrepreneurship. 
            As the founder of <strong className="text-foreground">The Student Spot</strong>, 
            I've connected <strong className="text-foreground">20,000+</strong> students and professionals 
            across India — creating pathways from classroom to career through events, mentorship, and real-world projects.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <button
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-gold font-heading font-semibold text-primary-foreground hover:shadow-gold transition-all duration-300 hover:scale-105 group"
            >
              Know More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-card border border-border font-heading font-semibold text-foreground hover:border-primary/40 hover:bg-muted transition-colors"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 mt-10"
          >
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Find me</span>
            <div className="w-8 h-px bg-border" />
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image — 2 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-center lg:col-span-2"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-primary/20"
            />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/8 blur-3xl scale-110" />
            {/* Image */}
            <img
              src={heroBg}
              alt="Rajkamal Panthagani"
              className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-card"
            />
            {/* Badge */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
