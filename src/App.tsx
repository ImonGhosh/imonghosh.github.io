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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slateInk/10 bg-cloud/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a className="text-sm font-bold tracking-wide text-slateInk" href="#top">
          IG
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-slateInk/70 transition hover:text-pine"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center border border-slateInk/10 bg-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-slateInk/10 bg-cloud px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                className="py-2 text-sm font-medium text-slateInk/75"
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
      className="relative isolate overflow-hidden bg-cloud pt-28 sm:pt-32"
      id="top"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(31,79,70,0.13),transparent_36%),linear-gradient(300deg,rgba(196,127,74,0.16),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />
      <div className="section-shell grid min-h-[calc(100vh-4rem)] content-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="eyebrow mb-5">{profile.role}</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] text-slateInk sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slateInk/72">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-slateInk"
              href="#projects"
            >
              View Projects <ArrowUpRight size={17} />
            </a>
            <a
              className="inline-flex items-center gap-2 border border-slateInk/15 bg-white px-5 py-3 text-sm font-semibold text-slateInk transition hover:border-pine hover:text-pine"
              href={profile.resumeUrl}
            >
              Resume <FileText size={17} />
            </a>
          </div>
        </motion.div>
        <motion.div className="panel p-5" {...fadeUp} transition={{ delay: 0.08, duration: 0.5 }}>
          <div className="grid aspect-[4/5] place-items-center bg-[radial-gradient(circle_at_25%_20%,rgba(196,127,74,0.24),transparent_32%),linear-gradient(145deg,#101820,#1f4f46)] p-8 text-white">
            <div className="text-center">
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-white/25 bg-white/10 text-3xl font-bold">
                IG
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.22em] text-white/62">
                Profile image placeholder
              </p>
              <p className="mt-3 text-lg font-semibold">
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
    <section className="bg-white" id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1fr]">
        <motion.div {...fadeUp}>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-bold text-slateInk sm:text-4xl">
            A focused snapshot now, easy to refine later.
          </h2>
        </motion.div>
        <motion.div className="grid gap-8" {...fadeUp}>
          <p className="text-lg leading-8 text-slateInk/72">{profile.summary}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="border-l-4 border-copper bg-cloud p-5" key={stat.label}>
                <p className="text-2xl font-bold text-slateInk">{stat.value}</p>
                <p className="mt-1 text-sm text-slateInk/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slateInk/68">
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
    <section className="bg-mist/45" id="skills">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 text-3xl font-bold text-slateInk sm:text-4xl">
            Grouped skill placeholders.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.article className="panel p-6" key={group.title} {...fadeUp}>
              <Code2 className="text-pine" size={24} />
              <h3 className="mt-5 text-xl font-bold text-slateInk">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slateInk/62">{group.description}</p>
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
    <section className="bg-white" id="experience">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-slateInk sm:text-4xl">
            Work, research, and academic roles.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5">
          {experiences.map((item) => (
            <motion.article className="panel p-6" key={`${item.company}-${item.role}`} {...fadeUp}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slateInk">{item.role}</h3>
                  <p className="mt-1 text-pine">{item.company}</p>
                </div>
                <p className="text-sm text-slateInk/58">{item.period}</p>
              </div>
              <p className="mt-2 text-sm text-slateInk/58">{item.location}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slateInk/70">
                {item.points.map((point) => (
                  <li className="border-l-2 border-copper/70 pl-4" key={point}>
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
    <section className="bg-slateInk text-white" id="projects">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Projects</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Replace these with your best work.</h2>
        </motion.div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              className="group border border-white/12 bg-white/[0.04] p-6 transition hover:border-copper/70 hover:bg-white/[0.07]"
              href={project.href}
              key={project.name}
              {...fadeUp}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-copper">{project.type}</span>
                <ArrowUpRight
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={18}
                />
              </div>
              <h3 className="mt-5 text-xl font-bold">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/72"
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
    <section className="bg-cloud" id="education">
      <div className="section-shell">
        <motion.div className="max-w-2xl" {...fadeUp}>
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 text-3xl font-bold text-slateInk sm:text-4xl">
            Academic background.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <motion.article className="panel p-6" key={`${item.school}-${item.degree}`} {...fadeUp}>
              <GraduationCap className="text-berry" size={26} />
              <h3 className="mt-5 text-xl font-bold text-slateInk">{item.degree}</h3>
              <p className="mt-2 text-pine">{item.school}</p>
              <p className="mt-2 text-sm text-slateInk/58">{item.period}</p>
              <p className="mt-4 text-sm leading-6 text-slateInk/68">{item.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-white" id="contact">
      <div className="section-shell">
        <motion.div className="grid gap-8 bg-pine p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center" {...fadeUp}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Contact</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let people reach you quickly.</h2>
            <p className="mt-4 max-w-2xl text-white/72">
              Replace the placeholder links with your preferred email, GitHub, LinkedIn, and resume.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 bg-white px-4 py-3 text-sm font-semibold text-pine" href={`mailto:${profile.email}`}>
              <Mail size={17} /> Email
            </a>
            <a className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-sm font-semibold text-white" href={profile.github}>
              <Github size={17} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-sm font-semibold text-white" href={profile.linkedin}>
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
    <footer className="border-t border-slateInk/10 bg-cloud px-5 py-8 text-center text-sm text-slateInk/58">
      © {new Date().getFullYear()} {profile.name}. Built with React, Vite, TypeScript, and Tailwind CSS.
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
