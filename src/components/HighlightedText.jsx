const techTerms = [
  "Azure Data Factory",
  "Azure Databricks",
  "Azure DevOps",
  "Azure Automation",
  "Azure OpenAI",
  "Microsoft Fabric",
  "Microsoft Purview",
  "Power BI",
  "PowerShell",
  "REST APIs",
  "Row-Level Security",
  "Unity Catalog",
  "Liquid Clustering",
  "ARM Templates",
  "Automation Account",
  "Azure",
  "Databricks",
  "Data Factory",
  "Delta Lake",
  "Logic App",
  "Logic Apps",
  "ADF",
  "ADB",
  "ADLS",
  "VMs",
  "YAML",
  "CI/CD",
  "PySpark",
  "LLM",
  "CRON",
  "ServiceNow",
  "Dashboarding",
  "ETL",
  "SQL",
  "SAP",
  "SFTP",
  "Salesforce",
  "Terraform",
  "Vacuum",
  "Optimize",
  "Partitioning",
  "Z-Ordering",
  "SonarQube",
  "ARMTTK",
  "IaC",
  "Purview",
  "RLS",
  "RBAC",
  "JDBC",
  "RFC",
  "OneLake",
  "DAX",
  "KPI",
  "KPIs",
  "RAI Policies",
  "Mostly AI",
  "Prompt Engineering",
  "Java",
  "Spring",
  "GitHub",
  "PostgreSQL",
  "DBMS",
  "JUnit",
  "Docker",
  "Kubernetes",
  "AWS",
  "EC2",
  "S3",
  "Maven",
  "near real-time",
  "pipeline",
  "pipelines",
  "cluster",
  "clusters",
  "job",
  "jobs",
  "metrics",
  "performance",
  "cost",
  "reports",
  "artifacts",
  "infrastructure",
  "targeted",
];

const scaleTerms = ["gigabytes", "terabytes"];
const formatTerms = ["CSV", "Excel", "JSON", "XML", "Parquet", "PARQUET"];

const metricSource = [
  "under\\s+\\d+\\s+minutes",
  "over\\s+\\d+(?:\\.\\d+)?\\s+billion",
  "\\d+(?:\\.\\d+)?\\s+billion",
  "\\d+(?:\\.\\d+)?%",
  "\\d+B",
  "\\d+M\\+",
  "\\d+\\+?\\s+files\\/day",
  "\\d+\\+?\\s+artifacts",
  "\\d+\\s+minutes",
  "\\d+\\s+hours",
  "\\d+\\s+members",
  "\\d+\\s+records",
  "100M\\+",
].join("|");

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const sortByLengthDesc = (items) => [...items].sort((a, b) => b.length - a.length);

const allTerms = sortByLengthDesc([...techTerms, ...scaleTerms, ...formatTerms]).map(escapeRegex);
const splitPattern = new RegExp(`(${metricSource}|${allTerms.join("|")})`, "gi");
const metricPattern = new RegExp(`^(?:${metricSource})$`, "i");
const techTermSet = new Set(techTerms.map((term) => term.toLowerCase()));
const scaleTermSet = new Set(scaleTerms.map((term) => term.toLowerCase()));
const formatTermSet = new Set(formatTerms.map((term) => term.toLowerCase()));

function getHighlightClass(value) {
  const normalized = value.toLowerCase();

  if (metricPattern.test(value)) {
    return "font-semibold text-green-700 dark:text-green-400 bg-green-100/50 dark:bg-green-900/30 px-1 rounded";
  }

  if (scaleTermSet.has(normalized)) {
    return "font-semibold text-pink-700 dark:text-pink-400 bg-pink-100/50 dark:bg-pink-900/30 px-1 rounded";
  }

  if (formatTermSet.has(normalized)) {
    return "italic text-purple-700 dark:text-purple-400";
  }

  if (techTermSet.has(normalized)) {
    return "font-semibold text-blue-800 dark:text-blue-300 bg-blue-100/50 dark:bg-blue-900/30 px-1 rounded";
  }

  return "";
}

export default function HighlightedText({ text }) {
  return (
    <>
      {String(text)
        .split(splitPattern)
        .filter(Boolean)
        .map((part, index) => {
          const className = getHighlightClass(part);

          return className ? (
            <span key={`${part}-${index}`} className={className}>
              {part}
            </span>
          ) : (
            <span key={`${part}-${index}`}>{part}</span>
          );
        })}
    </>
  );
}
