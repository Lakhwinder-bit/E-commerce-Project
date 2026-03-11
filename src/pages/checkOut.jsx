// import { useState } from "react";
// import { useCart } from "../context/cardContext";

// export default function CheckoutPage() {

//   const { cartItems } = useCart();
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     country: "",
//     postalCode: "",
//     phone: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {

//     if (!formData.firstName || !formData.address || !formData.phone) {
//       alert("Please fill required fields");
//       return;
//     }

//     const order = {
//       id: Date.now(),
//       customer: formData,
//       items: cartItems,
//       paymentMethod: paymentMethod,
//       total: totalPrice,
//       date: new Date().toLocaleDateString(),
//       status: "Pending"
//     };

//     const existingOrders =
//       JSON.parse(localStorage.getItem("orders")) || [];

//     const updatedOrders = [...existingOrders, order];

//     localStorage.setItem("orders", JSON.stringify(updatedOrders));

//     alert("Order placed successfully!");
//   };


//   return (
//     <div className="min-h-screen bg-[#fff7ed] flex items-center justify-center p-6">

//       <div className="w-full max-w-7xl bg-white rounded-3xl shadow-md p-10">

//         <h1 className="text-2xl font-semibold mb-5">Shopping Cart</h1>

//         <div className="flex gap-10">

//           {/* LEFT SIDE */}
//           <div className="w-[60%]">
//           {/* Shipping Address */}
//             <div>
//               <h2 className="font-semibold text-sm mb-4">SHIPPING ADDRESS</h2>

//               <div className="grid grid-cols-2 gap-6">
//                 {/* First Name */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                  name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}

//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     First Name
//                   </label>
//                 </div>

//                 {/* Last Name */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder=" "
//                     name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     Last Name
//                   </label>
//                 </div>

//                 {/* Address (Full Width) */}
//                 <div className="relative col-span-2">
//                   <input
//                     type="text"
//                     placeholder=" "
//                     name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     Address
//                   </label>
//                 </div>

//                 {/* City */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder=" "
//                     name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     City
//                   </label>
//                 </div>

//                 {/* Country */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder=" "
//                     name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     Country
//                   </label>
//                 </div>

//                 {/* Postal Code */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder=" "
//                  name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     Postal Code
//                   </label>
//                 </div>

//                 {/* Phone Number */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder=" "
//               name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
                
//                     className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                   />
//                   <label
//                     className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                   >
//                     Phone Number
//                   </label>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h2 className="font-semibold text-sm mb-6">PAYMENT METHOD</h2>

//                 {/* Payment Options */}
//                 <div className="space-y-4">
//                   {/* CARD */}
//                   <div
//                     onClick={() => setPaymentMethod("card")}
//                     className={`border rounded-xl p-4 cursor-pointer transition-all duration-200
//           ${
//             paymentMethod === "card"
//               ? "border-black bg-gray-50"
//               : "border-gray-200"
//           }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "card"}
//                         onChange={() => {}}
//                         className="accent-black"
//                       />
//                       <span className="font-medium">Credit / Debit Card</span>
//                     </div>
//                   </div>

//                   {/* UPI */}
//                   <div
//                     onClick={() => setPaymentMethod("upi")}
//                     className={`border rounded-xl p-4 cursor-pointer transition-all duration-200
//           ${
//             paymentMethod === "upi"
//               ? "border-black bg-gray-50"
//               : "border-gray-200"
//           }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "upi"}
//                         onChange={() => {}}
//                         className="accent-black"
//                       />
//                       <span className="font-medium">UPI</span>
//                     </div>
//                   </div>

//                   {/* COD */}
//                   <div
//                     onClick={() => setPaymentMethod("cod")}
//                     className={`border rounded-xl p-4 cursor-pointer transition-all duration-200
//           ${
//             paymentMethod === "cod"
//               ? "border-black bg-gray-50"
//               : "border-gray-200"
//           }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <input
//                         type="radio"
//                         checked={paymentMethod === "cod"}
//                         onChange={() => {}}
//                         className="accent-black"
//                       />
//                       <span className="font-medium">Cash on Delivery</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Animated Section */}
//                 <div className="overflow-hidden transition-all duration-300 mt-6">
//                   {/* CARD DETAILS */}
//                   {paymentMethod === "card" && (
//                     <div className="grid grid-cols-2 gap-6 animate-fadeIn rounded-lg mt-3  ">
//                       <div className="relative col-span-2 ">
//                         <input
//                           type="text"
//                           placeholder=" "
//                           className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                         />
//                         <label
//                           className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                         >
//                           Card Number
//                         </label>
//                       </div>

