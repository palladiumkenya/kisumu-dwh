import Footer from "@/components/layout/footer.tsx";
import InformationProducts from "@/components/dwh/information-products.tsx";
import WelcomeSection from "@/components/dwh/welcome-section.tsx";
import Hero from "@/components/dwh/hero.tsx";

export default function KisumuDataBank() {
    return (
        <main className="w-full m-0 p-0">
            <Hero />
            <WelcomeSection />
            <InformationProducts />
            <Footer />
        </main>
    );
}
