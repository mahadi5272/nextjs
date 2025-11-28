"use client";

import React, { useRef, useState } from "react";
import { products } from "../data/Products";
import PrivateRoute from "@/component/PrivateRoute";
import { toast, ToastContainer } from "react-toastify";

export default function AddProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef();

  const handlePost = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const number = e.target.number.value;
    const fullDescription = e.target.fullDescription.value;

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

      toast("Product added successfully!");
      
      e.target.reset();
      modalRef.current.close(); // modal automatically close after submit
    } catch (error) {
      console.error(error);
      alert("Failed to add product!");
    }
  };

  const handleModal = (product) => {
    setSelectedProduct(product);
    modalRef.current.showModal(); // এখন ref always available
  };

  return (
    <PrivateRoute>
      <section className="py-18 px-5 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-700">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-xl p-5 rounded-2xl hover:shadow-2xl transition border"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="text-2xl font-bold text-gray-800 mt-4 text-center">
                {p.title}
              </h2>
              <p className="text-gray-600 text-center mb-4">{p.shortDescription}</p>
              <p className="text-gray-600 text-center mb-4">{p. price} Tk</p>

              <button
                onClick={() => handleModal(p)}
                className="btn bg-green-600 text-white w-full rounded-xl"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <ToastContainer/>

        {/* Always render dialog */}
        <dialog ref={modalRef} className="modal">
          <div className="max-w-3xl mx-auto py-10 px-4 modal-box">
            <h1 className="text-3xl font-bold mb-6">Add Product</h1>

            <form onSubmit={handlePost} className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border p-2 rounded"
                value={selectedProduct?.title || ""}
                readOnly
              />
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="border p-2 rounded"
                value={selectedProduct?.shortDescription || ""}
                readOnly
              />
              <textarea
                name="fullDescription"
                placeholder="Full description"
                className="border p-2 rounded h-32"
                value={selectedProduct?.fullDescription|| ""}
                readOnly
              />
              <input
                type="number"
                name="number"
                placeholder="Price"
                className="border p-2 rounded"
                value={selectedProduct?.price || ""}
                readOnly
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => modalRef.current.close()}
                  className="btn bg-black text-white"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Add Product
                </button>
              </div>
            </form>
             
          </div>
        </dialog>
      </section>
    </PrivateRoute>
  );
}
