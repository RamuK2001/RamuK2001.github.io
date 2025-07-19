export default function About() {
  return (
    <section className="p-10 bg-white shadow-md rounded-xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Professional Highlights</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Designed and developed ETL pipelines in ADF migrating terabytes of data from on-premise to Azure, achieving a 99% success rate.</li>
        <li>Developed PySpark-based data processing solutions handling gigabytes of data daily across multiple formats.</li>
        <li>Automated Vacuum and Optimize operations on ADB tables, enhancing storage efficiency and boosting table performance by 40%, and optimized query performance through improved code design and utilizing advanced techniques like partitioning and liquid clustering.</li>
        <li>85% reduction in manual infrastructure setup time using ARM templates, Terraform, and Azure DevOps pipelines.</li>
        <li>Implemented a selective deployment feature in the CI/CD pipeline, enabling targeted artifact deployment for increased flexibility and reduced deployment time.</li>
        <li>Automated code quality checks by integrating SonarQube and ARMTTK with Azure DevOps, reducing manual review effort by 80%.</li>
        <li>Automated the weekly cost, ADF pipeline performance, and Databricks clusters usage metrics reports extraction using Azure PowerShell modules, and Azure Automation Account, reducing manual effort by 95%.</li>
        <li>Built real-time Power BI dashboards for SLA tracking and pipeline monitoring, improving performance insights.</li>
      </ul>

      <h3 className="text-xl font-semibold text-purple-700 mt-6">Skills</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li><strong>Languages:</strong> Python, PySpark, Java, C, C++, PowerShell, Unix, SQL</li>
        <li><strong>Cloud Services:</strong> Azure Data Factory, Azure Databricks, Azure Data Lake Storage, Logic App, Automation Account, Purview, ARM Templates Deployment, Terraform, Azure DevOps (YAML Pipelines, Repos, Boards), AWS (EC2 & S3)</li>
        <li><strong>Big Data:</strong> Hadoop, Scala, HDFS, Pig, HQL, Hive, Kafka, Spark</li>
        <li><strong>Reporting:</strong> Power BI, Microsoft Fabric</li>
        <li><strong>Other Tools/Technologies:</strong> HTML, CSS, JavaScript, Spring Framework, Docker, Kubernetes, SonarQube, Eclipse, JPA, Hibernate, Maven</li>
        <li><strong>Soft Skills:</strong> Quick learning ability, Problem solving, Critical thinking, Attention to detail, Adaptability, Communication, Googling & AI Prompting</li>
      </ul>
    </section>
  );
}
