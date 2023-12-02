import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "../utils/constants";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return <>{children}</>;
}
