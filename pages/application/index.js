import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Application/Header";
import Advantage from "../../components/Application/Advantage";
import Cooperation from "../../components/Application/Cooperation";
import AvailableProducts from "../../components/Application/AvailableProducts";
import FAQ from "../../components/Application/FAQ";
import CTA from "../../components/Application/CTA";
import Hero from "../../components/Application/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
const Application = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("advantage");
  const advantage = useRef(null);
  const cooperation = useRef(null);
  const available = useRef(null);
  const cta = useRef(null);
  const faq = useRef(null);

  const tabs = [
    {
      name: "擁有設計館的好處",
      title: "advantage",
      ref: advantage,
    },
    {
      name: "合作品牌見證",
      title: "cooperation",
      ref: cooperation,
    },
    {
      name: "可販售商品類別",
      title: "availableproducts",
      ref: available,
    },
    {
      name: "合作模式及收費",
      title: "cta",
      ref: cta,
    },
    {
      name: "常見問答",
      title: "faq",
      ref: faq,
    },
  ];
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     // tabs.forEach((tab) => console.log(tab.ref.current.id));
  //   });
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClickNavItem = (ref, title) => {
    location.hash = title;
    setActiveTab(title);
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <div>
      <Header />
      <div className="sticky top-0 z-10 bg-white w-full">
        <div className="max-w-3xl flex justify-between flex-nowrap whitespace-nowrap mx-auto overflow-auto">
          {tabs.map((tab, index) => (
            <a
              key={tab.name}
              onClick={() => handleClickNavItem(tab.ref, tab.title)}
              className={`p-15px text-gray-800 ${
                activeTab === tab.title && "border-b-4 border-light-blue"
              }`}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
      <Hero />
      <section
        className=""
        id="advantage"
        ref={advantage}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Advantage />
      </section>
      <section
        id="cooperation"
        ref={cooperation}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Cooperation />
      </section>
      <section
        id="availableproducts"
        ref={available}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <AvailableProducts />
      </section>
      <section
        id="cta"
        ref={cta}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <CTA />
      </section>
      <section
        id="faq"
        ref={faq}
        data-aos="fade-up "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <FAQ />
      </section>
    </div>
  );
};

export default Application;
