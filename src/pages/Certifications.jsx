import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0.9 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0.85, y: 8, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300">
          Certifications
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.link}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="group relative z-10 overflow-hidden rounded-xl border border-white/60 bg-white/85 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-purple-500/50"
            >
              {/* Holographic light sheen sweep on card hover */}
              <div
                className="pointer-events-none absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-full group-hover:opacity-100 dark:via-purple-300/15"
                aria-hidden="true"
              />

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-left"
                aria-label={`Verify certification: ${cert.title}`}
              >
                <img
                  src={cert.logo}
                  alt={`${cert.title} badge`}
                  className="h-12 w-12 shrink-0 rounded-md bg-white object-contain p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md dark:bg-gray-800"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold break-words text-purple-800 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300 sm:text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-gray-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-600 dark:text-gray-500 dark:group-hover:text-purple-400" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
