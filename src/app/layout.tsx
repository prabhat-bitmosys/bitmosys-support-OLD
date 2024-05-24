import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitmosys Support",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full max-h-screen">
            <div>
              <div className="sticky top-0 z-10">
                <Navbar></Navbar>
              </div>
              <div className="">
                {children}
                {/* <Footer></Footer> */}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
