export default function Hero() {
    return (
        <section className="relative w-full min-h-[80vh] md:min-h-[70vh] flex items-center m-0 p-0">
            <img
                src="/assets/Kisumu%20DWH%20Banner.png"
                alt="Kisumu Lake Victoria"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full">
                <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-20 lg:pt-24 xl:pt-28 text-left">

                    <div className="mb-8">
                        <img
                            src="/assets/Logo.png"
                            alt="Kisumu County Logo"
                            className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 max-w-[120px] md:max-w-[140px] object-contain"
                        />
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white relative inline-block leading-snug">
                        The Kisumu <br /> Data Bank

                        <svg
                            className="absolute left-0 -bottom-3 sm:-bottom-4 md:-bottom-5 w-40 sm:w-52 md:w-64 lg:w-72 h-5 md:h-8"
                            viewBox="0 0 320 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 25 C 80 5, 220 45, 315 20"
                                stroke="#E14D2A"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.9"
                            />
                            <path
                                d="M10 30 C 85 12, 225 50, 310 25"
                                stroke="#E14D2A"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.6"
                            />
                        </svg>
                    </h1>

                    <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-prose leading-relaxed mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                        At the heart of Kisumu County&apos;s health transformation lies the
                        Kisumu Data Bank — a centralized hub that seamlessly integrates,
                        processes, and analyzes health data from across the region. By
                        turning raw data into actionable insights, Kisumu Data Bank empowers
                        health stakeholders to make informed decisions, improve service
                        delivery, and drive impactful public health outcomes for every
                        resident.
                    </p>
                </div>
            </div>
        </section>
    );
}
