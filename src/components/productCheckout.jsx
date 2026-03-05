import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../context/cardContext";

function ProductCheckout({ openCart, setOpenCart }) {
  const { cartItems } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("card");



  return (
    <>
  
  

      {/* Drawer */}
        <div >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
        
        </div>

        {/* Cart Items */}
        <div className="h-[60%] overflow-scroll overflow-x-hidden p-4">
           
          {cartItems.length === 0 ? (
            <div className="text-center mt-20 text-gray-500">
              Your cart is empty 🛒
            </div>
          ) : (
            cartItems.map((item) => (
    
  <div key={item.id} className="flex gap-4">
    
    <img
      className="w-16 h-16 object-cover rounded-lg"
      src={item?.variants?.[0]?.image}
      alt={item.title}
    />

    <div className="flex-1">
      <p className="font-medium">{item.title}</p>

      <p className="text-sm text-gray-500">
        {item.size || "XL"} · {item.color || "Blue"}
      </p>

      <p className="font-semibold">
        ₹{item.price} x {item.quantity}
      </p>
    </div>

  </div>
            ))
          )}
        </div>

   
      </div>
    </>
  );
}

export default ProductCheckout;





