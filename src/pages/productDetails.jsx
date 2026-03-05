import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../data/product";
import { Heart } from "lucide-react";
import { useCart } from "../context/cardContext";
import { animateToWishlist } from "../utils/animateToWishlist";

export const ProductDetails = () => {

  const { id } = useParams();

  const product = Product.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  const {
    title,
    price,
    oldPrice,
    discountPrice,
    variants = [],
    size = [],
  } = product;

  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [selectedImage, setSelectedImage] = useState(variants[0].image[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [liked, setLiked] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const { addToCart } = useCart();

  const heartRef = useRef(null);

  // Change image
  const handleImageChange = (img) => {

    if (img === selectedImage) return;

    setIsFading(true);

    setTimeout(() => {
      setSelectedImage(img);
      setIsFading(false);
    }, 150);

  };

  // Change color
  const handleColorChange = (variant) => {

    setSelectedVariant(variant);
    setSelectedImage(variant.image[0]);

  };

  return (
    <div className="bg-[#fff7ed]">

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT IMAGE */}

          <div>

            <div className="rounded-2xl overflow-hidden mb-4">

              <img
                src={selectedImage}
                className={`w-[650px] bg-[#faf3f6] h-[480px] object-contain transition-all duration-500 ${
                  isFading ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
                }`}
              />

            </div>

            {/* THUMBNAILS */}

            <div className="flex gap-3">

              {selectedVariant.image.map((img, i) => (

                <img
                  key={i}
                  src={img}
                  onClick={() => handleImageChange(img)}
                  className={`w-20 h-20 object-cover rounded-xl border cursor-pointer
                  ${
                    selectedImage === img
                      ? "border-black"
                      : "border-gray-200 hover:border-black"
                  }`}
                />

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Men / T-Shirt
            </p>

            <h1 className="text-3xl font-semibold mb-3">
              {title}
            </h1>

            {/* COLORS */}

            <div className="flex gap-2 mt-3 mb-6">

              {variants.map((variant) => (

                <button
                  key={variant.color}
                  onClick={() => handleColorChange(variant)}
                  className="w-5 h-5 rounded-full ring-1"
                  style={{ backgroundColor: variant.color }}
                />

              ))}

            </div>

            {/* PRICE */}

            <div className="flex items-center gap-3 mb-6">

              <span className="text-2xl font-semibold">
                ₹{price}
              </span>

              <span className="line-through text-gray-400">
                ₹{oldPrice}
              </span>

              <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
                {discountPrice}% OFF
              </span>

            </div>

            {/* SIZE */}

            <div className="mb-8">

              <p className="text-sm font-medium mb-2">
                Size
              </p>

              <div className="flex gap-3">

                {size.map((s, i) => (

                  <button
                    key={i}
                    disabled={!s.available}
                    onClick={() => setSelectedSize(s.name)}
                    className={`w-10 h-10 rounded-lg border text-sm
                    ${
                      !s.available
                        ? "bg-gray-100 text-gray-400 line-through cursor-not-allowed"
                        : selectedSize === s.name
                        ? "border-black bg-black text-white"
                        : "hover:border-black"
                    }`}
                  >
                    {s.name}
                  </button>

                ))}

              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-4 mb-4">

              <button className="flex-1 bg-[#555554] text-white py-3 rounded-xl text-sm font-medium hover:bg-black/70 transition">
                Add to Bag
              </button>

              <button
                onClick={() => {
                  setLiked(!liked);
                  animateToWishlist(heartRef.current);
                }}
                className="w-40 h-12 border rounded-xl flex items-center justify-center gap-3 text-sm"
              >
                Save

                <Heart
                  ref={heartRef}
                  className={`w-5 h-5 ${
                    liked ? "fill-red-500 text-red-500" : ""
                  }`}
                />

              </button>

            </div>

            <p className="text-xs text-gray-500">
              Free shipping on all orders over ₹1500
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};