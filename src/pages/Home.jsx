import { useState, useEffect } from "react";
import { Link } from "react-router";
import { fetchProducts } from "../services/productService";
import ProductCard from "../components/ProductCard.jsx";

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        const products = await fetchProducts();
        setProductList(products);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchInitialProducts();
  }, []);

  return (
    <div className="flex-col px-4 py-6 space-y-5">
      <div className="backdrop-opacity-10 text-center">
        <h1 className="py-2 flex justify-center space-x-1">
          <span className="font-bold text-xl self-center">Welcome to </span>
          <span className="font-extrabold text-3xl italic">Prodexa</span>
        </h1>
        <p className="text-center font-light italic text-sm">
          Fashion, jewelry and electronics in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          {productList.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          to="/products"
          className="inline-block mt-6 rounded-4xl border-none bg-green-400 px-4 py-2 text-white font-bold hover:bg-green-500"
        >
          Shop Now
        </Link>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Everything you need, in one place</h2>
        <p className="text-gray-600">
          Discover a curated collection of clothing, jewelry, and electronics
          designed to give you more choices without making shopping complicated.
        </p>
        <Link to="/products">
          <button className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Explore Products
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Home;