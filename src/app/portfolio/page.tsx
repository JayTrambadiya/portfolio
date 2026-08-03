import PortfolioPage from "@/components/portfolio/PortfolioPage";
import Link from "next/link";

export default function Home() {
    return (<>
        <h1>{"Jay's cart"}</h1>
        <div className={"flex gap-4"}>
            {[1, 2, 3, 4, 5,6,7,8,9,10,1,1,1,1,1,1,1,1,1.12,1,3,13,13,1321,323,12323,1231,3123,123,123,123,12,312,312,31,23,123,123,12,312,312,3,23,24,24,234,234,23,423,423,423,42,34,234,23,423,423,4,234,234,23,423,42,34,24,234,23,423,423,423,4,234,23,423,423,42,34,234,23,423,423,4,234,23,423,423,4,4,234,23,23,4,234,234,2].map((item,i) => (
                <Link key={i} href={`/cart/${i}`}>
                    <div className={"p-4 bg-gray-200 rounded-md"}>
                        Item {i}
                    </div>
                </Link>
            ))
            }


        </div>
        <PortfolioPage />
    </>);
}