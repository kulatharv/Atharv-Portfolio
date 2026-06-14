import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharv Kulkarni | Software Engineer",
  description:
    "Software Engineer, QA Automation Engineer, Backend Developer, AI Systems Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}