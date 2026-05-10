import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archana App - Smart Order Hotel",
  description:
    "Landing page Archana App untuk smart order room service hotel berbasis QR Code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
