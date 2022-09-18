import React from "react";
import { useState } from "react";
import { data } from "../data/data";

const Food = () => {
    const [foods, setFoods] = useState(data);

    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            {/* Filter row */}

            <div className="flex flex-col lg:flex-row justify-between">
                {/* Filter type */}
                <div className="">
                    <p className="font-bold text-gray-700">Filter Tag</p>
                    <div className="flex justify-between flex-wrap gap-1">
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            All
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            Burgers
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            Pizza
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            Salads
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            Chicken
                        </button>
                    </div>
                </div>

                {/* Filter price */}
                <div className="">
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[390px] w-full gap-1">
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            $
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            $$
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            $$$
                        </button>
                        <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[200px] object-cover rounded-t-lg"
                            />
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold ">{item.name}</p>
                                <p>
                                    <span className="bg-orange-500 text-white p-1 rounded-full">
                                        {item.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Food;
