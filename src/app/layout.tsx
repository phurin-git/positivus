import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://figma-positivus-landing-page.vercel.app/"),
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon-light.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon-dark.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  title: "Positivus",
  description: "a beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients. Positivus comes complete with two screens - one for desktop and one for mobile - as well as a variety of styles and components, all designed using Figma's auto layout feature for maximum efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className || ''} sm:min-w-[1280px] lg:w-full max-w-screen-2xl  leading-normal tracking-normal antialiased px-[20px] sm:px-[100px] overscroll-none`}>{children}</body>
    </html>
  );
}
