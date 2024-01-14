import Navbar from "@/Components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";

import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Typing Speed App",
  description: "Generated by Abdulrahman.Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-3xl mx-auto">
            <Navbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
