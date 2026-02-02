import React from 'react'

export const Product = () => {
  return (
   <>
   <section className="max-w-7xl mx-auto px-6 py-12 pb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

    {/* LEFT – IMAGE GALLERY */}
    <div>
      <div className="rounded-2xl overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
          className="w-full h-[520px] object-cover"
        />
      </div>

      <div className="flex gap-3">
        {[
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-20 h-20 object-cover rounded-xl border cursor-pointer hover:border-black"
          />
        ))}
      </div>
    </div>

    {/* RIGHT – PRODUCT INFO */}
    <div>

      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
        Men / Hoodies & Sweatshirts
      </p>

      <h1 className="text-3xl font-semibold mb-3">
        Oversized Heavy Fleece Hoodie
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        ⭐⭐⭐⭐☆ <span>4.7 / 5</span>
        <span className="text-gray-400">· 128 reviews</span>
        <span className="text-green-600">98% would recommend</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl font-semibold">$85.00</span>
        <span className="line-through text-gray-400">$110.00</span>
        <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
          23% OFF
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        Engineered for superior comfort and durability. This heavyweight
        480GSM cotton fleece hoodie features a structured drape, double-lined
        hood, and our signature relaxed fit. Pre-shrunk to maintain shape.
      </p>

      {/* Color */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Color: Jet Black</p>
        <div className="flex gap-3">
          <span className="w-6 h-6 rounded-full bg-black border-2 border-black"></span>
          <span className="w-6 h-6 rounded-full bg-gray-500 border"></span>
          <span className="w-6 h-6 rounded-full bg-gray-200 border"></span>
        </div>
      </div>

      {/* Size */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <p className="text-sm font-medium">Size</p>
          <button className="text-xs underline text-gray-500">
            Size Guide
          </button>
        </div>

        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className={`w-10 h-10 rounded-lg border text-sm ${
                size === "M"
                  ? "bg-gray-900 text-white"
                  : "hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4 mb-4">
        <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-black transition">
          Add to Bag
        </button>

        <button className="w-12 h-12 border rounded-xl flex items-center justify-center">
          ♡
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-8">
        Free shipping on all orders over $150
      </p>

      {/* FEATURES */}
      <ul className="space-y-3 text-sm text-gray-600">
        <li>✔ Premium 480GSM Heavyweight Cotton</li>
        <li>✔ 30-Day Happiness Guarantee</li>
        <li>✔ Ships within 24 hours</li>
      </ul>

    </div>
  </div>
</section>



<section className="max-w-7xl mx-auto px-6 py-12 pb-20">
  <h2 className="text-lg font-medium mb-6">
    Complete the Look
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

    {/* ITEM 1 */}
    <div>
      <div className="rounded-2xl overflow-hidden mb-3">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          className="w-full h-[340px] object-cover"
        />
      </div>
      <p className="text-sm font-medium">Tech Cargo Pant</p>
      <p className="text-sm text-gray-500">$95.00</p>
    </div>

    {/* ITEM 2 */}
    <div>
      <div className="rounded-2xl overflow-hidden mb-3">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          className="w-full h-[340px] object-cover"
        />
      </div>
      <p className="text-sm font-medium">Heavy Cotton Tee</p>
      <p className="text-sm text-gray-500">$45.00</p>
    </div>

    {/* ITEM 3 */}
    <div>
      <div className="rounded-2xl overflow-hidden mb-3">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          className="w-full h-[340px] object-cover"
        />
      </div>
      <p className="text-sm font-medium">Merino Wool Beanie</p>
      <p className="text-sm text-gray-500">$35.00</p>
    </div>

    {/* ITEM 4 */}
    <div>
      <div className="rounded-2xl overflow-hidden mb-3">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          className="w-full h-[340px] object-cover"
        />
      </div>
      <p className="text-sm font-medium">Everyday Tote</p>
      <p className="text-sm text-gray-500">$25.00</p>
    </div>

  </div>
</section>



 {/* ================= REVIEWS ================= */}
   
<section className="max-w-7xl mx-auto px-6 py-12 ">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* LEFT SUMMARY */}
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-3xl  mb-4 font-bold">
        Customer Reviews
      </h2>

      <div className="flex items-center gap-2 mb-1">
        <span className="text-3xl font-semibold">4.7</span>
        <div className="flex text-orange-400">
          ★★★★☆
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Based on 128 verified purchases
      </p>

      <p className="text-sm text-gray-500 mb-6">
        All reviews are from verified buyers of this product.
      </p>

      <button className="w-full py-2 border rounded-lg text-sm hover:bg-gray-100 transition">
        Write a review
      </button>
    </div>

    {/* RIGHT REVIEWS */}
    <div className="lg:col-span-2 space-y-6">

      {/* REVIEW CARD */}
      <div className="border rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <p className="text-sm font-medium">Alex M.</p>
          </div>
          <div className="text-orange-400">★★★★★</div>
        </div>

        <p className="text-xs text-gray-500 mb-2">
          Size: M · Color: Jet Black
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          Super thick and cozy without feeling bulky. The fit is perfectly
          oversized and the quality feels premium.
        </p>
      </div>

      {/* REVIEW CARD */}
      <div className="border rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <p className="text-sm font-medium">Jordan P.</p>
          </div>
          <div className="text-orange-400">★★★★★</div>
        </div>

        <p className="text-xs text-gray-500 mb-2">
          Size: L · Color: Jet Black
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          Great weight and construction. I've washed it a few times and it still
          looks brand new. Definitely recommend.
        </p>
      </div>

    </div>
  </div>
</section>


   </>
  )
}
