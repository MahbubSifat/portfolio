import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { LINKS } from "../data/links";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = LINKS.email;

    const subject = encodeURIComponent(
      formData.subject || `Portfolio inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20";

  return (
    <section
      id="contact"
      className="relative px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, collaboration opportunity, or just want to
            talk about technology? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Let's start a conversation
            </h3>

            <p className="mb-8 max-w-lg leading-7 text-gray-400">
              I'm a Software Engineering student focused on full stack web
              development. I'm interested in learning, building useful
              applications, and connecting with people in tech.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${LINKS.email}`}
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="break-all text-sm text-gray-200 transition group-hover:text-cyan-400">
                    {LINKS.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm text-gray-200">Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <GithubIcon />
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-panel space-y-5 rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            {/* Name and Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm text-gray-300"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className={inputClasses}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm text-gray-300"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className={`${inputClasses} resize-y`}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-gray-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <Send className="h-4 w-4" />
              Continue in Email App
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Your email application will open with the message prepared.
              You will need to send it from there.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
