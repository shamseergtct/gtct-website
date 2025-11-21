export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About GTCT PRIVATE LIMITED
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Established in 2019, GTCT empowers small and medium businesses with
            digital tools, systems, dashboards, and growth pathways.  
            With over 25 years of combined business experience, our team helps
            entrepreneurs transform traditional operations into scalable models.
          </p>

          <a
            href="#"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>

        <img
          src="/images/about-gctc.png"
          className="rounded-2xl shadow-xl"
          alt="GTCT Office"
        />

      </div>
    </section>
  );
}
