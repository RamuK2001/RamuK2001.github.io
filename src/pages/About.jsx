import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Database,
  BarChart,
  Wrench,
  Smile
} from "lucide-react";

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
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-3">
              {[
                <>
                  Designed and developed{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">ETL pipelines</span> in{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Azure Data Factory (ADF)</span>{" "}
                  migrating <span className="font-semibold text-pink-700 dark:text-pink-400">terabytes of data</span> from sources like{" "}
                  <span className="italic">SAP, Salesforce, on-premise DBs</span> to Azure, achieving a{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">99% success rate</span>.
                </>,
                <>
                  Developed{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">PySpark-based</span> processing in{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Azure Databricks (ADB)</span>{" "}
                  Jobs & Pipelines handling{" "}
                  <span className="font-semibold text-pink-700 dark:text-pink-400">gigabytes of data</span> across formats like{" "}
                  <span className="italic">CSV, Excel, XML, Parquet</span>.
                </>,
                <>
                  Expert in developing complex{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">SQL queries</span> with multiple{" "}
                  <span className="italic">CTEs and window functions</span> based on business requirements and optimizing queries by utilizing advanced concepts like{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Partitioning</span> and{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Liquid Clustering</span>.
                </>,
                <>
                  Experienced in developing data models using{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Star</span> and{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Snowflake</span> schemas and also defining{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">SCDs</span> on dimension tables as per business requirements.
                </>,
                <>
                  Automated{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Vacuum</span> and{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">Optimize</span> operations on ADB tables, improving table read/write{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">performance by 40%</span>.
                </>,
                <>
                  Reduced cloud infrastructure setup time by{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">85%</span> using IaC (Infrastructure as Code) developed using{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">ARM templates</span> and{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Terraform</span> and deployed through{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Azure DevOps</span>.
                </>,
                <>
                  Implemented{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">selective deployment</span> feature in the{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">CI/CD pipeline</span>, enabling targeted artifact deployment and improving speed & flexibility.
                </>,
                <>
                  Integrated{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">SonarQube</span> and{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">ARMTTK</span> with{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Azure DevOps</span> for automating{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">code quality checks</span>, saving{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">80% review effort</span>.
                </>,
                <>
                  Automated weekly{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">cost, ADF & ADB performance reports, and ADB cluster usage metrics</span> extraction using{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">PowerShell</span> and{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Azure Automation Account</span>, reducing{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">manual effort by 95%</span>.
                </>,
                <>
                  Built near real-time{" "}
                  <span className="font-semibold text-blue-700 dark:text-blue-400">Power BI dashboards</span> for{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">SLA tracking</span> and{" "}
                  <span className="font-semibold text-purple-700 dark:text-purple-400">job monitoring</span>, improving performance insights.
                </>
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
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
