import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../data/product";
import { Heart } from "lucide-react";
import { useCart } from "../context/cardContext";
import { animateToWishlist } from "../utils/animateToWishlist";
import { useWishlist } from "../context/wishListContext";


export const ProductDetails = () => {

  const { id } = useParams();

  const { toggleWishlist, isWishlisted } = useWishlist(); // ✅ FIX

  const product = Product.find((item) => item.id === Number(id));
const [showModal, setShowModal] = useState(false);

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
  const [isFading, setIsFading] = useState(false);

  const liked = isWishlisted(product.id); // ✅ wishlist state

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

  // Add to cart
  const handleAddToCart = () => {

    if (!selectedSize) {
     setShowModal(true); // open modal
    return;
    }


    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: selectedVariant.image[0],
      selectedSize: selectedSize,
      selectedColor: selectedVariant.color
    };

    addToCart(cartItem);
  };

  return (
    <>
   
    <div className="bg-[#fff7ed]">
         <section className="mx-auto p-3 md:p-5 bg-[#fff7ed]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
           

            <h1 className="text-lg md:text-4xl font-semibold text-gray-900 mb-2">
              Product Detaile
            </h1>

            <p className="text-gray-600 max-w-xl text-sm md:text-lg">
              Premium quality Collection designed for everyday comfort and
              style.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto md:p-5 p-3">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT IMAGE */}
          <div>

            <div className="rounded-2xl overflow-hidden mb-4">

              <img
                src={selectedImage}
                className={`w-[650px] bg-white h-[480px] object-contain transition-all duration-500 ${
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
                  className="w-5 h-5 rounded-full ring-1 cursor-pointer"
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

              <button 
                onClick={handleAddToCart} 
                className="flex-1 bg-[#555554] text-white py-3 rounded-xl text-sm font-medium hover:bg-black/70 transition"
              >
                Add to Bag
              </button>

              <button
                onClick={() => {
                  toggleWishlist(product.id);
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

    <div
  className={`fixed inset-0 flex items-center justify-center bg-black/40 z-50 transition-opacity duration-300 ${
    showModal ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  <div
    className={`bg-white p-6 rounded-lg w-[320px] text-center transform transition-all duration-300 ${
      showModal ? "scale-100 translate-y-0" : "scale-90 translate-y-5"
    }`}
  >
    <h2 className="text-lg font-semibold mb-2">Select Size</h2>

    <p className="text-gray-500 mb-4">
      Please select a size before adding to cart.
    </p>

    <button
      onClick={() => setShowModal(false)}
      className="bg-[#555554] cursor-pointer text-white px-5 py-2 rounded hover:bg-black transition"
    >
      OK
    </button>
  </div>
</div>
     </>
  );
};