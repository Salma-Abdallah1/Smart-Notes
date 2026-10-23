import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Notes",
  description: "A simple notes app built with Next.js and DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
