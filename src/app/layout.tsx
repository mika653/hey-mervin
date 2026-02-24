import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mervin De Castro — Custom Apps & Automation Builder",
  description:
    "Custom-built apps, automations, and internal tools tailored exactly to how your business operates. No templates, no compromises.",
  openGraph: {
    title: "Mervin De Castro — Custom Apps & Automation Builder",
    description:
      "Why buy something built for everyone when you can get something built for you?",
    type: "website",
  },
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
