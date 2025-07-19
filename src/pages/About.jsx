export default function About() {
  return (
    <section className="p-10 bg-white shadow-md rounded-xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">About Me</h2>
      <p className="text-gray-800">
        I'm a results-driven Azure Data Engineer with strong expertise in Azure cloud solutions, data migration, and automation.
      </p>

      <h3 className="text-xl font-semibold text-purple-700 mt-6">Skills</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li><strong>Languages:</strong> Python, PySpark, PowerShell, SQL</li>
        <li><strong>Tools:</strong> Azure ADF, Databricks, DevOps, Terraform</li>
        <li><strong>Big Data:</strong> Spark, Hive, Kafka, Hadoop</li>
        <li><strong>Reporting:</strong> Power BI</li>
        <li><strong>Soft Skills:</strong> Problem Solving, Communication</li>
      </ul>
    </section>
  );
}
