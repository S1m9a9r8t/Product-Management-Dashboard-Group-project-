import { useState } from "react";

/* 
14. Contact Page
Create a contact form with Full Name, Email, Subject, Message, and Submit.
Use React state, handle input changes, prevent default browser submission,
process the information, and show a success message.
*/

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

    // Remove the success message if the user starts editing again
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form data", form);

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
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-6 shadow-md md:p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
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
            className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Submit
          </button>

          {message && (
            <p className="rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
