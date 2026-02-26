export default function CategoryCard({ item} ) {
  const  {
    Image,
    catagorieName,
    count,
  } = item;
  return (
    <div className="h-full w-[330px] pt-12">
      <div className="relative">
        <img
          className="rounded-lg h-[350px] object-cover brightness-50"
          src={Image}
          alt={`${catagorieName} image`}
        />
        <div className="absolute bottom-0 p-5">
          <p className="text-white text-2xl font-bold">
            {catagorieName}
          </p>
          <p className="text-white text-2xl font-bold">
            {count} items
          </p>
        </div>
      </div>
    </div>
  );
}


