export default function Contact() {
  return (
    <section className="p-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <form
        action="https://formspree.io/f/mjkokndo"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" name="name" required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows="4" required className="w-full border px-3 py-2 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Resume</h3>
        <a href="/resume.pdf" download className="text-blue-600 hover:underline">
          Download My Resume (PDF)
        </a>
      </div>
    </section>
  );
}
