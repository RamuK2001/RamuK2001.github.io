export default function Projects() {
  return (
    <section className="p-10 bg-blue-50 max-w-4xl mx-auto rounded-xl">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Key Projects</h2>

      <div className="mb-6 bg-white shadow-md rounded-lg p-5">
        <h3 className="text-xl font-semibold text-purple-700">CI/CD for Azure DevOps</h3>
        <p>YAML pipelines, SonarQube integration, deploy 150+ artifacts in 5 minutes.</p>
      </div>

      <div className="mb-6 bg-white shadow-md rounded-lg p-5">
        <h3 className="text-xl font-semibold text-purple-700">Real-time ETL Pipelines</h3>
        <p>PySpark jobs for gigabyte-scale ingestion from SAP, Salesforce, SFTP to Delta Lake.</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-5">
        <h3 className="text-xl font-semibold text-purple-700">LLM-based Classification</h3>
        <p>Used OpenAI to classify 2.5B records with 90% accuracy using hybrid methods.</p>
      </div>
    </section>
  );
}
