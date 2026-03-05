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
      <section className="mx-auto px-10 py-10 bg-[#fff7ed]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
           

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
              Men Collection
            </h1>

            <p className="text-gray-600 max-w-xl">
              Premium quality Collection designed for everyday comfort and
              style.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto px-10 py-10 bg-[#fff7ed]">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
