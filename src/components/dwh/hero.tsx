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
                    className="h-20"
                />
            </div>

            <div className="relative z-10 max-w-4xl px-6 md:px-16 mt-20">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    The Kisumu Data Bank
                </h1>
                <div className="w-28 h-[3px] bg-[#E14D2A] mt-3 mb-6"></div>

                <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
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
