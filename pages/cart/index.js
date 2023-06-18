import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plusitems, minusitems } from "@/redux/action";

const index = () => {
  const cart = useSelector((state) => state.handlecart);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.qty * product.price,
    0
  );

  const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const minusitem = () => {
      dispatch(minusitems(product));
    };

    const plusitem = () => {
      dispatch(plusitems(product));
    };
    return (
      <>
        <div className="flex items-center justify-between p-4 mt-2 mb-4 bg-white rounded-lg">
          <div className="flex flex-col lg:flex-row">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-16 h-16 mr-4 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{product.title}</p>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm">
                Quantity:{" "}
                <button
                  className="px-4 ml-5 mr-2 text-lg font-bold text-white rounded-full bg-slate-500"
                  onClick={minusitem}
                >
                  -
                </button>
                {product.qty}
                <button
                  className="px-4 ml-2 text-lg font-bold text-white rounded-full bg-slate-500"
                  onClick={plusitem}
                >
                  +
                </button>
              </p>
            </div>
            {window.innerWidth <= 1145 && (
              <div>
                <p className="w-1/2 px-4 py-2 mt-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-sm shadow-slate-400">
                  $ {(product.qty * product.price).toFixed(1)}
                </p>
              </div>
            )}
          </div>
          {window.innerWidth >= 1145 && (
            <div>
              <p className="w-auto px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-sm shadow-slate-400">
                $ {(product.qty * product.price).toFixed(1)}
              </p>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen p-2 bg-gray-100">
        {cart.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-full p-4 pt-20 overflow-y-auto md:w-1/2 bg-slate-200 cartclass">
              {cart.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
              <div className="w-full p-2 bg-green-500 rounded-lg">
              <p className="font-bold text-center text-white">Total Price : $ {totalPrice.toFixed(2)}</p>
            </div>
            </div>
            
          </div>
        )}
      </div>
    </>
  );
};

export default index;
