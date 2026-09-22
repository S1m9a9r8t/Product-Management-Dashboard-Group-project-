import { useState, useEffect } from "react";
import { Link } from "react-router";
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

  console.log(productList);

  const featuredProducts = [
    productList.find((product) => product.category === "men's clothing"),
    productList.find((product) => product.category === "women's clothing"),
    productList.find((product) => product.category === "jewelery"),
    productList.find((product) => product.category === "electronics"),
  ].filter(Boolean);

  return (
    <main className="px-6 py-8">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-50 rounded-lg p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-blue-600">Prodexa</span>
          </h1>

          <p className="text-gray-600 max-w-md">
            Fashion, jewelry and electronics all in one place. Find products you
            need and discover something new.
          </p>
          <Link to="/products">
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600">
              Shop Now
            </button>
          </Link>
        </div>

        {productList.length > 0 && (
          <div className="bg-white p-4 rounded-lg">
            <img
              src={productList[0].image}
              alt={productList[0].title}
              className="w-56 h-56 object-contain"
            />
          </div>
        )}
      </section>

      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Everything you need, in one place
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Prodexa brings clothing, jewelry and electronics together in one
          simple shopping experience. Browse our products and find something
          that suits your needs.
        </p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-bold mb-5">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-5 text-center hover:shadow-md">
            <h3 className="font-semibold">Men's Clothing</h3>
          </div>

          <div className="border rounded-lg p-5 text-center hover:shadow-md">
            <h3 className="font-semibold">Women's Clothing</h3>
          </div>

          <div className="border rounded-lg p-5 text-center hover:shadow-md">
            <h3 className="font-semibold">Jewelry</h3>
          </div>

          <div className="border rounded-lg p-5 text-center hover:shadow-md">
            <h3 className="font-semibold">Electronics</h3>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-2xl font-bold">Featured Products</h2>

            <p className="text-gray-600 mt-1">
              Take a look at some of our products.
            </p>
          </div>
          <Link to="/products">
            <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              View All
            </button>
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 bg-white">
                <div className="h-48 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm text-blue-600 mt-4">{product.category}</p>

                <h3 className="font-semibold mt-2">{product.title}</h3>

                <div className="flex justify-between mt-3">
                  <p className="font-bold">${product.price}</p>

                  <p className="text-gray-600">★ {product.rating.rate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-10">Loading products...</p>
        )}
      </section>

      <section className="bg-blue-100 rounded-lg text-center py-10 px-5">
        <h2 className="text-2xl font-bold">Ready to start shopping?</h2>

        <p className="text-gray-600 mt-2">
          Explore our products and find something you like.
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
