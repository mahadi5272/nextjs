"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

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

    await axios.delete(`http://localhost:5000/product/${id}`);
    loadProducts();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Number</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td className="border p-2">{p.title}</td>
                <td className="border p-2">{p.discription}</td>
                <td className="border p-2">{p.number}</td>
                <td className="border p-2 flex gap-2">
                  <Link
                    href={`/product/${p._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
