import { useState } from "react";
import {
  BarChart,
  ChevronDown,
  ChevronUp,
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
            className="relative z-10 inline-flex items-center gap-2 rounded-full border border-purple-700 bg-purple-600 px-5 py-2 text-sm font-semibold text-white opacity-100 shadow-md transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 dark:border-purple-500 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-offset-slate-950"
          >
            {isEverythingOpen ? (
              <>
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
                Expand All
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/85">
            <button
              type="button"
              onClick={() => toggleSection("summary")}
              aria-expanded={isSectionOpen("summary")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-semibold text-purple-800 dark:text-white sm:text-2xl">
                Professional Summary
              </h3>
              {isSectionOpen("summary") ? (
                <ChevronUp className="shrink-0 text-purple-700 dark:text-purple-300" aria-hidden="true" />
              ) : (
                <ChevronDown className="shrink-0 text-purple-700 dark:text-purple-300" aria-hidden="true" />
              )}
            </button>

            {isSectionOpen("summary") ? (
              <ul className="mt-6 list-disc space-y-4 pl-6 text-left leading-7 text-gray-800 dark:text-gray-100">
                {highlights.map((item) => (
                  <li key={item}>
                    <HighlightedText text={item} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/85">
            <button
              type="button"
              onClick={() => toggleSection("skills")}
              aria-expanded={isSectionOpen("skills")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-semibold text-purple-800 dark:text-white sm:text-2xl">
                Skills
              </h3>
              {isSectionOpen("skills") ? (
                <ChevronUp className="shrink-0 text-purple-700 dark:text-purple-300" aria-hidden="true" />
              ) : (
                <ChevronDown className="shrink-0 text-purple-700 dark:text-purple-300" aria-hidden="true" />
              )}
            </button>

            {isSectionOpen("skills") ? (
              <>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                  My core skills are highlighted with a{" "}
                  <Star
                    className="inline-block h-3.5 w-3.5 align-text-bottom text-purple-600 dark:text-purple-400"
                    fill="currentColor"
                    aria-hidden="true"
                  />{" "}
                  icon for easy identification.
                </p>
                <div className="mt-4 md:columns-2 md:gap-6">
                  {skills.map((skill) => {
                    const Icon = skillIcons[skill.icon] || Code;

                    return (
                      <div
                        key={skill.label}
                        className="mb-6 break-inside-avoid rounded-xl border border-purple-200/50 bg-white/80 p-4 shadow-md dark:border-purple-800/50 dark:bg-slate-800/85"
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
                              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm shadow-sm ${
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
              </>
            ) : null}
          </div>

          <div className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/85">
            <button
              type="button"
              onClick={() => toggleSection("education")}
              aria-expanded={isSectionOpen("education")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-semibold text-purple-800 dark:text-white sm:text-2xl">
                Education
              </h3>
              {isSectionOpen("education") ? (
                <ChevronUp className="shrink-0 text-purple-700 dark:text-purple-300" aria-hidden="true" />
              ) : (
                <ChevronDown className="shrink-0 text-purple-700 dark:text-purple-300" aria-hidden="true" />
              )}
            </button>

            {isSectionOpen("education") ? (
              <div className="mt-6 flex items-start gap-4 text-left text-gray-800 dark:text-gray-100">
                <div className="rounded-full bg-blue-200 p-3 text-blue-900 dark:bg-blue-700/40 dark:text-blue-100">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                    {education.degree}
                  </h4>
                  <p className="mt-1 text-sm">{education.institution}</p>
                  <p className="mt-1 text-sm">{education.duration}</p>
                  <p className="mt-4 font-semibold text-purple-700 dark:text-purple-300">
                    Relevant focus
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {education.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-blue-200 px-3 py-1 text-sm text-blue-900 shadow-sm dark:bg-blue-700/40 dark:text-blue-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
