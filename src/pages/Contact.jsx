import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import BackgroundVisuals from "../components/BackgroundVisuals";

const formEndpoint = "https://formspree.io/f/mjkokndo";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const isSubmitting = formStatus === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("submitting");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setFormStatus("success");
        setStatusMessage("Thanks, your message has been sent.");
        return;
      }

      const result = await response.json().catch(() => null);
      const formspreeMessage = result?.errors
        ?.map((error) => error.message)
        .filter(Boolean)
        .join(" ");

      setFormStatus("error");
      setStatusMessage(
        formspreeMessage || "The message could not be sent. Please try again or email me directly."
      );
    } catch {
      setFormStatus("error");
      setStatusMessage("The message could not be sent. Please try again or email me directly.");
    }
  };

  return (
    <>
      <BackgroundVisuals />
      <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300 dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-lg bg-white/50 p-6 shadow-md backdrop-blur-md dark:bg-white/10"
            >
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:cursor-not-allowed disabled:opacity-70 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded bg-purple-600 px-6 py-2 text-white transition duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 disabled:cursor-not-allowed disabled:opacity-70 dark:focus:ring-offset-black"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {statusMessage ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-medium ${
                    formStatus === "success"
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 rounded-lg bg-white/50 p-6 text-left text-gray-800 shadow-md backdrop-blur-md dark:bg-white/10 dark:text-gray-200"
            >
              <h3 className="text-center text-xl font-semibold text-purple-900 dark:text-white">
                Contact Details
              </h3>

              <div className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-purple-600" aria-hidden="true" />
                <a href="tel:+917207000030" className="text-blue-700 hover:underline dark:text-blue-400">
                  +91 7207000030
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-purple-600" aria-hidden="true" />
                <a href="mailto:ramukarnati2001@gmail.com" className="break-all text-blue-700 hover:underline dark:text-blue-400">
                  ramukarnati2001@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="shrink-0 text-purple-600" aria-hidden="true" />
                <a
                  href="https://linkedin.com/in/ramakrishna-karnati-899066170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline dark:text-blue-400"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="shrink-0 text-purple-600" aria-hidden="true" />
                <a
                  href="https://github.com/RamuK2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline dark:text-blue-400"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-purple-600" aria-hidden="true" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
