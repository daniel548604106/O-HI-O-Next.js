import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MenuAlt2Icon,
  ShoppingBagIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../../redux/actions/globalAction";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="border-b py-10px px-15px">
      <div className=" max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <MenuAlt2Icon
            onClick={() => dispatch(toggleSideMenu())}
            className="text-gray-700 cursor-pointer inline-block sm:hidden h-5 mr-5"
          />
          <Image src="/images/O.HI.O-logo.svg" width={100} height={50} />
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="hidden sm:block px-5 mr-4 text-main-pink border-dashed border-2 border-main-pink  py-2 rounded-md cursor-pointer  hover:border-light-blue hover:text-light-blue">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/application"
                className=""
              >
                我想在 O.HI.O 上開店
              </Link>
            </li>
            <li className="px-2 cursor-pointer hover:text-main-pink">
              <HeartIcon className="h-5 sm:h-7" />
            </li>
            <li className="px-2 cursor-pointer hover:text-main-pink">
              <UserIcon className="h-5 sm:h-7" />
            </li>
            <li
              className="px-2 cursor-pointer hover:text-main-pink"
              onClick={() => toCart()}
            >
              <ShoppingBagIcon className="h-5 sm:h-7" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
