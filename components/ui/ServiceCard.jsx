import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ title, description, image, link }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
      <div className="flex justify-center mb-5">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <Link
        href={link}
        className="block mt-5 text-blue-600 font-medium hover:underline"
      >
        Learn More →
      </Link>
    </div>
  );
}
