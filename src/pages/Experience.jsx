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
        description: [
          "Built robust YAML pipelines with SonarQube integration.",
          "Deployed 150+ artifacts in under 5 minutes.",
          "Reduced manual effort by 90%.",
        ],
      },
      {
        title: "Data Warehousing and Data Engineering",
        description: [
          "Developed PySpark ingestion pipelines for SAP, Salesforce, and SFTP.",
          "Processed gigabyte-scale data into Delta Lake.",
        ],
      },
      {
        title: "Data Modelling and Engineering",
        description: [
          "Implemented OpenAI hybrid models in ADF + Databricks.",
          "Classified 2.5B records with 90% accuracy.",
        ],
      },
    ],
  },
  {
    company: "Capgemini",
    duration: "Feb 2022 – Apr 2022",
    projects: [
      {
        title: "Student Attendance Management System",
        description: [
          "Designed and built a React + Vite app with dark mode.",
          "Integrated animations, formspree contact, and resume download.",
        ],
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                        <motion.li
                          key={projIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: projIndex * 0.1, duration: 0.4 }}
                          className="bg-white dark:bg-gray-900/40 p-4 rounded-md border border-purple-200 dark:border-purple-600 shadow-sm"
                        >
                          <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                            {proj.title}
                          </h4>
                          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            {proj.description.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </motion.li>
                      ))}
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
