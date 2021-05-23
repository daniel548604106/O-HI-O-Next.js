import React from "react";
import Link from "next/link";
import {
  UserIcon,
  InboxIcon,
  BellIcon,
  ClipboardIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
const SideMenuUserTab = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="py-10px flex items-center justify-around">
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
      <Link href={"/my/purchase?status=unpaid"}>
        <div className="flex flex-col items-center">
          <ClipboardIcon className="h-5" />
          <p className="text-sm">購買訂單</p>
        </div>
      </Link>
      <Link href={"/my/setting"}>
        {currentUser ? (
          <img
            className="h-30px w-30px rounded-full"
            src={currentUser.picture}
            alt=""
          />
        ) : (
          <div className="p-10px ">
            <UserIcon className="h-5" />
          </div>
        )}
      </Link>
    </div>
  );
};

export default SideMenuUserTab;
