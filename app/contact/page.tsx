"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔢 Change this to your GTCT WhatsApp number (no + sign, with country code)
  const GTCT_WHATSAPP_NUMBER = "918547976196"; // example: +91 85479 76196

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("message", message);
      if (file) formData.append("file", file);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      // ✅ Success toast
      toast.success("Request submitted successfully!", {
        duration: 3000,
        style: {
          fontSize: "14px",
          borderRadius: "10px",
          background: "#1d4ed8",
          color: "#fff",
        },
        iconTheme: {
          primary: "#22c55e",
          secondary: "#fff",
        },
      });

      // 🔄 Clear form
      setName("");
      setPhone("");
      setMessage("");
      setFile(null);
      const fileInput = document.getElementById(
        "fileInput"
      ) as HTMLInputElement | null;
      if (fileInput) fileInput.value = "";
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ▶️ WhatsApp button handler
  const handleWhatsAppSend = () => {
    if (!phone || !message) {
      toast.error("Please fill WhatsApp / Mobile and Message first.");
      return;
    }

    const text = `Hi GTCT Business Desk,%0A%0AName: ${name || "-"}%0APhone: ${
      phone || "-"
    }%0A%0AMessage:%0A${message}`;

    const url = `https://wa.me/${GTCT_WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Contact GTCT Business Desk
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-md"
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="WhatsApp / Mobile"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-3 py-2 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Message */}
        <textarea
          placeholder="Describe your business challenge"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full px-3 py-2 rounded-md border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>

        {/* File Upload */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            Upload Financials / Reports (Optional)
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".pdf,.xls,.xlsx,.csv"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full px-3 py-2 rounded-md border border-slate-300 text-sm bg-white"
          />
        </div>

        {/* Buttons: Submit + WhatsApp */}
        <div className="flex flex-col gap-3 pt-2 md:flex-row">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="w-full bg-[#22c55e] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#16a34a] transition"
          >
            Send via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
