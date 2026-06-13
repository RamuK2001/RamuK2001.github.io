import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cloud,
  Database,
  BarChart,
  Wrench,
  Smile,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from "lucide-react";
import BackgroundVisuals from "../components/BackgroundVisuals";

const highlight = (text) => {
  return text
    .replace(/\b(ADF|ADB|Azure DevOps|Azure Databricks|Azure Data Factory|VMs|Power BI|ARM templates|YAML|CI\/CD|PySpark|Logic Apps|Delta Lake|LLM|PowerShell|CRON|ServiceNow|Dashboarding|ETL|SQL|SAP|SFTP|Salesforce|ADLS|Terraform|historic|incremental|Unity Catalog|HTML|Vacuum|Optimize|Partitioning|Z-Ordering|Liquid Clustering|Row-Level Security|REST APIs|Microsoft Fabric|Star|Snowflake|SCDs|SonarQube|ARMTTK|Automation Account|cost|performance|reports|dimension tables|table|artifact|infrastructure|IaC|infrastructure as code|selective deployment|pipeline|cluster|job|metrics|manual effort|near real-time|SLA tracking|job monitoring|performance insights|Led|targeted)\b/gi, '<span class="font-semibold text-blue-700 dark:text-blue-400">$1</span>')
    .replace(/(\d+%|\d+B|\d+\+? files\/day|under \d+ minutes|\d+ records|\d+ billion|40%|85%|95%|99%|80%|gigabytes|terabytes)/g, '<span class="font-semibold text-green-700 dark:text-green-400">$1</span>')
    .replace(/\b(CSV|Excel|JSON|XML|Parquet)\b/g, '<span class="italic">$1</span>');
};

const highlights = [
  "Built scheduled Azure Data Factory (ADF) pipelines integrated with ADLS and Azure Databricks (ADB) to migrate terabytes of on-premise data (SAP, SFTP, Salesforce, on-prem DBs) into Unity Catalog with 99% success rate, featuring detailed logging and HTML-based failure alerts.",
  "Developed generic PySpark jobs in ADB for ingesting and processing both historic and incremental data from flat-files (CSV, Excel, JSON, XML, Parquet) and on-prem DBs via JDBC, orchestrated using REST APIs.",
  "Led a team of 5 to design a scalable product categorization job in ADB for over 2.5 billion records leveraging external lookup tables, keyword matching, and LLM-based approaches, achieving over 90% accuracy",
  "Automated ADB Vacuum & Optimize and achieved 75% improvement in query performance by implementing Partitioning, Z-Ordering, and Liquid Clustering based on the data cardinality.",
  "Provisioned full-stack Azure environments (ADLS, ADB, ADF, VMs) with private networking via ARM templates and Terraform, cutting setup time by 85%.",
  "Designed a YAML-based CI/CD pipeline in Azure DevOps to deploy ADF and ADB artifacts (notebooks, jobs, pipelines, etc.), incorporating targeted deployment feature for improved flexibility and faster release cycles.",
  "Automated code quality checks by integrating SonarQube and ARMTTK with the CI/CD pipeline, reducing manual review effort by 80%.",
  "Developed centralized monitoring and analytics solutions using Power BI and Databricks, enabling near real-time visibility into pipeline performance, SLA compliance, and LLM usage metrics across large-scale data platforms.",
  "Implemented robust data governance and quality frameworks using Unity Catalog, Purview, RLS, and validation rules integrated with ETL, ensuring secure, reliable, and high-quality data for downstream analytics.",
];

