export default function Hero() {
    return (
        <section className="relative w-full h-[60vh] flex items-center m-0 p-0">
            <img
                src="/assets/Kisumu%20DWH%20Banner.png"
                alt="Kisumu Lake Victoria"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" />

            <div className="absolute top-6 left-6 z-20">
                <img
                    src="/assets/Logo.png"
                    alt="Kisumu County Logo"
                    className="h-35"
                />
            </div>

            <div className="relative z-10 max-w-4xl px-6 md:px-16 mt-20 text-left">
                <h1 className="text-5xl md:text-5xl font-bold text-white text-left relative inline-block">
                    The Kisumu <br /> Data Bank

                    <svg
                        className="absolute left-0 -bottom-5 w-72 h-8"
                        viewBox="0 0 320 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 25 C 80 5, 220 45, 315 20"
                            stroke="#E14D2A"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            opacity="0.9"
                        />

                        <path
                            d="M10 30 C 85 12, 225 50, 310 25"
                            stroke="#E14D2A"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            opacity="0.6"
                        />
                    </svg>
                </h1>

                <p className="mt-16 text-lg text-gray-200 max-w-2xl leading-relaxed">
                    At the heart of Kisumu County&apos;s health transformation lies the
                    Kisumu Data Bank — a centralized hub that seamlessly integrates,
                    processes, and analyzes health data from across the region. By
                    turning raw data into actionable insights, Kisumu Data Bank empowers
                    health stakeholders to make informed decisions, improve service
                    delivery, and drive impactful public health outcomes for every
                    resident.
                </p>
            </div>
        </section>
    );
}
