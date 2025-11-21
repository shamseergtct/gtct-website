import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
      <Image
        src={image}
        alt={title}
        width={300}
        height={180}
        className="rounded-lg mx-auto mb-5 object-cover h-[160px]"
      />

      <h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>

      <p className="text-gray-600 text-center mt-3">{description}</p>

      <div className="text-center mt-4">
        <Link href={link} className="text-blue-600 font-medium hover:underline">
          View Project →
        </Link>
      </div>
    </div>
  );
}
