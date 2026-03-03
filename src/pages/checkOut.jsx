export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-10">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-2">Shopping Cart</h1>
        <p className="text-gray-500 text-sm mb-8">
          Homepage / Clothing Categories / My Shopping Cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT SIDE - FORM */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Login Box */}
            <div className="bg-gray-50 p-5 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">LOGIN</p>
                <p className="font-medium">Michael Smith</p>
                <p className="text-sm text-gray-500">+806 - 445 - 4453</p>
              </div>
              <button className="text-sm font-medium underline">
                Change
              </button>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="font-semibold text-lg mb-4">
                SHIPPING ADDRESS
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
                <input className="col-span-2 input" placeholder="Address" />
                <input className="input" placeholder="Apt, Suite" />
                <input className="input" placeholder="City" />
                <input className="input" placeholder="Country" />
                <input className="col-span-2 input" placeholder="Postal Code" />
              </div>

              {/* Address Type */}
              <div className="flex gap-6 mt-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" />
                  Home
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="type" />
                  Office
                </label>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                  Save And Deliver Here
                </button>
                <button className="text-gray-500">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="bg-gray-50 p-6 rounded-2xl space-y-6">
            
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