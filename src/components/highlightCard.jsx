import { Heart, ShoppingCart } from "lucide-react";

export default function HighlightCard({ item }) {
  const {
  Image,
    discountPrice,
    oldPrice,
    price,
    colors,
    title,
   
    productName,
  } = item;

  return (
      <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="relative h-[380px]">
                <img
src={Image}
className="w-full h-full object-cover"
                  alt={title}
                />
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {discountPrice}% OFF
                </span>
              </div>
  
              <div className="p-2">
                <div className="flex flex-row-reverse justify-between">
                  <div className="flex flex-col">
                    <div className="font-bold text-lg">${price}</div>
                    <div className="text-sm text-gray-400 line-through leading-[60%]">
                      ${oldPrice}
                    </div>
                  </div>
  
                  <div className="mt-2">
                    <h3 className="font-semibold text-lg">{title}</h3>
  
                    <p className="text-sm text-gray-500 mt-3">
                    {productName}
                    </p>
                        {/* ✅ FIXED COLORS (IMPORTANT) */}
          <div className="flex gap-2 mt-3">
            {colors?.map((clr, index) => (
              <span
                key={index}
                className="h-3 w-3 rounded-full border"
                style={{ backgroundColor: clr }}
              />
            ))}
          </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-30 right-4 z-40">
                <div className="flex flex-col gap-1.5">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Heart className="w-5 h-5"/></div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><ShoppingCart className="w-5 h-5"/></div>
                </div>
              </div>
            </div>
  );
}


 