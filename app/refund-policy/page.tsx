// app/refund-policy/page.tsx
export default function RefundPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Refund Policy
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            How refunds are handled at GTCT PRIVATE LIMITED.
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Effective Date: 20 November 2025
          </p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <p>
            GTCT PRIVATE LIMITED provides customised training, consulting, and
            digital services. Because of the effort, planning, and intellectual
            work involved, we follow a strict but fair refund policy.
          </p>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              1. Non-Refundable Services
            </h2>
            <p className="mt-2">
              The following are generally <span className="font-semibold">non-refundable</span> once purchased:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Completed BusinessLab training sessions.</li>
              <li>
                Completed consulting calls, strategy sessions, or reviews.
              </li>
              <li>
                Dashboards, SOPs, or digital assets already delivered or shared.
              </li>
              <li>Digital products, templates, or downloads.</li>
              <li>
                E-commerce or website setups where work has already started.
              </li>
              <li>
                Monthly support or retainer services after the billing period
                has started.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              2. Situations Where Refund May Be Considered
            </h2>
            <p className="mt-2">
              Refunds may be considered at our discretion in limited cases such
              as:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Duplicate payment or accidental double charge.</li>
              <li>
                Payment made but service not initiated within a reasonable time
                frame, and no mutually agreed reschedule.
              </li>
              <li>
                Internal processing or technical error on our side resulting in
                non-delivery.
              </li>
            </ul>
            <p className="mt-2">
              In such cases, we may offer a refund or credit towards a future
              service, at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              3. How to Request a Refund
            </h2>
            <p className="mt-2">
              To request a refund (where applicable), please email us at{" "}
              <span className="font-mono">gtcsmartshop@gmail.com</span> with:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your full name and contact number.</li>
              <li>Payment reference or transaction ID.</li>
              <li>
                Service purchased and date of purchase, with a short
                description of the issue.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              4. Refund Processing Time
            </h2>
            <p className="mt-2">
              Once a refund is approved, we will process it to the original
              payment method wherever possible. Processing times may vary
              depending on your bank or payment gateway, typically between 7–14
              business days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              5. Changes to This Policy
            </h2>
            <p className="mt-2">
              GTCT PRIVATE LIMITED reserves the right to modify this Refund
              Policy at any time. Changes will be reflected on this page with an
              updated effective date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
