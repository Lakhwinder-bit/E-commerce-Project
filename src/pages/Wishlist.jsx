import { useWishlist } from "../context/wishListContext";
import { Product } from "../data/product";
import ProductCard from "../components/productCard";
import { useState } from "react";


export default function LikePage() {
  const { wishlist,  clearlist  } = useWishlist();
  

  // 🔥 FILTER liked products
  const likedProducts = Product.filter((item) =>
    wishlist?.includes(item.id)
  );
console.log(wishlist)
  return (
    <section className="mx-auto px-10 py-10 bg-[#fff7ed]">
        {/* LEFT CONTENT */}
    <div className="">
      

      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
       Kids Collection
      </h1>

      <p className="text-gray-600 max-w-xl">
        Soft, comfortable styles perfect for everyday play.
      </p>
    </div>
    <div className="flex  gap-3 justify-end pt-2 pb-8">
      <button className="bg-[#555554] text-white py-2.5  text-sm w-28 text-center justify-center flex items-center rounded-3xl cursor-pointer">Move To Bag</button>
      {
        wishlist?.length > 0  && (


      <button 
      onClick={ clearlist }
     
       className="border border-[#555554] text-black  py-2.5  w-28 text-sm text-center justify-center flex items-center rounded-3xl cursor-pointer">Unlike All</button>
      )}
      
    </div>

      {likedProducts.length === 0 ? (
        <p className="text-gray-500">No liked products yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 bg-[#fff7ed]">
          {likedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}