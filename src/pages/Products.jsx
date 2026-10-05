import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService.js";
import ProductCard from "../components/ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg font-medium animate-pulse">
          Loading products...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">
          Something went wrong. Please try again.
        </p>
      </div>
    );

  return (
    <>
      <div className="px-6 sm:px-8 pt-8 pb-4 max-w-7xl mx-auto text-center ">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800">
            Products
          </h1>
          <p className="text-gray-500 mt-2">
            Explore our collection and find something you love.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 text-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-200 bg-white rounded-xl px-4 py-3 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 bg-white rounded-xl px-4 py-3 shadow-sm capitalize focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-center mt-16 text-lg">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-8 pb-10 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Products;