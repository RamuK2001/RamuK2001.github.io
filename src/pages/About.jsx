import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Database,
  BarChart,
  Wrench,
  Smile
} from "lucide-react";

// Highlight function similar to Experience.jsx
const highlight = (text) => {
  return text
    .replace(/\b(Azure|ADF|ADB|DevOps|Databricks|Data Factory|VMs|Power BI|ARM templates|YAML|CI\/CD|PySpark|Logic Apps|Delta Lake|LLM|PowerShell|CRON|ServiceNow|Dashboarding|ETL|SQL|SAP|SFTP|Salesforce|ADLS|Terraform|historic|incremental|Unity Catalog|HTML|Vacuum|Optimize|Partitioning|Z-Ordering|Liquid Clustering|Row-Level Security|REST APIs|Microsoft Fabric|Star|Snowflake|SCDs|SonarQube|ARMTTK|Automation Account|cost|performance|reports|dimension tables|table|artifact|infrastructure|IaC|infrastructure as code|selective deployment|pipeline|cluster|job|metrics|manual effort|real-time|SLA tracking|job monitoring|performance insights)\b/gi, '<span class="font-semibold text-blue-700 dark:text-blue-400">$1</span>')
    .replace(/(\d+%|\d+B|\d+\+? files\/day|under \d+ minutes|\d+ records|\d+ billion|40%|85%|95%|99%|80%)/g, '<span class="font-semibold text-green-700 dark:text-green-400">$1</span>')
    .replace(/\b(gigabytes|terabytes)\b/gi, '<span class="font-semibold text-pink-700 dark:text-pink-400">$1</span>')
    .replace(/\b(CSV|Excel|XML|Parquet)\b/g, '<span class="italic">$1</span>');
};

const highlights = [
  "Designed and developed ETL pipelines in Azure Data Factory (ADF) migrating terabytes of data from sources like SAP, Salesforce, on-premise DBs to Azure, achieving a 99% success rate.",
  "Developed PySpark-based processing in Azure Databricks (ADB) Jobs & Pipelines handling gigabytes of data across formats like CSV, Excel, XML, Parquet.",
  "Expert in developing complex SQL queries with multiple CTEs and window functions based on business requirements and optimizing queries by utilizing advanced concepts like Partitioning and Liquid Clustering.",
  "Experienced in developing data models using Star and Snowflake schemas and also defining SCDs on dimension tables as per business requirements.",
  "Automated Vacuum and Optimize operations on ADB tables, improving table read/write performance by 40%.",
  "Reduced cloud infrastructure setup time by 85% using IaC (Infrastructure as Code) developed using ARM templates and Terraform and deployed through Azure DevOps.",
  "Implemented selective deployment feature in the CI/CD pipeline, enabling targeted artifact deployment and improving speed & flexibility.",
  "Integrated SonarQube and ARMTTK with Azure DevOps for automating code quality checks, saving 80% review effort.",
  "Automated weekly cost, ADF & ADB performance reports, and ADB cluster usage metrics extraction using PowerShell and Azure Automation Account, reducing manual effort by 95%.",
  "Built near real-time Power BI dashboards for SLA tracking and job monitoring, improving performance insights."
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

export default function About() {
  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-white mb-6 text-center">
              💼 Professional Highlights
            </h3>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-4">
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

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-white mb-6 text-center">
              🛠️ Skills
            </h3>
            <div className="space-y-6">
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
                        {skill.text.split(',').map((tech, i) => (
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
        </div>
      </div>
    </section>
  );
}
