import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Academic Research Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.name} | Academic Research Portfolio`,
    description: profile.summary,
    siteName: `${profile.name}`,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
