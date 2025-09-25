export default function ContactPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="w-full border rounded px-3 py-2 h-32"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-brand text-white hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-gray-700">
        <p>Email: info@econutrient.in</p>
        <p>Phone: +91-9835311210</p>
        <p>Address: Jamshedpur, Jharkhand</p>
      </div>
    </main>
  );
}
