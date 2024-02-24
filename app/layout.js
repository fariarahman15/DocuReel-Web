import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuReel",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="min-h-min">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
