// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Header */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-lime-300">
            Privacy Policy
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            How GTCT PRIVATE LIMITED handles your data.
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Effective Date: 20 November 2025
          </p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <p>
            GTCT PRIVATE LIMITED (&quot;GTCT&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, store, and protect your information
            when you use our website, services, training programs, consulting,
            and digital products.
          </p>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              1. Information We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold">Personal Information:</span>{" "}
                Name, email address, phone/WhatsApp number, business details,
                and any information you provide in forms or during consultations.
              </li>
              <li>
                <span className="font-semibold">Technical Information:</span>{" "}
                IP address, device type, browser type, pages visited, time spent
                on pages, and cookies or similar tracking technologies.
              </li>
              <li>
                <span className="font-semibold">Payment Information:</span>{" "}
                Payments are processed through secure third-party gateways. We
                do not store your full card or banking details on our servers.
              </li>
              <li>
                <span className="font-semibold">Business Files:</span> Files
                you upload (such as PDF/XLS reports, statements, or business
                data) for analysis, dashboard setup, or consulting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information to deliver and improve our services,
              including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Providing BusinessLab training and implementation support.</li>
              <li>
                Setting up dashboards, SOPs, e-commerce systems, and control
                tools.
              </li>
              <li>
                Communicating with you regarding your account, services, and
                support.
              </li>
              <li>Sending relevant updates, resources, or service information.</li>
              <li>Improving website performance, UX, and security.</li>
              <li>Complying with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              3. Sharing of Information
            </h2>
            <p className="mt-2">
              We do not sell or trade your personal information. We may share
              data with:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Internal team members and trusted partners required to deliver
                services.
              </li>
              <li>
                Service providers such as hosting companies, email platforms,
                analytics tools, and payment gateways.
              </li>
              <li>
                Authorities or regulators when required under applicable law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              4. Data Security
            </h2>
            <p className="mt-2">
              We use reasonable technical and organisational measures to protect
              your data. However, no method of transmission or storage over the
              Internet is 100% secure. You are advised to share only necessary
              information and keep your devices secure.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              5. Data Retention
            </h2>
            <p className="mt-2">
              We retain your data for as long as required to provide services,
              meet legal obligations, or resolve disputes. You may request
              deletion of your data, subject to legal or legitimate business
              reasons for retention.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              6. Your Rights
            </h2>
            <p className="mt-2">
              Subject to applicable law, you may have the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or updating of your information.</li>
              <li>Request deletion of your data where legally allowable.</li>
              <li>Withdraw consent for marketing communications.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, email us at{" "}
              <span className="font-mono">gtcsmartshop@gmail.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              7. Cookies and Tracking
            </h2>
            <p className="mt-2">
              We use cookies and similar technologies to enhance your experience
              and analyse website usage. More details are provided in our Cookie
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              8. Third-Party Links
            </h2>
            <p className="mt-2">
              Our website may include links to third-party websites. We are not
              responsible for their content, security, or privacy practices. You
              should review their policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              9. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated effective date. Your
              continued use of our services after such changes constitutes
              acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              10. Contact Us
            </h2>
            <p className="mt-2">
              For questions about this Privacy Policy or your data, please
              contact:
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
