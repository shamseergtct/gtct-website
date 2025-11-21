export default function Portfolio() {
  const projects = [
    {
      title: "ClarityDesk Dashboard",
      image: "/projects/claritydesk.png",
    },
    {
      title: "AutoGrow SMB Finance Automation",
      image: "/projects/autogrow.png",
    },
    {
      title: "GTC Smart Shop",
      image: "/projects/smartshop.png",
    },
    {
      title: "Business Lab LMS",
      image: "/projects/businesslab.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Recent Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md border hover:shadow-xl transition"
            >
              <img
                src={p.image}
                className="rounded-t-xl h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
