import React from "react";

const ProductCart = ({ product, HandalAddToCard }) => {
  const { name, picture, id, price, category } = product;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={picture} className="object-cover w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            category
          </a>
          <span className="text-gray-600">— {category}</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {name}
        </a>
        <p className="mb-2 text-gray-700">price : ${price}</p>
        <button
          type="submit"
          onClick={() => HandalAddToCard(product)}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-red-300 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
