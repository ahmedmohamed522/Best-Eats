import React from "react";
import Category from "./components/Category";
import Food from "./components/Food";
import HeadLineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <HeadLineCards />
            <Food />
            <Category />
        </div>
    );
}

export default App;
