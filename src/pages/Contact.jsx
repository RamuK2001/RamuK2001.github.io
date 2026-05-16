import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import BackgroundVisuals from "../components/BackgroundVisuals";

export default function Contact() {
  return (
    <>
      <BackgroundVisuals />
      <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-black dark:via-slate-950 dark:to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] mb-10 text-center">
            {"\u{1F4EC} Contact Me"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              action="https://formspree.io/f/mjkokndo"
              method="POST"
              className="space-y-6 bg-white/50 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
            >
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-200"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-200 space-y-5 text-justify"
            >
              <h3 className="text-xl font-semibold text-purple-900 dark:text-white text-center">
                📞 Contact Details
              </h3>

              <div className="flex items-center gap-3">
                <FaPhone className="text-purple-600" />
                <a
                  href="tel:+917207000030"
                  className="text-blue-700 dark:text-blue-400 hover:underline"
                >
                  +91 7207000030
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-600" />
                <a
                  href="mailto:ramukarnati2001@gmail.com"
                  className="text-blue-700 dark:text-blue-400 hover:underline"
                >
                  ramukarnati2001@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                  <FaLinkedin className="text-purple-600" />
                <a
                  href="https://linkedin.com/in/ramakrishna-karnati-899066170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-400 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-purple-600" />
                <a
                  href="https://github.com/RamuK2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-400 hover:underline"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-600" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
