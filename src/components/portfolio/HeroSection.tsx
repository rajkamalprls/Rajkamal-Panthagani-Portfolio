import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Target, Wrench, Users, Briefcase, Rocket, Lightbulb, Quote, Code, Sparkles, GraduationCap, Camera, Zap,
} from "lucide-react";

const ecosystemItems = [
  { icon: Target, title: "Discover career paths", desc: "Explore industries and roles that match your strengths" },
  { icon: Wrench, title: "Build practical skills", desc: "Hands-on learning beyond traditional academics" },
  { icon: Users, title: "Connect with mentors", desc: "Get guidance from founders and professionals" },
  { icon: Briefcase, title: "Access opportunities", desc: "Internships, jobs, and freelance work" },
  { icon: Rocket, title: "Explore entrepreneurship", desc: "Resources to launch and grow your startup" },
  { icon: Lightbulb, title: "Collaborate on projects", desc: "Team up to build meaningful products" },
];

const highlights = [
  { icon: Sparkles, label: "Founder • The Student Spot" },
  { icon: Users, label: "Student-to-Founder Ecosystem Builder" },
  { icon: Calendar, label: "100+ Events Attended" },
  { icon: GraduationCap, label: "MBA Graduate" },
  { icon: Code, label: "Tech, AI & Automation Enthusiast" },
  { icon: Camera, label: "Photographer & Content Creator " },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const } },
};

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const HeroSection = () => {
  const aboutRef = useRef(null);
  const spotRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-60px" });
  const spotInView = useInView(spotRef, { once: true, margin: "-60px" });

  return (
    <section className="relative space-y-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-primary/[0.04] blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-accent/[0.05] blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/[0.02] blur-[150px]"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[
          { x: "12%", y: "10%", size: 5, delay: 0.3 },
          { x: "75%", y: "18%", size: 4, delay: 1.8 },
          { x: "88%", y: "65%", size: 7, delay: 0.6 },
          { x: "30%", y: "80%", size: 5, delay: 2 },
          { x: "55%", y: "5%", size: 3, delay: 1.2 },
          { x: "5%", y: "50%", size: 6, delay: 0.9 },
          { x: "95%", y: "40%", size: 4, delay: 2.5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 4.5, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
      </div>
      {/* ── About Me ── */}
      <div ref={aboutRef}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="flex items-end gap-4 mb-10">
            <div>
              <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
                Get to know me
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold">
                About <span className="text-gradient-gold">Me</span>
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent mb-2" />
          </motion.div>

          {/* Highlight chips */}
          <motion.div variants={stagger} className="flex flex-wrap gap-3 mb-10">
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={scaleIn}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-heading font-medium text-foreground"
              >
                <h.icon className="w-4 h-4 text-primary" />
                {h.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Two-column narrative */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-card border border-border p-7 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-secondary-foreground leading-relaxed">
                An <strong className="text-foreground">MBA graduate in Marketing</strong>, entrepreneur, and community builder passionate about connecting people, opportunities, and ideas. My journey started with a simple observation — many students have talent but lack access, direction, and networks. Instead of waiting for systems to change, I decided to build one.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                I enjoy building and experimenting with tools that combine <strong className="text-foreground">technology, automation, and creativity</strong>. My experience spans Python programming, web development with HTML, CSS, JavaScript, and Bootstrap, along with automation workflows using n8n, Brevo, and Mailchimp.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-card border border-border p-7 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <p className="text-secondary-foreground leading-relaxed">
                Currently, I'm <strong className="text-foreground">Accounts Manager at Way2News</strong>, developing Meta Business Suite systems, managing Business Manager and developer accounts, and building automation workflows for the ReelReporter program — enabling creators and content networks to scale efficiently.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                I mentor students through the <strong className="text-foreground">Wadhwani Foundation</strong>, supporting young professionals in building skills and exploring entrepreneurship. Outside work, I enjoy photography, video creation, storytelling, and attending events where ideas and collaborations emerge.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── The Student Spot ── */}
      <div ref={spotRef}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={spotInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Section divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 rounded-full bg-gradient-gold" />
            <h3 className="text-3xl lg:text-4xl font-heading font-bold">
              The <span className="text-gradient-gold">Student Spot</span>
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.div>

          {/* Intro + Stats side by side */}
          <div className="grid lg:grid-cols-5 gap-6 mb-10">
            <motion.div variants={fadeUp} className="lg:col-span-3 rounded-2xl bg-card border border-border p-7 space-y-4">
              <p className="text-secondary-foreground leading-relaxed">
                A <strong className="text-foreground">Student-to-Founder ecosystem</strong> built to connect students with opportunities, knowledge, and communities that help them grow beyond traditional classroom learning.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                What started as a simple idea has evolved into a growing movement across India where students, startups, professionals, and mentors collaborate to create meaningful impact. The platform bridges education and industry through internships, jobs, freelance work, startup resources, and real-world experiences.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="lg:col-span-2 grid grid-cols-1 gap-3">
              {[
                { value: 20000, suffix: "+", label: "Students & Professionals" },
                { value: 100, suffix: "+", label: "Partner Companies" },
                { value: 100, suffix: "+", label: "Events & Workshops" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-3xl font-heading font-bold text-gradient-gold min-w-[100px]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Ecosystem aims */}
          <motion.p variants={fadeUp} className="font-heading font-semibold text-foreground mb-5 text-lg">
            Through this ecosystem we aim to help students:
          </motion.p>

          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/[0.03] rounded-bl-[40px] group-hover:bg-primary/[0.06] transition-colors" />
                <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-sm font-heading font-bold text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision quote */}
          <motion.div
            variants={fadeUp}
            className="relative p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-primary/20 overflow-hidden"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
            <Quote className="w-12 h-12 text-primary/10 mb-4" />
            <p className="text-xl lg:text-2xl text-foreground font-heading font-bold italic leading-relaxed max-w-3xl">
              Create a future where students are not just job seekers, but builders, innovators, and founders.
            </p>
            <div className="w-16 h-1 bg-gradient-gold rounded-full mt-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
