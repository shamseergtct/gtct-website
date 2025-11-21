import Link from "next/link";

export default function MobileMenu({ setOpen }) {
  return (
    <div className="md:hidden bg-white shadow-lg border-t py-4 px-6">
      <nav className="flex flex-col text-lg text-gray-700 gap-3">
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </div>
  );
}
