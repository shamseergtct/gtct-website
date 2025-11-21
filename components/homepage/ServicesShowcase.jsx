import Image from "next/image";
import Link from "next/link";

export default function ServicesShowcase() {
  const services = [
    {
      tag: "Clarity + Systems",
      title: "BusinessLab – Practical Training & Implementation",
      description:
        "2–4 week implementation sprints where owners and key staff set up dashboards, SOPs, and tracking systems together — not just theory.",
      image: "/images/service-businesslab-v3.png",
      link: "/services#businesslab",
    },
    {
      tag: "Online Growth",
      title: "E-Commerce & Digital Storefronts",
      description:
        "Custom e-commerce setups designed for local & GCC markets. Product structuring, SEO, campaigns, and delivery workflows.",
      image: "/images/service-ecommerce-v3.png",
      link: "/services#ecommerce",
    },
    {
      tag: "Ongoing Support",
      title: "Marketing & SMB Support Desk",
      description:
        "Monthly support for finance tracking, performance review, and marketing decisions — your virtual business control center.",
      image: "/images/service-marketing-v4.png",
      link: "/services#supportdesk",
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-14 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Services
          </h2>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl text-slate-900 dark:text-slate-50">
            Three pillars to stabilise & grow your business.
          </p>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-300 mx-auto md:mx-0">
            Start with one service or combine them as your Finance Dashboard shows readiness.
            We grow step-by-step, not blindly.
          </p>
        </div>

        {/* Responsive cards */}
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="
                flex flex-col md:flex-row 
                rounded-2xl border border-slate-200 
                bg-white shadow-sm hover:shadow-lg transition
                dark:border-slate-800 dark:bg-slate-950
              "
            >
              {/* FIXED: Full image — no cropping */}
              <div className="relative w-full md:w-1/3 p-4 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 md:w-2/3">
                <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:bg-slate-800 dark:text-lime-300">
                  {service.tag}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline dark:text-lime-300"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
