import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

const experienceData = [
  {
    company: "Tata Consultancy Services",
    duration: "Jul 2021 – Present",
    projects: [
      "CI/CD for Azure DevOps – YAML pipelines, SonarQube integration, deploy 150+ artifacts in 5 minutes.",
      "Real-time ETL Pipelines – PySpark jobs for gigabyte-scale ingestion from SAP, Salesforce, SFTP to Delta Lake.",
      "LLM-based Classification – Used OpenAI to classify 2.5B records with 90% accuracy using hybrid methods.",
    ],
  },
  {
    company: "Intern – Data Engineering",
    duration: "Jan 2021 – Jun 2021",
    projects: [
      "Built ETL workflows in ADF & Databricks to migrate data from legacy systems.",
      "Optimized PySpark jobs to cut processing time by 40%.",
    ],
  },
];

export default function Experience() {
  const [openCompany, setOpenCompany] = useState(null);

  const toggleCompany = (index) => {
    setOpenCompany(openCompany === index ? null : index);
  };

  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          <Briefcase className="inline w-7 h-7 mr-2" />
          Experience
        </h2>

        {experienceData.map((item, index) => (
          <div
            key={index}
            className="mb-6 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md rounded-lg p-6 transition-all duration-300"
          >
            <button
              onClick={() => toggleCompany(index)}
              className="w-full text-left flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">
                  {item.company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.duration}</p>
              </div>
              {openCompany === index ? (
                <ChevronUp className="text-purple-800 dark:text-purple-200" />
              ) : (
                <ChevronDown className="text-purple-800 dark:text-purple-200" />
              )}
            </button>

            {/* Project details */}
            {openCompany === index && (
              <ul className="mt-4 space-y-3 text-gray-800 dark:text-gray-200 list-disc list-inside">
                {item.projects.map((project, i) => (
                  <li key={i} className="transition-opacity duration-300">{project}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
