import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ganesh Crane Service | Crane & Hydra Rental Agency in Bhilai",
  description: "Ganesh Crane Service is a trusted crane and hydra rental agency in Bhilai, Chhattisgarh. Specialized in taking heavy lifting contracts for industrial and construction projects.",
  keywords: "Crane rental service in Bhilai, Hydra rental service in Bhilai, Crane service in Chhattisgarh, Industrial crane rental in Bhilai, Hydra crane with operator in Bhilai, Heavy lifting services in Chhattisgarh",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
