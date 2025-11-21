import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "BusinessLab – Practical Training",
      subtitle: "Clarity + Systems",
      description:
        "A hands-on implementation program where business owners and key staff set up dashboards, SOPs, customer mapping, and finance tracking — not theory, but practical setup.",
      image: "/images/service-businesslab-v3.png",
      points: [
        "Business clarity & customer profiling",
        "Google Sheets dashboards & SOPs",
        "Daily/weekly/monthly monitoring setup",
        "Designed for SMB owners & teams",
      ],
    },
    {
      title: "E-Commerce & Digital Storefronts",
      subtitle: "Online Growth",
      description:
        "Shopify and custom e-commerce setups for Kerala & GCC markets. Includes product structuring, delivery systems, and marketing-ready content frameworks.",
      image: "/images/service-ecommerce-v3.png",
      points: [
        "Product & pricing structure",
        "Order, delivery, and CRM basics",
        "SEO + content + social media ready",
        "Marketing & automation guidance",
      ],
    },
    {
      title: "Marketing & SMB Support Desk",
      subtitle: "Ongoing Support",
      description:
        "Your virtual business control center: monthly review, dashboards, campaign decisions, and weekly hand-holding to keep everything under control.",
      image: "/images/service-marketing-v4.png",
      points: [
        "Monthly numbers review + action plan",
        "Simple dashboards for owners & team",
        "Campaign guidance & execution help",
        "WhatsApp support + decision clarity",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* ===== PAGE HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Services
          </h2>

          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Solutions to Stabilise & Grow Your Business
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Start with one or combine multiple services based on your
            <span className="font-semibold"> Finance Dashboard </span>
            readiness. Everything is designed for Kerala & GCC SMBs.
          </p>
        </div>

        {/* ===== SERVICES LIST ===== */}
        <div className="grid gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row items-center gap-10 p-8 rounded-2xl border border-slate-200 bg-slate-50 
              shadow-sm hover:shadow-md transition dark:border-slate-800 dark:bg-slate-900
              ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-blue-600 dark:text-lime-300">
                  {service.subtitle}
                </span>

                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white 
                             shadow-sm hover:bg-blue-700 transition dark:bg-lime-400 dark:text-slate-950 dark:hover:bg-lime-300"
                >
                  Discuss for My Business →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ===== FINAL CTA ===== */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Not sure which service fits you?
          </h3>

          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
            Share your business details — we’ll map your next steps and give clear direction for the next 90 days.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white 
                       shadow-md hover:bg-blue-700 transition dark:bg-lime-400 dark:text-slate-950 dark:hover:bg-lime-300"
          >
            Free Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
}
