import { Link } from "react-router-dom";
import { Heart, Search, ShoppingBag } from "lucide-react";

function Home() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-wide">
          URBAN THREAD<span className="font-normal">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/about" className="hover:text-gray-600">Products</Link>
          <Link to="/man-tshirt" className="hover:text-gray-600">Men</Link>
          <Link to="/girl-tshirt" className="hover:text-gray-600">Women</Link>
           <Link to="/kids-tshirt" className="hover:text-gray-600">Kids</Link>
          <Link to="/sale" className="hover:text-gray-600">Sale</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="hover:text-gray-600">
            <Search size={20} />
          </button>
         <Link to="/cart" className="relative">
            <ShoppingBag size={22} />
            
              <span className="absolute -top-2 -right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-black text-xs text-white font-bold">
              2
              </span>
           
          </Link>
          
           <Link to="/" className="hover:text-gray-600">
            <Heart size={20} />
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Home;
