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
    <div className="px-4 sm:px-8 py-10 space-y-16 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="flex justify-center items-center gap-2 py-2">
          <span className="font-bold text-2xl sm:text-3xl text-slate-800">
            Welcome to
          </span>
          <span className="font-black text-4xl sm:text-5xl italic bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Prodexa
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-500 italic mt-3">
          Fashion, jewelry and electronics in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto items-stretch">
          {productList.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          to="/products"
          className="inline-block mt-10 rounded-full bg-emerald-500 px-8 py-3.5 text-white font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-emerald-600/30 transition-all hover:-translate-y-1"
        >
          Shop Now
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Everything you need, in one place
        </h2>

        <p className="text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
          Discover clothing, jewelry, and electronics designed to give you more
          choices without making shopping complicated.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-blue-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-blue-500 transition-all hover:-translate-y-0.5 shadow-md"
        >
          Explore Products
        </Link>

        <div className="mt-10 pt-8 border-t border-slate-700">
          <h3 className="text-lg font-semibold mb-2">
            Need help finding something?
          </h3>

          <p className="text-gray-300 mb-5">
            Our team is here for you. Reach out anytime.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-full bg-white text-gray-900 px-6 py-2.5 font-medium hover:bg-gray-200 transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;