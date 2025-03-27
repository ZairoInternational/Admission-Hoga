import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Admission Hoga",
  description: "Created by Admission Hoga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
