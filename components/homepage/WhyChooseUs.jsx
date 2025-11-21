import Image from "next/image";

const points = [
  {
    title: "Finance First, Not Just Marketing",
    description:
      "We help you see daily, weekly, and monthly numbers clearly – so every offer, discount, or expansion is backed by data.",
    icon: "/images/icon-finance.png",
  },
  {
    title: "Designed for SMB Owners",
    description:
      "Built for cafeterias, small shops, and service units that don’t have big teams – simple tools, clear steps, no jargon.",
    icon: "/images/icon-smb.png",
  },
  {
    title: "Growth With Control",
    description:
      "We combine dashboards, SOPs, and marketing to grow revenue without losing cash, team control, or customer experience.",
    icon: "/images/icon-growth.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Why GTCT
          </h2>
          <p className="mt-3 text-2xl font-semibold sm:text-3xl">
            A business lab for serious SMB owners.
          </p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Instead of random tools and agencies, you get{" "}
            <span className="font-semibold">
              one control system for money, marketing, and daily operations
            </span>{" "}
            – with guidance tailored to Indian and GCC markets.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {points.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-5 text-sm shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50/80 dark:bg-slate-800">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
