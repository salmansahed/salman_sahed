import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import SmoothScroll from "@/components/SmoothScroll";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Salman Sahed | MERN Stack & Next.js Developer",
    template: "%s | Salman Sahed",
  },

  description:
    "Salman Sahed is a passionate MERN Stack and Next.js Developer from Bangladesh. Explore modern web applications, responsive UI/UX projects, full-stack development skills, and portfolio projects built with React, Next.js, MongoDB, Express.js, Tailwind CSS, and JavaScript.",

  keywords: [
    "Salman Sahed",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Web Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Frontend Developer Bangladesh",
    "Web Developer Portfolio",
    "Next.js Portfolio",
    "React Portfolio",
    "Bangladesh Developer",
  ],

  authors: [{ name: "Salman Sahed", url: "https://github.com/salmansahed" }],
  creator: "Salman Sahed",
  publisher: "Salman Sahed",

  metadataBase: new URL("https://salman-sahed.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Salman Sahed | MERN Stack & Next.js Developer",
    description:
      "Explore the portfolio of Salman Sahed — a passionate MERN Stack & Next.js Developer building modern, responsive, and user-focused web applications.",
    url: "https://salman-sahed.vercel.app",
    siteName: "Salman Sahed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salman Sahed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
  verification: {
    google: "OroClGEF2K52Ro89_WCqBpmB_fPYCuuWpvpdQUbrtsQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>
          <main className="bg-[#040b24] text-white">
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
