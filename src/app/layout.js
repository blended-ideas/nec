import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry';

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Nisarga Eco Consultants",
  description: "Composting, Green Audit, Energy Audit, Environment Audit, Rainwater Harvesting, Sewage Treatment Plants",
  icon: {
    
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
