import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { categories } from "../../lib/tool";
import SideMenuUserTab from "./SideMenuUserTab";
import Overlay from "./Overlay";
import { toggleSideMenu } from "../../redux/actions/globalAction";
import { setUserLogout } from "../../redux/actions/userAction";
const SideMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(-1);
  const [user, setUser] = useState({});
  const isSideMenuOpen = useSelector((state) => state.global.isSideMenuOpen);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const toLogin = () => {
    router.push("/login");
    dispatch(toggleSideMenu());
  };
  const browseCategory = (categoryId, subCategoryId) => {
    router.push(`browse?category=${categoryId}&subcategory=${subCategoryId}`);
    dispatch(toggleSideMenu());
  };

  const switchActiveCategory = (idx) => {
    idx === activeCategory ? setActiveCategory(-1) : setActiveCategory(idx);
  };

  const helpOptions = [
    {
      name: "Terms & Policies",
      route: "/policy?type=privacy",
    },
    {
      name: "Returns Policy",
      route: "/policy?type=return",
    },
  ];
  const aboutOptions = [
    {
      name: "About Us",
      route: "/about",
    },
  ];

  const logOut = () => {
    dispatch(toggleSideMenu());
    dispatch(setUserLogout());
    router.push("/");
  };
  const CtaBtn = () => (
    <div
      className={`${
        !isSideMenuOpen && " -translate-x-full"
      } fixed z-50 top-0 max-w-300px  pb-30px left-0 overflow-y-auto delay-150 w-full transition-transform duration-500 ease-in-out  transform h-screen border border-r bg-white `}
    >
      {isUserLoggedIn ? (
        <div onClick={() => dispatch(toggleSideMenu())} className=" ">
          <SideMenuUserTab />
        </div>
      ) : (
        <div className="w-full text-center px-10px py-10px  ">
          <button
            onClick={() => toLogin()}
            className="border text-main-pink border-main-pink rounded w-full py-10px"
          >
            ?????? / ??????
          </button>
        </div>
      )}

      <div>
        <h2 className="font-bold text-md bg-gray-100 py-10px px-10px">
          Categories
        </h2>
        {categories.map((category, idx) => (
          <div key={category.categoryId}>
            <div
              onClick={() => switchActiveCategory(idx)}
              className=" py-10px text-sm px-10px flex items-center border-b justify-between w-full "
            >
              <span>{category.title}</span>
              <ChevronDownIcon
                className={` ${
                  idx === activeCategory && "rotate-180"
                } h-5  transition duration-500 ease-in-out transform`}
              />
            </div>
            <div
              className={`h-0 transition-height duration-300 text-sm bg-gray-100  overflow-hidden ${
                idx === activeCategory && "h-auto"
              }`}
            >
              {category.subCategory.map((subCategory) => (
                <div
                  onClick={() =>
                    browseCategory(category.categoryId, subCategory.id)
                  }
                  className={`px-10px py-10px`}
                  key={subCategory.id}
                >
                  {subCategory.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-md bg-gray-100 py-10px px-10px">
        Help/Policies
      </h2>
      {helpOptions.map((option) => (
        <div
          onClick={() => dispatch(toggleSideMenu())}
          key={option.name}
          className="text-sm px-10px py-10px"
        >
          <Link href={option.route}>{option.name}</Link>
        </div>
      ))}
      <h2 className="font-bold text-md bg-gray-100 py-10px px-10px">
        About O.HI.O
      </h2>
      {aboutOptions.map((option) => (
        <div
          onClick={() => dispatch(toggleSideMenu())}
          key={option.name}
          className="text-sm px-10px py-10px"
        >
          <Link href={option.route}>{option.name}</Link>
        </div>
      ))}
      <div className="py-10px px-10px mb-50px">
        <a href="/application" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center bg-cover bg-application-bg-img py-10px px-10px text-white rounded-sm justify-between">
            <span> ????????? O.HI.O ?????????</span>
            <ChevronRightIcon className="h-5" />
          </div>
        </a>
      </div>
      {/* <LanguageIcon style={{ width: "16px" }} /> */}
      {/* <p onClick={() => changeLanguage()}>{language}</p> */}
      {isUserLoggedIn && (
        <div
          onClick={() => logOut()}
          className=" mt-10px mb-20px mx-10px text-center py-10px rounded  border-2"
        >
          <Link className="" href="/" onClick={() => logOut()}>
            ??????
          </Link>
        </div>
      )}
    </div>
  );

  return isSideMenuOpen ? (
    <div onClick={() => dispatch(toggleSideMenu())}>
      <Overlay>
        <div onClick={(e) => e.stopPropagation()}>
          <CtaBtn />
        </div>
      </Overlay>
    </div>
  ) : (
    <></>
  );
};

export default SideMenu;
