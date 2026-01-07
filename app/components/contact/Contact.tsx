"use client";
import { useState } from "react";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMapPin,
  IconSend,
  IconCheck,
} from "@tabler/icons-react";
import { personaldetails, personalInfo } from "@/data/data";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="relative mx-auto grid min-h-screen grid-cols-1 lg:grid-cols-[0.9fr_1fr]">
        <div className="px-6 sm:px-8 lg:px-16 py-20">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <IconSend className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400 tracking-wide">
                LET'S CONNECT
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-2">Get in</span>
              <span className="block bg-linear-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'm always open to
              discussing new opportunities and creative ideas.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <form onSubmit={handleSubmit} className="space-y-4 space-x-3 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300 hover:border-zinc-700"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300 hover:border-zinc-700"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300 hover:border-zinc-700"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300 resize-none hover:border-zinc-700"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`group relative w-full px-4 py-2 rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden ${
                  isSubmitted
                    ? "bg-green-600 text-white"
                    : "bg-linear-to-r from-amber-500 to-yellow-600 text-black hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-[1.02]"
                }`}
              >
                {/* Animated shine effect */}
                {!isSubmitted && (
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                )}

                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <IconCheck className="w-6 h-6" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <IconSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative bg-linear-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-500" />

              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                  <IconMail className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg group-hover:text-amber-400 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="group relative bg-linear-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-500" />

              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                  <IconMapPin className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg group-hover:text-amber-400 transition-colors duration-300">
                    Location
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {personaldetails.location || "Karnataka, India"}
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-linear-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 transition-all duration-500" />

              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                  <IconBrandLinkedin className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg group-hover:text-amber-400 transition-colors duration-300">
                    LinkedIn
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Let's connect professionally
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links Section */}
          <div className="mt-16 text-center space-y-6">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
              Follow Me
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              >
                <IconBrandLinkedin className="w-6 h-6 text-amber-400" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              >
                <IconBrandGithub className="w-6 h-6 text-amber-400" />
              </a>
              <a
                href={personaldetails.twitter || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              >
                <IconBrandX className="w-6 h-6 text-amber-400" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-110 transition-all duration-300"
              >
                <IconMail className="w-6 h-6 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE – 3D IMAGE (NO PADDING) */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0">
            <Image
              src="/earth.jpg" // replace with your actual 3D image
              alt="Contact illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
