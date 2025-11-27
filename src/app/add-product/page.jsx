"use client";

import React from "react";

export default function AddProductPage() {
  const handlePost = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const number = e.target.number.value;
    const fullDescription = e.target.fullDescription.value; // textarea এর value

    const post = { title, description, fullDescription, number };

    try {
      const res = await fetch("http://localhost:5000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      const data = await res.json();
      console.log(data);

      alert("Product added successfully!");

      // Form clear
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add product!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handlePost} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Short description"
          className="border p-2 rounded"
          required
        />

        <textarea
          name="fullDescription"
          placeholder="Full description"
          className="border p-2 rounded h-32"
          required
        />

        <input
          type="number"
          name="number"
          placeholder="Price"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
