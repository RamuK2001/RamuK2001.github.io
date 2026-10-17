import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart,
  ChevronDown,
  Cloud,
  Code,
  ClipboardCheck,
  Database,
  GraduationCap,
  Smile,
  Star,
  Wrench,
} from "lucide-react";
import HighlightedText from "../components/HighlightedText";
import { education, highlights, skills } from "../data/portfolio";

const aboutSections = ["summary", "skills", "education"];

const accordionTransition = {
  duration: 0.28,
  ease: [0.04, 0.62, 0.23, 0.98],
};

const skillIcons = {
  code: Code,
  cloud: Cloud,
  database: Database,
  chart: BarChart,
  tools: Wrench,
  smile: Smile,
  methodologies: ClipboardCheck,
};

export default function About() {
  const [openSections, setOpenSections] = useState([]);
  const isEverythingOpen = aboutSections.every((section) =>
    openSections.includes(section)
  );

  const toggleSection = (section) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const isSectionOpen = (section) => openSections.includes(section);

  const toggleAll = () => {
    setOpenSections(isEverythingOpen ? [] : aboutSections);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300">
          About Me
        </h2>

        <div className="mb-6 flex justify-center md:justify-end">
          <button
            type="button"
            onClick={toggleAll}
            aria-pressed={isEverythingOpen}
            className="relative z-10 inline-flex items-center gap-2 rounded-full border border-purple-700 bg-purple-600 px-5 py-2 text-sm font-semibold text-white opacity-100 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 dark:border-purple-500 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-offset-slate-950"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isEverythingOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
            {isEverythingOpen ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <div className="space-y-6">
          <div className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
            <button
              type="button"
              onClick={() => toggleSection("summary")}
              aria-expanded={isSectionOpen("summary")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-semibold text-purple-800 dark:text-white sm:text-2xl">
                Professional Summary
              </h3>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-purple-700 transition-transform duration-300 dark:text-purple-300 ${
                  isSectionOpen("summary") ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {isSectionOpen("summary") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={accordionTransition}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 list-disc space-y-4 pl-6 text-left leading-7 text-gray-800 dark:text-gray-100">
                    {highlights.map((item) => (
                      <li key={item}>
                        <HighlightedText text={item} />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
            <button
              type="button"
              onClick={() => toggleSection("skills")}
              aria-expanded={isSectionOpen("skills")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-semibold text-purple-800 dark:text-white sm:text-2xl">
                Skills
              </h3>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-purple-700 transition-transform duration-300 dark:text-purple-300 ${
                  isSectionOpen("skills") ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {isSectionOpen("skills") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={accordionTransition}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                    My core skills are highlighted with a{" "}
                    <Star
                      className="inline-block h-3.5 w-3.5 align-text-bottom text-purple-600 dark:text-purple-400"
                      fill="currentColor"
                      aria-hidden="true"
                    />{" "}
                    icon for easy identification.
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {skills.map((skill) => {
                      const Icon = skillIcons[skill.icon] || Code;

                      return (
                        <div
                          key={skill.label}
                          className="group rounded-xl border border-purple-200/50 bg-white/80 p-4 shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-lg dark:border-purple-800/50 dark:bg-slate-800/85 dark:hover:border-purple-600"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              className="h-6 w-6 shrink-0 text-purple-600 dark:text-purple-400"
                              aria-hidden="true"
                            />
                            <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                              {skill.label}
                            </h4>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span
                                key={tech.name}
                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm shadow-sm transition-transform duration-150 hover:scale-105 active:scale-95 cursor-default ${
                                  tech.core
                                    ? "bg-purple-200 font-medium text-purple-900 dark:bg-purple-700/50 dark:text-purple-100"
                                    : "bg-gray-200 text-gray-800 dark:bg-gray-700/50 dark:text-gray-200"
                                }`}
                              >
                                {tech.core ? (
                                  <Star
                                    className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  />
                                ) : null}
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
            <button
              type="button"
              onClick={() => toggleSection("education")}
              aria-expanded={isSectionOpen("education")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-semibold text-purple-800 dark:text-white sm:text-2xl">
                Education
              </h3>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-purple-700 transition-transform duration-300 dark:text-purple-300 ${
                  isSectionOpen("education") ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {isSectionOpen("education") && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={accordionTransition}
                  className="overflow-hidden"
                >
                  <div className="mt-6 flex min-w-0 items-start gap-4 text-left text-gray-800 dark:text-gray-100">
                    <div className="shrink-0 rounded-full bg-blue-200 p-3 text-blue-900 shadow-sm ring-4 ring-blue-100/60 dark:bg-blue-700/40 dark:text-blue-100 dark:ring-blue-900/30">
                      <GraduationCap className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1 border-l-2 border-purple-200/70 pl-4 dark:border-purple-800/60">
                      <h4 className="text-lg font-semibold break-words text-purple-700 dark:text-purple-300">
                        {education.degree}
                      </h4>
                      <p className="mt-1 text-sm">{education.institution}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">{education.duration}</p>
                      <p className="mt-4 font-semibold text-purple-700 dark:text-purple-300">
                        Relevant focus
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {education.focus.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-blue-200 px-3 py-1 text-sm text-blue-900 shadow-sm transition-transform duration-150 hover:scale-105 active:scale-95 cursor-default dark:bg-blue-700/40 dark:text-blue-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
