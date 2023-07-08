import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { useState } from "react";
import { useEffect } from "react";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";
  

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks,setSubLinks] =useState([])

  async function fetchSubLinks() {
    const url = "http://localhost:4000/api/v1/course/showAllCategories";
    try {
      // const res=await apiConnector('GET',categories.CATEGORIES_API);
      // CATEGORIES_API
      const res = await fetch(url);
      const data = await res.json();
      console.log(
        `the response of fetchSubLinks was the data: ${data} and res is ${res}`
      );
      setSubLinks(res.data.data)
    } catch (error) {
      console.log(`error while calling fetchSubLinks :${error}`);
    }
  }
  useEffect(() => {
    fetchSubLinks();
  }, []);
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div>
    <div className="flex h-14 items-center justify-center border-b-2 border-richblack-700">
      <div className="w-11/12   flex max-w-maxContent items-center  justify-between  lg:gap-8">
        {/* logo */}
        <div className=" max-sm:w-[100px]">
          <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} className="" />
          </Link>
        </div>
        {/* links  */}

        {/* login,signup */}
        <div className="flex md:gap-8 max-md:gap-2 items-center  text-richblack-200 ">
          <FiSearch />
          {user && user?.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"}>
              <div className=" p-2  relative">
                <div>
                  <FiShoppingCart />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 right-0 px-[3px] py-0 rounded-full  bg-yellow-50 text-black ">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <div className=" bg-richblack-800 border max-[300px]:text-sm max-[300px]:p-0 border-richblack-700 p-2 rounded-md">
                Log In
              </div>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <div className=" bg-richblack-800 border max-[300px]:text-sm max-[300px]:p-0 border-richblack-700 p-2 rounded-md">
                Sign Up
              </div>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
    <div className=" w-11/12 mx-auto  h-14  flex max-w-maxContent justify-center items-center p-1 rounded-full ">
    <div >
          <nav >
            <ul className="flex items-center sm:gap-12 max-sm:gap-2 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.title === "Catalog" ? (
                    <div className="flex items-center gap-2 group  ">
                      <p>{link.title}</p>
                      <div className="text-white bg-none">
                        <IoIosArrowDropdownCircle />
                      </div>
                      {/* overlapping tab */}
                      <div className="absolute invisible  left-[43%] top-[43px] h-6 w-6 bg-richblack-700 rotate-45 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 "></div>
                      <div className="invisible absolute max-[400px]:w-[150px] z-10  left-[33%] top-[50px] flex flex-col rounded-md bg-richblack-700 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 w-[230px] ">
                        <div className="flex flex-col gap-2 text-richblack-300">
                          {subLinks.length ? (
                            subLinks.map((link, index) => {
                              return <Link to={link.link} key={index}>
                                <div className=" ">{link.title}</div>
                              </Link>
                            })
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div >
                      <Link to={link?.path}>
                        <p
                          className={`${
                            matchRoute(link?.path)
                              ? "text-yellow-25  cursor-pointer  hover:text-richblack-5"
                              : "text-richblack-25  cursor-pointer  hover:text-richblack-5 "
                          }`}>
                          {link.title}
                        </p>
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>  
    </div>
  );
};

export default Navbar;
