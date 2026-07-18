export const profileMetrics = [
  {
    value: "4+",
    label: "Years of Azure delivery",
  },
  {
    value: "20+ TB",
    label: "Data migrated to Azure",
  },
  {
    value: "85%",
    label: "Faster environment setup",
  },
  {
    value: "99%",
    label: "Pipeline success rate",
  },
  {
    value: "6",
    label: "Cloud and data certifications",
  },
];

export const achievements = [
  {
    icon: "badge",
    text: [
      "Recognized by internal delivery heads for representing my current project as the primary presenter during an external audit by Microsoft, delivering an end-to-end walkthrough of architecture design, delivery processes, and documentation against the audit checklist, contributing to Infosys securing the ",
      {
        label: "Data Warehouse Migration to Microsoft Azure specialization",
        href: "https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration#tab-4",
      },
      ".",
    ],
  },
  {
    icon: "thumbs",
    text: "Earned an official appreciation from the client for going above and beyond in resolving a critical incident during a crucial month-end business closure outside the scope of the project and my usual work hours.",
  },
  {
    icon: "check",
    text: "Received a designated client appreciation for delivering exceptional cross-project support by automating CI/CD deployments and providing expertise in infrastructure automation, ETL best practices, and DevOps excellence.",
  },
  {
    icon: "star",
    text: 'Consistently recognized with "Rise Insta" awards for exceptional performance every quarter.',
  },
  {
    icon: "award",
    text: 'Awarded with the "Business Ninja Award" in recognition of remarkable contributions and outstanding achievements.',
  },
  {
    icon: "shield",
    text: 'Achieved the "Outstanding" rating twice in year-end performance appraisals, reflecting exceptional contributions.',
  },
];

export const highlights = [
  "Built scheduled Azure Data Factory (ADF) pipelines integrated with ADLS and Azure Databricks (ADB) to migrate terabytes of on-premise data (SAP, SFTP, Salesforce, on-prem DBs) into Unity Catalog with 99% success rate, featuring detailed logging and HTML-based failure alerts.",
  "Developed generic PySpark jobs in ADB for ingesting and processing both historic and incremental data from flat-files (CSV, Excel, JSON, XML, Parquet) and on-prem DBs via JDBC, orchestrated using REST APIs.",
  "Led a team of 5 to design a scalable product categorization job in ADB for over 2.5 billion records leveraging external lookup tables, keyword matching, and LLM-based approaches, achieving over 90% accuracy.",
  "Automated ADB Vacuum and Optimize and achieved 75% improvement in query performance by implementing Partitioning, Z-Ordering, and Liquid Clustering based on the data cardinality.",
  "Provisioned full-stack Azure environments (ADLS, ADB, ADF, VMs) with private networking via ARM templates and Terraform, cutting setup time by 85%.",
  "Designed a YAML-based CI/CD pipeline in Azure DevOps to deploy ADF and ADB artifacts (notebooks, jobs, pipelines, etc.), incorporating targeted deployment for improved flexibility and faster release cycles.",
  "Automated code quality checks by integrating SonarQube and ARMTTK with the CI/CD pipeline, reducing manual review effort by 80%.",
  "Developed centralized monitoring and analytics solutions using Power BI and Databricks, enabling near real-time visibility into pipeline performance, SLA compliance, and LLM usage metrics across large-scale data platforms.",
  "Implemented robust data governance and quality frameworks using Unity Catalog, Purview, RLS, and validation rules integrated with ETL, ensuring secure, reliable, and high-quality data for downstream analytics.",
];

