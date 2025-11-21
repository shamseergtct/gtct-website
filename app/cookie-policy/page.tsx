// app/cookie-policy/page.tsx
export default function CookiePolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Cookie Policy
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            How GTCT uses cookies and tracking.
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Effective Date: 20 November 2025
          </p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              1. What Are Cookies?
            </h2>
            <p className="mt-2">
              Cookies are small text files that are stored on your device when
              you visit a website. They help websites function properly and
              provide information to the site owners for analytics, performance,
              and personalisation.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              2. How We Use Cookies
            </h2>
            <p className="mt-2">GTCT may use cookies for purposes such as:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Remembering your preferences and settings.</li>
              <li>Improving website performance and speed.</li>
              <li>Understanding how visitors use our website.</li>
              <li>
                Supporting marketing and advertising efforts in a responsible
                manner.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              3. Types of Cookies We May Use
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Essential Cookies:</span> Needed
                for basic website operation.
              </li>
              <li>
                <span className="font-semibold">Analytics Cookies:</span> Help
                us understand traffic, page usage, and user journey.
              </li>
              <li>
                <span className="font-semibold">Functional Cookies:</span>{" "}
                Remember your preferences (e.g., theme, basic form details).
              </li>
              <li>
                <span className="font-semibold">Marketing Cookies:</span> Used
                to track the effectiveness of campaigns, where applicable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              4. Managing Cookies
            </h2>
            <p className="mt-2">
              Most web browsers allow you to manage or disable cookies through
              their settings. If you choose to block some or all cookies, parts
              of the website may not function as intended.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              5. Third-Party Cookies
            </h2>
            <p className="mt-2">
              We may use third-party services (like analytics tools) that set
              their own cookies. These cookies are governed by the respective
              third-party privacy and cookie policies.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              6. Changes to This Cookie Policy
            </h2>
            <p className="mt-2">
              We may update this Cookie Policy periodically. We encourage you to
              review it regularly to stay informed about how we use cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
