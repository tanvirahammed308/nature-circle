import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { LuFileText } from "react-icons/lu";
import { RiContactsBook3Line, RiHome9Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* large screen */}
      <div className="hidden md:flex justify-between w-11/12 mx-auto ">
        <div className="flex justify-center items-center  w-full py-3">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="flex items-center gap-2 font-bold px-3 py-1 rounded"><RiHome9Line />
              Home</Link>
            </li>
            <li>
              <Link to="/allproducts" className="flex items-center gap-2 font-bold  px-3 py-1 rounded"><BiCategoryAlt />

              All Products</Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 font-bold  px-3 py-1 rounded"><LuFileText />
              About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 font-bold  px-3 py-1 rounded"><RiContactsBook3Line />
              Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* small screen */}
    </div>
  );
};

export default Navbar;
