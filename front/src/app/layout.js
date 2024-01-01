import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { metadata } from "../utils/constants";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
