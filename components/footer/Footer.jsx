import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Company Name */}
        <h2 className="text-2xl font-bold text-white">
          GTCT PRIVATE LIMITED
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">
          Empowering traditional businesses with digital transformation, 
          automation, incubation, and long-term growth systems.
        </p>

        {/* Main Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-gray-500">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link href="/refund-policy" className="hover:text-white transition">
            Refund Policy
          </Link>
          <Link href="/cookie-policy" className="hover:text-white transition">
            Cookie Policy
          </Link>
          <Link href="/disclaimer" className="hover:text-white transition">
            Disclaimer
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <FaFacebookF className="h-5 w-5 hover:text-white transition cursor-pointer" />
          <FaInstagram className="h-5 w-5 hover:text-white transition cursor-pointer" />
          <FaLinkedinIn className="h-5 w-5 hover:text-white transition cursor-pointer" />
          <FaYoutube className="h-5 w-5 hover:text-white transition cursor-pointer" />
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs mt-10">
          © {new Date().getFullYear()} GTCT Private Limited. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
