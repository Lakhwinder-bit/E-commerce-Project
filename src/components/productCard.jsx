import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useWishlist } from "../context/wishListContext";
import { Link } from "react-router-dom";
import { useCart } from "../context/cardContext";
import { animateToCart } from "../utils/animationCart";
import { useRef } from "react";

export default function ProductCard({ item }) {
  const {
    variants = [],
    discountPrice,
    oldPrice,
    price,
    size,
    title,

    productName,
  } = item;
  const [selectedImage, setSelectedImage] = useState(variants[0].color);
  const currentImage = variants.find((v) => v.color === selectedImage)?.image;
  const { toggleWishlist, isWishlisted } = useWishlist();
  const liked = isWishlisted(item.id);
  const { addToCart } = useCart();

  const imageRef = useRef();

  return (
    <Link to={`/product/${item.id}`}>
      <div className="bg-white  overflow-hidden shadow relative hover:scale-102 transform duration-200 ease-in cursor-pointer">
        <div className="relative h-[360px]">
          <img
             ref={imageRef}
  src={currentImage}
  className="w-full h-full object-cover"
  alt={title}
          />
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
            {discountPrice}% OFF
          </span>
        </div>

        <div className="p-2">
          <div className="flex flex-col">
            <div className="mt-2">
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg">₹{price}</div>
              <div className="text-sm text-gray-400 line-through leading-[60%]">
                ₹{oldPrice}
              </div>
            </div>

            <div className="mt-2 flex gap-2 flex-wrap">
              {size.map((sObj, index) => (
                <div
                  key={index}
                  className={`h-6 w-6 rounded-md flex justify-center items-center text-xs 
        ${
          sObj.available
            ? "bg-gray-200 text-black"
            : "bg-gray-100 text-gray-400 line-through cursor-not-allowed"
        }`}
                >
                  {sObj.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ✅ FIXED COLORS (IMPORTANT) */}
        <div className="flex gap-2 mt-3 absolute bottom-32 left-3 ">
          {variants.map((variant) => (
            <button
              key={variant.color}
              onClick={() => setSelectedImage(variant.color)}
              className="w-3 h-3 rounded-full border-0 ring-1 cursor-pointer  hover:scale-120 transform duration-200 ease-in-out"
              style={{ backgroundColor: variant.color }}
            />
          ))}
        </div>
        <div className="absolute bottom-30 right-4 z-40">
          <div className="flex flex-col gap-1.5">
            <div
              onClick={(e) => {
                e.preventDefault(); // ✅ STOP LINK
                e.stopPropagation(); // ✅ STOP BUBBLING
                toggleWishlist(item.id); // ✅ PASS ID ONLY
              }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
            >
              <Heart
                className={`w-5 h-5 transition ${
                  liked ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                animateToCart(imageRef.current);
                addToCart(item);
              }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
