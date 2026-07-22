import { ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300">
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.link}
              className="relative z-10 rounded-xl border border-white/50 bg-white/85 p-5 shadow-lg transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
