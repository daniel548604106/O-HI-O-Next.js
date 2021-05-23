import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRouter } from "next/router";
const Banner = ({ banners }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/events/${banners.id}`)}
      className="w-screen cursor-pointer"
    >
      <Swiper
        className="w-screen"
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banners.map((banner) => (
          <div className="w-screen" key={banner.image}>
            <SwiperSlide>
              <Image
                src={banner.image}
                width={1200}
                height={600}
                layout="responsive"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
