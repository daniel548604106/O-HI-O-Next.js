import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";
import {
  UserIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  InboxIcon,
  BellIcon,
  ClipboardIcon,
} from "@heroicons/react/outline";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { categories } from "../../lib/tool";
import { toggleSideMenu } from "../../redux/actions/globalAction";
import { setUserLogout } from "../../redux/actions/userAction";
const SideMenu = () => {
  // const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(-1);
  const [user, setUser] = useState({});
  const isSideMenuOpen = useSelector((state) => state.global.isSideMenuOpen);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  const browseCategory = (categoryId, subCategoryId) => {
    router.push(`browse?category=${categoryId}&subcategory=${subCategoryId}`);
    dispatch(toggleSideMenu());
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
    {
      name: "Careers",
      route: "/careers",
    },
  ];

  const logOut = () => {
    dispatch(setUserLogout());
  };
  const CtaBtn = () => (
    <div
      className={`overflow-y-auto max-h-screen  w-full overflow-hidden transition-all duration-100
       transform  max-w-0 h-screen border border-r bg-white  ${
         isSideMenuOpen && "max-w-300px"
       }`}
    >
      {isUserLoggedIn ? (
        <div className=" py-10px flex items-center justify-around">
          <Link href={"/my/email"}>
            <div className="flex flex-col items-center">
              <InboxIcon className="h-5" />
              <p className="text-sm">我的信箱</p>
            </div>
          </Link>
          <Link href={"/my/notification"}>
            <div className="flex flex-col items-center">
              <BellIcon className="h-5" />
              <p className="text-sm">通知中心</p>
            </div>
          </Link>
          <Link href={"/my/purchase/unpaid"}>
            <div className="flex flex-col items-center">
              <ClipboardIcon className="h-5" />
              <p className="text-sm">購買訂單</p>
            </div>
          </Link>
          <Link href={"/my/setting"}>
            {user.picture ? (
              <img src={user.picture} alt="" />
            ) : (
              <div className="p-10px ">
                <UserIcon className="h-5" />
              </div>
            )}
          </Link>
        </div>
      ) : (
        <div className="w-full text-center py-10px ">登入 / 註冊</div>
      )}

      <div>
        <h2 className="font-bold text-md bg-gray-100 py-10px px-10px">
          Categories
        </h2>
        {categories.map((category, idx) => (
          <div key={category.category}>
            <div
              onClick={() => setActiveCategory(idx)}
              className=" py-10px text-sm px-10px flex items-center border-b justify-between w-full "
            >
              <span>{category.title}</span>
              <ChevronDownIcon
                className={`h-5 transition-transform duration-300 ease-in-out transform ${
                  idx === activeCategory && "rotate-180"
                }`}
              />
            </div>
            <div
              className={`h-0 transition-all duration-300 text-sm bg-gray-100  overflow-hidden ${
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
        <div key={option.name} className="text-sm px-10px py-10px">
          <Link href={option.route}>{option.name}</Link>
        </div>
      ))}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/application"
        className="bg-cover bg-application-bg-img"
      >
        <div className="flex items-center justify-between">
          <span> 我想在 O.HI.O 上開店</span>
          <ChevronRightIcon className="h-5" />
        </div>
      </Link>
      {/* <LanguageIcon style={{ width: "16px" }} /> */}
      {/* <p onClick={() => changeLanguage()}>{language}</p> */}
      {isUserLoggedIn && (
        <div className=" mt-10px mb-20px mx-10px text-center py-10px rounded  border-2">
          <Link className="" href="/" onClick={() => logOut()}>
            登出
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        className={`transition-all duration-300 ease-in-out  fixed z-50 top-0 left-0 w-screen h-screen bg-gray-600  bg-opacity-0 ${
          isSideMenuOpen && "bg-opacity-50"
        } ${!isSideMenuOpen && "hidden"}`}
        // onClick={(e) => dispatch(toggleSideMenu())}
      >
        <div>
          <CtaBtn />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
