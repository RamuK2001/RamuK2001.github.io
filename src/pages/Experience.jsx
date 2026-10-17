import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HighlightedText from "../components/HighlightedText";
import { experienceData } from "../data/portfolio";

const accordionTransition = {
  duration: 0.28,
  ease: [0.04, 0.62, 0.23, 0.98],
};

export default function Experience() {
  const [openCompanies, setOpenCompanies] = useState([]);
  const [openProjects, setOpenProjects] = useState({});
  const isEverythingOpen =
    openCompanies.length === experienceData.length &&
    experienceData.every(
      (exp, companyIndex) =>
        openCompanies.includes(companyIndex) &&
        (openProjects[companyIndex] || []).length === exp.projects.length
    );

  const toggleCompany = (index) => {
    setOpenCompanies((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleProject = (companyIndex, projectIndex) => {
    setOpenProjects((prev) => ({
      ...prev,
      [companyIndex]: prev[companyIndex]?.includes(projectIndex)
        ? prev[companyIndex].filter((i) => i !== projectIndex)
        : [...(prev[companyIndex] || []), projectIndex],
    }));
  };

  const toggleAll = () => {
    if (isEverythingOpen) {
      setOpenCompanies([]);
      setOpenProjects({});
      return;
    }

    setOpenCompanies(experienceData.map((_, index) => index));
    setOpenProjects(
      experienceData.reduce((projectsByCompany, exp, companyIndex) => {
        projectsByCompany[companyIndex] = exp.projects.map(
          (_, projectIndex) => projectIndex
        );
        return projectsByCompany;
      }, {})
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300">
          Experience
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

        {experienceData.map((exp, index) => {
          const isCompanyOpen = openCompanies.includes(index);
          const openProj = openProjects[index] || [];

          return (
            <div
              key={exp.company}
              className="relative z-10 mb-6 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
            >
              <button
                type="button"
                onClick={() => toggleCompany(index)}
                aria-expanded={isCompanyOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <div className="flex min-w-0 items-center gap-4">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-10 w-10 shrink-0 rounded bg-white object-contain p-1 shadow-sm transition-transform duration-200 hover:scale-105 dark:bg-gray-800 dark:brightness-90"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-left text-sm text-gray-700 dark:text-gray-100">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-purple-700 transition-transform duration-300 dark:text-purple-300 ${
                    isCompanyOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={accordionTransition}
                    className="overflow-hidden"
                  >
                    <div className="relative mt-4">
                      <ul className="space-y-4 text-left">
                        {exp.projects.map((proj, projIndex) => {
                          const isOpen = openProj.includes(projIndex);

                          return (
                            <li
                              key={proj.title}
                              className={`relative z-10 rounded-xl border p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:shadow-md ${
                                isOpen
                                  ? "border-purple-400 bg-white/95 dark:border-purple-500/60 dark:bg-slate-800/95"
                                  : "border-purple-200 bg-white/80 hover:border-purple-300 dark:border-purple-700/50 dark:bg-slate-800/80"
                              }`}
                            >
                              <button
                                type="button"
                                className="flex w-full items-center justify-between gap-4 text-left"
                                onClick={() => toggleProject(index, projIndex)}
                                aria-expanded={isOpen}
                              >
                                <h4 className="min-w-0 flex-1 text-base font-semibold text-purple-700 break-words dark:text-purple-300 sm:text-lg">
                                  {proj.title}
                                </h4>
                                <ChevronDown
                                  className={`h-5 w-5 shrink-0 text-purple-600 transition-transform duration-300 dark:text-purple-400 ${
                                    isOpen ? "rotate-180" : "rotate-0"
                                  }`}
                                  aria-hidden="true"
                                />
                              </button>

                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={accordionTransition}
                                    className="overflow-hidden"
                                  >
                                    <div className="mt-3 space-y-2">
                                      <ul className="list-disc space-y-2 pl-4 text-left text-sm leading-6 text-gray-700 dark:text-gray-100">
                                        {proj.description.map((point) => (
                                          <li key={point}>
                                            <HighlightedText text={point} />
                                          </li>
                                        ))}
                                      </ul>

                                      {proj.tags ? (
                                        <div className="mt-3 flex flex-wrap gap-2 pt-1">
                                          {proj.tags.map((tag) => (
                                            <span
                                              key={tag}
                                              className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-800 shadow-sm transition-transform duration-150 hover:scale-105 active:scale-95 cursor-default dark:bg-purple-800/30 dark:text-purple-200"
                                            >
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      ) : null}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
