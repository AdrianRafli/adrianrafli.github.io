import AuroraBackground from "@/components/layout/AuroraBackground";
import Navbar from "@/components/layout/NavBar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-neutral-100">
        <AuroraBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}