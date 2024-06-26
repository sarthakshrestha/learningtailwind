import React from "react";
import placeholder from "../cart/image/placeholder.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function ProductCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [showToast, setShowToast] = useState(false);

  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowToast(true);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold text-center mt-6 mb-6 text-archivo">
          Products
        </h1>
        <NavLink to="/cart" className="btn btn-neutral">
          Go to Cart
        </NavLink>
      </div>
      <div className="flex">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product.product.id || index} // Use product ID (if available) for better key
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 max-w-sm mx-auto
          mx-4 shadow-sm bg-white dark:bg-zinc-900 dark:text-zinc-100 "
            >
              <img
                className="object-cover w-full rounded-lg mb-4"
                height="240"
                src="https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?w=1800&t=st=1711630640~exp=1711631240~hmac=6444bd9bf26eec9298de954d2888f343cf16ea627e1972e695e1fc28e867f7ea"
                style={{
                  aspectRatio: "240/240",
                  objectFit: "cover",
                }}
                width="240"
                alt="Product Image"
              />
              <h2 className="font-bold text-lg mb-2 mt-6">
                {product.product.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 mt-1">
                {product.product.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold mt-6">
                  ${product.product.price}
                  {showToast && (
                    <div className="toast">
                      <div className="alert alert-info top-0 bg-green-800">
                        <span className="text-white">Product has been added to cart.</span>
                      </div>
                    </div>
                  )}
                </span>
                <button
                  className="btn bg-green-300 mt-10 text-black hover:bg-gray-500"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}
