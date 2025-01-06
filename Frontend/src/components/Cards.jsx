import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transform duration-300 hover:shadow-2xl dark:bg-slate-900 dark:text-white dark:border rounded-lg overflow-hidden">
        <figure className="overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold hover:text-pink-500 transition duration-200 cursor-pointer">
            {item.name}
            {item.featured && (
              <div className="badge badge-primary ml-2">Featured</div>
            )}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{item.title}</p>
          <div className="flex items-center space-x-2 mt-2">
            <div className="text-yellow-400 flex items-center">
              {"⭐".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({item.ratingCount} reviews)
            </span>
          </div>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline text-lg font-semibold">
              ${item.price}
            </div>
            <div className="flex space-x-2">
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white transition duration-200">
                Buy Now
              </div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-gray-500 hover:text-white transition duration-200">
                Wishlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
