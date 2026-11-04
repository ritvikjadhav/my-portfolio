
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RS | Full Stack Web Developer",
  description:
    "Portfolio of RS — Full Stack Web Developer. Explore VelType, Bizvero and my web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
