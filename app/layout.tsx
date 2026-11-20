
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description:
    "Explore delicious recipes, search your favourites, and learn how to make them with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
