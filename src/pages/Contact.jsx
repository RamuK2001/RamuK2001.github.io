import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Check, ClipboardCopy } from "lucide-react";

const formEndpoint = "https://formspree.io/f/mjkokndo";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [copied, setCopied] = useState(null);
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

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 px-4 py-8 dark:from-black dark:via-black dark:to-black sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-purple-300 dark:to-pink-300">
          Contact Me
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-700 dark:text-gray-300">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
        </p>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6 rounded-lg bg-white/85 p-6 shadow-md dark:bg-slate-900/85"
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
              className="rounded bg-purple-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-100 disabled:cursor-not-allowed disabled:opacity-70 dark:focus:ring-offset-black"
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
          </form>

          <div className="relative z-10 space-y-5 rounded-lg bg-white/85 p-6 text-left text-gray-800 shadow-md dark:bg-slate-900/85 dark:text-gray-200">
            <h3 className="text-center text-xl font-semibold text-purple-900 dark:text-white">
              Contact Details
            </h3>

            <div className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-purple-600" aria-hidden="true" />
              <a href="mailto:ramukarnati2001@gmail.com" className="break-all text-blue-700 hover:underline dark:text-blue-400">
                ramukarnati2001@gmail.com
              </a>
              <button
                type="button"
                onClick={() => handleCopy("ramukarnati2001@gmail.com", "email")}
                className="ml-auto rounded-md p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Copy email"
              >
                {copied === "email" ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4 text-gray-500" />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="shrink-0 text-purple-600" aria-hidden="true" />
              <a href="tel:+917207000030" className="text-blue-700 hover:underline dark:text-blue-400">
                +91 7207000030
              </a>
              <button
                type="button"
                onClick={() => handleCopy("+917207000030", "phone")}
                className="ml-auto rounded-md p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Copy phone number"
              >
                {copied === "phone" ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4 text-gray-500" />}
              </button>
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

            <p className="border-t border-gray-300 pt-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
              I typically respond to messages within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
