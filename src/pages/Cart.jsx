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
    0
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
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-sm">{item.title}</h2>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
           
          <div className="md:w-64 border rounded-lg p-5 shadow-sm h-fit">
            <h2 className="font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Items</span>
              <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
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