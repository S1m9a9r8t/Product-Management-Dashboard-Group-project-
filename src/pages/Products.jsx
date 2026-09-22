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
  const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
  return matchesSearch && matchesCategory;
});
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500 text-lg animate-pulse">Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-red-500 text-lg font-medium">
          Something went wrong. Please try again.
        </p>
      </div>
    );

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 px-6 mb-6 mt-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm capitalize focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default Products;