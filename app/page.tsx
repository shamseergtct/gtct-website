"use client";

import { useState } from "react";
import Hero from "../components/homepage/Hero";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import ServicesShowcase from "../components/homepage/ServicesShowcase";

export default function HomePage() {
  // FORM STATES
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("name", name);
    form.append("phone", phone);
    form.append("message", message);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: form,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setName("");
      setPhone("");
      setMessage("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <>
      {/* TOP SECTIONS */}
      <Hero />
      <WhyChooseUs />
      <ServicesShowcase />

      {/* SMB Support Section */}
      <section
        id="smb-support"
        className="bg-blue-600 py-10 text-sm text-white dark:bg-lime-400 dark:text-slate-950"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em]">
              SMB Support Desk
            </h2>
            <p className="mt-2 text-base font-semibold">
              One place to ask, analyse, and act on your business numbers.
            </p>
            <p className="mt-2 text-xs opacity-90">
              Share your current situation – we’ll map your business into 3–4
              clear dashboards and define the next 90-day focus.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-slate-100 dark:bg-slate-950 dark:text-lime-300 dark:hover:bg-slate-900"
          >
            Talk to GTCT Business Desk
          </a>
        </div>
      </section>

      {/* CONTACT FORM — FUNCTIONAL */}
      <section
        id="contact"
        className="bg-white py-16 text-sm text-slate-900 dark:bg-slate-950 dark:text-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Contact
          </h2>

          <p className="mt-3 text-2xl font-semibold sm:text-3xl">
            Share your current business situation.
          </p>

          <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
            Start with a simple pilot – one branch, one department, or one
            project. We’ll help you design the monitoring and growth roadmap.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[2fr,1.3fr]">
            {/* FORM BLOCK */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {/* NAME */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-blue-500/20 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                    placeholder="Your full name"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    WhatsApp / Mobile
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-blue-500/20 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                    placeholder="+91 / +973 …"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                  Business type & current challenge
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-blue-500/20 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                  placeholder="Eg. cafeteria with 1 branch struggling with cash-flow and marketing clarity…"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-50 dark:bg-lime-400 dark:text-slate-950 dark:hover:bg-lime-300"
              >
                {loading ? "Submitting..." : "Request Strategy Call (No obligation)"}
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p className="text-green-600 text-[11px] font-medium animate-pulse">
                  ✔ Request submitted! We'll contact you shortly.
                </p>
              )}
            </form>

            {/* CONTACT INFO CARD */}
            <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                GTCT Private Limited
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Digital incubation & SMB growth partner
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Kerala · GCC (Bahrain-based operations)
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Email: <span className="font-mono">gtcsmartshop@gmail.com</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                WhatsApp: <span className="font-mono">+91-8547976196</span>
              </p>
              <p className="pt-2 text-[11px] text-slate-500 dark:text-slate-400">
                We typically respond within 48 hours with possible time slots for a call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
