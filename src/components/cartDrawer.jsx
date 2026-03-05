import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../context/cardContext";

function CartDrawer({ openCart, setOpenCart }) {
  const { cartItems, addToCart, decreaseQty } = useCart();

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
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#fff7ed] z-50 shadow-xl transform transition-transform duration-300 ${
          openCart ? "translate-x-0 scrool-body" : "translate-x-full"
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

        {/* Cart Items */}
        <div className="h-[60%] overflow-scroll overflow-x-hidden p-4">
          {cartItems.length === 0 ? (
            <div className="text-center mt-20 text-gray-500">
              Your cart is empty 🛒
            </div>
          ) : (
            cartItems.map((item) => (
          <div className="">

        <div className="flex bg-white shadow-lg items-center gap-15 mx-5 my-3 p-2 rounded-xl  transform ease-in-out duration-300 hover:scale-102">
          <div 
          key={item.id}
          >
          <img className="w-25 h-25 object-cover object-top rounded-lg" src={item?.variants?.[0]?.image} alt={item.title} />
          </div>

          <div>
            <h2 className="text-black w-20 text-md ">{item.title}</h2>
           
          </div>

          <div>
            <h3>₹{item.price}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button 
            onClick={() => decreaseQty(item.id)}
            className="bg-[#555554] cursor-pointer text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">-</button>
            <div className="bg-white text-black h-8 w-8 rounded-full text-sm flex items-center justify-center font-semibold">{item.quantity}</div>
            <button 
            onClick={() => addToCart(item)}
            className="bg-[#555554] cursor-pointer text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">+</button>
          </div>

          <div className="text-sm font-semibold">
               ₹{item.price * item.quantity}
          </div>
        </div>




       </div>
            ))
          )}
        </div>

        {/* Bottom */}

            <div className=" h-[35%] flex justify-between items-center rounded-t-[45px] px-8 py-2 bg-white">
<div>
  <button className=" cursor-pointer px-5 text-sm bg-black/30 gap-3 text-white rounded-2xl flex items-center justify-center h-10"><ArrowLeft/>Continue</button>
  </div>
       <div className="w-2/5 flex flex-col gap-5">
        <div>
        <h1 className="text-2xl font-semibold">₹{totalPrice}</h1>
        <h3 className="text-sm text-gray-700 flex mt-2 gap-2">Text and shipping calculated at checkout <ArrowRight/></h3>
        </div>

        <div>
          <a href="/checkout">
          <button className="w-full cursor-pointer bg-[#555554] text-white rounded-xl    ease-in-out
    hover:translate-y-1
    hover:rotate-2
    hover:scale-105
  transition duration-300 flex items-center justify-center h-10"> Checkout</button>
  </a>
        </div>
       </div>
       </div>
   
      </div>
    </>
  );
}

export default CartDrawer;





