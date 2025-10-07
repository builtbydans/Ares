import clsx from "clsx";

const SIZE_LABELS = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "Extra Large",
};

const ItemSizes = ({ sizes, selectedSize, onSelectSize }) => {
  const baseClasses =
    "w-12 h-12 flex items-center justify-center border cursor-pointer transition-colors duration-200";

  return (
    <>
      <div className="flex gap-5 mt-5">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onSelectSize(size)}
            className={clsx(
              baseClasses,
              selectedSize === size
                ? "text-white bg-black border-black"
                : "bg-white text-black hover:bg-gray-100 hover:border-gray-400"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

export default ItemSizes;
