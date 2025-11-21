import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-35">
        <Image
          src="/images/hero-bg-dark-v2.png"
          alt="GTCT digital wave background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-blue-900/60" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[480px] max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:gap-12 md:px-6 md:py-24">
        {/* Left: main message */}
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-300">
            Digital Incubation for SMBs
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Clarity + Systems + Control ={" "}
            <span className="block text-lime-300">
              Predictable Business Growth
            </span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            GTCT helps small & mid-sized businesses build{" "}
            <span className="font-semibold text-white">
              profitable and scalable systems
            </span>{" "}
            — finance dashboards, monitoring tools, SOPs, and smart marketing
            funnels designed for Kerala and GCC traditional businesses.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-lime-400 px-6 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-lime-500/40 transition hover:bg-lime-300"
            >
              Free Strategy Call
            </a>
            <a
              href="#services"
              className="rounded-full border border-slate-500/70 px-6 py-2.5 text-xs font-semibold text-slate-50 transition hover:border-lime-300 hover:text-lime-300"
            >
              See How GTCT Helps You
            </a>
          </div>

          <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            Focus: Kerala • GCC | Cafeterias • Retail • Service Units • Small
            Shops
          </p>
        </div>

        {/* Right: value card */}
        <aside className="w-full max-w-sm rounded-2xl border border-slate-800/80 bg-slate-900/75 p-6 text-sm shadow-lg shadow-slate-950/40 backdrop-blur">
          <p className="text-xs font-semibold text-slate-300">
            What You Get with GTCT:
          </p>

          <ul className="mt-4 space-y-3 text-xs text-slate-100 sm:text-sm">
            <li>• Clean & accurate monthly profit tracking</li>
            <li>• Simple dashboards to monitor business & branches</li>
            <li>• Action plans to grow without losing control</li>
            <li>• Hand-holding support for traditional teams</li>
          </ul>

          <p className="mt-5 text-[11px] leading-relaxed text-slate-400">
            You keep running your business.{" "}
            <span className="text-lime-300">
              We make it organised, monitored, and scalable.
            </span>
          </p>
        </aside>
      </div>
    </section>
  );
}
