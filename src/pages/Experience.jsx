import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import BackgroundVisuals from "../components/BackgroundVisuals";
import HighlightedText from "../components/HighlightedText";
import { experienceData } from "../data/portfolio";

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
    <>
      <BackgroundVisuals />
      <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300 dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Experience
          </h2>

          <div className="mb-6 flex justify-center md:justify-end">
            <button
              type="button"
              onClick={toggleAll}
              aria-pressed={isEverythingOpen}
              className="relative z-10 inline-flex items-center gap-2 rounded-full border border-purple-700 bg-purple-600 px-5 py-2 text-sm font-semibold text-white opacity-100 shadow-md transition hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 dark:border-purple-500 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-offset-slate-950"
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

          {experienceData.map((exp, index) => {
            const isCompanyOpen = openCompanies.includes(index);
            const openProj = openProjects[index] || [];

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-6 rounded-xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/50"
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
                        className="h-10 w-10 shrink-0 rounded bg-white object-contain p-1 dark:bg-gray-800 dark:brightness-90"
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
                  {isCompanyOpen ? (
                    <ChevronUp className="shrink-0 text-purple-700" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="shrink-0 text-purple-700" aria-hidden="true" />
                  )}
                </button>

                <AnimatePresence>
                  {isCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative mt-4 overflow-visible"
                    >
                      <ul className="space-y-4 text-left">
                        {exp.projects.map((proj, projIndex) => {
                          const isOpen = openProj.includes(projIndex);

                          return (
                            <motion.li
                              key={proj.title}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: projIndex * 0.1,
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                              whileHover={{
                                scale: 1.015,
                                boxShadow:
                                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="relative z-10 rounded-xl border border-purple-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md dark:border-purple-700 dark:bg-slate-800/80"
                            >
                              <button
                                type="button"
                                className="flex w-full items-center justify-between gap-4 text-left"
                                onClick={() => toggleProject(index, projIndex)}
                                aria-expanded={isOpen}
                              >
                                <h4 className="text-base font-semibold text-purple-700 dark:text-purple-300 sm:text-lg">
                                  {proj.title}
                                </h4>
                                {isOpen ? (
                                  <ChevronUp className="shrink-0 text-purple-600" aria-hidden="true" />
                                ) : (
                                  <ChevronDown className="shrink-0 text-purple-600" aria-hidden="true" />
                                )}
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 space-y-2"
                                  >
                                    <ul className="list-disc space-y-2 pl-5 text-left text-sm leading-6 text-gray-700 dark:text-gray-100">
                                      {proj.description.map((point) => (
                                        <li key={point}>
                                          <HighlightedText text={point} />
                                        </li>
                                      ))}
                                    </ul>

                                    {proj.tags ? (
                                      <div className="mt-3 flex flex-wrap gap-2">
                                        {proj.tags.map((tag) => (
                                          <span
                                            key={tag}
                                            className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 shadow-sm dark:bg-purple-800/30 dark:text-purple-200"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    ) : null}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
