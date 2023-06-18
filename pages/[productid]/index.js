import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/action";

const index = ({ product }) => {
  const dispatch = useDispatch();
  const addproduct = (products) => {
    dispatch(addcart(products));
    console.log(products);
  };

  return (
    <div className="absolute w-full h-full top-40">
      <div className="grid h-[80vh] grid-flow-row grid-rows-5 mt-20 p-2 lg:grid-flow-col md:grid-rows-3">
        <div className="grid h-auto row-span-2 place-content-center md:row-span-3 md:place-content-center lg:place-content-center pb-28 lg:pb-0 ">
          <img
            className="h-[50vh] lg:h-[80vh] w-fit md:max-w-xl md:h-[50vh] object-cover lg:pl-20"
            src={product.image}
          ></img>
        </div>
        <div className="grid content-center col-span-1 row-span-1 lg:row-span-1 lg:col-span-2 lg:pl-10">
          <h1 className="text-xl font-semibold font-mons md:text-2xl">
            {product.title}
          </h1>
          <h1 className="flex mt-2 text-base font-medium font-mons md:text-lg">
            {product.rating.rate} out of 5.0
          </h1>
        </div>
        <div className="col-span-1 row-span-3 lg:row-span-1 lg:col-span-2 lg:pl-10">
          <h1 className="text-xl font-semibold font-mons md:text-2xl">
            $ {product.price}
          </h1>

          <h1 className="mt-4 text-base font-medium leading-normal font-mons md:text-xl lg:pr-5">
            {product.description}
          </h1>

          <button
            className="px-2 py-2 mt-4 text-white transition duration-300 border border-black rounded-full bg-neutral-600 font-mons hover:bg-white hover:text-black"
            onClick={() => addproduct(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${params.productid}`
  );
  const product = response.data;

  return {
    props: {
      product,
    },
  };
}
export default index;
