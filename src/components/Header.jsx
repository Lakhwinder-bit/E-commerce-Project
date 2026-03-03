import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, Heart, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
   const [openCart, setOpenCart] = useState(false);
   useEffect(() => {
    if(openCart) {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

   }, [openCart]);

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
          {/* <button className="hover:text-gray-600">
            <Search size={20} />
          </button> */}
            
           <Link to="/likepage" className="hover:text-gray-600">
            <Heart size={20} />
          </Link>


            <div className="relative cursor-pointer" onClick={() => setOpenCart(true)}>
        <ShoppingBag size={22} />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white font-bold">
          2
        </span>
      </div>

      {/* Overlay */}
      {openCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenCart(false)}
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
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

        {/* Cart Content */}
        <div></div>
       <div className="h-[60%] overflow-scroll overflow-x-hidden">

        <div className="flex bg-black/15 shadow-lg items-center gap-20 mx-5 my-3 p-2 rounded-xl  transform ease-in-out duration-300 hover:scale-102">
          <div >
          <img className="w-25 h-25 object-cover object-top rounded-lg" src="/images/kidwhite.webp" alt="" />
          </div>

          <div>
            <h2 className="text-black w-20 text-md ">kids Heavy Tee</h2>
           
          </div>

          <div>
            <h3>₹300</h3>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">-</button>
            <div className="bg-white text-black h-8 w-8 rounded-full text-sm flex items-center justify-center font-semibold">1</div>
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">+</button>
          </div>

          <div className="text-sm font-semibold">
           ₹300
          </div>
        </div>


          <div className="flex bg-black/15 shadow-lg items-center gap-20 mx-5 my-3 p-2 rounded-xl  transform ease-in-out duration-300 hover:scale-102">
          <div >
          <img className="w-25 h-25 object-cover object-top rounded-lg" src="/images/kidwhite.webp" alt="" />
          </div>

          <div>
            <h2 className="text-black w-20 text-md ">kids Heavy Tee</h2>
           
          </div>

          <div>
            <h3>₹300</h3>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">-</button>
            <div className="bg-white text-black h-8 w-8 rounded-full text-sm flex items-center justify-center font-semibold">1</div>
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">+</button>
          </div>

          <div className="text-sm font-semibold">
           ₹300
          </div>
        </div>


          <div className="flex bg-black/15 shadow-lg items-center gap-20 mx-5 my-3 p-2 rounded-xl  transform ease-in-out duration-300 hover:scale-102">
          <div >
          <img className="w-25 h-25 object-cover object-top rounded-lg" src="/images/kidwhite.webp" alt="" />
          </div>

          <div>
            <h2 className="text-black w-20 text-md ">kids Heavy Tee</h2>
           
          </div>

          <div>
            <h3>₹300</h3>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">-</button>
            <div className="bg-white text-black h-8 w-8 rounded-full text-sm flex items-center justify-center font-semibold">1</div>
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">+</button>
          </div>

          <div className="text-sm font-semibold">
           ₹300
          </div>
        </div>


          <div className="flex bg-black/15 shadow-lg items-center gap-20 mx-5 my-3 p-2 rounded-xl  transform ease-in-out duration-300 hover:scale-102">
          <div >
          <img className="w-25 h-25 object-cover object-top rounded-lg" src="/images/kidwhite.webp" alt="" />
          </div>

          <div>
            <h2 className="text-black w-20 text-md ">kids Heavy Tee</h2>
           
          </div>

          <div>
            <h3>₹300</h3>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">-</button>
            <div className="bg-white text-black h-8 w-8 rounded-full text-sm flex items-center justify-center font-semibold">1</div>
            <button className="bg-black text-white h-7 w-7 rounded-full text-sm flex items-center justify-center">+</button>
          </div>

          <div className="text-sm font-semibold">
           ₹300
          </div>
        </div>


       </div>
       <div className=" h-[35%] flex justify-between items-center rounded-t-[45px] px-8 py-2 bg-black/30">
<div>
  <button className=" px-5 text-sm bg-black/30 gap-3 text-white rounded-2xl flex items-center justify-center h-10"><ArrowLeft/>Continue</button>
  </div>
       <div className="w-2/5 flex flex-col gap-5">
        <div>
        <h1 className="text-2xl font-semibold">₹3000</h1>
        <h3 className="text-sm text-gray-700 flex mt-2 gap-2">Text and shipping calculated at checkout <ArrowRight/></h3>
        </div>

        <div>
          <button className="w-full bg-black text-white rounded-xl    ease-in-out
    hover:translate-y-1
    hover:rotate-2
    hover:scale-105
  transition duration-300 flex items-center justify-center h-10"> Checkout</button>
        </div>
       </div>
       </div>
      </div>
        
        </div>

      </div>
    </header>
  );
}

export default Home;
