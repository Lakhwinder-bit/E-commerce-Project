import { Heart, ShoppingCart } from "lucide-react";
import { useState, useRef } from "react";
import { useWishlist } from "../context/wishListContext";
import { Link } from "react-router-dom";
import { useCart } from "../context/cardContext";
import { animateToCart } from "../utils/animationCart";

export default function ProductCard({ item }) {

  const {
    variants = [],
    discountPrice,
    oldPrice,
    price,
    size = [],
    title
  } = item;

  const [selectedImage, setSelectedImage] = useState(variants[0].color);
  const [showSize, setShowSize] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  const currentImage =
    variants.find((v) => v.color === selectedImage)?.image?.[0];

  const { toggleWishlist, isWishlisted } = useWishlist();
  const liked = isWishlisted(item.id);

  const { addToCart } = useCart();

  const imageRef = useRef();

  const handleAddToCart = (sizeName) => {

    const cartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: currentImage,
      selectedSize: sizeName,
      selectedColor: selectedImage
    };

    animateToCart(imageRef.current);
    addToCart(cartItem);

    setShowSize(false);
    setSelectedSize(null);
    setSizeError(false);
  };

  return (
    <Link to={`/product/${item.id}`}>

      <div className="bg-white overflow-hidden shadow relative hover:scale-[1.02] duration-200 cursor-pointer">

        {/* IMAGE */}
        <div className="relative h-[200px] md:h-[360px]">

          <img
            ref={imageRef}
            src={currentImage}
            className="w-full h-full object-cover"
            alt={title}
          />

          <span className="absolute md:top-4  top-2  left-2 md:left-4 bg-[#555554] text-white text-[8px]   px-3 py-1 rounded-full">
            {discountPrice}% OFF
          </span>

        </div>

        {/* CONTENT */}
        <div className="p-2">

          <h3 className="font-semibold text-sm md:text-lg capitalize">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <div className="font-bold  text-sm md:text-lg">₹{price}</div>
            <div className=" text-xs md:text-sm text-gray-400 line-through">
              ₹{oldPrice}
            </div>
          </div>

          {/* SIZE PREVIEW */}
          <div className="mt-2 flex gap-2 flex-wrap">
            {size.map((sObj, index) => (
              <div
                key={index}
                className={` h-4 md:h-6  w-4 md:w-6 rounded-md flex justify-center items-center text-xs
                ${
                  sObj.available
                    ? "bg-gray-200 text-black"
                    : "bg-gray-100 text-gray-400 line-through"
                }`}
              >
                {sObj.name}
              </div>
            ))}
          </div>

        </div>

        {/* COLORS */}
        <div className="flex gap-2 absolute  bottom-22 md:bottom-32 left-3">
          {variants.map((variant) => (
            <button
              key={variant.color}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedImage(variant.color);
              }}
              className=" w-2 md:w-3 h-2 md:h-3 rounded-full ring-1"
              style={{ backgroundColor: variant.color }}
            />
          ))}
        </div>

        {/* WISHLIST + CART */}
        <div className="absolute md:bottom-30 bottom-25 md:right-4 right-2 z-20 flex flex-col gap-2">

          {/* WISHLIST */}
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(item.id);
            }}
            className=" w-5 md:w-10 h-5 md:h-10 bg-white rounded-full flex items-center justify-center"
          >
            <Heart
              className={`w-3 md:w-5 h-3 md:h-5 ${
                liked ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </div>

          {/* ADD TO CART */}
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowSize(true);
              setSizeError(true);
            }}
            className="w-5 md:w-10 h-5 md:h-10 bg-white rounded-full flex items-center justify-center"
          >
            <ShoppingCart className="w-3 md:w-5 h-3 md:h-5" />
          </div>

        </div>

        {/* SIZE SELECTOR */}
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={`absolute bottom-0 left-0 w-full
          bg-white/90 backdrop-blur-lg p-3 shadow-lg
          transition-all duration-300 ease-in-out
          ${
            showSize
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >

          <p className="text-sm font-medium mb-1">
            Select Size
          </p>

          {sizeError && (
            <p className="text-red-500 text-xs mb-2">
              Please select a size
            </p>
          )}

          <div className="flex gap-2 flex-wrap">

            {size.map((s) => (

              <button
                key={s.name}
                disabled={!s.available}
                onClick={() => {
                  setSelectedSize(s.name);
                  handleAddToCart(s.name);
                }}
                className={`h-7 w-7 rounded-md flex justify-center items-center text-xs
                ${
                  selectedSize === s.name
                    ? "bg-black text-white"
                    : s.available
                    ? "bg-gray-200 hover:bg-black hover:text-white"
                    : "opacity-40 cursor-not-allowed bg-gray-100 line-through"
                }`}
              >
                {s.name}
              </button>

            ))}

          </div>

        </div>

      </div>

    </Link>
  );
}