export const skills = [
  {
    icon: "code",
    label: "Languages",
    technologies: [
      { name: "Python", core: true },
      { name: "PySpark", core: true },
      { name: "PowerShell", core: true },
      { name: "SQL", core: true },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
      { name: "Unix" },
    ],
  },
  {
    icon: "cloud",
    label: "Cloud Services",
    technologies: [
      { name: "Azure Data Factory", core: true },
      { name: "Azure Databricks", core: true },
      { name: "Azure Data Lake", core: true },
      { name: "Purview", core: true },
      { name: "ARM Templates", core: true },
      { name: "Terraform", core: true },
      { name: "Azure DevOps (YAML)", core: true },
      { name: "Logic App" },
      { name: "Automation Account" },
      { name: "AWS (EC2 & S3)" },
    ],
  },
  {
    icon: "database",
    label: "Big Data",
    technologies: [
      { name: "Spark", core: true },
      { name: "Hadoop" },
      { name: "Scala" },
      { name: "HDFS" },
      { name: "Pig" },
      { name: "Hive" },
      { name: "Kafka" },
    ],
  },
  {
    icon: "chart",
    label: "Reporting",
    technologies: [
      { name: "Power BI", core: true },
      { name: "Microsoft Fabric", core: true },
    ],
  },
  {
    icon: "tools",
    label: "Other Tools",
    technologies: [
      { name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "Spring" }, { name: "Docker" }, { name: "K8s" }, { name: "SonarQube" }, { name: "Eclipse" }, { name: "Hibernate" }, { name: "Maven" },
    ],
  },
  {
    icon: "smile",
    label: "Soft Skills",
    technologies: [
      { name: "Problem solving" },
      { name: "Critical thinking" },
      { name: "Adaptability" },
      { name: "Quick learning ability" },
      { name: "Attention to detail" },
    ],
  },
  {
    icon: "methodologies",
    label: "Methodologies & Principles",
    technologies: [
      { name: "Agile" },
      { name: "Scrum" },
      { name: "CI/CD" },
      { name: "Data Governance" },
      { name: "ETL Best Practices" },
      { name: "DevOps" },
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology in Electronics & Communication Engineering",
  institution: "Vardhaman College of Engineering, Hyderabad",
  duration: "2018 - 2022",
  focus: ["Python", "Java", "Embedded C", "RDBMS", "Real time systems"],
};

export const certifications = [
  {
    logo: "/assets/badges/db_professional_badge.png",
    title: "Data Engineer Professional",
    issuer: "Databricks",
    date: "Issued Jun 2025",
    link: "https://credentials.databricks.com/a433bf7e-4db4-484a-8f3b-bec4761b103b#acc.uQJa82lf",
  },
  {
    logo: "/assets/badges/microsoft-certified-expert-badge.png",
    title: "Azure Solutions Architect Expert (AZ-305)",
    issuer: "Microsoft",
    date: "Issued Dec 2025",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/6C22BEF46B187286",
  },
  {
    logo: "/assets/badges/dp_600_badge.png",
    title: "Fabric Analytics Engineer Associate (DP-600)",
    issuer: "Microsoft",
    date: "Issued Dec 2024",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/4758FFFD196B98F",
  },
  {
    logo: "/assets/badges/dp_600_badge.png",
    title: "Fabric Data Engineer Associate (DP-700)",
    issuer: "Microsoft",
    date: "Issued Mar 2026",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/34249CB5868CC6BB",
  },
  {
    logo: "/assets/badges/az_fundamentals_badge.png",
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Issued Jan 2023",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/470AB1DC400F6146",
  },
  {
    logo: "/assets/badges/az_fundamentals_badge.png",
    title: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "Issued Jan 2023",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/E573B6137CAF15FE",
  },
];

export const experienceData = [
  {
    company: "Infosys",
    logo: "/assets/logos/infosys.png",
    duration: "Aug 2022 - Present",
    projects: [
      {
        title: "Cloud Infrastructure & DevOps",
        description: [
          "Configured end-to-end Azure environments (ADLS, Databricks, Data Factory, VMs, etc.) with private networking using ARM templates and Terraform, reducing setup time by 85%.",
          "Implemented CI/CD YAML-based pipelines via Azure DevOps to deploy 150+ artifacts selectively (notebooks, pipelines, datasets) in under 5 minutes.",
          "Automated deployment of Databricks clusters/pools and Microsoft Purview scans using REST APIs and Azure PowerShell via Azure DevOps.",
          "Developed PowerShell scripts and used Azure Automation Accounts to generate weekly cost and job performance reports, reducing manual work by 95%.",
          "Managed production deployments, bug fixes, and enhancements during monthly release cycles through automated DevOps pipelines.",
          "Analyzed weekly Azure cost reports to identify anomalies and provide optimization insights.",
          "Integrated Azure services (ADF, Databricks) with Azure DevOps for streamlined version control and collaboration.",
          "Authored comprehensive documentation in Azure Wiki detailing infrastructure configurations, CI/CD workflows, and DevOps security practices.",
        ],
        tags: [
          "ARM Templates",
          "Azure DevOps",
          "CI/CD",
          "YAML Pipelines",
          "Azure Databricks",
          "Microsoft Purview",
          "Azure Automation",
          "PowerShell",
        ],
      },
      {
        title: "ETL & Data Engineering",
        description: [
          "Built scheduled ADF pipelines integrated with ADLS and Databricks to migrate terabytes of on-premise data (SAP, SFTP, Salesforce, on-prem DBs) to Azure Unity Catalog with 99% success rate.",
          "Created detailed logging and HTML-based email alerts in ADF to notify stakeholders of failures.",
          "Developed PySpark jobs to process gigabytes of data daily in various formats (CSV, JSON, XML, PARQUET) with optimal performance.",
          "Created Logic App workflows to extract SAP data via RFC and orchestrated end-to-end data flow through ADF and Databricks.",
          "Engineered event-triggered pipelines to auto-load files from ADLS to target tables, handling 20+ files/day with 99% automation.",
          "Automated Vacuum and Optimize operations in Databricks, improving storage costs and table performance by 30%.",
          "Improved Databricks cluster performance and cost efficiency using optimization techniques like Partitioning, Z-Ordering, Broadcasting, Caching, and Liquid Clustering.",
          "Scheduled Databricks jobs using CRON syntax and leveraged job clusters for efficient resource usage.",
          "Handled production-level CI/CD for Databricks jobs and resolved critical issues including Row-Level Security and concurrency bugs.",
          "Developed generic Databricks jobs to ingest both historic and incremental data extracted from on-prem Databases using JDBC into Delta Lake.",
          "Performed a POC in Microsoft Fabric to ingest data into a Lakehouse from multiple sources (ADLS, OneLake, and AWS S3 Bucket).",
        ],
        tags: [
          "Azure Data Factory",
          "Azure Databricks",
          "Azure Logic Apps",
          "PySpark",
          "Spark SQL",
          "Delta Lake",
          "ETL",
          "Data Migration",
          "LLM",
          "OneLake",
        ],
      },
      {
        title: "Data Transformations using LLM",
        description: [
          "Led a team of 5 to design a product categorization job in Databricks for over 2.5 billion records using lookup tables, keyword matching, and LLM-based approaches, achieving over 90% accuracy.",
          "Engineered a cost-optimized LLM processing strategy by sampling 0.2% of over 2.5 billion records to generalize classification, significantly reducing compute costs while maintaining accuracy.",
          "Developed a prompting framework in Databricks using Python to optimize LLM performance for data categorization, increasing accuracy by 20%.",
          "Leveraged Mostly AI SDK to generate synthetic data for testing and validation of data pipelines, preventing use of production data for testing and ensuring data privacy.",
          "Implemented RAI policies in Azure OpenAI to ensure responsible AI usage and compliance with organizational guidelines with appropriate content filtering.",
        ],
        tags: ["Azure OpenAI", "Mostly AI", "Databricks", "RAI Policies", "Prompt Engineering"],
      },
      {
        title: "Reporting & Visualization",
        description: [
          "Designed and developed AI/BI dashboards in Databricks to monitor LLM usage metrics, including input/output token consumption, request volume, and cost analysis, enabling real-time visibility into model utilization.",
          "Designed centralized Power BI dashboard to monitor production ADF pipelines using embedded logs for near real-time visibility.",
          "Modeled optimized star schema semantic layers by denormalizing complex relational datasets into fact and dimension tables, leveraging DAX measures, relationships, and aggregations to improve report query performance by 30%.",
          "Leveraged REST APIs to trigger near real-time report refreshes, overcoming Power BI service scheduling limitations and reducing data latency from 2 hours to 10 minutes.",
          "Evaluated Microsoft Fabric against Azure Data Factory and Databricks for reporting use cases, leading to a successful pilot implementation that enhanced user experience and improved data lineage tracking.",
          "Collaborated with business teams to define visualization needs, identify KPIs, and streamline reporting logic for dashboards.",
        ],
        tags: ["Power BI", "Microsoft Fabric", "AI/BI Dashboards", "REST APIs"],
      },
      {
        title: "Data Governance & Security",
        description: [
          "Implemented centralized data governance using Unity Catalog, managing external and managed Delta tables with a unified metastore, enabling fine-grained access control, data lineage tracking, and secure data sharing across environments.",
          "Utilized Microsoft Purview to classify and catalog datasets from various sources such as Databricks, ADLS, and Fabric, enabling data discovery for downstream consumers.",
          "Established data quality monitoring frameworks for curated Delta tables, profiling datasets to track schema consistency, data freshness, and usage patterns over time.",
          "Designed and enforced Row-Level Security (RLS) on 100M+ record datasets using Azure AD group-based access control, ensuring secure and role-based data access for downstream consumers.",
          "Integrated data validation rules within ETL pipelines to enforce business constraints, detect anomalies, and prevent propagation of invalid data into curated layers.",
          "Collaborated with security teams to implement RBAC policies in Unity Catalog, ensuring least-privilege access and compliance with organizational security standards.",
        ],
        tags: ["Databricks Unity Catalog", "Microsoft Purview", "Row Level Security", "RBAC"],
      },
    ],
  },
  {
    company: "Capgemini",
    logo: "/assets/logos/capgemini.png",
    duration: "Feb 2022 - Apr 2022",
    projects: [
      {
        title: "Case Study: Student Attendance Management System",
        description: [
          "Worked with a team of 5 members to develop a Java-based Spring application for student attendance management using GitHub for version control and seamless collaboration.",
          "Utilized PostgreSQL as the DBMS and integrated the JDBC API into the application to perform efficient read/write operations on the database.",
          "Developed JUnit test cases to ensure robust functionality, achieving over 90% test coverage.",
          "Leveraged the SonarQube tool for code quality validation and resolved 100% of code smells and issues.",
          "Containerized the entire application using Docker and deployed it on an AWS EC2 instance, leveraging Kubernetes for orchestration and scalability.",
        ],
        tags: ["Java", "Microservices", "Maven", "JUnit", "Docker", "Kubernetes", "SonarQube", "AWS (EC2 & S3)"],
      },
    ],
  },
];
