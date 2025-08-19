import { Database, MapPin, Cog } from "lucide-react";
import ProductCardFilled from "@/components/dwh/product-card-filled.tsx";
import ProductCardOutlined from "@/components/dwh/product-card-outlined.tsx";
import {runtimeConfig} from "@/config/runtime.ts";
const brand = {
    coral: "#D8634B",
    coralDark: "#C2513B",
};

export default function InformationProducts() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1100px] px-4 pb-24">
                <h2
                    className="text-2xl font-bold text-left"
                    style={{ color: brand.coral }}
                >
                    Information Products
                </h2>
                <div className="mt-5 grid gap-5 md:grid-cols-3 items-stretch">
                    <ProductCardFilled
                        icon={Database}
                        title="Kisumu Data Bank"
                        body="The central data bank serves as a repository for clean, curated datasets with downloadable, reusable information."
                        url={runtimeConfig.DATA_BANK_URL}
                    />
                    <ProductCardOutlined
                        icon={MapPin}
                        title="Geo Spatial Intelligence Maps"
                        body="Interactive maps that show client distribution across communities so locality and burden can guide targeted interventions."
                        url={runtimeConfig.GIS_URL}
                    />
                    <ProductCardFilled
                        icon={Cog}
                        title="Self Service"
                        body="Empowering stakeholders to run their own analysis, download datasets, and generate insights to inform program outcomes."
                        url={runtimeConfig.SELF_SERVICE_URL}
                    />
                </div>
            </div>
        </section>
    );
}
