import SmoothScroll from "@/utils/SmoothScroll";
import "./globals.css";
import { prefix } from "../../config";

export const metadata = {
  title: "GVR Landing Page",
  description: "Next.js + React Three Fiber Landing Page",
  icons : {
    icon: `${prefix}favicon.png`,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${prefix}favicon.png`} type="image/png" />       
      </head>
      <body className="bg-black text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
