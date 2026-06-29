import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingBookCTA from "@/components/layout/FloatingBookCTA";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Super Metro | Moving Beyond Boundaries",
  description:
    "Super Metro Transport — city routes, airport shuttle, charter and parcel services across 15+ stations in Nairobi.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Super Metro | Moving Beyond Boundaries",
    description:
      "Experience the difference with Super Metro Transport. Our commitment to excellence in every mile.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-metro-white text-metro-grey-900">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBookCTA />
      </body>
    </html>
  );
}
