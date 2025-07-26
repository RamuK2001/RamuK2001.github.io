import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const experienceData = [
  {
    company: "Infosys",
    logo: "/assets/logos/infosys.png",
    duration: "Aug 2022 – Present",
    projects: [
      {
        title: "Azure DevOps and Data Migration",
        description: [
          "Built robust YAML pipelines with SonarQube integration.",
          "Deployed 150+ artifacts in under 5 minutes.",
          "Reduced manual effort by 90%.",
        ],
        tags: ["Azure DevOps", "YAML", "CI/CD", "SonarQube"],
      },
      {
        title: "Data Warehousing and Data Engineering",
        description: [
          "Developed PySpark ingestion pipelines for SAP, Salesforce, and SFTP.",
          "Processed gigabyte-scale data into Delta Lake.",
        ],
        tags: ["Azure DevOps", "YAML", "CI/CD", "SonarQube"],
      },
      {
        title: "Data Modelling and Engineering",
        description: [
          "Implemented OpenAI hybrid models in ADF + Databricks.",
          "Classified 2.5B records with 90% accuracy.",
        ],
        tags: ["Azure DevOps", "YAML", "CI/CD", "SonarQube"],
      },
    ],
  },
  {
    company: "Capgemini",
    logo: "/assets/logos/capgemini.png",
    duration: "Feb 2022 – Apr 2022",
    projects: [
      {
        title: "Student Attendance Management System",
        description: [
          "Designed and built a React + Vite app with dark mode.",
          "Integrated animations, formspree contact, and resume download.",
        ],
        tags: ["Azure DevOps", "YAML", "CI/CD", "SonarQube"],
      },
    ],
  },
];

export default function Experience() {
  const [openCompanies, setOpenCompanies] = useState([]);
  const [openProjects, setOpenProjects] = useState({});

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

  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          💼 Experience
        </h2>

        {experienceData.map((exp, index) => {
          const isCompanyOpen = openCompanies.includes(index);
          const openProj = openProjects[index] || [];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md rounded-xl p-5"
            >
              <button
                onClick={() => toggleCompany(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <div className="flex items-center space-x-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 object-contain rounded bg-white p-1 dark:bg-gray-800 dark:brightness-90"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                {isCompanyOpen ? (
                  <ChevronUp className="text-purple-700" />
                ) : (
                  <ChevronDown className="text-purple-700" />
                )}
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 overflow-visible relative"
                  >
                    <ul className="space-y-4">
                      {exp.projects.map((proj, projIndex) => {
                        const isOpen = openProj.includes(projIndex);

                        return (
                          <motion.li
                            key={projIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: projIndex * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative z-10 bg-white dark:bg-gray-900/40 p-4 rounded-xl border border-purple-200 dark:border-purple-600 shadow-md hover:shadow-xl hover:shadow-purple-300 dark:hover:shadow-purple-700 transition-all duration-300"
                          >
                            <button
                              className="flex justify-between items-center w-full text-left"
                              onClick={() => toggleProject(index, projIndex)}
                            >
                              <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                                {proj.title}
                              </h4>
                              {isOpen ? (
                                <ChevronUp className="text-purple-600" />
                              ) : (
                                <ChevronDown className="text-purple-600" />
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
                                  {/* Bullet points */}
                                  <ul className="pl-5 text-sm text-gray-700 dark:text-gray-300 list-disc space-y-1">
                                    {proj.description.map((point, i) => (
                                      <li key={i}>{point}</li>
                                    ))}
                                  </ul>
                            
                                  {/* Tags */}
                                  {proj.tags && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                      {proj.tags.map((tag, i) => (
                                        <span
                                          key={i}
                                          className="text-xs bg-purple-100 dark:bg-purple-800/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full font-medium shadow-sm"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
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
  );
}
