import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Logo from "../../public/images/O.HI.O-logo.svg";
const Header = () => {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/application"
              className="text-main-pink border-dashed border-main-pink px-10px py-2 rounded-md cursor-pointer hover:text-light-blue hover:text-light-blue"
            >
              我想在 O.HI.O 上開店
            </Link>
          </li>

          <li onClick={() => toCart()}>
            <ShoppingBagIcon className="h-5" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
