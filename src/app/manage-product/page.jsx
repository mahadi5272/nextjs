"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import PrivateRoute from "@/component/PrivateRoute";
import { ToastContainer } from "react-toastify";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      loadProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PrivateRoute>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Manage Products
        </h1>

        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="w-full bg-white">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700">
                  Title
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  Short Description
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  Full Description
                </th>
                <th className="p-4 text-left font-semibold text-gray-700">
                  Price
                </th>
                <th className="p-4 text-center font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-800 font-medium">{p.title}</td>

                  <td className="p-4 text-gray-600">
                    {p.description?.length > 40
                      ? p.description.slice(0, 40) + "..."
                      : p.description}
                  </td>

                  <td className="p-4 text-gray-600">
                    {p.fullDescription?.length > 50
                      ? p.fullDescription.slice(0, 50) + "..."
                      : p.fullDescription}
                  </td>

                  <td className="p-4 font-semibold text-gray-800">
                    {p.number || p.price} ৳
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <ToastContainer/>
        </div>
      </div>
    </PrivateRoute>
  );
}
