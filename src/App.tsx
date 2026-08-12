import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Wrench,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  about,
  certifications,
  education,
  experiences,
  mastersThesis,
  navItems,
  profile,
  projectGroups,
  skillGroups,
} from "./data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

type SkillItem = {
  iconBackdrop?: string;
  name: string;
  fallback?: string;
  iconInvert?: boolean;
  iconUrl?: string;
  iconWide?: boolean;
};

function SkillBadge({ skill }: { skill: SkillItem }) {
  const [iconFailed, setIconFailed] = useState(false);
  const initials =
    skill.fallback ??
    skill.name
      .split(/[\s./-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  return (
    <div className="grid min-w-[4.6rem] justify-items-center gap-2 rounded-md border border-white/10 bg-slateInk/70 px-2.5 py-3 text-center transition hover:border-pine/50 hover:bg-white/[0.055]">
      <div
        className={`grid h-9 place-items-center ${
          skill.iconWide ? "w-14" : "w-9"
        } ${skill.iconBackdrop === "light" ? "rounded-md bg-white p-1 shadow-sm" : ""}`}
      >
        {skill.iconUrl && !iconFailed ? (
          <img
            alt=""
            className={`${skill.iconWide ? "h-6 w-12" : "h-7 w-7"} object-contain ${
              skill.iconInvert ? "brightness-0 invert" : ""
            }`}
            loading="lazy"
            onError={() => setIconFailed(true)}
            src={skill.iconUrl}
          />
        ) : (
          <span className="grid h-7 w-7 place-items-center rounded bg-white/10 text-[0.62rem] font-semibold text-white/70">
            {initials}
          </span>
        )}
      </div>
      <span className="text-xs font-medium leading-tight text-white/72">{skill.name}</span>
    </div>
  );
}

const getSkillGroupIcon = (title: string) => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("software")) {
    return Code2;
  }

  if (normalizedTitle.includes("ml") || normalizedTitle.includes("data science")) {
    return Cpu;
  }

  if (normalizedTitle.includes("ai")) {
    return Bot;
  }

  if (normalizedTitle.includes("database")) {
    return Database;
  }

  if (normalizedTitle.includes("cloud")) {
    return Cloud;
  }

  return Server;
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-slateInk/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a className="inline-flex items-center gap-3 text-sm font-medium text-white" href="#top">
          <span className="grid h-9 w-9 place-items-center rounded bg-pine text-sm font-bold text-white">
            IG
          </span>
          <span>{profile.name}</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              className="text-xs font-medium uppercase tracking-[0.22em] text-white/40 transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded border border-white/10 bg-white/[0.04] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/[0.06] bg-slateInk px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                className="py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section
      className="relative isolate overflow-hidden bg-slateInk pt-28 sm:pt-32"
      id="top"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_38%,rgba(47,109,246,0.1),transparent_26%),linear-gradient(180deg,#0b0b0c_0%,#090909_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-white/10" />
      <div className="section-shell grid min-h-[calc(100vh-4rem)] content-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="paper-tag mb-5">{profile.role}</p>
          <h1 className="max-w-4xl font-display text-6xl font-normal leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <div className="mt-8 h-px w-24 bg-pine" />
          <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/60">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              href="#projects"
            >
              View my work <ArrowDown size={17} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-pine/60 bg-transparent px-5 py-3 text-sm font-semibold text-pine transition hover:border-pine hover:bg-pine/10"
              href={profile.resumeUrl}
              rel="noreferrer"
              target="_blank"
            >
              Resume <FileText size={17} />
            </a>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-pine/60 hover:text-pine"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin size={18} />
            </a>
            <a
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-pine/60 hover:text-pine"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-pine/60 hover:text-pine"
              href={`mailto:${profile.email}`}
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div className="panel overflow-hidden p-3" {...fadeUp} transition={{ delay: 0.08, duration: 0.5 }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[linear-gradient(145deg,#171719,#0b0b0c)]">
            {imageLoaded ? (
              <img
                alt={`${profile.name} profile portrait`}
                className="h-full w-full object-cover object-center"
                onError={() => setImageLoaded(false)}
                src={profile.imageUrl}
              />
            ) : (
              <div className="grid h-full place-items-center p-8 text-center text-white">
                <div>
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded border border-white/10 bg-white/[0.04] text-3xl font-semibold">
                    IG
                  </div>
                  <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/40">
                    Add profile.jpg to public
                  </p>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slateInk/72 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const getAboutIcon = (title: string) => {
    const normalizedTitle = title.toLowerCase();

    if (normalizedTitle.includes("cloud")) {
      return Cloud;
    }

    if (normalizedTitle.includes("tool")) {
      return Wrench;
    }

    if (normalizedTitle.includes("ai")) {
      return Bot;
    }

    return Code2;
  };

  return (
    <section className="relative overflow-hidden bg-slateInk" id="about">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="section-shell">
        <motion.div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start" {...fadeUp}>
          <div>
            <h2 className="inline-block border-b-2 border-pine pb-1 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {about.title}
            </h2>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p className="text-base font-light leading-7 text-white/70 sm:text-lg sm:leading-8" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-3">
              {about.highlights.map((stat) => (
                <div
                  className="border border-white/10 bg-white/[0.035] p-5 transition hover:border-pine/50"
                  key={stat.label}
                >
                  <p className="text-3xl font-semibold leading-none text-white">{stat.value}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {about.skillAreas.map((skill) => {
                const Icon = getAboutIcon(skill.title);

                return (
                  <div className="flex gap-5" key={skill.title}>
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-white">{skill.title}</h3>
                      <p className="mt-3 text-lg font-light leading-8 text-white/60">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const activeSkillGroup = skillGroups[activeSkillIndex] ?? skillGroups[0];

  return (
    <section className="bg-[#101011]" id="skills">
      <div className="section-shell">
        <motion.div className="max-w-none" {...fadeUp}>
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 inline-block border-b-2 border-pine pb-2 text-3xl font-medium text-white sm:text-4xl xl:whitespace-nowrap">
            My Technical Stack
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-3 rounded-lg border border-white/[0.06] bg-slateInk/70 p-1.5 sm:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = getSkillGroupIcon(group.title);
            const isActive = index === activeSkillIndex;

            return (
              <button
                className={`flex min-h-12 items-center justify-center gap-2 rounded-md px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-pine text-white shadow-[0_12px_30px_rgba(47,109,246,0.22)]"
                    : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                }`}
                key={group.title}
                onClick={() => setActiveSkillIndex(index)}
                type="button"
              >
                <Icon size={18} />
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        <motion.article
          animate={{ opacity: 1, y: 0 }}
          className="panel mt-8 p-5 sm:p-6"
          initial={{ opacity: 0, y: 8 }}
          key={activeSkillGroup.title}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-2xl font-semibold text-pine">{activeSkillGroup.title}</h3>
            {"subtitle" in activeSkillGroup && activeSkillGroup.subtitle ? (
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                {activeSkillGroup.subtitle}
              </span>
            ) : null}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {activeSkillGroup.sections.map((section) => (
              <div
                className="rounded-md border border-white/[0.06] bg-white/[0.025] p-4"
                key={section.title}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {section.title}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {section.items.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-slateInk" id="experience">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
            Work, research, and academic roles.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5">
          {experiences.map((item) => (
            <motion.article className="panel p-6" key={`${item.company}-${item.role}`} {...fadeUp}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-white">{item.role}</h3>
                  <p className="mt-1 text-pine">{item.company}</p>
                </div>
                <p className="text-sm text-white/40">{item.period}</p>
              </div>
              <p className="mt-2 text-sm text-white/40">{item.location}</p>
              <ul className="mt-5 grid gap-3 text-sm font-light leading-6 text-white/60">
                {item.points.map((point) => (
                  <li className="border-l-2 border-pine/60 pl-4" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const personalProjects = projectGroups.find((group) => group.title === "Personal Projects");
  const researchProjects = projectGroups.find((group) => group.title === "Research Projects");

  return (
    <section className="bg-[#101011] text-white" id="projects">
      <div className="section-shell">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 inline-block border-b-2 border-pine pb-2 text-3xl font-medium sm:text-4xl">
            What I've Worked On
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-7">
          {personalProjects ? (
            <motion.article
              className="panel rounded-2xl p-5 sm:p-6"
              {...fadeUp}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{personalProjects.title}</h3>
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(47,109,246,0.18)] transition hover:bg-blue-500"
                  href="https://github.com/ImonGhosh"
                  rel="noreferrer"
                  target="_blank"
                >
                  More Projects <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {personalProjects.projects.slice(0, 3).map((project) => (
                  <div
                    className="flex min-h-full flex-col rounded-xl border border-white/10 bg-slateInk/70 p-5 transition hover:border-pine/50 hover:bg-white/[0.045]"
                    key={project.name}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-xl font-semibold leading-snug text-white">{project.name}</h4>
                      {project.links[0] ? (
                        <a
                          aria-label={`Open ${project.name}`}
                          className="shrink-0 text-white/45 transition hover:text-pine"
                          href={project.links[0].href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : null}
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm font-light leading-6 text-white/60">
                      {project.points.map((point) => (
                        <li className="flex gap-2" key={point}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-5">
                      {project.links.map((link) => (
                        <a
                          className="inline-flex items-center gap-2 text-sm font-semibold text-pine transition hover:text-blue-400"
                          href={link.href}
                          key={link.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {personalProjects.projects.length > 3 ? (
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  {personalProjects.projects.slice(3).map((project) => (
                    <div
                      className="flex min-h-full flex-col rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-pine/50 hover:bg-white/[0.045]"
                      key={project.name}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold leading-snug text-white">{project.name}</h4>
                        </div>
                        {project.links[0] ? (
                          <a
                            aria-label={`Open ${project.name}`}
                            className="shrink-0 text-white/45 transition hover:text-pine"
                            href={project.links[0].href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <ArrowUpRight size={16} />
                          </a>
                        ) : null}
                      </div>
                      <p className="mt-3 text-sm font-light leading-6 text-white/60">
                        {project.points[0]}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {project.tags.map((tag) => (
                          <span className="chip" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-5">
                        {project.links.map((link) => (
                          <a
                            className="inline-flex items-center gap-2 text-sm font-semibold text-pine transition hover:text-blue-400"
                            href={link.href}
                            key={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label} <ArrowUpRight size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ) : null}

          {researchProjects ? (
            <motion.article className="panel rounded-2xl p-5 sm:p-6" {...fadeUp}>
              <div className="mb-5 flex items-center gap-3">
                <FileText className="text-pine" size={20} />
                <h3 className="text-2xl font-semibold text-white">{researchProjects.title}</h3>
              </div>
              <div className="grid gap-4">
                {researchProjects.projects.map((project) => (
                  <div
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-pine/50"
                    key={project.name}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h4 className="text-xl font-semibold leading-snug text-white">{project.name}</h4>
                      <span className="shrink-0 text-xs font-mono text-white/40">{project.date}</span>
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm font-light leading-6 text-white/60 sm:grid-cols-3">
                      {project.points.map((point) => (
                        <li className="flex gap-2" key={point}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <a
                          className="inline-flex items-center gap-2 text-sm font-semibold text-pine transition hover:text-blue-400"
                          href={link.href}
                          key={link.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ) : null}

          <motion.article
            className="relative overflow-hidden rounded-2xl border border-pine/25 bg-[radial-gradient(circle_at_44%_18%,rgba(118,142,255,0.22),transparent_18%),linear-gradient(135deg,rgba(47,109,246,0.13),rgba(255,255,255,0.025))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-8"
            {...fadeUp}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
            <div className="relative">
              <p className="eyebrow mb-4">Master Thesis</p>
              <h3 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {mastersThesis.title}
              </h3>
              <div className="mt-6 grid gap-5 text-base font-light leading-8 text-white/60 md:grid-cols-2">
                <p>{mastersThesis.description}</p>
                <p>{mastersThesis.impact}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="bg-slateInk" id="education">
      <div className="section-shell">
        <motion.div className="max-w-4xl" {...fadeUp}>
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 inline-block border-b-2 border-pine pb-2 text-3xl font-medium text-white sm:text-4xl">
            Academic Background & Certifications
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <motion.article className="panel rounded-2xl p-6 sm:p-8" {...fadeUp}>
            <div className="mb-7 flex items-center gap-3">
              <GraduationCap className="text-pine" size={22} />
              <h3 className="text-xl font-semibold uppercase tracking-[0.18em] text-white/80">
                Education
              </h3>
            </div>
            <div className="grid gap-8">
              {education.map((item) => (
                <div className="border-l border-white/12 pl-5" key={`${item.school}-${item.degree}`}>
                  <h4 className="text-xl font-semibold leading-snug text-white">{item.degree}</h4>
                  <p className="mt-2 text-base font-semibold text-white/55">{item.school}</p>
                  <p className="mt-2 text-sm font-mono text-white/40">{item.period}</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <span className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                        {item.scoreLabel}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-white/70">
                        {item.score}
                      </span>
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                        Location
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-white/70">
                        {item.location}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article className="panel rounded-2xl p-6 sm:p-8" {...fadeUp}>
            <div className="mb-7 flex items-center gap-3">
              <FileText className="text-pine" size={22} />
              <h3 className="text-xl font-semibold uppercase tracking-[0.18em] text-white/80">
                Certifications
              </h3>
            </div>
            <div className="grid gap-5">
              {certifications.map((certification) => (
                <div
                  className="border border-white/[0.06] bg-white/[0.025] p-5"
                  key={certification.credentialUrl}
                >
                  <h4 className="text-lg font-semibold leading-snug text-white">
                    {certification.name}
                  </h4>
                  <p className="mt-2 text-sm text-white/45">{certification.issuer}</p>
                  <a
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pine transition hover:text-blue-400"
                    href={certification.credentialUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Show Credential <ArrowUpRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactLinks = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: Mail,
      meta: profile.email,
    },
    {
      label: "Phone",
      href: `tel:${profile.phone}`,
      icon: Phone,
      meta: profile.phone,
    },
    {
      label: "GitHub",
      href: profile.github,
      icon: Github,
      meta: "github.com/imonghosh",
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: Linkedin,
      meta: "linkedin.com/in/imon-ghose-467a4722a",
    },
  ];

  return (
    <section className="bg-[#101011]" id="contact">
      <div className="section-shell">
        <p className="eyebrow mb-5">Contact</p>
        <motion.div
          className="relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_92%_18%,rgba(47,109,246,0.14),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-6 text-white shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-8"
          {...fadeUp}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pine/70 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <h2 className="inline-block border-b-2 border-pine pb-2 text-3xl font-medium sm:text-4xl">
              Connect with me
            </h2>
            <p className="mt-4 max-w-2xl font-light text-white/50">
              If you know a role that fits my profile, want to collaborate or simply discuss about AI, innovative ideas and technical use-cases, feel free to reach out to me over mail, call or LinkedIn !
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/10 bg-slateInk/70 px-4 py-3 text-sm font-semibold text-white/56">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
          </div>
            <div className="grid gap-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <a
                    className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 border px-4 py-3.5 transition ${
                      index === 0
                        ? "border-pine/70 bg-pine/95 text-white hover:bg-blue-500"
                        : "border-white/10 bg-slateInk/70 text-white/72 hover:border-pine/60 hover:bg-white/[0.045] hover:text-white"
                    }`}
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-lg ${
                        index === 0 ? "bg-white/14" : "bg-white/[0.06]"
                      }`}
                    >
                      <Icon size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{link.label}</span>
                      <span
                        className={`mt-1 block truncate text-xs font-light ${
                          index === 0 ? "text-white/72" : "text-white/42"
                        }`}
                      >
                        {link.meta}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="opacity-55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      size={17}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-slateInk px-5 py-8 text-center text-sm font-light text-white/40">
      (c) {new Date().getFullYear()} {profile.name}. Built with React, Vite, TypeScript, and Tailwind CSS.
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
