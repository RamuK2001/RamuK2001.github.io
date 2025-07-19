export default function About() {
  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Highlights */}
          <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-white mb-4 text-center">
              💼 Professional Highlights
            </h3>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-3">
              <li>Designed and developed ETL pipelines in ADF migrating terabytes of data from on-premise to Azure, achieving a 99% success rate.</li>
              <li>Developed PySpark-based data processing solutions handling gigabytes of data daily across multiple formats.</li>
              <li>Automated Vacuum and Optimize operations on ADB tables, enhancing storage efficiency and boosting table performance by 40%.</li>
              <li>Reduced manual infrastructure setup time by 85% using ARM templates, Terraform, and Azure DevOps.</li>
              <li>Implemented a selective deployment feature in the CI/CD pipeline, reducing deployment time and increasing flexibility.</li>
              <li>Integrated SonarQube and ARMTTK with Azure DevOps to automate code quality checks, reducing manual reviews by 80%.</li>
              <li>Automated weekly reports for cost, ADF performance, and Databricks metrics using PowerShell and Automation Account.</li>
              <li>Built real-time Power BI dashboards for SLA tracking and pipeline monitoring.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-purple-800 dark:text-white mb-4 text-center">
              🛠️ Skills
            </h3>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
              <li><strong>Languages:</strong> Python, PySpark, Java, C, C++, PowerShell, Unix, SQL</li>
              <li><strong>Cloud Services:</strong> Azure Data Factory, Azure Databricks, Azure Data Lake, Logic App, Automation Account, Purview, ARM Templates, Terraform, Azure DevOps (YAML), AWS (EC2 & S3)</li>
              <li><strong>Big Data:</strong> Hadoop, Scala, HDFS, Pig, Hive, Kafka, Spark</li>
              <li><strong>Reporting:</strong> Power BI, Microsoft Fabric</li>
              <li><strong>Other Tools:</strong> HTML, CSS, JS, Spring, Docker, K8s, SonarQube, Eclipse, Hibernate, Maven</li>
              <li><strong>Soft Skills:</strong> Problem solving, Critical thinking, Adaptability, Communication, AI Prompting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
