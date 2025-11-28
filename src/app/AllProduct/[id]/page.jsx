import React from "react";
import { products } from "@/app/data/Products";
import Link from "next/link";

const Details = async ({ params }) => {
  const { id } = await params;
  const product = products.find((p) => p?.id === Number(id));

  return (
    <div className="max-w-3xl  mx-auto bg-white mt-12 shadow-lg rounded-2xl p-6">
      {/* Large Banner Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-4xl text-center font-bold mt-6">{product.title}</h1>

      {/* Description */}
      <p className="text-gray-700 text-center mt-4 text-lg leading-relaxed">
        {product.fullDescription}
      </p>

      {/* Meta Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-xl">
        <p className="text-gray-800">
          <span className="font-semibold">Price:</span> {product.price}
        </p>

        <p className="text-gray-800">
          <span className="font-semibold">Date:</span> {product.date}
        </p>

        <p className="text-gray-800">
          <span className="font-semibold">Priority:</span> {product.priority}
        </p>
      </div>

      {/* Back Button */}
      <Link href={'/AllProduct'} >
        <button className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-900 transition">Back</button>
      </Link>
    </div>
  );
};

export default Details;
