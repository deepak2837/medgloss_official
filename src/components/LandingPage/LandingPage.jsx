import React from "react";

const LandingPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 text-white text-center"
      style={{
        backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      }}
    >
      <div className="max-w-2xl animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          We&apos;re Coming Soon!
        </h1>
        <p className="text-base sm:text-lg opacity-90">
          Your time is priceless, and we will care for it for free, always.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
