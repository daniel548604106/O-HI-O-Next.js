import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MenuAlt2Icon,
  ShoppingBagIcon,
  UserIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../redux/actions/globalAction";
import { addToFavorite } from "../../api/favoriteRequest";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const toCart = () => {
    router.push("/cart");
  };
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <header className="border-b py-10px px-15px">
      <div className=" max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <MenuAlt2Icon
            onClick={() => dispatch(toggleSideMenu())}
            className="min-w-10px text-gray-700 cursor-pointer inline-block sm:hidden h-5 mr-5"
          />
          <div onClick={() => router.push("/")} className="min-w-100px">
            <Image
              className="cursor-pointer"
              src="/images/O.HI.O-logo.svg"
              width={100}
              height={50}
priority={true}


            />
          </div>
          {/* <span className="ml-10px sm:ml-20px relative ">
            <input
              placeholder="搜尋商品"
              type="search"
              className="inline max-w-100px sm:max-w-220px bg-gray-100 rounded text-sm sm:text-md p-10px pl-20px sm:pl-50px  ml-3"
            />
            <SearchIcon className="text-gray-600 h-5 absolute left-30px top-1/2 transform -translate-y-1/2" />
          </span> */}
        </div>
        <nav>
          <ul className="flex items-center ml-5">
            <li className="hidden whitespace-nowrap sm:block px-5 mr-4 text-main-pink border-dashed border-2 border-main-pink  py-2 rounded-md cursor-pointer  hover:border-light-blue hover:text-light-blue">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/application"
                className=""
              >
                我想在 O.HI.O 上開店
              </Link>
            </li>
            <li className="px-2 cursor-pointer ">
              <HeartIcon
                onClick={() => router.push("favorite")}
                className="h-5 sm:h-7 text-gray-700 hover:text-main-pink"
              />
            </li>
            <li className="px-2 cursor-pointer ">
              {isUserLoggedIn ? (
                <img
                  onClick={() => router.push("/my")}
                  src={currentUser.picture}
                  className="w-30px h-30px sm:w-40px sm:h-40px rounded-full"
                />
              ) : (
                // <div>{currentUser.name}</div>
                <UserIcon
                  onClick={() => router.push("login")}
                  className="h-5 sm:h-7 text-gray-700 hover:text-main-pink"
                />
              )}
            </li>
            <li className="px-2 cursor-pointer " onClick={() => toCart()}>
              <ShoppingBagIcon className="h-5 sm:h-7 text-gray-700 hover:text-main-pink" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
