import { useWishlist } from "../context/wishListContext";
import { Product } from "../data/product";
import ProductCard from "../components/productCard";

export default function LikePage() {

  const { wishlist, clearlist } = useWishlist();

  // Filter liked products
  const likedProducts = Product.filter((item) =>
    wishlist?.includes(item.id)
  );

  return (
    <section className="mx-auto md:p-5 p-3 bg-[#fff7ed]">

      {/* HEADER */}
      <div>
        <h1 className="text-lg md:text-4xl font-semibold text-gray-900 mb-2">
          Likes Collection
        </h1>

        <p className="text-gray-600 max-w-xl text-sm md:text-md">
          Soft, comfortable styles perfect for everyday play.
        </p>
      </div>

      {/* BUTTON */}
      {wishlist?.length > 0 && (
        <div className="flex justify-end pt-2 pb-8">
          <button
            onClick={clearlist}
            className="border border-[#555554] text-black py-2 px-6 text-sm rounded-3xl cursor-pointer hover:bg-gray-200 transition"
          >
            Unlike All
          </button>
        </div>
      )}

      {/* PRODUCTS */}
      {likedProducts.length === 0 ? (
                    <div className="col-span-full text-center py-10">
      <p className="text-gray-600 text-lg font-medium">
        No products found
      </p>
      <p className="text-gray-400 text-sm mt-1">
        Try changing your filters.
      </p>
    </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {likedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

    </section>
  );
}