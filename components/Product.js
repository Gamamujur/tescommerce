import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addcart } from "@/redux/action";


const Product = ({products}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const router = useRouter()

  const dispatch = useDispatch();


  const detailhandler = (id) =>{
    router.push('/' + id)
  }

  const handlePostsPerPage = () => {
    if(window.innerWidth >= 1280){
      setPostsPerPage(4);
    }
    else if (window.innerWidth >= 1024) {
      setPostsPerPage(3);
    } else if (window.innerWidth >= 770) {
      setPostsPerPage(2);
    } else{
      setPostsPerPage(1);
    }
  };

  useEffect(() => {
    handlePostsPerPage();
    window.addEventListener("resize", handlePostsPerPage);

    return () => {
      window.removeEventListener("resize", handlePostsPerPage);
    };
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  const listbutton = (
    <>
      <div className="grid grid-cols-1 gap-4 p-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentPosts.map((producti) => (
          <div key={producti.id} className="relative max-w-[70vw] mx-auto overflow-hidden bg-white border border-black md:w-3/4 rounded-3xl">
            <div className="mx-auto h-72 w-fit">
              <img
                src={producti.image}
                alt={producti.title}
                className="object-cover object-center w-full h-full"
              ></img>
            </div>
            <div className="p-4 md:p-6 lg:p-8 xl:p-10">
              <h1 className="text-base font-bold truncate md:text-lg">
                {producti.title.length > 30
                  ? producti.title.substring(0, 30) + "..."
                  : producti.title}
              </h1>
              <h1 className="mt-2 text-base font-bold md:text-lg">${producti.price}</h1>
              <div className="mt-4">
                <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-full hover:scale-105" onClick={() => detailhandler(producti.id)}>
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-6 text-center">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className="w-full mt-6 border-t border-black" />
    </>
  );
  

  return (
    <div className="w-screen h-[110vh] relative bg-white" id="product">
      <div className="absolute top-[10vh] w-full">
        <h1 className="text-4xl font-black text-center font-mons">
          Our Products
        </h1>
        <div className="border-t-4 w-full md:w-[80vw] mx-auto border-black mt-[5vh]" />
        {listbutton}
      </div>
    </div>
  );
};


export default Product;
