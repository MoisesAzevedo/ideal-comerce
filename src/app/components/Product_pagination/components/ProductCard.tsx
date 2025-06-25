import React from "react";
import type { Product } from "../data/products";
import styles from "./ProductCard.module.scss";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      className="relative w-[203px] h-[360px] flex flex-col items-start rounded shadow-sm p-2"
      style={{ background: "rgba(0,0,0,0.01)" }}
    >
      <div className="relative w-full h-[243px] mb-2">
        <img
          className="absolute w-full h-full top-0 left-0 object-cover rounded"
          alt={product.name}
          src={product.image}
        />
      </div>
      <div className="w-full font-teko text-[#000000a8] text-xs mb-1">
        {product.category}
      </div>
      <div className="w-full font-teko text-black text-xl mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {product.name}
      </div>
      <div className="w-full flex items-end gap-2 mb-1">
        <span className="font-teko text-black text-xl">R$ {product.price}</span>
        {product.oldPrice && (
          <span className="font-teko text-[#848484] text-[15px] line-through">
            R$ {product.oldPrice}
          </span>
        )}
      </div>
      <div className="w-full flex items-center justify-between font-teko text-xs mb-2">
        <div>
          <span className="text-[#848484]">ou </span>
          <span className="text-black">
            {product.installment.split("de")[0]}de{" "}
          </span>
          <span className="text-[#848484]">
            {product.installment.split("de")[1]}
          </span>
        </div>
        {product.discount && (
          <span className="ml-2 bg-[#495949] text-white rounded px-2 py-0.5 text-xs font-teko">
            {product.discount}
          </span>
        )}
      </div>
      <button className={styles.buyButton} type="button">
        Comprar
      </button>
    </div>
  );
};
