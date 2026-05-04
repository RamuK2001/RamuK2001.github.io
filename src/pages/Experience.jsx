import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import BackgroundVisuals from "../components/BackgroundVisuals";

const highlight = (text) => {
  return text
    .replace(/\b(Azure|ADF|Databricks|DevOps|Databricks|Data Factory|VMs|Power BI|ARM templates|YAML|CI\/CD|PySpark|Logic Apps|Delta Lake|LLM|PowerShell|CRON|ServiceNow|Dashboarding|ETL|SQL|SAP|SFTP|Salesforce|ADLS|Terraform|historic|incremental|Unity Catalog|HTML|Vacuum|Optimize|Partitioning|Z-Ordering|Liquid Clustering|Row-Level Security|REST APIs|Microsoft Fabric)\b/g, '<span class="font-semibold text-blue-700 dark:text-blue-400">$1</span>')
    .replace(/(\d+%|\d+B|\d+\+? files\/day|under \d+ minutes|\d+ records|\d+ billion)/g, '<span class="font-semibold text-green-700 dark:text-green-400">$1</span>')
    .replace(/\b(gigabytes|terabytes)\b/g, '<span class="font-semibold text-pink-700 dark:text-pink-400">$1</span>')
    .replace(/\b(CSV|JSON|XML|PARQUET)\b/g, '<span class="italic">$1</span>');
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
          "Configured end-to-end Azure environments (ADLS, Databricks, Data Factory, VMs, etc.,) with private networking using ARM templates and Terraform, reducing setup time by 85%.",
          "Implemented CI/CD YAML-based pipelines via Azure DevOps to deploy 150+ artifacts selectively (notebooks, pipelines, datasets) in under 5 minutes.",
          "Automated deployment of Databricks clusters/pools and Microsoft Purview scans using REST APIs and Azure Powershell via Azure DevOps.",
          "Developed PowerShell scripts and used Azure Automation Accounts to generate weekly cost and job performance reports, reducing manual work by 95%.",
          "Managed production deployments, bug fixes, and enhancements during monthly release cycles through automated DevOps pipelines.",
          "Analyzed weekly Azure cost reports to identify anomalies and provide optimization insights.",
          "Integrated Azure services (ADF, Databricks) with Azure DevOps for streamlined version control and collaboration.",
          "Authored comprehensive documentation in Azure Wiki detailing infrastructure configurations, CI/CD workflows, and DevOps security practices.",
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
        title: "ETL & Data Engineering",
        description: [
          "Built scheduled ADF pipelines integrated with ADLS and Databricks to migrate terabytes of on-premise data (SAP, SFTP, Salesforce, on-prem DBs) to Azure Unity Catalog with 99% success rate.",
          "Created detailed logging and HTML-based email alerts in ADF to notify stakeholders of failures.",
          "Developed PySpark jobs to process gigabytes of data daily in various formats (CSV, JSON, XML, PARQUET) with optimal performance.",
          "Created Logic App workflows to extract SAP data via RFC and orchestrated end-to-end data flow through ADF and Databricks.",
          "Engineered event-triggered pipelines to auto-load files from ADLS to target tables, handling 20+ files/day with 99% automation.",
          "Automated Vacuum and Optimize operations in Databricks, improving storage costs and table performance by 30%.",
          "Improved Databricks cluster performance and cost efficiency using optimization techniques like Partitioning, Z-Ordering, Broadcasting, Caching and Liquid Clustering.",
          "Scheduled Databricks jobs using CRON syntax and leveraged job clusters for efficient resource usage.",
          "Handled production-level CI/CD for Databricks jobs and resolved critical issues including Row-Level Security and concurrency bugs.",
          "Developed generic Databricks jobs to ingest both historic and incremental data extracted from on-prem Databases using JDBC into Delta Lake.",
          "Performed a POC in Microsoft Fabric to ingest data into a Lakehouse from multiple sources (ADLS, OneLake, and AWS S3 Bucket).",
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
          "OneLake",
        ],
      },
      {
        title: "Data Transformations using LLM",
        description: [
          "Led a team of 5 to design a product categorization job in Databricks for over 2.5 billion records data using lookup tables, keyword matching, and LLM-based approaches, achieving over 90% accuracy.",
          "Engineered a cost-optimized LLM processing strategy by sampling 0.2% of over 2.5 billion records of data to generalize classification, significantly reducing compute costs while maintaining accuracy.",
          "Developed a prompting framework in Databricks using Python to optimize LLM performance for data categorization, increasing accuracy by 20%.",
          "Leveraged Mostly AI SDK to generate synthetic data for testing and validation of data pipelines, effectively preventing use of production data for testing purposes and ensuring data privacy.",
          "Implemented RAI policies in Azure Open AI to ensure responsible AI usage and compliance with organizational guidelines with appropriate content filtering.",
        ],
        tags: [
          "Azure Open AI",
          "Mostly AI",
          "Databricks",
          "RAI Policies",
          "Prompt Engineering",
        ],
      },
      {
        title: "Reporting & Visualization",
        description: [
          "Designed and developed AI/BI dashboards in Databricks to monitor LLM usage metrics, including input/output token consumption, request volume, and cost analysis, enabling real-time visibility into model utilization.",
          "Designed centralized Power BI dashboard to monitor production ADF pipelines using embedded logs for near real-time visibility.",
          "Modeled optimized star schema semantic layers by de-normalizing complex relational datasets into fact and dimension tables, leveraging DAX measures, relationships, and aggregations to improve report query performance by 30%.",
          "Leveraged REST APIs to trigger near real-time report refreshes, effectively overcoming the scheduling limitations of the Power BI service and reducing data latency from 2 hours to 10 minutes.",
          "Evaluated Microsoft Fabric against Azure Data Factory and Databricks for reporting use cases, leading to a successful pilot implementation that enhanced user experience and improved data lineage tracking.",
          "Collaborated with business teams to define visualization needs, identify KPIs, and streamline reporting logic for dashboards.",
        ],
        tags: [
          "Power BI",
          "Microsoft Fabric",
          "AI/BI Dashboards",
          "REST APIs",
        ],
      },
      {
        title: "Data Governance & Security",
        description: [
          "Implemented centralized data governance using Unity Catalog, managing external and managed Delta tables with a unified metastore, enabling fine-grained access control, data lineage tracking, and secure data sharing across environments.",
          "Utilized Microsoft Purview to classify and catalog datasets from various sources such as Databricks, ADLS and Fabric, enabling data discovery for downstream consumers.",
          "Established data quality monitoring frameworks for curated Delta tables, profiling datasets to track schema consistency, data freshness, and usage patterns over time.",
          "Designed and enforced Row-Level Security (RLS) on 100M+ record datasets using Azure AD group-based access control, ensuring secure and role-based data access for downstream consumers.",
          "Integrated data validation rules within ETL pipelines to enforce business constraints, detect anomalies, and prevent propagation of invalid data into curated layers.",
          "Collaborated with security teams to implement RBAC policies in Unity Catalog, ensuring least-privilege access and compliance with organizational security standards.",
        ],
        tags: [
          "Databricks Unity Catalog",
          "Microsoft Purview",
          "Row Level Security",
          "RBAC",
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
    <>
      <BackgroundVisuals />
      <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-slate-950 dark:to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] mb-10 text-center">
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
                      <p className="text-sm text-gray-700 dark:text-gray-100 text-justify">
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
                      <ul className="space-y-4 text-justify">
                        {exp.projects.map((proj, projIndex) => {
                          const isOpen = openProj.includes(projIndex);

                          return (
                            <motion.li
                              key={projIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: projIndex * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                              whileHover={{
                                scale: 1.025,
                                boxShadow:
                                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="relative z-10 bg-white dark:bg-gray-900/40 p-4 rounded-xl border border-purple-200 dark:border-purple-600 shadow-md"
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
                                    <ul className="pl-5 text-sm text-gray-700 dark:text-gray-100 list-disc space-y-1 text-justify">
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
    </>
  );
}