const skills = [
  {
    icon: <Code className="w-5 h-5 text-purple-600 mt-1" />,
    label: "Languages",
    text: "Python, PySpark, Java, C, C++, PowerShell, Unix, SQL",
  },
  {
    icon: <Cloud className="w-5 h-5 text-purple-600 mt-1" />,
    label: "Cloud Services",
    text: "Azure Data Factory, Azure Databricks, Azure Data Lake, Logic App, Automation Account, Purview, ARM Templates, Terraform, Azure DevOps (YAML), AWS (EC2 & S3)",
  },
  {
    icon: <Database className="w-5 h-5 text-purple-600 mt-1" />,
    label: "Big Data",
    text: "Hadoop, Scala, HDFS, Pig, Hive, Kafka, Spark",
  },
  {
    icon: <BarChart className="w-5 h-5 text-purple-600 mt-1" />,
    label: "Reporting",
    text: "Power BI, Microsoft Fabric",
  },
  {
    icon: <Wrench className="w-5 h-5 text-purple-600 mt-1" />,
    label: "Other Tools",
    text: "HTML, CSS, JS, Spring, Docker, K8s, SonarQube, Eclipse, Hibernate, Maven",
  },
  {
    icon: <Smile className="w-5 h-5 text-purple-600 mt-1" />,
    label: "Soft Skills",
    text: "Problem solving, Critical thinking, Adaptability, Quick learning ability, Attention to detail, Googling, AI Prompting",
  },
];

const education = {
  degree: "Bachelor of Technology in Electronics & Communication Engineering",
  institution: "Vardhaman College of Engineering, Hyderabad",
  duration: "2018 - 2022",
  focus: ["Python", "Java", "Embedded C", "RDBMS", "Real time systems"],
};

const aboutSections = ["summary", "skills", "education"];

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
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-slate-950 dark:to-black">
      <BackgroundVisuals />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] mb-10 text-center">
          {"\u{1F464} About Me"}
        </h2>

        <div className="mb-6 flex justify-center md:justify-end">
          <button
            type="button"
            onClick={toggleAll}
            aria-pressed={isEverythingOpen}
            className="inline-flex items-center gap-2 rounded-full border border-purple-700 bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 dark:border-purple-500 dark:bg-purple-700 dark:hover:bg-purple-600 dark:focus:ring-offset-slate-950 opacity-100 relative z-10"
          >
            {isEverythingOpen ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Expand All
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-5"
          >
            <button
              type="button"
              onClick={() => toggleSection("summary")}
              aria-expanded={isSectionOpen("summary")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-white">
                Professional Summary
              </h3>
              {isSectionOpen("summary") ? (
                <ChevronUp className="shrink-0 text-purple-700 dark:text-purple-300" />
              ) : (
                <ChevronDown className="shrink-0 text-purple-700 dark:text-purple-300" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isSectionOpen("summary") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 list-disc pl-6 text-gray-800 dark:text-gray-100 space-y-4 text-justify">
                    {highlights.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        dangerouslySetInnerHTML={{ __html: highlight(item) }}
                      />
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-5"
          >
            <button
              type="button"
              onClick={() => toggleSection("skills")}
              aria-expanded={isSectionOpen("skills")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-white">
                Skills
              </h3>
              {isSectionOpen("skills") ? (
                <ChevronUp className="shrink-0 text-purple-700 dark:text-purple-300" />
              ) : (
                <ChevronDown className="shrink-0 text-purple-700 dark:text-purple-300" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isSectionOpen("skills") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{skill.icon}</div>
                          <div>
                            <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">
                              {skill.label}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {skill.text.split(",").map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-sm px-3 py-1 bg-blue-200 text-blue-900 dark:bg-blue-700/40 dark:text-blue-100 rounded-full shadow-sm transform transition-transform duration-200 hover:scale-105 hover:shadow-md"
                                >
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-5"
          >
            <button
              type="button"
              onClick={() => toggleSection("education")}
              aria-expanded={isSectionOpen("education")}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-white">
                Education
              </h3>
              {isSectionOpen("education") ? (
                <ChevronUp className="shrink-0 text-purple-700 dark:text-purple-300" />
              ) : (
                <ChevronDown className="shrink-0 text-purple-700 dark:text-purple-300" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isSectionOpen("education") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 flex items-start gap-4 text-gray-800 dark:text-gray-100">
                    <div className="rounded-full bg-blue-200 p-3 text-blue-900 dark:bg-blue-700/40 dark:text-blue-100">
                      <GraduationCap className="h-6 w-6" />
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
                            className="text-sm px-3 py-1 bg-blue-200 text-blue-900 dark:bg-blue-700/40 dark:text-blue-100 rounded-full shadow-sm"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
