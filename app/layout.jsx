import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Super Pneumatics & Hydraulics",
  description: "offer products like Air Filter B Type, Air Lubricator, Automobile Hose Clip, Pneumatic Clamp, Spray Gun, Brass Nozzle, etc.",
  icons: {
    icon: "/logo.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div className="fixed top-[72%] right-6 z-[9999]">
          <Link href="https://wa.me/+919224169123" target='_blank'>
            <Image src='/whatsapp.png' alt='Whatsapp' width={100} height={100} />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
