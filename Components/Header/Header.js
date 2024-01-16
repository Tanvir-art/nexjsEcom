import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import Slider from "../Slider/Slider";
import Responsive from "../ResponsiveMenu/Responsive";
import MobileSearch from "../MobileSearch/MobileSearch";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="fixed w-full z-10">
        <MobileSearch />
      </div>

      <div className="flex mt-[-40px] w-full featuredWidth mx-auto gap-4 pb-10 md:pb-10 lg:py-10 ">
        <div className="hidden md:hidden lg:block bg-[#fff] w-[30%] rounded z-10">
          <ul className="">
            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100 my-2 relative">
              <span className="ml-4 px-3 py-3 rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706]">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[207px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 groups"
                >
                  Item 1
                  <div className="hidden groupsBlock absolute left-[200px] top-1 w-[300px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                    <p>cloth 1</p>

                    <div className="flex gap-6 py-4">
                      <img
                        className="rounded-full w-[50px] h-[50px]"
                        src="image/cloth.webp"
                        alt=""
                      />
                      <img
                        className="rounded-full w-[50px] h-[50px]"
                        src="image/cloths.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 groups"
                >
                  Item 2

                  <div className="hidden groupsBlock absolute left-[200px] top-1 w-[300px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                    <p>cloth 2</p>

                    <div className="flex gap-6 py-4">
                      <img
                        className="rounded-full w-[50px] h-[50px]"
                        src="image/cloth.webp"
                        alt=""
                      />
                      
                    </div>
                  </div>

                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="flex gap-2 items-center group text-sm hover:bg-gray-100  my-2 relative">
              <span className="ml-4 px-3 py-3  rounded-full bg-[#eff0f5]">
                <FaTshirt className="text-[#F95706]" />
              </span>
              <span className="group-hover:text-[#F95706] ">
                Woman's & Girl's Fashion
              </span>
              <span className="hidden group-hover:block text-[#F95706]">
                <IoIosArrowForward />
              </span>

              <div className="hidden group-hover:block absolute left-[280px] top-1 w-[200px] bg-white border border-gray-200 p-2 rounded-md shadow-md h-[300px]">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 1
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 2
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Item 3
                </Link>
              </div>
            </li>
          </ul>

   
        </div>
        <div className="rounded w-full md:w-full lg:w-[70%]">
          <Slider />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-10">
        <Responsive />
      </div>
    </>
  );
};

export default Header;
