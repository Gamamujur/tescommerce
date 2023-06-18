import axios from 'axios';
import React from 'react';

const tes = (props) => {
  console.log(props.products);
  return <div>Test</div>;
}

export async function getStaticProps() {
  const listproduct = await axios.get("https://fakestoreapi.com/products");
  const response = listproduct.data;

  return {
    props: {
      products: response,
    },
  };
}

export default tes;
