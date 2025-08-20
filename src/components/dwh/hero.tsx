export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] md:h-[70vh] flex items-center m-0 p-0">
            <img
                src="/assets/Kisumu%20DWH%20Banner.png"
                alt="Kisumu Lake Victoria"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <img
                    src="/assets/Logo.png"
                    alt="Kisumu County Logo"
                    className="h-16 md:h-20 lg:h-28"
                />
            </div>

            <div className="relative z-10 max-w-4xl px-4 sm:px-6 md:px-16 mt-24 sm:mt-32 text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left relative inline-block leading-snug">
                    The Kisumu <br /> Data Bank

                    <svg
                        className="absolute left-0 -bottom-4 sm:-bottom-5 w-48 sm:w-60 md:w-72 h-6 md:h-8"
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

                <p className="mt-10 sm:mt-12 md:mt-16 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-12 md:mb-20">
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
