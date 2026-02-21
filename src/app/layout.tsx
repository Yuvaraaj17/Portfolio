import type { Metadata } from "next";
import { Inter, Poppins, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "../global.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Yuvaraaj S — Software Developer",
  description:
    "Portfolio of Yuvaraaj S — a versatile software developer experienced in building scalable web apps, efficient back-end systems, and intuitive UIs.",
  keywords: [
    "Yuvaraaj",
    "Software Developer",
    "Full Stack",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Yuvaraaj S" }],
  openGraph: {
    title: "Yuvaraaj S — Software Developer",
    description:
      "Versatile software developer building scalable web apps and intuitive UIs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvaraaj S — Software Developer",
    description:
      "Versatile software developer building scalable web apps and intuitive UIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
