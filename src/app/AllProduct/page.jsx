import Link from "next/link";
import { products } from "../data/Products";
export default function ProductsPage() {
  return (
    <section className="py-18 px-5 md:px-20 ">
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

            <p className="text-gray-600 text-center mb-4">
              {p.shortDescription}
            </p>
            <p className="text-gray-600 text-center mb-4">Price:{p.price}</p>

            <Link href={`/AllProduct/${p.id}`}>
              <button className="btn bg-green-600 text-white w-full rounded-xl">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
