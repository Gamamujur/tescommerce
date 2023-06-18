import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useSelector } from "react-redux";




const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter()

  const cart = useSelector(state => state.handlecart);

  const itemCount = cart.reduce((total, product) => total + product.qty, 0);

  const cartItems = cart.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
      image: item.image
    };
  });

  

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/#product');
  };

  const handleClick1 = (e) => {
    e.preventDefault();
    router.push('/#about');
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    router.push('/#contacts');
  };

  const handleClick2 = () => {
    router.push('/cart');
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses =
    scrollPosition > 200 && router.pathname === '/'
      ? "bg-black"
      : "bg-neutral-800";
  return (
    <>
    <div className= {`navbar backdrop-blur-sm fixed z-50 ${navbarClasses} transition duration-300`}>
      <div className= {`navbar-start`}>
        <div className="dropdown">
          <label tabIndex={0} className="text-white btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 font-medium shadow menu menu-compact dropdown-content bg-slate-200 rounded-box w-52"
          >
            <li>
          <Link href="/">
            Home
          </Link>
            </li>
            <li>
            <Link href="#" onClick={handleClick}>
            Products
          </Link>
            </li>
            <li>
            <Link href="#" onClick={handleClick1}>
            About
          </Link>
            </li>

          </ul>
        </div>
        <a className="text-xs text-white btn btn-ghost small-case">Tescommerce</a>
      </div>
      <div className= {`navbar-center hidden lg:flex`} >
        <ul className="px-1 text-lg font-medium text-white menu menu-horizontal font-mons">
          
          <li>
          <Link href="/">
            Home
          </Link>
            </li>
            <li>
            <Link href="#" onClick={handleClick}>
            Products
          </Link>
            </li>
            <li>
            <Link href="#" onClick={handleClick1}>
            About
          </Link>
            </li>
            
          
        </ul>
      </div>
      <div className="navbar-end">
        
        <div className="flex p-2 text-white transition duration-300 rounded-full cursor-pointer bg-slate-700 active:scale-110" onClick={handleClick2}><img src="/img/shopping-bag.png" className="w-[25px] h-[25px]"></img>
        <span className="ml-3 cart-count">{itemCount}</span>
        </div>
        
      </div>
      
    </div>
    
    </>
  );
};

export default Navbar;
