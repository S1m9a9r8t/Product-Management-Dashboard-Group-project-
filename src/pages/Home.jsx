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
    <div className="flex-col px-4 sm:px-8 py-10 space-y-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className= "backdrop-opacity-10 text-center">
        <h1 className="py-2 flex justify-center items-center space-x-2">
          <span className="font-bold text-2xl sm:text-3xl text-slate-800 self-center">
            Welcome to
          </span>
          <span className="font-black text-4xl sm:text-5xl italic bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Prodexa
          </span>
        </h1>
        <p className="text-center font-normal italic text-base sm:text-lg text-slate-500 dark:text-slate-400 mt-2">
          Fashion, jewelry and electronics in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto items-stretch">
          {productList.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          to="/products"
          className="inline-block mt-10 rounded-full border-none bg-emerald-500 px-8 py-3.5 text-white font-bold text-base shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Shop Now
        </Link>
      </div>

      {/* Feature Callout Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Everything you need, in one place
        </h2>
        <p className="text-slate-300 mt-3 max-w-2xl mx-auto font-light leading-relaxed">
          Discover a curated collection of clothing, jewelry, and electronics
          designed to give you more choices without making shopping complicated.
        </p>
        <Link to="/products">
          <button className="mt-8 bg-blue-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-md hover:shadow-blue-500/25">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;