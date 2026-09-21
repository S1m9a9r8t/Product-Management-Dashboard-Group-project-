import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService.js";
import ProductCard from "../components/ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase()
  .includes(searchTerm.toLowerCase())
);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Please try again.</p>;

  return (
    <>

     <input
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="border rounded px-4 py-2 w-full max-w-md mb-6 ml-4 mt-6 shadow-md "
    />

    {filteredProducts.length === 0 ? (
       <p className="text-gray-500 mt-4">No products found.</p>
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