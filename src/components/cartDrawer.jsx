import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../context/cardContext";

function CartDrawer({ openCart, setOpenCart }) {
  const { cartItems, addToCart, decreaseQty, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {openCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenCart(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#fff7ed] z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <X
            className="cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>

        {/* Clear Cart */}
        <div className="flex justify-end p-4">
          <button
            onClick={clearCart}
            className="bg-white text-black border-2 border-[#555554] px-3 py-1 rounded-lg hover:scale-105 transition"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items (60%) */}
        <div className="h-[60%] overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center mt-20 text-gray-500">
              Your cart is empty 🛒
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-8 bg-white shadow-lg mx-5 my-3 p-2 rounded-xl hover:scale-102 transition"
              >
                {/* Image */}
                <img
                  className="w-24 h-24 object-cover object-top rounded-lg"
                  src={item.image}
                  alt={item.title}
                />

                {/* Content */}
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h2 className="text-black text-sm capitalize">
                      {item.title}
                    </h2>

                    <h4 className="text-gray-600 text-sm">
                      Size {item.selectedSize}
                    </h4>

                    <h3 className="text-black text-md font-semibold mt-3">
                      ₹{item.price}
                    </h3>
                  </div>

                  {/* Quantity */}
                  <div className="flex flex-col py-2 pr-6 items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          decreaseQty(
                            item.id,
                            item.selectedSize,
                            item.selectedColor
                          )
                        }
                        className="bg-[#555554] text-white h-7 w-7 rounded-full flex items-center justify-center"
                      >
                        -
                      </button>

                      <div className="h-8 w-8 flex items-center justify-center font-semibold">
                        {item.quantity}
                      </div>

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-[#555554] text-white h-7 w-7 rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-md font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Section (30%) */}
        <div className="h-[30%] flex justify-between items-center rounded-t-[40px] px-6 bg-white shadow-inner">
          {/* Continue */}
          <button
            className="px-5 text-sm bg-black/30 text-white rounded-2xl flex items-center gap-2 h-10"
            onClick={() => setOpenCart(false)}
          >
            <ArrowLeft size={16} />
            Continue
          </button>

          {/* Price + Checkout */}
          <div className="w-2/5 flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-semibold">₹{totalPrice}</h1>
              <h3 className="text-sm text-gray-700 flex mt-1 gap-2 items-center">
                Tax and shipping calculated at checkout
                <ArrowRight size={16} />
              </h3>
            </div>

            <a href="/checkout">
              <button className="w-full bg-[#555554] text-white rounded-xl hover:translate-y-1 hover:rotate-2 hover:scale-105 transition duration-300 h-10">
                Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;