import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductCardOutlined({
                                                icon: Icon,
                                                title,
                                                body,
                                                url
                                            }: {
    icon: React.ElementType;
    title: string;
    body: string;
    url:string;
}) {
    return (
        <div className="flex flex-col rounded-2xl border border-zinc-300 bg-white p-5 h-full">
            <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700">
                    <Icon className="size-5" />
                </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm/6 text-zinc-700 flex-grow">{body}</p>
            <a href={url}>
                <Button
                    className="mt-4 self-start"
                    variant="outline"
                >
                    Learn more
                    <ArrowRight className="size-4" />
                </Button>
            </a>
        </div>
    );
}
