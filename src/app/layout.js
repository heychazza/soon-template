import "./globals.css";
import { FathomAnalytics } from "@/components/Fathom";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FathomAnalytics />
      <body className="antialiased">{children}</body>
    </html>
  );
}
