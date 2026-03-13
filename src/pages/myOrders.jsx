import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  LocationEditIcon,
  LucideContact2,
} from "lucide-react";

export default function OrderPage() {

  const [openOrderId, setOpenOrderId] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrder);
  }, []);

  const toggleOrder = (id) => {
    setOpenOrderId(openOrderId === id ? null : id);
  };

  return (
    <div className="bg-[#fef2e4] min-h-screen p-4 md:px-32">
      <h1 className="text-xl font-semibold mb-8 mt-2">My Orders</h1>

      {orders.length === 0 ? (
        <p className="flex justify-center items-center h-full w-full pt-20">
          No orders found
        </p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow md:p-5 p-3 mt-3"
          >
            {/* ORDER HEADER */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleOrder(order.id)}
            >
              <div>
                <h2 className="font-semibold text-lg">
                  Order #{order.id}
                </h2>

                <p className="text-sm text-gray-500">
                  Placed on {order.date}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <p className="font-semibold text-lg">₹{order.total}</p>

                {openOrderId === order.id ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </div>
            </div>

            {/* ORDER DETAILS */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden
              ${
                openOrderId === order.id
                  ? "max-h-fit opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* INFO GRID */}
              <div className="grid md:grid-cols-3 gap-8 w-full">

                {/* CUSTOMER */}
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase flex gap-2 items-center">
                    Customer Information
                    <LucideContact2 className="w-5 h-5" />
                  </p>

                  <p className="font-medium capitalize">
                    {order.customer.firstName}
                  </p>

                  <p className="text-sm text-gray-500 capitalize">
                    {order.customer.lastName}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer.phone}
                  </p>
                </div>

                {/* SHIPPING */}
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase flex gap-2 items-center">
                    Shipping Address
                    <LocationEditIcon className="w-5 h-5" />
                  </p>

                  <p className="font-medium capitalize">
                    {order.customer.firstName} {order.customer.lastName}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer.address}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer.city}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer.country}
                  </p>
                </div>

                {/* PAYMENT */}
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase flex items-center gap-2">
                    Payment Method
                    <CircleDollarSign className="w-5 h-5" />
                  </p>

                  <p className="font-medium uppercase">
                    {order.paymentMethod}
                  </p>
                </div>
              </div>

              {/* ORDER ITEMS */}
              <div className="mt-8 border-t pt-6">
                <p className="text-xs text-gray-500 uppercase mb-4">
                  Order Items
                </p>

                <div className="flex flex-col gap-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.image}
                          className="w-20 h-20 rounded-lg object-cover"
                          alt="product"
                        />

                        <div>
                          <p className="font-medium md:text-md text-sm capitalize">
                            {item.title}
                          </p>

                          <p className="md:text-sm text-xs text-gray-500 pt-2">
                            Color:
                            <span className="text-black md:pr-3 pr-1">
                              {item.selectedColor}
                            </span>
                            • Qty:
                            <span className="pl-3 text-black">
                              {item.quantity}
                            </span>
                          </p>

                          <p className="md:text-sm text-xs text-gray-500">
                            Size:
                            <span className="text-black">
                              {item.selectedSize}
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="font-semibold text-lg">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOTAL */}
              <div className="border-t mt-6 pt-6 flex justify-between items-center">
                <div></div>

                <div>
                  <p className="text-sm text-gray-500">
                    Total Amount Due
                  </p>

                  <p className="text-2xl font-bold">
                    ₹{order.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}