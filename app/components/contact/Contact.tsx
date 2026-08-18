"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMapPin,
  IconSend,
  IconCheck,
  IconCopy,
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.7 },
    });
    setTimeout(() => setCopiedEmail(false), 2500);
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
      className="relative min-h-screen overflow-hidden bg-black py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Form & Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
              <IconSend className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase">
                Let's Connect
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Get In <span className="text-amber-400">Touch</span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Have a project in mind or interested in collaboration? Send a message directly or connect via email.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this regarding?"
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project details..."
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                isSubmitted
                  ? "bg-emerald-500 text-zinc-950"
                  : "bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 hover:brightness-110 shadow-amber-400/20"
              }`}
            >
              {isSubmitting ? (
                <span>Sending payload...</span>
              ) : isSubmitted ? (
                <>
                  <IconCheck className="w-5 h-5" />
                  <span>Message Received!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <IconSend className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Email Card with Copy Button */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400">Direct Email</p>
                  <p className="text-xs font-bold text-zinc-200">{personalInfo.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <IconCheck className="w-4 h-4 text-emerald-400" /> : <IconCopy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <IconMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400">Location</p>
                <p className="text-xs font-bold text-zinc-200">{personaldetails.location || "Karnataka, India"}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Earth / Graphic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl group"
        >
          <Image
            src="/earth.webp"
            alt="Global connectivity 3D graphics"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-center space-y-2">
            <h4 className="text-lg font-bold text-white">Global Reach</h4>
            <p className="text-xs text-zinc-400 font-light">
              Available for remote engineering roles worldwide and relocation options.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
