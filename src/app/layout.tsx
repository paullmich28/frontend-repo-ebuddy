import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomTheme from "@/themes/customTheme";
import "./globals.css";
import ReduxProvider from "@/app/components/auth/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EBUDDY Frontend Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <CustomTheme>{children}</CustomTheme>
        </ReduxProvider>
      </body>
    </html>
  );
}
