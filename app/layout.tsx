import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calcutta Cloud - All-in-One Creative, Technology & Marketing Ecosystem",
  description: "Heritage Meets Tech. Empowering creators, businesses, and brands with strategy, design, development, marketing, and automation — all under one seamless platform.",
  icons: {
    icon: "/cloud.jpg",
  },
  openGraph: {
    title: "Calcutta Cloud - All-in-One Creative, Technology & Marketing Ecosystem",
    description: "Heritage Meets Tech. Empowering creators, businesses, and brands with strategy, design, development, marketing, and automation — all under one seamless platform.",
    images: ["/cloud.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcutta Cloud - All-in-One Creative, Technology & Marketing Ecosystem",
    description: "Heritage Meets Tech. Empowering creators, businesses, and brands with strategy, design, development, marketing, and automation — all under one seamless platform.",
    images: ["/cloud.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
