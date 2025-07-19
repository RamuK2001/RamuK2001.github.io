import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

const experienceData = [
  {
    company: "Infosys",
    duration: "Aug 2022 – Present",
    projects: [
      {
        title: "Azure DevOps and Data Migration",
        description:
          "Built robust YAML pipelines with SonarQube integration, deploying 150+ artifacts in under 5 minutes. Reduced manual effort by 90%.",
      },
      {
        title: "Data Warehousing and Data Engineering",
        description:
          "Developed PySpark-based ingestion pipelines for gigabyte-scale SAP/Salesforce/SFTP data into Delta Lake.",
      },
      {
        title: "Data Modelling and Data Engineering",
        description:
          "Implemented OpenAI hybrid models to classify 2.5B records with 90% accuracy using ADF and Databricks.",
      },
    ],
  },
  {
    company: "Capgemini",
    duration: "Feb 2022 – Apr 2022",
    projects: [
      {
        title: "Student Attendance Management System",
        description:
          "Created personal React + Vite portfolio with dark mode, animations, resume download, and form integrations.",
      },
    ],
  },
];

export default function Experience() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          💼 Experience
        </h2>

        {experienceData.map((exp, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              className="mb-6 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md rounded-xl p-5"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 dark:text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {exp.duration}
                  </p>
                </div>
                {isOpen ? (
                  <ChevronUp className="text-purple-700" />
                ) : (
                  <ChevronDown className="text-purple-700" />
                )}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="space-y-4">
                      {exp.projects.map((proj, projIndex) => (
                        <li
                          key={projIndex}
                          className="bg-white dark:bg-gray-900/40 p-4 rounded-md border border-purple-200 dark:border-purple-600 shadow-sm"
                        >
                          <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                            {proj.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-200 text-sm mt-1">
                            {proj.description}
                          </p>
                        </li>
                      ))}
                    </ul>
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
