import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from '../lib/registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nisarga Eco Consultants",
  description: "Nisarga Eco Consultants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
