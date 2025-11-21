import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex gap-8 items-center font-medium text-gray-800">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>

      <Link
        href="/contact"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </nav>
  );
}
