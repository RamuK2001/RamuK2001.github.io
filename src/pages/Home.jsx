import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  CheckCircle,
  FileDown,
  ShieldCheck,
  Star,
  ThumbsUp,
} from "lucide-react";
import BackgroundVisuals from "../components/BackgroundVisuals";
import { achievements, profileMetrics } from "../data/portfolio";

const achievementIcons = {
  badge: BadgeCheck,
  thumbs: ThumbsUp,
  check: CheckCircle,
  star: Star,
  award: Award,
  shield: ShieldCheck,
};

const achievementIconClasses = {
  badge: "text-blue-500",
  thumbs: "text-purple-600",
  check: "text-purple-600",
  star: "text-yellow-500",
  award: "text-pink-500",
  shield: "text-green-600",
};

function renderAchievementText(text) {
  if (!Array.isArray(text)) {
    return text;
  }

  return text.map((part, index) => {
    if (typeof part === "string") {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <a
        key={part.href}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-purple-600 underline transition hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
      >
        {part.label}
      </a>
    );
  });
}

export default function Home() {
  return (
    <>
      <BackgroundVisuals />
      <section className="min-h-[70vh] bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-8 dark:from-black dark:to-black sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <motion.div
            className="text-center md:w-1/2 md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              viewport={{ once: true }}
              className="relative z-10 mb-6 rounded-lg border border-purple-200 bg-white p-5 shadow-md dark:border-purple-500/30 dark:bg-gray-900 dark:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-300 dark:to-purple-300 dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] sm:text-4xl">
                Azure Data Engineer
              </h2>
              <p className="text-left text-base leading-7 text-gray-700 dark:text-gray-100 sm:text-lg">
                With 4+ years of experience across Cloud Infrastructure, ETL Design, and DevOps Automation. Specialized in building scalable Azure data platforms using Azure Data Factory, Databricks, ADLS Gen 2, and Fabric. Proven expertise in developing CI/CD pipelines, optimizing cloud costs, and delivering high-performance data solutions processing billions of records efficiently on a daily basis.
              </p>
            </motion.div>

            <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {profileMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-purple-200 bg-white/75 px-3 py-4 text-center shadow-sm backdrop-blur-md dark:border-purple-500/30 dark:bg-white/10"
                >
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-200">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="/Ramakrishna_Karnati_Data_Engineer_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 dark:focus:ring-offset-black"
              >
                <FileDown className="h-5 w-5" aria-hidden="true" />
                Download My Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="text-center md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/Portfolio_Home.png"
              alt="Infra to insights technical expertise overview"
              className="mx-auto w-full max-w-lg rounded-xl border-2 border-purple-300 bg-white/60 shadow-lg backdrop-blur-md dark:border-purple-600 dark:bg-white/10"
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <div className="flex justify-center">
              <p className="mt-4 max-w-xs text-center text-sm text-gray-600 dark:text-gray-300">
                Overall technical expertise summarized in one view.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 px-4 py-8 text-left dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
        <h3 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300 dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
          Achievements
        </h3>

        <div className="mx-auto grid max-w-4xl gap-6">
          {achievements.map((item, index) => {
            const Icon = achievementIcons[item.icon] || BadgeCheck;

            return (
              <motion.div
                key={`${item.icon}-${index}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-lg border border-purple-200 bg-white/60 p-5 shadow-md backdrop-blur-md dark:border-purple-500/30 dark:bg-white/10 dark:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <Icon
                  className={`mt-1 h-6 w-6 shrink-0 ${achievementIconClasses[item.icon] || "text-blue-500"}`}
                  aria-hidden="true"
                />
                <p className="text-left leading-7 text-gray-700 dark:text-gray-100">
                  {renderAchievementText(item.text)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
