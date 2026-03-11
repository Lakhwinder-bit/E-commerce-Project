import { ChevronDown } from "lucide-react";

export default function FilterBar({
  openFilter,
  toggleFilter,
  minPrice,
  setMinPrice,
  selectedSizes,
  toggleSize,
  clearAllFilters,
  totalProducts,
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* LEFT FILTERS */}
      <div className="flex gap-5">
        {/* PRICE FILTER */}
        <div className="relative">
          <div
            onClick={() => toggleFilter("price")}
            className="px-2 flex items-center gap-2 cursor-pointer select-none"
          >
            Price
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                openFilter === "price"
                  ? "rotate-180 stroke-black"
                  : "stroke-gray-500"
              }`}
            />
          </div>

          <div
            className={`absolute top-8 left-0 w-80 bg-white border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 z-30 ${
              openFilter === "price"
                ? "max-h-80 opacity-100 p-5"
                : "max-h-0 opacity-0 p-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col w-full">
                <label className="text-xs pb-2">Under The price</label>
              <div className="flex items-center border rounded-lg px-3 py-2 w-full">
                <span className="text-gray-500 mr-2">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full outline-none text-sm"
                />
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIZE FILTER */}
        <div className="relative">
          <div
            onClick={() => toggleFilter("size")}
            className="px-2 flex items-center gap-2 cursor-pointer select-none"
          >
            Size
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                openFilter === "size"
                  ? "rotate-180 stroke-black"
                  : "stroke-gray-500"
              }`}
            />
          </div>

          <div
            className={`absolute top-10 left-0 w-[200px] md:w-[340px] bg-white border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 z-30 ${
              openFilter === "size"
                ? "md:max-h-80 max-h-30 opacity-100 md:p-5 p-2"
                : "max-h-0 opacity-0 p-0"
            }`}
          >
            <div className="flex flex-wrap gap-3 md:mb-4 mb-0">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`md:h-15 md:w-15 h-7 w-7 border rounded-full text-xs md:text-sm transition
                    ${
                      selectedSizes.includes(size)
                        ? "bg-black text-white border-black"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={clearAllFilters}
                className="text-xs md:text-sm text-white bg-black px-2 py-1 rounded-lg hover:text-black"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <p className="text-sm md:text-md font-semibold text-black ">
          {totalProducts} <span className="text-gray-500 ">Products</span>
        </p>
      </div>
    </div>
  );
}