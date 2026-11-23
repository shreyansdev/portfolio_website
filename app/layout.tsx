import type { Metadata } from "next";
import { Anton, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../theme/functions/siteConfig";
import { Navbar } from "../theme/partials/Navbar";
import { ThemeProvider } from "../theme/context/ThemeContext";
import { MotionProvider } from "../theme/context/MotionProvider";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

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
    "Manga Portfolio",
    "React Developer Bengaluru",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: "https://shreyansdev.github.io/portfolio_website/",
    images: [
      {
        url: "https://shreyansdev.github.io/portfolio_website/avatar.png",
        width: 1254,
        height: 1254,
        alt: siteConfig.avatarAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["https://shreyansdev.github.io/portfolio_website/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}else{var d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",d);}}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`,
          }}
        />
      </head>
      <body
        className={`${anton.variable} ${inter.variable} ${dmMono.variable} bg-paper text-ink-new font-sans antialiased min-h-screen transition-colors duration-200`}
      >
        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            <main className="relative">{children}</main>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
