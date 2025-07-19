import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-10 text-center">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mjkokndo"
            method="POST"
            className="space-y-6 bg-white/50 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
          >
            {/* Honeypot for spam protection */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">Message</label>
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
          </form>

          {/* Contact Info */}
          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-gray-800 dark:text-gray-200 space-y-5">
            <h3 className="text-xl font-semibold text-purple-900 dark:text-white text-center">
              📞 Contact Details
            </h3>

            <div className="flex items-center gap-3">
              <Phone className="text-purple-600" />
              <a
                href="tel:+917207000030"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                +91 7207000030
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-purple-600" />
              <a
                href="mailto:ramukarnati2001@gmail.com"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                ramukarnati2001@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="text-purple-600" />
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
              <Github className="text-purple-600" />
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
              <MapPin className="text-purple-600" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
