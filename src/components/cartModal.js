import React from "react";
import { TbTrash } from "react-icons/tb";

function CartModal({ onClose }) {
  return (
    <div className="absolute top-24 right-20 z-12 w-1/4 py-6 bg-white rounded-lg shadow-2xl">
      <div>
        <p className="px-6  text-sm font-bold">Cart</p>
        <hr className="border border-b-[#E8E5E0] border-t-0 mt-4"></hr>
        <div className="px-6">
          <div className="flex my-4 gap-3">
            <TbTrash className="text-gray-500" />
          </div>
          <button
            className="w-full text-white text-sm font-semibold bg-[#f08119] btn-cart py-3  rounded-lg"
            onClick={onClose}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
