import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            Welcome to
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-800">
            Prodexa
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed">
            Your simple and convenient place to discover
            fashion, jewelry, and electronics.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link
              to="/products"
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="bg-white text-slate-700 px-8 py-3.5 rounded-xl font-semibold border border-gray-200 hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </section>

   
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">

          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">

            <h2 className="font-bold text-lg text-slate-800">
              Easy Shopping
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Browse products and find what you need without the hassle.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
        
            <h2 className="font-bold text-lg text-slate-800">
              Quality Choices
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Discover a variety of products all in one place.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
            <h2 className="font-bold text-lg text-slate-800">
              We're Here to Help
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Have a question? Reach out and we'll be happy to help.
            </p>
          </div>

        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl px-6 py-12 sm:px-12 text-center text-white">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to explore?
          </h2>

          <p className="text-slate-300 mt-3">
            Take a look at our collection and find something you like.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-emerald-500 px-7 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition"
          >
            Start Shopping
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;