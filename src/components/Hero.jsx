import React from "react";

const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[500px] relative">
                {/* Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:5xl md:6xl lg:7xl font-bold">
                        The <span className="text-orange-600">Best </span>
                    </h1>
                    <h1 className="px-4 text-4xl sm:5xl md:6xl lg:7xl font-bold">
                        <span className="text-orange-600">Foods</span> Delivered
                    </h1>
                </div>

                {/* image */}
                <img
                    className="w-full max-h-[500px] object-cover"
                    src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="/"
                />
            </div>
        </div>
    );
};

export default Hero;