import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      logo: "/assets/badges/db_professional_badge.png",
      title: "Databricks Certified: Data Engineer Professional",
      link: "https://credentials.databricks.com/a433bf7e-4db4-484a-8f3b-bec4761b103b#acc.uQJa82lf",
    },
    {
      logo: "/assets/badges/dp_600_badge.png",
      title: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/4758FFFD196B98F",
    },
    {
      logo: "/assets/badges/az_fundamentals_badge.png",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/470AB1DC400F6146",
    },
    {
      logo: "/assets/badges/az_fundamentals_badge.png",
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/E573B6137CAF15FE",
    },
  ];

  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          📜 Certifications
        </h2>

        <ul className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
              }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-2"
              >
                <img
                  src={cert.logo}
                  alt={`${cert.title} badge`}
                  className="w-8 h-8 object-contain rounded bg-white dark:bg-gray-100 p-1"
                />
                {cert.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
