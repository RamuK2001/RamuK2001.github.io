export default function Projects() {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Key Projects</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">CI/CD for Azure DevOps</h3>
        <p>Built YAML-based pipelines to deploy ADF, ADB artifacts, integrated code quality checks with SonarQube and ARMTTK, enabling fast, flexible, and reliable deployments.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Real-time ETL Pipelines</h3>
        <p>Developed PySpark-based ETL jobs in Azure Databricks to process gigabytes of structured/unstructured data from SAP, Salesforce, and SFTP into Delta Lake.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">LLM-based Classification</h3>
        <p>Implemented Azure OpenAI model to classify over 2.5B records using hybrid methods (UPC, keyword, LLM) with 90% accuracy while reducing computational cost.</p>
      </div>
    </section>
  );
}
