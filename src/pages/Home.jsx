import { motion } from "framer-motion";
import {
  FileDown,
  ThumbsUp,
  CheckCircle,
  Star,
  Award,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import BackgroundVisuals from "../components/BackgroundVisuals";

export default function Home() {
  const achievements = [
      {
      icon: <BadgeCheck className="text-blue-500 w-6 h-6" />,
      text: (
        <>
          Recognized by internal delivery heads for representing my current project as the primary presenter during an external audit by Microsoft,
          delivering end-to-end walkthrough of architecture design, delivery processes, and documentation as per the comprehensive
          audit checklist, contributing to Infosys securing the{" "}
          <a
            href="https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration#tab-4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-300 font-semibold"
          >
            Data Warehouse Migration to Microsoft Azure specialization
          </a>.
        </>
      ),
    },
    {
      icon: <ThumbsUp className="text-purple-600 w-6 h-6" />,
      text:
        "Earned an official appreciation from the client for going above and beyond in resolving a critical incident during a crucial month-end business closure outside the scope of the project and my usual work hours.",
    },
    {
      icon: <CheckCircle className="text-purple-600 w-6 h-6" />,
      text:
        "Received a designated client appreciation for delivering exceptional cross-project support by automating CI/CD deployments and providing expertise in infrastructure automation, ETL best practices, and DevOps excellence",
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
    },  ];

  return (
    <>
      <BackgroundVisuals />
      {/* Hero Section */}
      <section className="p-10 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-black dark:to-slate-950 min-h-[70vh]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Summary Text */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md rounded-lg p-5 border border-purple-200 dark:border-purple-500/30 dark:shadow-[0_0_20px_rgba(168,85,247,0.2)] mb-6"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] mb-4">
                Azure Data Engineer
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-100 text-justify">
                with 4+ years of experience across Cloud Infrastructure, ETL Design, and DevOps Automation. Specialized in building scalable Azure data platforms using Azure Data Factory, Databricks, ADLS Gen 2, and Fabric. Proven expertise in developing CI/CD pipelines, optimizing cloud costs, and delivering high-performance data solutions processing billions of records efficiently on daily basis. Strong track record of improving system efficiency, enabling automation, and driving business insights through data visualization.
              </p>
            </motion.div>
            <div className="mt-6">
              <a
                href="/Ramakrishna_Karnati_Data_Engineer.pdf"
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
              className="rounded-xl shadow-lg w-full max-w-lg mx-auto border-2 border-purple-300 dark:border-purple-600 bg-white/60 dark:bg-white/10 backdrop-blur-md"
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <div className="flex justify-center">
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center max-w-xs">
                Overall technical expertise summarized in a picture.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="p-10 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 dark:from-black dark:via-slate-950 dark:to-black text-left">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] mb-6 text-center">
          🏆 Achievements
        </h3>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md rounded-lg p-5 flex items-start space-x-4 border border-purple-200 dark:border-purple-500/30 dark:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700 dark:text-gray-100 text-justify">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
