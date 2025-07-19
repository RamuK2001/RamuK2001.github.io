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
    text: "Problem solving, Critical thinking, Adaptability, Communication, AI Prompting",
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
                "Designed and developed ETL pipelines in ADF migrating terabytes of data from on-premise to Azure, achieving a 99% success rate.",
                "Developed PySpark-based data processing solutions handling gigabytes of data daily across multiple formats.",
                "Automated Vacuum and Optimize operations on ADB tables, enhancing storage efficiency and boosting table performance by 40%.",
                "Reduced manual infrastructure setup time by 85% using ARM templates, Terraform, and Azure DevOps.",
                "Implemented a selective deployment feature in the CI/CD pipeline, reducing deployment time and increasing flexibility.",
                "Integrated SonarQube and ARMTTK with Azure DevOps to automate code quality checks, reducing manual reviews by 80%.",
                "Automated weekly reports for cost, ADF performance, and Databricks metrics using PowerShell and Automation Account.",
                "Built real-time Power BI dashboards for SLA tracking and pipeline monitoring.",
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
                            className="text-sm px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-700/30 dark:text-purple-200 rounded-full"
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
