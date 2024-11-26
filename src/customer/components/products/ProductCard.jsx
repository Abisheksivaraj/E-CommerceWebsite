import React from 'react'
import "./ProductCard.css"
const ProductCard = ({product}) => {
  return (
    <div className="productCard rounded-lg w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full rounded-t-lg w-full object-cover object-left-top"
          src={product.image}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>
            {product.title}
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <p className='font-semibold'>₹{product.discountedPrice}</p>
          <p className='line-through opacity-50'>₹{product.price}</p>
          <p className='text-[green] font-medium'>{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard