import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  education,
  experiences,
  navItems,
  profile,
  projects,
  skillGroups,
  stats,
} from "./data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
  return (
    <section
      className="relative isolate overflow-hidden bg-slateInk pt-28 sm:pt-32"
      id="top"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_38%,rgba(47,109,246,0.1),transparent_26%),linear-gradient(180deg,#0b0b0c_0%,#090909_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-white/10" />
      <div className="section-shell grid min-h-[calc(100vh-4rem)] content-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="mb-5 text-xl font-light text-white/60">{profile.role}</p>
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
              View Projects <ArrowUpRight size={17} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-pine/60 bg-transparent px-5 py-3 text-sm font-semibold text-pine transition hover:border-pine hover:bg-pine/10"
              href={profile.resumeUrl}
            >
              Resume <FileText size={17} />
            </a>
          </div>
        </motion.div>
        <motion.div className="panel p-5" {...fadeUp} transition={{ delay: 0.08, duration: 0.5 }}>
          <div className="grid aspect-[4/5] place-items-center rounded-sm bg-[linear-gradient(145deg,#171719,#0b0b0c)] p-8 text-white">
            <div className="text-center">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded border border-white/10 bg-white/[0.04] text-3xl font-semibold">
                IG
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/40">
                Profile image placeholder
              </p>
              <p className="mt-3 text-lg font-light leading-7 text-white/60">
                Replace this block with a photo, illustration, or project visual.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-slateInk" id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1fr]">
        <motion.div {...fadeUp}>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
            A focused snapshot now, easy to refine later.
          </h2>
        </motion.div>
        <motion.div className="grid gap-8" {...fadeUp}>
          <p className="text-lg font-light leading-8 text-white/60">{profile.summary}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="border-l-2 border-pine bg-white/[0.035] p-5" key={stat.label}>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/40">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness size={16} /> {profile.availability}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="bg-[#101011]" id="skills">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
            Grouped skill placeholders.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.article className="panel p-6" key={group.title} {...fadeUp}>
              <Code2 className="text-pine" size={24} />
              <h3 className="mt-5 text-xl font-medium text-white">{group.title}</h3>
              <p className="mt-3 text-sm font-light leading-6 text-white/50">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
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
  return (
    <section className="bg-[#101011] text-white" id="projects">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Replace these with your best work.</h2>
        </motion.div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              className="group border border-white/10 bg-white/[0.035] p-6 transition hover:border-pine/70 hover:bg-white/[0.06]"
              href={project.href}
              key={project.name}
              {...fadeUp}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-pine">{project.type}</span>
                <ArrowUpRight
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={18}
                />
              </div>
              <h3 className="mt-5 text-xl font-medium">{project.name}</h3>
              <p className="mt-3 text-sm font-light leading-6 text-white/50">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-md border border-white/10 px-3 py-1 text-xs text-white/50"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="bg-slateInk" id="education">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
            Academic background.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <motion.article className="panel p-6" key={`${item.school}-${item.degree}`} {...fadeUp}>
              <GraduationCap className="text-pine" size={26} />
              <h3 className="mt-5 text-xl font-medium text-white">{item.degree}</h3>
              <p className="mt-2 text-pine">{item.school}</p>
              <p className="mt-2 text-sm text-white/40">{item.period}</p>
              <p className="mt-4 text-sm font-light leading-6 text-white/50">{item.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-[#101011]" id="contact">
      <div className="section-shell">
        <motion.div className="grid gap-8 border border-white/10 bg-white/[0.035] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center" {...fadeUp}>
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Let people reach you quickly.</h2>
            <p className="mt-4 max-w-2xl font-light text-white/50">
              Replace the placeholder links with your preferred email, GitHub, LinkedIn, and resume.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-3 text-sm font-semibold text-white" href={`mailto:${profile.email}`}>
              <Mail size={17} /> Email
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-white/70" href={profile.github}>
              <Github size={17} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-white/70" href={profile.linkedin}>
              <Linkedin size={17} /> LinkedIn
            </a>
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
