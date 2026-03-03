import { useState } from "react";
export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-md p-10">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-2">Shopping Cart</h1>
        <p className="text-gray-500 text-sm mb-8">
          Homepage / Clothing Categories / My Shopping Cart
        </p>

        <div className="flex w-full gap-4">
          {/* LEFT SIDE - FORM */}
          <div className=" space-y-8 w-[60%] ">
            {/* Login Box */}
            {/* <div className="bg-gray-50 p-5 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">LOGIN</p>
                <p className="font-medium">Michael Smith</p>
                <p className="text-sm text-gray-500">+806 - 445 - 4453</p>
              </div>
              <button className="text-sm font-medium underline">Change</button>
            </div> */}

            {/* Shipping Address */}
            <div>
              <h2 className="font-semibold text-lg mb-4">SHIPPING ADDRESS</h2>

              <div className="grid grid-cols-2 gap-6">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Last Name
                  </label>
                </div>

                {/* Address (Full Width) */}
                <div className="relative col-span-2">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Address
                  </label>
                </div>

                {/* City */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    City
                  </label>
                </div>

                {/* Country */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Country
                  </label>
                </div>

                {/* Postal Code */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Postal Code
                  </label>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="font-semibold text-lg mb-6">PAYMENT METHOD</h2>

                {/* Payment Options */}
                <div className="space-y-4">
                  {/* CARD */}
                  <div
                    onClick={() => setPaymentMethod("card")}
                    className={`border rounded-xl p-4 cursor-pointer transition-all duration-200
          ${
            paymentMethod === "card"
              ? "border-black bg-gray-50"
              : "border-gray-200"
          }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === "card"}
                        onChange={() => {}}
                        className="accent-black"
                      />
                      <span className="font-medium">Credit / Debit Card</span>
                    </div>
                  </div>

                  {/* UPI */}
                  <div
                    onClick={() => setPaymentMethod("upi")}
                    className={`border rounded-xl p-4 cursor-pointer transition-all duration-200
          ${
            paymentMethod === "upi"
              ? "border-black bg-gray-50"
              : "border-gray-200"
          }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === "upi"}
                        onChange={() => {}}
                        className="accent-black"
                      />
                      <span className="font-medium">UPI</span>
                    </div>
                  </div>

                  {/* COD */}
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`border rounded-xl p-4 cursor-pointer transition-all duration-200
          ${
            paymentMethod === "cod"
              ? "border-black bg-gray-50"
              : "border-gray-200"
          }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === "cod"}
                        onChange={() => {}}
                        className="accent-black"
                      />
                      <span className="font-medium">Cash on Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Animated Section */}
                <div className="overflow-hidden transition-all duration-300 mt-6">
                  {/* CARD DETAILS */}
                  {paymentMethod === "card" && (
                    <div className="grid grid-cols-2 gap-6 animate-fadeIn rounded-lg mt-3  ">
                      
                          <div className="relative col-span-2 ">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Card Number
                  </label>
                </div>
                              
                          <div className="relative ">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                    Expiry Date
                  </label>
                </div>
                               
                          <div className="relative ">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                   CVV
                  </label>
                </div>
                     
                      
                    </div>
                  )}

                  {/* UPI FIELD */}
                  {paymentMethod === "upi" && (

                    <div className="animate-fadeIn mt-3">
                                     <div className="relative ">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
                  />
                  <label
                    className="absolute left-4 bg-white px-1 text-gray-400 text-sm
      top-3 transition-all duration-200 ease-in-out
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
                  >
                   Enter UPI ID
                  </label>
                </div>
                    
                    </div>
                  )}

                  {/* COD → No Extra Fields */}
                </div>
              </div>

              {/* Address Type */}
              <div className="flex gap-6 mt-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="type " className="accent-black" />
                  Home
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" className="accent-black" />
                  Office
                </label>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 justify-end">
                <button className="text-gray-500 border-black    ease-in-out
    hover:translate-y-1
    hover:rotate-2
    hover:scale-105
  transition duration-300 border-2 px-5 cursor-pointer rounded-xl">Cancel</button>
               
               <div className="inline-block  bg-black text-white rounded-xl 
     ease-in-out
    hover:translate-y-1
    hover:rotate-2
    hover:scale-105
  transition duration-300">
  <button className="bg-black text-white px-6 py-3 rounded-xl cursor-pointer">
    Save And Deliver Here
  </button>
</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className=" p-6  w-[40%] rounded-2xl space-y-6 sticky top-5 h-fit bg-blue-50">
            <h3 className="font-semibold text-lg">Your Order</h3>

            {/* Product Item */}
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-medium">Jeans with sequins</p>
                <p className="text-sm text-gray-500">Size XL · Blue</p>
                <p className="font-semibold">$39.00 x2</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-medium">Robinson Printed</p>
                <p className="text-sm text-gray-500">Size XL · Blue</p>
                <p className="font-semibold">$29.00 x1</p>
              </div>
            </div>

            {/* Price Details */}
            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>- $10</span>
              </div>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$117.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
