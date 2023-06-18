import Home from "@/components/Home";
import Product from "../components/Product";
import React from "react";
import axios from "axios";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Provider } from "react-redux";
import store from "@/redux/store";

const index = ({products}) => {
  return (
    <div>
      
      <Home />
      <Product products={products}/>
      <About/>
      <Contact/>
      
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  return {
    props: {
      products,
    },
  };
};

export default index;
