import { useState } from "react";
import { useCart } from "../context/cardContext";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
 e.preventDefault();
   if (!formData.firstName || !formData.address || !formData.phone) {
      alert("Please fill required fields");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cartItems,
      paymentMethod: paymentMethod,
      total: totalPrice,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = [...existingOrders, order];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  // 🔥 SHOW SUCCESS ANIMATION
  setOrderPlaced(true);

  setTimeout(() => {
    setOrderPlaced(false);
  }, 3000);
  };

  return (
    <>
    <div className="min-h-screen bg-[#fff7ed] flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-md p-3 md:p-10">
        <h1 className="md:text-2xl text-xl font-semibold md:mb-6 mb-4">Shopping Cart</h1>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[60%]">
            {/* SHIPPING ADDRESS */}
            <h2 className="font-semibold text-sm mb-4">SHIPPING ADDRESS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FIRST NAME */}
                <div className="relative ">
              <input
                type="text"
                
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
              />
                                  <label
                          className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm"
                  >
                    First Name
                  </label>
</div>
              {/* LAST NAME */}
<div className="relative">
  <input
    type="text"
    placeholder=" "
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
  />

  <label className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
    Last Name
  </label>
</div>
              {/* ADDRESS */}
              <div className="relative md:col-span-2">
              <input
                type="text"
               
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
              />
              
                <label className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
    Address
  </label>
</div>
              {/* CITY */}
              <div className="relative">
              <input
                type="text"
                // placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
              />
                              <label className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
    City
  </label>
</div>
              {/* COUNTRY */}
               <div className="relative">
              <input
                type="text"
                
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
              />
                                            <label className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
    Country
  </label>
</div>
              {/* POSTAL */}
              <div className="relative">
              <input
                type="text"
                
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
              />

                                                          <label className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
    Postal Code
  </label>
</div>
              {/* PHONE */}
              <div className="relative">
              <input
                type="text"
                
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
              />
              
                                                          <label className="absolute left-4 top-3 text-gray-400 text-sm bg-white px-1 transition-all 
  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black 
  peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
    Phone Number
  </label>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="mt-10">
              <h2 className="font-semibold text-sm mb-6">PAYMENT METHOD</h2>

              <div className="space-y-4">
                {/* CARD */}
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`border rounded-xl p-4 cursor-pointer ${
                    paymentMethod === "card"
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }`}
                >
                  Credit / Debit Card
                </div>

                {/* UPI */}
                <div
                  onClick={() => setPaymentMethod("upi")}
                  className={`border rounded-xl p-4 cursor-pointer ${
                    paymentMethod === "upi"
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }`}
                >
                  UPI
                </div>

                {/* COD */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`border rounded-xl p-4 cursor-pointer ${
                    paymentMethod === "cod"
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }`}
                >
                  Cash on Delivery
                </div>
              </div>

              {/* CARD DETAILS */}
              {paymentMethod === "card" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <input
                    placeholder="Card Number"
                    className="border-2 border-gray-200 px-4 py-3 rounded-lg col-span-1 md:col-span-2"
                  />

                  <input
                    placeholder="Expiry Date"
                    className="border-2 border-gray-200 px-4 py-3 rounded-lg"
                  />

                  <input
                    placeholder="CVV"
                    className="border-2 border-gray-200 px-4 py-3 rounded-lg"
                  />
                </div>
              )}

              {/* UPI */}
              {paymentMethod === "upi" && (
                <input
                  placeholder="Enter UPI ID"
                  className="border-2 border-gray-200 px-4 py-3 rounded-lg w-full mt-6"
                />
              )}
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              <button className="border px-6 py-3 rounded-xl">
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-[#555554] text-white px-6 py-3 rounded-xl"
              >
                Save And Deliver Here
              </button>
            </div>
          </div>

          {/* RIGHT SIDE ORDER SUMMARY */}
          <div className="w-full lg:w-[40%] bg-[#fff7ed] p-6 rounded-2xl space-y-6 h-fit lg:sticky lg:top-5">
            <h3 className="font-semibold text-sm">Your Order</h3>

            <div className="max-h-[400px] overflow-y-auto space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="flex-1">
                      <p className="font-medium capitalize">{item.title}</p>

                      <p className="text-sm text-gray-500">
                        Size {item.selectedSize}
                      </p>

                      <p className="font-semibold">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <div className="font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
{orderPlaced && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    <div className="bg-white p-6 rounded-2xl text-center">
      <video
        autoPlay
        muted
        className="md:w-40 w-30 mx-auto"
      >
        <source src="/viedo/15547234.mp4" type="video/mp4" />
      </video>

      <h2 className="text-xl font-semibold mt-4">
        Order Placed Successfully!
      </h2>
    </div>
  </div>
)}
    </>
  );
}
 



          