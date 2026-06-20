import { motion } from "framer-motion";
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

          <ul className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.li
                key={cert.title}
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
                className="rounded-xl bg-white/60 p-5 shadow-md backdrop-blur-md dark:bg-white/10"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-left text-base font-medium text-blue-700 transition hover:underline dark:text-blue-400 sm:text-lg"
                >
                  <img
                    src={cert.logo}
                    alt={`${cert.title} badge`}
                    className="h-10 w-10 shrink-0 rounded bg-white object-contain p-1 dark:bg-gray-100"
                  />
                  <span>{cert.title}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
