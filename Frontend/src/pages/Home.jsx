import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesOverview from "../components/FeaturesOverview";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesOverview />
      <Footer />
    </div>
  );
};

export default Home;