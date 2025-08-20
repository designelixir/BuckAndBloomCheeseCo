import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Buck & Bloom Cheese Co.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mlw6hvs.css" />
      </head>
      <body className="flex-center-center flex-column">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
