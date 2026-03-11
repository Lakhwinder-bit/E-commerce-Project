import {
  Menu,
  Heart,
  ShoppingBag,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import CartDrawer from "../components/cartDrawer";
import { useCart } from "../context/cardContext";
import { useWishlist } from "../context/wishListContext";
import { Link } from "react-router-dom";


function Home() {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    if (openCart || openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCart, openMenu]);

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-[#fef2e4] sticky top-0 z-40">
        <div className="mx-auto flex h-16 m items-center justify-between  md:px-8 px-5 ">

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="text-lg font-bold tracking-wide">
            URBAN THREAD<span className="font-normal"></span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>

            <Link to="/about" className="hover:text-gray-600">
              Products
            </Link>

            <Link to="/man-tshirt" className="hover:text-gray-600">
              Men
            </Link>

            <Link to="/girl-tshirt" className="hover:text-gray-600">
              Women
            </Link>

            <Link to="/kids-tshirt" className="hover:text-gray-600">
              Kids
            </Link>

            <Link to="/MyOrders" className="hover:text-gray-600">
              My Order
            </Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-5">

            {/* Wishlist */}
            <Link
id="wishlist-icon"
              to="/likepage"
              className="relative hover:text-gray-600"
            >
              <Heart size={20} />

              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <div
              id="bag-icon"
              className="relative cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <ShoppingBag size={22} />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>

            <CartDrawer openCart={openCart} setOpenCart={setOpenCart} />
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 transition ${
          openMenu ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            openMenu ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenMenu(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-[260px] bg-[#f4e5d3] p-6 shadow-lg transform transition-transform duration-300 ${
            openMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-lg">Menu</h2>

            <button onClick={() => setOpenMenu(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-6 text-md font-medium">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setOpenMenu(false)}>
              Products
            </Link>

            <Link to="/man-tshirt" onClick={() => setOpenMenu(false)}>
              Men
            </Link>

            <Link to="/girl-tshirt" onClick={() => setOpenMenu(false)}>
              Women
            </Link>

            <Link to="/kids-tshirt" onClick={() => setOpenMenu(false)}>
              Kids
            </Link>

            <Link to="/MyOrders" onClick={() => setOpenMenu(false)}>
              My Order
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Home;
