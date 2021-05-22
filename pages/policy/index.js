import React, { useEffect } from "react";
import Privacy from "../../components/Policy/Privacy";
import IntellectualProperty from "../../components/Policy/IntellectualProperty";
import Return from "../../components/Policy/Return";
import Selling from "../../components/Policy/Selling";
import Disclaimer from "../../components/Policy/Disclaimer";
import Service from "../../components/Policy/Service";
import { useRouter } from "next/router";
const Policy = () => {
  const router = useRouter();
  const handleTabChange = (idx, type) => {
    router.push(`${router.pathname}?type=${type}`);
  };

  const tabs = [
    {
      name: "隱私權政策",
      type: "privacy",
    },
    {
      name: "服務條款",
      type: "service",
    },
    {
      name: "智慧財產權保護政策",
      type: "intellectual",
    },
    {
      name: "商品販售政策",
      type: "selling",
    },
    {
      name: "退貨政策 ",
      type: "return",
    },
    {
      name: "免責聲明",
      type: "disclaimer",
    },
  ];
  return (
    <>
      <div className="border-b max-w-screen-lg mx-auto	">
        <div className="flex overflow-auto whitespace-nowrap  items-center justify-between">
          {tabs.map((tab, idx) => (
            <a
              className={`cursor-pointer inline-block py-20px px-10px ${
                router.query.type === tab.type &&
                "font-bold text-main-pink border-b-2 border-main-pink"
              }`}
              onClick={() => handleTabChange(idx, tab.type)}
              key={tab.type}
            >
              {tab.name}
            </a>
          ))}
        </div>

        <div className="mt-50px">
          {router.query.type === "privacy" && (
            <section>
              <Privacy />
            </section>
          )}
          {router.query.type === "service" && (
            <section>
              <Service />
            </section>
          )}
          {router.query.type === "intellectual" && (
            <section>
              <IntellectualProperty />
            </section>
          )}
          {router.query.type === "return" && (
            <section>
              <Return />
            </section>
          )}
          {router.query.type === "selling" && (
            <section>
              <Selling />
            </section>
          )}
          {router.query.type === "disclaimer" && (
            <section>
              <Disclaimer />
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Policy;
