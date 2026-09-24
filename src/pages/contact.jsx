import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Your message has been submitted successfully.");

    setForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-6 shadow-md md:p-8 border-t-4 border-green-500">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
            ✉️
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Have a question or need help? Send us a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              id="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Subject
            </label>

            <input
              type="text"
              name="subject"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is your message about?"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="msg"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              name="message"
              id="msg"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="6"
              required
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            ></textarea>
          </div>

          <button
            type="submit"
           className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 hover:-translate-y-0.5"
          >
             Submit
          </button>

          {message && (
            <p className="w-full rounded-lg bg-green-100 p-3 text-center text-sm font-medium text-green-700">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;