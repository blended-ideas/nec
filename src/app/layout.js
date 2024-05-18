import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nisarga Eco Consultants",
  description: "Composting, Green Audit, Energy Audit, Environment Audit, Rainwater Harvesting, Sewage Treatment Plants",
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
