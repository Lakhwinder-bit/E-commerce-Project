import { Heart, HeartIcon } from "lucide-react";
import React from "react";
import ProductCard from "../components/productCard";
import { Product } from "/src/data/product.jsx";
import { filterProducts } from "../utils/filterProducts";
import FilterBar from "../components/filterBar";
import useProductFilters from "../hooks/useProductFilter";
export default function GirlTshirt() {
  const {
    filters,
    toggleFilter,
    toggleSize,
    setMinPrice,
    clearAllFilters,
    filteredProducts,
  } = useProductFilters(Product, "girl");

  return (
    <>
      {/* HEADER */}
      <section className="mx-auto md:p-5 p-3 bg-[#fff7ed]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
          

            <h1 className="text-xl md:text-4xl font-semibold text-gray-900 mb-2 mt-5">
              Girls Collection
            </h1>

            <p className="text-gray-600 max-w-xl text-sm md:text-md">
              Premium quality Collection designed for everyday comfort and
              style.
            </p>
          </div>
        </div>
      </section>

      <section className=" mx-auto md:p-5 p-3  bg-[#fff7ed]">
        {/* TOP BAR */}
        <FilterBar
          openFilter={filters.openFilter}
          toggleFilter={toggleFilter}
          minPrice={filters.minPrice}
          setMinPrice={setMinPrice}
          selectedSizes={filters.selectedSizes}
          toggleSize={toggleSize}
          clearAllFilters={clearAllFilters}
          totalProducts={filteredProducts.length}
        />

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {/* CARD 1 */}
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
