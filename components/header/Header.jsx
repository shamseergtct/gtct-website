"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // True if user is currently on homepage
  const onHome = pathname === "/";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          {/* Mobile logo */}
          <div className="block md:hidden">
            <Image
              src="/images/logo-icon.png"
              alt="GTCT logo icon"
              width={32}
              height={32}
              priority
            />
          </div>

          {/* Desktop logo */}
          <div className="hidden md:block">
            <Image
              src="/images/logo-full.png"
              alt="GTCT Private Limited logo"
              width={160}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex dark:text-slate-100">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              scroll={item.href.startsWith("/#") ? true : undefined}
              className="transition-colors hover:text-blue-600 dark:hover:text-lime-300"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 dark:bg-lime-400 dark:text-slate-950 dark:hover:bg-lime-300"
          >
            Free Strategy Call
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-4 w-4">{open ? "✕" : "☰"}</span>
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 text-sm md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-slate-800 transition hover:text-blue-600 dark:text-slate-100 dark:hover:text-lime-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-blue-600 px-4 py-2 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 dark:bg-lime-400 dark:text-slate-950 dark:hover:bg-lime-300"
            >
              Free Strategy Call
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
