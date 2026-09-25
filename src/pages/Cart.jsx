import { useCartStore } from "../store/cartStore.js";
import { Link } from "react-router";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex-col items-center gap-4 border rounded-lg p-4 shadow-sm md:flex-row md:py-2 pw-1 "
              >
                <div className="flex justify-between gap-5 md:justify-evenly md:gap-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-30 w-30 object-contain"
                  />
                  <h2 className="font-semibold self-center">{item.title}</h2>
                </div>

                <div className="flex-1">
                  <p className="text-blue-600 font-bold text-2xl justify-self-center">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 justify-between py-2 px-3 md:justify-between">
                  <div className="flex flex-1 justify-evenly gap-3 py-1 px-2 ">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300  text-2xl font-bold"
                    >
                      <span className="self-center">-</span>
                    </button>
                    <span className="self-center font-extrabold text-2xl">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300  text-2xl font-bold"
                    >
                      <span className="self-center">+</span>
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex-0.75 text-white font-bold hover:bg-red-700 text-sm ml-4 bg-red-500 py-1 px-2.5 rounded-4xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="m-0 w-full p-5 shadow-sm h-fit bg-slate-900 text-white rounded self-center md:w-64 ">
            <h2 className="font-bold text-white mb-4 text-2xl ">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-semibold text-white">Items</span>
              <span className="font-bold text-white ">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={clearCart}
              className="self-start  mt-2 ml-auto w-fit h-fit text-white-500  bg-red-600 hover:bg-red-700 text-sm border border-red-200 rounded-lg px-4 py-2"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
