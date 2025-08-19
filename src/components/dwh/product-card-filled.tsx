import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const brand = {
    coral: "#D8634B",
    coralDark: "#C2513B",
};

export default function ProductCardFilled({
                                              icon: Icon,
                                              title,
                                              body,
                                          }: {
    icon: React.ElementType;
    title: string;
    body: string;
}) {
    return (
        <div
            className="flex flex-col rounded-2xl p-5 text-white shadow-sm h-full"
            style={{ backgroundColor: brand.coral }}
        >
            <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-white/15">
                    <Icon className="size-5" />
                </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm/6 opacity-90 flex-grow">{body}</p>
            <Button
                className="mt-4 self-start flex items-center gap-2"
                variant="ghost"
            >
                Explore
                <ArrowRight className="size-4" />
            </Button>
        </div>
    );
}
