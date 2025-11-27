import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1303095/pexels-photo-1303095.jpeg?auto=compress&cs=tinysrgb&w=1200')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fresh & Organic Products Delivered to You
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Experience the purity of nature with 100% organic, chemical-free,
          farm-fresh items.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/AllProduct'>
           
            <button className="btn  bg-success text-white">Shop Now</button>
          </Link>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
