// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 space-y-16">
        {/* Top intro block */}
        <section className="grid gap-8 md:grid-cols-[1.7fr,1.2fr] md:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
              About GTCT Private Limited
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A digital incubation partner for small & mid-sized businesses.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              GTCT PRIVATE LIMITED was founded in 2019 in Ernakulam, Kerala as a{" "}
              <span className="font-semibold">
                practical support system for traditional business owners
              </span>{" "}
              – especially small businesses like cafeterias, retail shops, service units and small
              manufacturers in Kerala and the GCC.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              With more than{" "}
              <span className="font-semibold">25 years of combined business experience</span>{" "}
              in India and abroad, our team helps owners move from “everything in
              the head” to{" "}
              <span className="font-semibold">
                clear dashboards, written systems and predictable growth.
              </span>
            </p>
          </div>

          {/* Quick facts card */}
          <aside className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-sm font-semibold">Quick facts</h2>
            <dl className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
              <div className="flex justify-between gap-3">
                <dt className="text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Established
                </dt>
                <dd>2019 · Ernakulam, Kerala</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Focus Regions
                </dt>
                <dd>Kerala & GCC (Bahrain-based operations)</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Core Role
                </dt>
                <dd>Digital incubator & SMB growth partner</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Founder
                </dt>
                <dd>Shamseer Edakkudi, Managing Director</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Who we serve */}
        <section className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-lime-300">
              Who We Serve
            </h2>
            <p className="mt-3 text-lg font-semibold">
              Owners who want clarity, not just marketing.
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              We work best with{" "}
              <span className="font-semibold">hands-on founders</span> who know
              their product and market, but feel stuck due to lack of control
              over finance, systems and daily execution.
            </p>
          </div>

          <ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-200">
            <li className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/70">
              • Cafeterias & food outlets that want to grow beyond one branch
              without losing cash-flow control.
            </li>
            <li className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/70">
              • Small & mid-sized retailers who need stock, sales and profit
              visibility – not just daily collection.
            </li>
            <li className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/70">
              • Service businesses and micro-production units that want proper
              tracking for projects, clients and staff.
            </li>
            <li className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900/70">
              • New founders who want to start with systems from Day 1, instead
              of cleaning up 3–4 years later.
            </li>
          </ul>
        </section>

        {/* How we work */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-lime-300">
            How We Work
          </h2>
          <p className="mt-3 text-lg font-semibold">
            From confusion to a monitored, scalable business.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Step 1 · Clarity
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Understand your current picture
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                We map your branches, products, expenses and team into a simple
                structure – what is happening where, and which numbers really
                matter.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Step 2 · Systems
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Build dashboards & SOPs
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                Using Google Sheets and simple tools, we set up finance tracking,
                daily monitoring sheets and basic SOPs, so everyone works using
                the same playbook.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Step 3 · Growth
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Connect marketing with money
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                We align campaigns, offers and expansion plans with the numbers
                on your dashboards – so growth is planned, not a gamble.
              </p>
            </div>
          </div>
        </section>

        {/* Vision block */}
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm dark:border-slate-700 dark:bg-slate-900/60">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-lime-300">
            Long-Term Vision
          </h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
            GTCT’s long-term goal is to{" "}
            <span className="font-semibold">
              build a network of Business Labs and SMB support hubs
            </span>{" "}
            that can empower thousands of small businesses to use technology,
            numbers and systems – without losing their local identity or
            personal touch.
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
            Every project, whether it is a single cafeteria or a full
            e-commerce setup, is treated as a{" "}
            <span className="font-semibold">long-term relationship</span>, not
            just a one-time delivery.
          </p>
        </section>
      </div>
    </main>
  );
}
