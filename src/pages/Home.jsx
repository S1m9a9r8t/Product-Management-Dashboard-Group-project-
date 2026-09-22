import { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService";

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

  const coverImg = productList[0];

  return (
    <div className="flex-col  px-4 py-6 space-y-5">
      <div className="backdrop-opacity-10 ">
        <h1 className="text-center py-2 flex justify-center space-x-1">
          <span className="font-bold text-xl self-center">Welcome to </span>

          <span className="font-extrabold text-3xl italic"> Prodexa</span>
        </h1>
        <p className=" text-center font-light italic text-sm">
          Fashion, jewelry and electronics in one place.
        </p>
        <div className="py-2 flex w-80 justify-between justify-self-center items-center">
          <button className=" max-h-fit rounded-4xl border-none bg-green-400 px-2.5 py-1.25 text-white font-bold ">
            Shop Now
          </button>
          {/*Instead of just one image, feature a few products here then move the shop button bellow the featured products section*/}
          {coverImg && (
            <img
              src={coverImg.image}
              alt={coverImg.title}
              className="w-40 h-40 object-contain"
            />
          )}
        </div>
      </div>

      <div>
        <h2> Everything you need, in one place</h2>
        <p>
          Discover a curated collection of clothing, jewelry, and electronics
          designed to give you more choices without making shopping complicated.
        </p>
      </div>
    </div>
  );
}

export default Home;