//                       <div className="relative ">
//                         <input
//                           type="text"
//                           placeholder=" "
//                           className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                         />
//                         <label
//                           className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                         >
//                           Expiry Date
//                         </label>
//                       </div>

//                       <div className="relative ">
//                         <input
//                           type="text"
//                           placeholder=" "
//                           className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                         />
//                         <label
//                           className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                         >
//                           CVV
//                         </label>
//                       </div>
//                     </div>
//                   )}

//                   {/* UPI FIELD */}
//                   {paymentMethod === "upi" && (
//                     <div className="animate-fadeIn mt-3">
//                       <div className="relative ">
//                         <input
//                           type="text"
//                           placeholder=" "
//                           className="peer w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-black"
//                         />
//                         <label
//                           className="absolute left-4 bg-white px-1 text-gray-400 text-sm
//       top-3 transition-all duration-200 ease-in-out
//       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
//       peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
//                         >
//                           Enter UPI ID
//                         </label>
//                       </div>
//                     </div>
//                   )}

//                   {/* COD → No Extra Fields */}
//                 </div>
//               </div>

//               {/* Address Type */}
//               <div className="flex gap-6 mt-6 text-sm">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="type " className="accent-black" />
//                   Home
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="type" className="accent-black" />
//                   Office
//                 </label>
//               </div>

//               {/* Buttons */}
//               <div className="mt-6 flex gap-4 justify-end">
//                 <button
//                   className="text-gray-500 border-black    ease-in-out
//     hover:translate-y-1
//     hover:rotate-2
//     hover:scale-105
//   transition duration-300 border-2 px-5 cursor-pointer rounded-xl"
//                 >
//                   Cancel
//                 </button>

//                 <div
//                   className="inline-block  bg-black text-white rounded-xl 
//      ease-in-out
//     hover:translate-y-1
//     hover:rotate-2
//     hover:scale-105
//   transition duration-300"
//                 >
//                   <button 
//                   onClick={handleSubmit}
//                   className="bg-[#555554] text-white px-6 py-3 rounded-xl cursor-pointer">
//                     Save And Deliver Here
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT SIDE */}
//           <div className="w-[40%] bg-[#fff7ed] p-6 rounded-2xl space-y-6 h-fit sticky top-3">

//             <h3 className="font-semibold text-sm">
//               Your Order
//             </h3>
// <div className="max-h-130 overflow-scroll overflow-x-hidden">
//             {cartItems.length === 0 ? (
//               <p className="text-gray-500">
//                 Your cart is empty
//               </p>
//             ) : (
              
//               cartItems.map((item) => (
//                 <div key={item.id} className=" flex flex-col px-8 pb-3">
//                   <div className="w-full h-[0.5px]  bg-gray-300"></div>

//                   <div className="flex mt-3 gap-4 ">
//                   <div>
//                   <img
//                     className="w-20 h-20 object-cover rounded-lg"
//                     src={item.image}
//                     alt={item.title}
//                   />
//                  </div>
//                   <div className="flex-1">
//                     <p className="font-medium capitalize">
//                       {item.title}
//                     </p>

//                     <p className="text-sm text-gray-500">
//                       Size {item.selectedSize}
//                     </p>

//                     <p className="font-semibold">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                   <div className="text-md text-gray-700">
//                     ₹{item.price * item.quantity}
//                   </div>
                  
// </div>
//                 </div>
//               ))
//             )}
// </div>
//             <div className="border-t pt-4 flex justify-between font-semibold text-lg">
//               <span>Total</span>
//               <span>₹{totalPrice}</span>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }






import { useState } from "react";
import { useCart } from "../context/cardContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");

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

  const handleSubmit = () => {
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

    alert("Order placed successfully!");
  };

  return (
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
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              />

              {/* LAST NAME */}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              />

              {/* ADDRESS */}
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg col-span-1 md:col-span-2 focus:outline-none focus:border-black"
              />

              {/* CITY */}
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              />

              {/* COUNTRY */}
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              />

              {/* POSTAL */}
              <input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-black"
              />
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
                className="bg-black text-white px-6 py-3 rounded-xl"
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
  );
}
 