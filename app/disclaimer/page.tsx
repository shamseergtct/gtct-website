// app/disclaimer/page.tsx
export default function DisclaimerPage() {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Disclaimer
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Important information about using GTCT services.
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Effective Date: 20 November 2025
          </p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              1. No Guaranteed Results
            </h2>
            <p className="mt-2">
              GTCT PRIVATE LIMITED provides training, consulting, dashboards,
              and digital solutions to help businesses gain clarity, control,
              and better systems. However, we do not guarantee specific results
              such as profit figures, sales numbers, or growth percentages. Your
              business outcomes depend on multiple factors, including your
              implementation, market conditions, competition, and internal
              operations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              2. Not Financial or Legal Advice
            </h2>
            <p className="mt-2">
              Content, training, or suggestions provided by GTCT should not be
              considered as legal, tax, or financial advice. You should consult
              qualified professionals (e.g., CA, lawyer, financial advisor) for
              specialised advice related to compliance, taxation, or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              3. Accuracy of Information
            </h2>
            <p className="mt-2">
              While we strive to provide accurate and up-to-date information,
              GTCT does not warrant that all content on the website or in
              training materials is error-free or complete. We are not liable
              for any errors, omissions, or outdated information.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              4. Use of Tools &amp; Dashboards
            </h2>
            <p className="mt-2">
              Dashboards, templates, and tools are provided as aids to help you
              track and manage your business. The correctness of outputs depends
              on the data you enter. We are not responsible for incorrect
              decisions made based on incomplete, inaccurate, or outdated data
              entered by users or their teams.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              5. Third-Party Services
            </h2>
            <p className="mt-2">
              Our services may integrate or link with third-party platforms such
              as hosting providers, payment gateways, analytics tools, or
              messaging platforms. GTCT is not responsible for the performance,
              availability, or policies of such third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, GTCT PRIVATE LIMITED shall
              not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our website,
              training, consulting, or digital solutions.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              7. Contact
            </h2>
            <p className="mt-2">
              For questions regarding this Disclaimer, please contact:
            </p>
            <p className="mt-1">
              <span className="font-semibold">GTCT PRIVATE LIMITED</span>
              <br />
              Email: <span className="font-mono">gtcsmartshop@gmail.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
