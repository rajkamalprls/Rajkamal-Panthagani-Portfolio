import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap, Briefcase, Award, Code, Trophy, Zap,
  Palette, Megaphone, Camera, TrendingUp, Globe, Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const } }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const education = [
  { school: "CMR Technical Campus (Autonomous) Kandlakoya", degree: "MBA (Marketing)", period: "2023 — 2025", detail: "CGPA 7.44 · Hyderabad" },
  { school: "SRR Govt Arts & Science College Karimnagar", degree: "B.COM Computer Applications", period: "2020 — 2023", detail: "CGPA 6.74 · Karimnagar" },
  { school: "ZPHS Thogarrai", degree: "CEC", period: "2019 — 2020", detail: "Peddapalli" },
  { school: "ZPHS Gundi", degree: "Matriculation", period: "2014 — 2015", detail: "GPA 7.0 · Karimnagar" },
];

const experience = [
  {
    title: "Founder & Community Builder",
    company: "The Student Spot",
    period: "Nov 2024 — Present",
    points: [
      "Built and scaled a nationwide student community connecting students, startups, mentors, and companies.",
      "Organized workshops, hackathons, and startup events.",
      "Created systems that help students discover internships, opportunities, and career resources.",
    ],
  },
  {
    title: "Accounts Manager",
    company: "Way2News",
    period: "Oct 2025 — Present",
    points: [
      "Managing Meta Business Suite and Business Manager infrastructure.",
      "Developing developer accounts and automation workflows for the ReelReporter program.",
      "Supporting digital operations and creator ecosystem development.",
    ],
  },
  {
    title: "Mentor",
    company: "Wadhwani Foundation",
    period: "Aug 2025 — Present",
    points: [
      "Mentoring students on entrepreneurship, career development, and employability skills.",
    ],
  },
];

const toolsAndTech = [
  { name: "Python", icon: Code },
  { name: "HTML/CSS", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "Bootstrap", icon: Palette },
  { name: "n8n", icon: Zap },
  { name: "Brevo", icon: Megaphone },
  { name: "Mailchimp", icon: Megaphone },
  { name: "Meta Business Suite", icon: TrendingUp },
  { name: "Photoshop", icon: Palette },
  { name: "Premiere Pro", icon: Camera },
  { name: "Git", icon: Code },
  { name: "MS Office", icon: Briefcase },
];

const skillCategories = [
  { label: "Marketing & Growth", level: 92 },
  { label: "Web Development", level: 85 },
  { label: "Automation & Workflows", level: 88 },
  { label: "Content Creation", level: 80 },
];

const softSkills = ["Fast Learner", "Time Management", "Teamwork", "Problem Solving", "Effective Communication"];

const languages = [
  { name: "Telugu", level: 100, flag: "🇮🇳" },
  { name: "English", level: 80, flag: "🇬🇧" },
  { name: "Hindi", level: 60, flag: "🇮🇳" },
];

const certifications = [
  "Python Developer Intern — CODSOFT",
  "Web Development Intern — OCTANET",
  "Microsoft Office 365 Professional — Magic Bus Foundation",
  "Python Coding & Programming — Samsung Innovation Campus",
  "Advanced Excel — Rotaract Club of Utkarsh",
  "AIR 157 — Naukri NCAT 2025",
  "First Prize AD-MAD Contest — SANKALP 2K24",
  "Google Gemini Certification",
  "Tableau Certification",
  "HackerRank Problem Solving",
  "Besant Technologies Certification",
  "NIIT Foundation Certification",
  "SoloLearn Certifications",
];


const competitions = [
  "Tata Imagination Challenge",
  "CodeClash Algorithm Competition",
  "Healthcare Case Competition",
  "AI & Data Bootcamps",
  "Startup Idea Competitions",
];

const ProgressBar = ({ label, level, delay }: { label: string; level: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-heading font-semibold text-foreground">{label}</span>
        <span className="text-primary font-bold text-xs">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-gold"
        />
      </div>
    </div>
  );
};

