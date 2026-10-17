import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import {
  Activity,
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle,
  Database,
  FileDown,
  ShieldCheck,
  Star,
  ThumbsUp,
  Zap,
} from "lucide-react";
import { achievements, profileMetrics } from "../data/portfolio";

const achievementIcons = {
  badge: BadgeCheck,
  thumbs: ThumbsUp,
  check: CheckCircle,
  star: Star,
  award: Award,
  shield: ShieldCheck,
};

const profileMetricIcons = {
  briefcase: Briefcase,
  database: Database,
  zap: Zap,
  activity: Activity,
  award: Award,
};

const achievementIconClasses = {
  badge: "text-blue-500",
  thumbs: "text-purple-600",
  check: "text-purple-600",
  star: "text-yellow-500",
  award: "text-pink-500",
  shield: "text-green-600",
};

function CountUp({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const [displayVal, setDisplayVal] = useState(0);

  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || target === null) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => setDisplayVal(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  if (target === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {isInView ? displayVal : 0}
      {suffix}
    </span>
  );
}

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

const heroCardVariants = {
  hidden: { opacity: 0.9, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const metricsContainerVariants = {
  hidden: { opacity: 0.9 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

const metricTileVariants = {
  hidden: { opacity: 0.85, y: 6, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const achievementsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const achievementCardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <section className="min-h-[70vh] bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-8 dark:from-black dark:to-black sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <motion.div
              initial="hidden"
              animate="show"
              variants={heroCardVariants}
              className="relative z-10 mb-6 rounded-lg border border-purple-200 bg-white p-5 shadow-md dark:border-purple-500/30 dark:bg-gray-900"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for Cloud & Data Projects
              </div>
              <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-300 dark:to-purple-300 sm:text-4xl">
                Azure Data Engineer
              </h2>
              <p className="text-left text-base leading-7 text-gray-700 dark:text-gray-100 sm:text-lg">
                With 4+ years of experience across Cloud Infrastructure, ETL Design, and DevOps Automation. Specialized in building scalable Azure data platforms using Azure Data Factory, Databricks, ADLS Gen 2, and Fabric. Proven expertise in developing CI/CD pipelines, optimizing cloud costs, and delivering high-performance data solutions processing billions of records efficiently on a daily basis.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="/Ramakrishna_Karnati_Data_Engineer_Resume.pdf"
                  download
                  className="relative z-10 inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2 text-white opacity-100 shadow-lg transition-colors duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 dark:focus:ring-offset-black"
                >
                  <FileDown className="h-5 w-5" aria-hidden="true" />
                  Download My Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={metricsContainerVariants}
              className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5"
            >
              {profileMetrics.map((metric, index) => {
                const MetricIcon = profileMetricIcons[metric.icon] || Award;
                return (
                  <motion.div
                    key={metric.label}
                    variants={metricTileVariants}
                    whileHover={{ y: -3, transition: { duration: 0.18 } }}
                    className={`group relative flex min-h-[105px] min-w-0 flex-col items-center justify-center rounded-xl border border-purple-200/80 bg-white/90 p-3 text-center shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-purple-400 hover:shadow-md dark:border-purple-500/30 dark:bg-slate-900/85 dark:hover:border-purple-400 ${
                      index === profileMetrics.length - 1 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <div className="mb-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-colors group-hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:group-hover:bg-purple-800/60">
                      <MetricIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                    <div className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-xl font-extrabold text-transparent dark:from-purple-300 dark:to-indigo-300 sm:text-2xl">
                      <CountUp value={metric.value} />
                    </div>
                    <div className="mt-1 line-clamp-2 text-center text-xs font-medium leading-tight text-gray-600 break-words dark:text-gray-300">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0.92, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="group relative w-full text-center lg:w-1/2"
          >
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-tr from-purple-500/20 via-blue-500/15 to-pink-500/20 blur-xl transition-opacity duration-500 hover:opacity-100 dark:from-purple-600/30 dark:via-blue-600/20 dark:to-pink-600/30" />
            <img
              src="/Portfolio_Home.png"
              alt="Infra to insights technical expertise overview"
              className="mx-auto w-full max-w-xl rounded-xl border-2 border-purple-300 bg-white/80 shadow-lg transition-transform duration-300 hover:scale-[1.01] dark:border-purple-600 dark:bg-slate-900/70"
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
        <h3 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300">
          Achievements
        </h3>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={achievementsContainerVariants}
          className="mx-auto grid max-w-4xl gap-6"
        >
          {achievements.map((item, index) => {
            const Icon = achievementIcons[item.icon] || BadgeCheck;

            return (
              <motion.div
                key={`${item.icon}-${index}`}
                variants={achievementCardVariants}
                whileHover={{ y: -2, transition: { duration: 0.18 } }}
                className="relative z-10 flex items-start gap-4 rounded-lg border border-purple-200 bg-white/85 p-5 shadow-md transition-shadow hover:shadow-lg dark:border-purple-500/30 dark:bg-slate-900/80"
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
        </motion.div>
      </section>
    </>
  );
}
