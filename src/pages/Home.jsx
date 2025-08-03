import { motion } from "framer-motion";
import {
  FileDown,
  ThumbsUp,
  CheckCircle,
  Star,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const achievements = [
    {
      icon: <ThumbsUp className="text-purple-600 w-6 h-6" />,
      text:
        "Earned a formal appreciation (individual) from the client for resolving a critical incident during a crucial month-end business closure outside the scope of the project and my usual work hours.",
    },
    {
      icon: <CheckCircle className="text-purple-600 w-6 h-6" />,
      text:
        "Received formal client appreciation (individual) for delivering exceptional support on a separate project, particularly for seamlessly automating CI/CD deployments.",
    },
    {
      icon: <Star className="text-yellow-500 w-6 h-6" />,
      text:
        'Consistently recognized with “Rise Insta” awards for exceptional performance every quarter.',
    },
    {
      icon: <Award className="text-pink-500 w-6 h-6" />,
      text:
        'Awarded with the “Business Ninja Award” in recognition of remarkable contributions and outstanding achievements.',
    },
    {
      icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
      text:
        'Achieved the “Outstanding” rating twice in year-end performance appraisals, reflecting exceptional contributions.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 min-h-[70vh]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Summary Text */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">
              Cloud Data Engineer | Infra to Insights
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Results-driven Full-Stack Azure Data Engineer with 3+ years of experience in Azure Infra & ETL Development, Azure DevOps Automation, and Power BI Visualization. Adept at designing and implementing end-to-end Azure-based data solutions, developing CI/CD pipelines, and driving cost-efficient cloud operations.
            </p>
            <div className="mt-6">
              <a
                href="/Ramakrishna_Karnati_Azure_Data_Engineer.pdf"
                download
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                <FileDown className="w-5 h-5" />
                Download My Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Animated Image with Slide-in and Hover Scale */}
          <motion.div
            className="md:w-1/2 text-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/Portfolio_Home.png"
              alt="Infra to Insights Illustration"
              className="rounded-xl shadow-lg w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Overall technical expertise summarized in a picture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="p-10 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-left">
        <h3 className="text-2xl font-bold text-purple-800 dark:text-white mb-6 text-center">
          🏆 Achievements
        </h3>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5 flex items-start space-x-4 border border-purple-200 dark:border-gray-700"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
