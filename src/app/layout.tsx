import "./globals.css";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Follow Diff - See Who Doesn't Follow You Back",
  description:
    "Safely see your Instagram non-followers using your official Instagram data. Your files are processed right in your browser and never uploaded anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        {children}
        <Analytics></Analytics>
      </body>
    </html>
  );
}
