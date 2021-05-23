import React, { useState } from "react";
import Image from "next/image";
// import { useTranslation } from "react-i18next";

const Footer = () => {
  // const { t, i18n } = useTranslation();
  // const [language, setLanguage] = useState('English');
  // const changeLanguage = () => {
  //   language === "English"
  //     ? (setLanguage("繁體中文(台灣)"), i18n.changeLanguage("en"))
  //     : (setLanguage("English"), i18n.changeLanguage("tw"));
  // };
  return (
    <div className="flex items-center flex-col bg-bg-white p-30px mt-50px">
      <Image
        width={150}
        height={100}
        src={"/images/O.HI.O-footer.svg"}
        alt="logo"
      />
      <p className="my-10px">Design the way you are.</p>
      {/* <div className={classes.langaugeSelector}>
        <LanguageIcon />
        { <p onClick={() => changeLanguage()}>{language}</p> }
      </div> */}
      <p className="text-sm my-10px">
        © {new Date().getFullYear()} O.HI.O. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
