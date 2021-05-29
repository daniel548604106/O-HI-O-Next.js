import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRouter } from "next/router";
const Banner = ({ banners }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/events/${banners.id}`)}
      className="w-full cursor-pointer"
    >
      <Swiper slidesPerView={1}>
        {banners.map((banner) => (
          <SwiperSlide className="w-screen" key={banner.image}>
            <Image
              src={banner.image}
              width={1100}
              height={500}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
