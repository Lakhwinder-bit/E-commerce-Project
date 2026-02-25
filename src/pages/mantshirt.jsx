
import { Heart, HeartIcon } from 'lucide-react'
import React from 'react'

export default function ManTshirt() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-10 ">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
        Home / Men / Hoodies
      </p>

      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
        Oversized Hoodies
      </h1>

      <p className="text-gray-600 max-w-xl">
        Heavyweight fleece, clean silhouettes, built for everyday wear.
      </p>
    </div>

    {/* RIGHT FILTERS */}
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-xs uppercase tracking-widest text-gray-500 mr-2">
        Highlight
      </span>

      <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">
        Best Sellers
      </button>

      <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100 transition">
        New In
      </button>

      <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100 transition">
        Under $100
      </button>

      <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100 transition">
        Limited Drops
      </button>

      <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100 transition">
        Trending Now
      </button>
    </div>

  </div>
</section>



<section className="max-w-7xl mx-auto px-6 py-10">

  {/* TOP BAR */}
  <div className="flex items-center justify-between mb-8">
    <p className="text-sm text-gray-600">
      Showing <span className="font-medium">12</span> of 48 products
    </p>

    <div className="flex items-center gap-4">
      <button className="text-sm border px-4 py-2 rounded-lg flex items-center gap-2">
        Sort by: Featured
        <span>▾</span>
      </button>
    </div>
  </div>

  {/* PRODUCT GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="p-4">
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
          className="w-full h-[380px] object-cover"
        />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          -20%
        </span>

        <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          <HeartIcon className='w-5 h-5'/>
        </button>
      </div>

      <h3 className="font-medium mb-1">Oversized Heavy Fleece Hoodie</h3>
<div className='flex justify-between'>
      <div className="flex items-center gap-2 text-sm mb-2">
        <span className="font-semibold text-lg">$85</span>
        <span className="line-through text-gray-400">$105</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        ⭐ 4.7 · 128
      </div>
</div>
      <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100 transition">
        Add to bag
      </button>
    </div>

    {/* CARD 2 */}
    <div className="p-4">
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
          className="w-full h-[380px] object-cover"
        />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          -20%
        </span>

        <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          <HeartIcon className='w-5 h-5'/>
        </button>
      </div>

      <h3 className="font-medium mb-1">Oversized Heavy Fleece Hoodie</h3>
<div className='flex justify-between'>
      <div className="flex items-center gap-2 text-sm mb-2">
        <span className="font-semibold text-lg">$85</span>
        <span className="line-through text-gray-400">$105</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        ⭐ 4.7 · 128
      </div>
</div>
      <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100 transition">
        Add to bag
      </button>
    </div>

        {/* CARD 3 */}
    <div className="p-4">
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img
          src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
          className="w-full h-[380px] object-cover"
        />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          -20%
        </span>

        <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow">
          <HeartIcon className='w-5 h-5'/>
        </button>
      </div>

      <h3 className="font-medium mb-1">Oversized Heavy Fleece Hoodie</h3>
<div className='flex justify-between'>
      <div className="flex items-center gap-2 text-sm mb-2">
        <span className="font-semibold text-lg">$85</span>
        <span className="line-through text-gray-400">$105</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        ⭐ 4.7 · 128
      </div>
</div>
      <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100 transition">
        Add to bag
      </button>
    </div>
    

  </div>
</section>


    </>
  )
}