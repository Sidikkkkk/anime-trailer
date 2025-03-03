import React from "react";
import mikuGif from "../assets/miku-loading.gif"; 

const LoadingScreen = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-700 ${
        isLoading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <img
        src={mikuGif}
        alt="Loading..."
        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;
