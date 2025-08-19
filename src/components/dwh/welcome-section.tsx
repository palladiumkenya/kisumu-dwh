export default function WelcomeSection() {
    const brand = {
        coral: "#D8634B",
        coralDark: "#C2513B",
    };

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1100px] px-4 pb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-full">
                        <svg
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <defs>
                                <clipPath id="blobClip">
                                    <path
                                        d="M404.5,153.5Q409,207,424,259.5Q439,312,403.5,354.5Q368,397,309,423.5Q250,450,197,416Q144,382,95.5,345.5Q47,309,53.5,250.5Q60,192,89.5,139.5Q119,87,176,64Q233,41,289.5,63.5Q346,86,384,128Q422,170,404.5,153.5Z"
                                    />
                                </clipPath>
                            </defs>

                            <image
                                xlinkHref="/assets/nurse.jfif"
                                width="500"
                                height="500"
                                preserveAspectRatio="xMidYMid slice"
                                clipPath="url(#blobClip)"
                                transform="translate(0, 40)"
                            />
                        </svg>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold" style={{ color: brand.coral }}>
                            Welcome
                        </h2>
                        <div className="prose prose-zinc mt-4 max-w-none text-sm leading-relaxed text-left space-y-6">
                            <p>
                                The Kisumu Data Bank – a centralized digital infrastructure designed to collect,
                                integrate, and analyze health data from across the county. By transforming fragmented
                                data into actionable intelligence, Kisumu Data Bank empowers county leadership and
                                health stakeholders to make evidence-based decisions that enhance service delivery,
                                optimize resource allocation, and improve health outcomes for all residents.
                            </p>
                            <p>
                                Beyond data consolidation, Kisumu Data Bank is equipped with advanced capabilities
                                such as <strong>Self-Service Analytics</strong>, enabling authorized users — from
                                policymakers to facility managers —{" "}
                                <span className="text-[#E14D2A] font-semibold">
                                    to independently query and visualize data in real time
                                 </span>
                                . This promotes transparency, responsiveness, and data-driven planning. The platform
                                also supports automated reporting, predictive analytics for early warning systems,
                                geospatial mapping of health trends, and secure role-based access to ensure data
                                privacy and integrity. With these features, Kisumu Data Bank is not just a data
                                repository — it is a strategic tool for driving health sector efficiency,
                                accountability, and innovation across the county.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
