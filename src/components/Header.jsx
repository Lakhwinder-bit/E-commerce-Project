import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Heart,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import CartDrawer from "../components/cartDrawer";
import { useCart } from "../context/cardContext";
import { useWishlist } from "../context/wishListContext";

function Home() {
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCart]);
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  return (
    <header className="w-full border-b border-gray-200 bg-[#fef2e4]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-wide">
          URBAN THREAD<span className="font-normal">.</span>
        </Link>

        {/* Navigation */}
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

        {/* Icons */}
        <div className="flex items-center gap-5">
          {/* <button className="hover:text-gray-600">
            <Search size={20} />
          </button> */}

          <Link id="wishlist-icon" to="/likepage" className="relative hover:text-gray-600">
            <Heart size={20} />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>

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
  );
}

export default Home;
