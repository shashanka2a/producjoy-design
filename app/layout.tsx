import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";


export const metadata: Metadata = {
  title: "ProductJoy Design Studio",
  description: "Premium UI, UX, and Brand design for fast-moving startups.",
  keywords: [
    "UI design",
    "UX design",
    "product design",
    "branding",
    "startup design",
  ],
  openGraph: {
    title: "ProductJoy Design Studio",
    description:
      "Premium UI, UX, and Brand design for fast-moving startups.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ProductJoy Design Studio",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
