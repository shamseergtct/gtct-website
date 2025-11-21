// app/layout.tsx
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTCT PRIVATE LIMITED",
  description: "Digital incubation & SMB growth partner.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
  suppressHydrationWarning
  className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-50 antialiased"
>
  <Toaster position="top-center" />
  <Header />
  <main className="pt-20">{children}</main>
  <Footer />
</body>
    </html>
  );
}
