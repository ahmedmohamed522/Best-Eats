import React from "react";

const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="relative max-h-[500px] ">
                {/* Overlay */}
                <div className="absolute  bg-black/40 text-gray-200 w-full h-full max-h-[500px] flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        The <span className="text-orange-600">Best</span>
                    </h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        <span className="text-orange-600">Foods</span> Delivered
                    </h1>
                </div>
                {/* Image */}
                <img src="hero.webp" alt="/" className="object-cover w-full max-h-[500px] " />
            </div>
        </div>
    );
};

export default Hero;
