import type { Metadata } from "next";
import { Unbounded, Work_Sans } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Walako Pub — Accra's Home for Late Nights",
  description:
    "Shisha lounge, live DJ nights, ice-cold beers and suya on the grill. Walako Pub is Accra's home for late nights. Reserve a table or explore the menu.",
  openGraph: {
    title: "Walako Pub — Accra's Home for Late Nights",
    description:
      "Shisha lounge, live DJ nights, ice-cold beers and suya on the grill. Reserve a table or explore the menu.",
    images: ["/images/hero.jpg"],
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-full bg-ink text-bone antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
