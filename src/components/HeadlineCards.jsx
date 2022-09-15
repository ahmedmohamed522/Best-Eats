import React from "react";
import Card from "./Card";

const HeadlineCards = () => {
    return (
        <div className="p-4 py-12 max-w-[1640] mx-auto grid md:grid-cols-3 gap-6">
            {/* Card */}
            <Card src={"card-1.webp"} header={"Sun's Out, BOGO's Out"} text={"Through 8/26"}></Card>
            <Card src={"card-2.webp"} header={"New Restaurants"} text={"Added Daily"}></Card>
            <Card src={"card-3.webp"} header={"We Deliver Desserts Too"} text={"Tasty Treats"}></Card>
        </div>
    );
};

export default HeadlineCards;
