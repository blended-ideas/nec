import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry';
import { COMMON_OG_TAGS } from "./common.constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL('https://www.nisargaecoconsultants.com'),
  title: "Nisarga Eco Consultants | Sewage Treatment | Rainwater Harvesting | India",
  description: "Nisarga Eco Consultants provide services in Sewage and Effluent Treatment Plants, Water Purification Solutions, Rainwater harvesting, Biogas Plants and toilet linked biogas plants, Green Audits, Energy Audits. We supply equipments, pumps, RO Plants, STP's, ETP's",
  openGraph: {
    url: '/',
    title: "Nisarga Eco Consultants | Sewage Treatment | Rainwater Harvesting | India",
    description: "Nisarga Eco Consultants provide services in Sewage and Effluent Treatment Plants, Water Purification Solutions, Rainwater harvesting, Biogas Plants and toilet linked biogas plants, Green Audits, Energy Audits. We supply equipments, pumps, RO Plants, STP's, ETP's",
    ...COMMON_OG_TAGS,
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
