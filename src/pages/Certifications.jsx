import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import BackgroundVisuals from "../components/BackgroundVisuals";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <>
      <BackgroundVisuals />
      <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300 dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Certifications
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.link} // Using the link as a key is more robust
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 0 0 0 rgba(0,0,0,0), 0 0 32px 8px rgba(168,85,247,0.25), 0 0 48px 16px rgba(236,72,153,0.18)",
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/50"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 text-left"
                  aria-label={`Verify certification: ${cert.title}`}
                >
                  <img
                    src={cert.logo}
                    alt={`${cert.title} badge`}
                    className="h-12 w-12 shrink-0 rounded-md bg-white object-contain p-1 shadow-sm dark:bg-gray-800"
                  />
                  <div className="flex-grow">
                    <h3 className="text-base font-semibold text-purple-800 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300 sm:text-lg">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer} &middot; {cert.date}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 text-gray-400 transition-colors group-hover:text-purple-600 dark:text-gray-500 dark:group-hover:text-purple-400" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
