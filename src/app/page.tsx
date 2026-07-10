import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { Analytics } from '@vercel/analytics/next';


export default function Home() {
    return (
    <>
      <PortfolioPage />
      <Analytics />
    </>
  );
}
