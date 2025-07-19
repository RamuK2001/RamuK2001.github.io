export default function About() {
  return (
    <>
      {/* Professional Highlights Section */}
      <section className="p-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-[60vh]">
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md max-w-4xl mx-auto p-8">
          <h2 className="text-3xl font-bold text-purple-800 dark:text-white mb-6 text-center">
            💼 Professional Highlights
          </h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-3">
            <li>Designed and developed ETL pipelines in ADF migrating terabytes of data from on-premise to Azure, achieving a 99% success rate.</li>
            <li>Developed PySpark-based data processing solutions handling gigabytes of data daily across multiple formats.</li>
            <li>Automated Vacuum and Optimize operations on ADB tables, enhancing storage efficiency and boosting table performance by 40%, and optimized query performance through improved code design and utilizing advanced techniques like partitioning and liquid clustering.</li>
            <li>85% reduction in manual infrastructure setup time using ARM templates, Terraform, and Azure DevOps pipelines.</li>
            <li>Implemented a selective deployment feature in the CI/CD pipeline, enabling targeted artifact deployment for increased flexibility and reduced deployment time.</li>
            <li>Automated code quality checks by integrating SonarQube and ARMTTK with Azure DevOps, reducing manual review effort by 80%.</li>
            <li>Automated the weekly cost, ADF pipeline performance, and Databricks clusters usage metrics reports extraction using Azure PowerShell modules, and Azure Automation Account, reducing manual effort by 95%.</li>
            <li>Built real-time Power BI dashboards for SLA tracking and pipeline monitoring, improving performance insights.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 min-h-[60vh]">
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md max-w-4xl mx-auto p-8">
          <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-6 text-center">
            🛠️ Skills
          </h3>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li><strong>Languages:</strong> Python, PySpark, Java, C, C++, PowerShell, Unix, SQL</li>
            <li><strong>Cloud Services:</strong> Azure Data Factory, Azure Databricks, Azure Data Lake Storage, Logic App, Automation Account, Purview, ARM Templates Deployment, Terraform, Azure DevOps (YAML Pipelines, Repos, Boards), AWS (EC2 & S3)</li>
            <li><strong>Big Data:</strong> Hadoop, Scala, HDFS, Pig, HQL, Hive, Kafka, Spark</li>
            <li><strong>Reporting:</strong> Power BI, Microsoft Fabric</li>
            <li><strong>Other Tools/Technologies:</strong> HTML, CSS, JavaScript, Spring Framework, Docker, Kubernetes, SonarQube, Eclipse, JPA, Hibernate, Maven</li>
            <li><strong>Soft Skills:</strong> Quick learning ability, Problem solving, Critical thinking, Attention to detail, Adaptability, Communication, Googling & AI Prompting</li>
          </ul>
        </div>
      </section>
    </>
  );
}
