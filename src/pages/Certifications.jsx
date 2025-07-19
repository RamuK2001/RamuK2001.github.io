import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      emoji: "🧠",
      title: "Databricks Certified: Data Engineer Professional",
      link: "https://credentials.databricks.com/a433bf7e-4db4-484a-8f3b-bec4761b103b#acc.uQJa82lf",
    },
    {
      emoji: "📊",
      title: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/4758FFFD196B98F",
    },
    {
      emoji: "☁️",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/RamakrishnaKarnati-9798/470AB1DC400F6146",
    },
    {
      emoji: "☁️",
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
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-2"
              >
                <span className="text-xl">{cert.emoji}</span>
                {cert.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
