import { Heart, HeartIcon } from 'lucide-react'
import React from 'react'
import ProductCard from '../components/productCard'
import { Product } from '/src/data/product.jsx'
import FilterBar from "../components/filterBar";
import useProductFilters from "../hooks/useProductFilter";
export default function  About() {
    const {
      filters,
      toggleFilter,
      toggleSize,
      setMinPrice,
      clearAllFilters,
      filteredProducts,
    } = useProductFilters(Product);
  return (
    <>
    <section className=" mx-auto px-10 py-10 ">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* LEFT CONTENT */}
    <div>
    

      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
         All Collections
      </h1>

      <p className="text-gray-600 max-w-xl">
        Explore our complete range of stylish and comfortable clothing for everyone.
      </p>
    </div>



  </div>
</section>



<section className=" mx-auto px-10 py-10">
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
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">

    {/* CARD 1 */}
 {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}

    

  </div>
</section>


    </>
  )
}