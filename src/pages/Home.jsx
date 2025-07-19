import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  ThumbsUp,
  Star,
  ShieldCheck,
  FileDown
} from "lucide-react";

export default function Home() {
  const achievements = [
    {
      icon: <ThumbsUp className="text-purple-600 w-6 h-6" />,
      text: "Earned a formal appreciation (individual) from the client for resolving a critical incident during a crucial month-end business closure outside the scope of the project and my usual work hours.",
    },
    {
      icon: <CheckCircle className="text-purple-600 w-6 h-6" />,
      text: "Received formal client appreciation (individual) for delivering exceptional support on a separate project, particularly for seamlessly automating CI/CD deployments.",
    },
    {
      icon: <Star className="text-yellow-500 w-6 h-6" />,
      text: 'Consistently recognized with “Rise Insta” awards for exceptional performance every quarter.',
    },
    {
      icon: <Award className="text-pink-500 w-6 h-6" />,
      text: 'Awarded with the “Business Ninja Award” in recognition of remarkable contributions and outstanding achievements.',
    },
    {
      icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
      text: 'Achieved the “Outstanding” rating twice in year-end performance appraisals, reflecting exceptional contributions.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 min-h-[60vh] text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Cloud Data Engineer | Infra to Insights
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Results-driven Azure Data Engineer with 3 years of experience in ETL Development, Data Engineering, and Azure DevOps Automation. Adept at designing and implementing Azure-based ETL solutions, developing CI/CD pipelines, and driving cost-efficient cloud operations. Expertise in Azure Databricks (ADB), Azure Data Factory (ADF), DevOps, ETL, and Data Warehousing.
        </p>
        <div className="mt-6 mb-12">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            <FileDown className="w-5 h-5" />
            Download My Resume
          </a>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="p-10 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 text-left">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          🏆 Achievements
        </h3>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white shadow-md rounded-lg p-5 flex items-start space-x-4 border border-purple-200"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
