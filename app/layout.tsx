import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResumeShift",
  description: "AI-powered resume and job tracking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "16px", borderBottom: "1px solid #ddd", display: "flex", gap: "16px" }}>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/jobs">Jobs</Link>
          <Link href="/dashboard/master-resume">Master Resume</Link>
        </nav>
        <main style={{ padding: "24px" }}>{children}</main>
      </body>
    </html>
  );
}