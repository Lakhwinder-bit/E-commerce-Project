
import { Heart, HeartIcon } from 'lucide-react'
import React from 'react'
import ProductCard from '../components/productCard'
import { Product } from '../data/Product.jsx'

export default function Kides() {
const manProducts = Product.filter(
  (item) => item.genderCatagory === "kids"
);
console.log(manProducts)

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
       Kids Collection
      </h1>

      <p className="text-gray-600 max-w-xl">
        Soft, comfortable styles perfect for everyday play.
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
{
manProducts.map((item) => (
  <ProductCard key={item.id} item={item}/>
))
}
    

  </div>
</section>


    </>
  )
}