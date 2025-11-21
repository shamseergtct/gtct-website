export default function TwoPathModel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          The GTCT Two-Path Model
        </h2>

        <p className="text-center text-gray-700 mt-3 mb-10">
          Choose your growth path based on your confidence and product readiness.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Path A */}
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-700">
              Path A: Incubator
            </h3>
            <p className="mt-4 text-gray-700">
              Ideal for new or untested products.  
              We list your product on gtcshopping.com to generate REAL sales data.
            </p>
          </div>

          {/* Path B */}
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-700">
              Path B: Direct Launch
            </h3>
            <p className="mt-4 text-gray-700">
              Ideal for proven products or Incubator graduates.  
              Get your complete brand, website, marketing, and automation setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
