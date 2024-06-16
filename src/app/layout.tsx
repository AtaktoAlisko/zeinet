import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeinet toy",
  description: "zeinet toy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/bg-all.png')] bg-cover bg-fixed bg-center bg-no-repeat">
        {children}
      </body>
    </html>
  );
}
