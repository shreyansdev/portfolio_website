import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../theme/functions/siteConfig";
import { Navbar } from "../theme/partials/Navbar";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Shreyans Jain",
    "Portfolio",
    "Full-Stack Developer",
    "Cybersecurity",
    "IoT",
    "Acharya Institute of Technology",
    "Next.js Neo Brutalism",
    "React Developer Bengaluru",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas text-ink antialiased min-h-screen selection:bg-neo-yellow selection:text-ink font-sans">
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
