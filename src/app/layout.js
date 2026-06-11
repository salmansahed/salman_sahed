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
    "Official portfolio of Salman Sahed, a passionate MERN Stack and Next.js Developer from Bangladesh building modern, responsive, and scalable full-stack web apps.",

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
    "Salman Sahed - Portfolio",
    "Salman Sahed Portfolio",
    "Salman Sahed Portfolio Website",
    "MERN Stack Developer Bangladesh",
    "TypeScript Developer",
    "Redux Toolkit",
    "Firebase Developer",
    "REST API Developer",
    "Responsive Web Design",
    "Next.js Portfolio Developer",
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
      "Explore the official portfolio of Salman Sahed — a passionate MERN Stack & Next.js Developer building responsive and user-focused web applications.",
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

  twitter: {
    card: "summary_large_image",
    title: "Salman Sahed | MERN Stack & Next.js Developer",
    description:
      "Explore the official portfolio of Salman Sahed — a passionate MERN Stack & Next.js Developer building responsive and user-focused web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  category: "technology",

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "OroClGEF2K52Ro89_WCqBpmB_fPYCuuWpvpdQUbrtsQ",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://salman-sahed.vercel.app/#person",
      name: "Salman Sahed",
      url: "https://salman-sahed.vercel.app",
      image: "https://salman-sahed.vercel.app/profile.png",
      description:
        "Passionate MERN Stack and Next.js Developer specializing in modern, responsive, and scalable full-stack web applications.",
      jobTitle: "MERN Stack & Next.js Developer",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Bangladesh",
      },
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST API",
        "Responsive Web Design",
      ],
      sameAs: [
        "https://github.com/salmansahed",
        "https://www.linkedin.com/in/salman-sahed",
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://salman-sahed.vercel.app/#webpage",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://salman-sahed.vercel.app/#website",
      url: "https://salman-sahed.vercel.app",
      name: "Salman Sahed Portfolio",
      description:
        "Personal portfolio website of Salman Sahed, showcase of MERN & Next.js projects.",
      inLanguage: "en",
      publisher: {
        "@id": "https://salman-sahed.vercel.app/#person",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://salman-sahed.vercel.app/#webpage",
      url: "https://salman-sahed.vercel.app",
      name: "Salman Sahed Portfolio",
      description:
        "Portfolio of Salman Sahed, MERN Stack and Next.js Developer showcasing full-stack web development projects and skills.",
      isPartOf: {
        "@id": "https://salman-sahed.vercel.app/#website",
      },
      about: {
        "@id": "https://salman-sahed.vercel.app/#person",
      },
    },
  ],
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
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
