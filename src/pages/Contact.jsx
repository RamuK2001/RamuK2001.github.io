export default function Contact() {
  return (
    <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Contact Me</h2>

        <form
          action="https://formspree.io/f/mjkokndo"
          method="POST"
          className="space-y-6 bg-white/50 backdrop-blur-md p-6 rounded-lg"
        >
          {/* Honeypot for spam protection */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div>
            <label className="block text-sm font-medium text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Resume</h3>
          <a
            href="/resume.pdf"
            download
            className="text-blue-700 underline hover:text-blue-900"
          >
            Download My Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
