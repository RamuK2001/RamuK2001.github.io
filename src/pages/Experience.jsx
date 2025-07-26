import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const highlight = (text) => {
  return text
    .replace(/\b(ADF|ADB|Azure DevOps|Databricks|Power BI|ARM Templates|YAML|CI\/CD|PySpark|Logic Apps|Delta Lake|LLM|PowerShell|CRON|ServiceNow|Dashboarding|ETL|SQL|JSON|XML|PARQUET|SAP|SFTP|Salesforce|ADLS)\b/g, '<span class="text-indigo-700 dark:text-indigo-300 font-medium">$1</span>')
    .replace(/(\d+%|\d+B|\d+\+? files\/day|under \d+ minutes|\d+ records|\d+ billion)/g, '<span class="text-emerald-700 dark:text-emerald-300 font-semibold">$1</span>');
};

const experienceData = [
  {
    company: "Infosys",
    logo: "/assets/logos/infosys.png",
    duration: "Aug 2022 – Present",
    projects: [
      {
        title: "Cloud Infrastructure & DevOps",
        description: [
          "Configured full Azure environments (ADLS, Databricks, Data Factory, VMs) with private networking using ARM templates, reducing setup time by 85%.",
          "Integrated Azure services (ADF, ADB) with Azure DevOps for streamlined version control and collaboration.",
          "Implemented CI/CD pipelines via Azure DevOps YAML to deploy 150+ artifacts (notebooks, pipelines, datasets) in under 5 minutes.",
          "Automated deployment of Databricks clusters/pools and Microsoft Purview scans using REST APIs via Azure DevOps.",
          "Authored detailed documentation in Azure Wiki covering infrastructure setup, CI/CD processes, and branching strategies.",
          "Developed PowerShell scripts and used Azure Automation Accounts to generate weekly cost and performance reports, reducing manual work by 95%.",
          "Managed production deployments, bug fixes, and enhancements during monthly release cycles.",
          "Analyzed weekly Azure cost reports to identify anomalies and provide optimization insights.",
          "Used Azure tags in Databricks resources for cost segregation and reporting across business units.",
        ],
        tags: [
          "ARM Templates",
          "Azure DevOps",
          "CI/CD",
          "YAML Pipelines",
          "Azure Databricks",
          "Microsoft Purview",
          "Azure Automation",
          "PowerShell",
        ],
      },
      {
        title: "ETL & Automations",
        description: [
          "Built ADF pipelines integrated with ADLS and ADB to migrate terabytes of on-premise data (SAP, SFTP, Salesforce, DBs) to Azure with 99% success.",
          "Created detailed logging and HTML-based email alerts in ADF to notify stakeholders of failures.",
          "Developed PySpark jobs to process gigabytes of data in various formats (CSV, JSON, XML, PARQUET) with optimal performance.",
          "Created Logic App workflows to extract SAP data via RFC and orchestrated end-to-end data flow through ADF and ADB.",
          "Engineered event-triggered pipelines to auto-load files from ADLS to target tables, handling 20+ files/day with 99% automation.",
          "Automated vacuum and optimize operations in ADB, improving table performance by 40%.",
          "Improved Databricks cluster performance and cost efficiency by 30% via advanced optimization techniques like partitioning and liquid clustering.",
          "Scheduled workflows using CRON syntax and configured them with job clusters for efficient resource use.",
          "Handled production-level CI/CD for ADB workflows and resolved critical issues including Row-Level Security and concurrency bugs.",
          "Designed category classification logic for 3 billion records using UPC, keyword, and LLM-based approaches, achieving 90%+ accuracy.",
          "Developed ADB workflows to merge all categorization strategies into a unified system for historic and incremental data.",
        ],
        tags: [
          "Azure Data Factory",
          "Azure Databricks",
          "Azure Logic Apps",
          "PySpark",
          "Spark SQL",
          "Delta Lake",
          "ETL",
          "Data Migration",
          "LLM",
          "Automation",
        ],
      },
      {
        title: "Reporting & Visualization",
        description: [
          "Built a Power BI SLA matrix report to monitor ServiceNow incidents and service requests.",
          "Designed centralized Power BI dashboards to monitor production pipelines using embedded logs for real-time visibility.",
          "Created Power BI reports to monitor weekly Azure costs, aligning insights with engineering activities.",
          "Supported post-go-live maintenance, including troubleshooting failed ADF pipelines and deploying fixes.",
          "Collaborated with business teams to define visualization needs, identify KPIs, and streamline reporting logic for dashboards.",
        ],
        tags: [
          "Power BI",
          "ServiceNow",
          "Azure Data Factory",
          "ADF Monitoring",
          "Dashboarding",
          "SLA Metrics",
          "Reporting",
          "Post-Go-Live Support",
        ],
      },
    ],
  },
  {
    company: "Capgemini",
    logo: "/assets/logos/capgemini.png",
    duration: "Feb 2022 – Apr 2022",
    projects: [
      {
        title: "Case Study: Student Attendance Management System",
        description: [
          "Worked with a team of 5 members to develop a Java-based Spring application for student attendance management using GitHub for version control and seamless collaboration.",
          "Utilized PostgreSQL as the DBMS and integrated the JDBC API into the application to perform efficient read/write operations on the database.",
          "Developed JUnit test cases to ensure robust functionality, achieving over 90% test coverage.",
          "Leveraged the SonarQube tool for code quality validation and resolved 100% of code smells and issues.",
          "Containerized the entire application using Docker and deployed it on an AWS EC2 instance, leveraging Kubernetes for orchestration and scalability.",
        ],
        tags: [
          "Java", 
          "Microservices", 
          "Maven", 
          "JUnit", 
          "Docker", 
          "Kubernetes", 
          "SonarQube", 
          "AWS (EC2 & S3)",
        ],
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
                                  <ul className="pl-5 text-sm text-gray-700 dark:text-gray-300 list-disc space-y-1">
                                    {proj.description.map((point, i) => (
                                      <li
                                        key={i}
                                        dangerouslySetInnerHTML={{ __html: highlight(point) }}
                                      ></li>
                                    ))}
                                  </ul>

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
