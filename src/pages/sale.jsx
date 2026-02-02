import React from 'react'

export const Sale = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 py-10">
  <div className="relative overflow-hidden rounded-2xl bg-black">

    {/* GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>

    {/* CONTENT */}
    <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[520px] px-8 py-16">

      {/* LEFT TEXT */}
      <div>
        {/* BADGE */}
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            FLASH SALE
          </span>
          <span className="text-gray-300 text-sm">
            Online Exclusive
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Last Chance <br />
          <span className="text-pink-400">Winter Clearout</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-md mb-8 text-sm">
          Up to 70% off selected styles. Prices as marked.
          Offer ends when the timer hits zero.
        </p>

        {/* TIMER */}
        <div className="flex gap-4 mb-8">
          {[
            ["04", "HOURS"],
            ["23", "MINS"],
            ["45", "SECS"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-lg w-20 py-4 text-center"
            >
              <p className="text-xl font-bold text-white">{item[0]}</p>
              <p className="text-xs text-gray-300">{item[1]}</p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-3 rounded-full text-sm font-medium">
          Shop All Deals
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          alt="Model"
          className="h-[500px] object-cover"
        />
      </div>

    </div>
  </div>
</section>


<section className="h-screen pb-20">
  <div className="max-w-7xl mx-auto px-6 h-full">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">

      {/* ================= FIXED FILTER ================= */}
      <aside className="lg:col-span-1 h-full">
        <div className="sticky top-20">

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium">Filters</h2>
            <button className="text-sm text-gray-500 underline">
              Clear all
            </button>
          </div>

          {/* CATEGORY */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Category</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex gap-2">
                <input type="checkbox" checked />
                All Sale
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />
                T-Shirts & Tops
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />
                Jackets & Coats
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />
                Pants & Jeans
              </label>
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Size</h3>
            <div className="flex gap-2 flex-wrap">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`px-3 py-1 border rounded text-sm ${
                    s === "S" ? "bg-black text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div>
            <h3 className="text-sm font-medium mb-3">Price Range</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex gap-2">
                <input type="checkbox" />
                Under $50
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />
                $50 – $100
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />
                $100 – $200
              </label>
            </div>
          </div>

        </div>
      </aside>

      {/* ================= SCROLLABLE PRODUCTS ================= */}
      <main className="lg:col-span-3 h-full overflow-y-auto pr-2">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8 sticky top-0 bg-white z-10 py-4">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">124</span> results
          </p>

          <button className="text-sm border px-4 py-2 rounded-lg">
            Sort by: Recommended ▾
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="">
              <div className="h-[280px] bg-gray-200 rounded-xl mb-4"></div>
              <p className="text-sm font-medium">Product name</p>
              <p className="text-sm text-red-600">$49.00</p>
            </div>
          ))}
        </div>

      </main>

    </div>
  </div>
</section>


    </>
  )
}
