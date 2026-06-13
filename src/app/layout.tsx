import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amosclaud AI",
  description: "International AI business platform for creators, code, media, services, and automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
