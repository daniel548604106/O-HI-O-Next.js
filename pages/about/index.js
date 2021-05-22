import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-20px  py-20px min-h-50vh text-center">
      <h2 className="mb-20px text-2xl">關於 O.HI.O</h2>
      <Image
        width={200}
        height={100}
        src={"/images/O.HI.O-footer.svg"}
        alt="logo"
      />
      <div className=" mb-30px bg-center  bg-cover bg-about-bg-img pt-56 sm:pt-96 w-full"></div>
      <p className="text-left">
        <h3 className="text-xl font-bold my-10px">O.HI.O 集團 </h3>
        以茁壯亞洲設計生態圈為品牌使命，並在台灣、日本、泰國、中港澳設立據點，透過電商平台、體驗活動、品牌經銷、文創創投等渠道提供設計品牌成長所需的養分，並期許為市場帶來更多國際級的設計品牌，為大眾創造更多優質消費品牌的選擇，期望用好設計滿足每個人對品味生活的嚮往。
        <h3 className="text-xl font-bold my-10px">
          O.HI.O 設計購物網站 O.HI.O
        </h3>
        是亞洲領先的設計購物網站，販售設計商品、數位創作、體驗活動，並網羅海內外優質設計師群，堅持用好品味、客製化的獨特設計，實現每個人對生活詮釋的想像，也讓每個送禮時刻更加獨一無二。
        2021 年 3
        月成立至今，致力於經營台灣、日本、泰國、中港澳、美加及其他國際市場，期望讓亞洲迷人的好設計在全世界散發光芒，並創造一個讓生活更美好的設計生態圈。
      </p>
    </div>
  );
};

export default About;
