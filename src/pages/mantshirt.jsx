import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import ProductCard from "../components/productCard";
import { Product } from "/src/data/product.jsx";
import { filterProducts } from "../utils/filterProducts";
import FilterBar from "../components/filterBar";
import useProductFilters from "../hooks/useProductFilter";

export default function ManTshirt() {
  const {
    filters,
    toggleFilter,
    toggleSize,
    setMinPrice,
    clearAllFilters,
    filteredProducts,
  } = useProductFilters(Product, "Man");

  return (
    <>
      {/* HEADER */}
      <section className="mx-auto p-3 md:p-5 bg-[#fff7ed]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
           

            <h1 className="text-xl md:text-4xl font-semibold text-gray-900 mb-2 mt-5">
              Men Collection
            </h1>

            <p className="text-gray-600 max-w-xl text-sm md:text-md">
              Premium quality Collection designed for everyday comfort and
              style.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto md:p-5 p-3 bg-[#fff7ed]">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-3">
          
          {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
            <div className="col-span-full text-center py-10">
      <p className="text-gray-600 text-lg font-medium">
        No products found
      </p>
      <p className="text-gray-400 text-sm mt-1">
        Try changing your filters.
      </p>
    </div>
        )}
        </div>
      </section>
    </>
  );
}
