import ProjectCard from "../ui/ProjectCard";

export default function ProjectsShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Projects & Ecosystem
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12 max-w-3xl mx-auto">
          GTCT is more than a service provider — we build real systems that transform 
          traditional small businesses into smart, scalable enterprises.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* GTCT Smart Shop */}
          <ProjectCard
            title="GTCT Smart Shop"
            description="A smart marketplace connecting local sellers, delivery partners, and community buyers."
            image="/images/smart-shop.png"
            link="/projects/gtct-smart-shop"
          />

          {/* Business Lab */}
          <ProjectCard
            title="Business Lab (Incubator)"
            description="A 2-week hands-on incubator for SMBs to gain clarity, structure, and a tested digital strategy."
            image="/images/businesslab.png"
            link="/projects/business-lab"
          />

          {/* ClarityDesk */}
          <ProjectCard
            title="ClarityDesk"
            description="A business monitoring & reporting system for SMBs to track money, performance & tasks."
            image="/images/claritydesk.png"
            link="/projects/claritydesk"
          />

          {/* AutoGrow SMB */}
          <ProjectCard
            title="AutoGrow SMB"
            description="A finance automation framework to help SMBs eliminate cashflow leaks and scale profits."
            image="/images/autogrow.png"
            link="/projects/autogrow-smb"
          />

          {/* Election App */}
          <ProjectCard
            title="GTCT Election Management App"
            description="A full-stack React-Firebase app for voter management, booth operations, and squad workflows."
            image="/images/election-app.png"
            link="/projects/election-app"
          />

          {/* Custom Development */}
          <ProjectCard
            title="Custom Development"
            description="We develop tailor-made business systems, portals, dashboards, and SaaS tools."
            image="/images/custom-app.png"
            link="/contact"
          />
        </div>
      </div>
    </section>
  );
}
