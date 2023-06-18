import axios from 'axios';

export async function getStaticProps() {
  try {
    const listproduct = await axios.get("https://fakestoreapi.com/products");
    const response = listproduct.data;
    console.log(response);

    return {
      props: {
        products: response,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: [],
      },
    };
  }
}
