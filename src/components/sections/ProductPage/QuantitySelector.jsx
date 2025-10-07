import { useState } from "react";

const QuantitySelector = ({ initial = 1, min = 1, max = 10, onChange }) => {
  const [quantity, setQuantity] = useState(initial);

  const updateQuantity = (newQty) => {
    if (newQty < min || newQty > max) return;
    setQuantity(newQty);
    onChange?.(newQty); // bubble value up to parent if provided
  };

  return (
    <div className="flex items-center bg-gray-200 py-3 w-full justify-evenly mt-5">
      <button
        type="button"
        onClick={() => updateQuantity(quantity - 1)}
        disabled={quantity <= min}
        className="text-xl font-bold text-gray-600 disabled:opacity-40 cursor-pointer"
      >
        –
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => updateQuantity(quantity + 1)}
        disabled={quantity >= max}
        className="text-xl font-bold text-gray-600 disabled:opacity-40 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
