import KisumuMap from "@/components/dwh/kisumu-map.tsx";

export default function Footer() {
    const brand = {
        coral: "#D8634B",
        coralDark: "#C2513B",
    };

    return (
        <footer style={{ backgroundColor: brand.coral }}>
            <div className="mx-auto max-w-[1100px] px-4 py-8 text-white">
                <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr_.9fr]">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/assets/Logo.png" alt="County Crest" className="h-12 w-12 rounded-full bg-white/90 p-1" />
                            <div className="text-lg font-semibold">Kisumu Data Bank</div>
                        </div>
                        <p className="mt-3 text-sm/6 opacity-90 text-left">
                            Welcome to the Kisumu Data Bank, your gateway to curated, high-quality datasets. Access
                            insights, resources, and tools to drive better outcomes across Kisumu County.
                        </p>
                    </div>
                    <div>
                        <div className="text-base font-semibold text-left">Useful Links</div>
                        <ul className="mt-3 space-y-2 text-sm/6 text-left">
                            <li><a className="hover:underline" href="#">Home</a></li>
                            <li><a className="hover:underline" href="#">Insights</a></li>
                            <li><a className="hover:underline" href="#">Maps</a></li>
                            <li><a className="hover:underline" href="#">Reports</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-base font-semibold">Address</div>
                        <div className="mt-3 overflow-hidden rounded-xl">
                            <KisumuMap />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/20 py-3 text-center text-sm text-white/90">© 2025 All Right Reserved</div>
        </footer>
    );
}
