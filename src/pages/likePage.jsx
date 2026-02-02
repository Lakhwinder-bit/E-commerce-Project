import React from 'react'

export const LikePage = () => {
  return (
   <>
   <section className="">
  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      {/* LEFT */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          Home / Account / Liked Items
        </p>

        <h1 className="text-3xl font-semibold mb-1">
          Liked Items
        </h1>

        <p className="text-gray-600 text-sm">
          All the pieces you've saved for later, in one place.
        </p>
      </div>

      {/* RIGHT FILTER */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          View
        </p>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
            All
          </button>
          <button className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100">
            In Stock
          </button>
          <button className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100">
            On Sale
          </button>
        </div>
      </div>

    </div>

  </div>
</section>



    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <p className="text-sm text-gray-600">
          You have <span className="font-medium">6</span> items in your likes
        </p>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
            Move all to bag
          </button>
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
            Clear likes
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className=" p-4">
          <div className="relative rounded-xl overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              className="w-full h-[380px] object-cover"
            />

            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              -20%
            </span>

            <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full"></div>
          </div>

          <h3 className="text-sm font-medium mb-1">
            Oversized Heavy Fleece Hoodie
          </h3>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-lg">$85</span>
              <span className="line-through text-gray-400">$105</span>
            </div>
            <span className="text-sm text-gray-500">4.7 · 128</span>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>Size: L · In stock</span>
            <button className="hover:underline">Remove</button>
          </div>

          <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100">
            Move to bag
          </button>
        </div>

        {/* CARD 2 */}
        <div className=" p-4">
          <div className="relative rounded-xl overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
              className="w-full h-[380px] object-cover"
            />

            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              New
            </span>

            <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full"></div>
          </div>

          <h3 className="text-sm font-medium mb-1">
            Structured Fleece Hoodie
          </h3>

          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold">$92</span>
            <span className="text-sm text-gray-500">4.9 · 64</span>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>Size: M · Low stock</span>
            <button className="hover:underline">Remove</button>
          </div>

          <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100">
            Move to bag
          </button>
        </div>

        {/* CARD 3 */}
        <div className=" p-4">
          <div className="relative rounded-xl overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
              className="w-full h-[380px] object-cover"
            />

            <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full"></div>
          </div>

          <h3 className="text-sm font-medium mb-1">
            Stone Wash Hoodie
          </h3>

          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold">$79</span>
            <span className="text-sm text-gray-500">4.5 · 42</span>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mb-4">
            <span>Size: XL · In stock</span>
            <button className="hover:underline">Remove</button>
          </div>

          <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100">
            Move to bag
          </button>
        </div>

      </div>
    </section>



   </>
  )
}