/* ─── Section Header Component ─── */
const SectionHeader = ({ icon: Icon, title, accent }: { icon: any; title: string; accent: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold/20 shadow-lg">
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>
    <div>
      <h3 className="text-2xl font-heading font-bold text-foreground">{title} <span className="text-gradient-gold">{accent}</span></h3>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
  </div>
);

const ResumeSection = () => {
  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: "-60px" });

  return (
    <section className="space-y-14">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-end gap-4"
      >
        <div>
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-2">
            My Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            My <span className="text-gradient-gold">Resume</span>
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent mb-2" />
      </motion.div>

      {/* ── Education & Experience ── */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-card border border-border p-7 lg:p-8"
        >
          <SectionHeader icon={GraduationCap} title="My" accent="Education" />
          <div className="relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-8 group"
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-primary bg-background group-hover:bg-primary group-hover:scale-110 transition-all duration-300" />
                  <div className="rounded-xl bg-secondary/30 border border-border/50 p-4 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold mb-2">
                      {item.period}
                    </span>
                    <h4 className="font-heading font-bold text-foreground">{item.degree}</h4>
                    <p className="text-sm text-secondary-foreground mt-0.5">{item.school}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-card border border-border p-7 lg:p-8"
        >
          <SectionHeader icon={Briefcase} title="Work" accent="Experience" />
          <div className="relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            <div className="space-y-6">
              {experience.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-8 group"
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-primary bg-background group-hover:bg-primary group-hover:scale-110 transition-all duration-300" />
                  <div className="rounded-xl bg-secondary/30 border border-border/50 p-4 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold mb-2">
                      {item.period}
                    </span>
                    <h4 className="font-heading font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-primary font-semibold">{item.company}</p>
                    <ul className="mt-3 space-y-2">
                      {item.points.map((point, j) => (
                        <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Skills & Tools ── */}
      <motion.div
        ref={toolsRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-card border border-border p-7 lg:p-8"
      >
        <SectionHeader icon={Code} title="Skills &" accent="Technologies" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Progress bars */}
          <div className="space-y-5">
            {skillCategories.map((item, i) => (
              <ProgressBar key={item.label} label={item.label} level={item.level} delay={i * 0.15} />
            ))}
          </div>

          {/* Tech tags */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={toolsInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2 content-start"
          >
            {toolsAndTech.map((skill) => (
              <motion.div
                key={skill.name}
                variants={scaleIn}
                whileHover={{ scale: 1.08, y: -3 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/40 border border-border text-sm font-heading font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default group"
              >
                <skill.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills & Languages side by side */}
        <div className="grid sm:grid-cols-2 gap-8 mt-10 pt-8 border-t border-border/50">
          {/* Soft Skills */}
          <div>
            <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" /> Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm text-foreground font-heading font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" /> Languages
            </h4>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-4">
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-heading font-semibold text-foreground w-16">{lang.name}</span>
                  <div className="flex-1 h-2.5 rounded-full bg-secondary/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full rounded-full bg-gradient-gold"
                    />
                  </div>
                  <span className="text-xs text-primary font-bold w-10 text-right">{lang.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Certifications ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-card border border-border p-7 lg:p-8"
      >
        <SectionHeader icon={Award} title="" accent="Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="relative rounded-xl bg-secondary/30 border border-border/50 p-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground font-medium leading-relaxed">{cert}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Competitions ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-card border border-border p-7 lg:p-8"
      >
        <SectionHeader icon={Zap} title="" accent="Competitions" />
        <p className="text-sm text-secondary-foreground mb-5">
          Participated in multiple hackathons, case competitions, and startup events across India:
        </p>
        <div className="space-y-2.5">
          {competitions.map((comp, i) => (
            <motion.div
              key={comp}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-heading font-medium text-foreground">{comp}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
