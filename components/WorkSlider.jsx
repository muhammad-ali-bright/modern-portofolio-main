import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb5.jpg",
          link: "https://github.com/muhammad-ali-bright/vue-ts-graphql-chargetrip-api",
        },
        {
          title: "title",
          path: "/thumb6.jpg",
          link: "https://github.com/muhammad-ali-bright/nextjs-typescript-fastapi-python",
        },
        {
          title: "title",
          path: "/thumb7.jpg",
          link: "https://github.com/muhammad-ali-bright/cryptoket-v2",
        },
        {
          title: "title",
          path: "/thumb8.jpg",
          link: "https://github.com/muhammad-ali-bright/tmwsd_challenge",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://github.com/muhammad-ali-bright/fb",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://github.com/muhammad-ali-bright/ecommerce-4",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://github.com/muhammad-ali-bright/react-typescript-starterkit",
        },
        {
          title: "title",
          path: "/hotel-booking.jpeg",
          link: "https://github.com/muhammad-ali-bright/hotel-booking-app",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/betting.jpeg",
          link: "https://github.com/muhammad-ali-bright/betting-app",
        },
        {
          title: "title",
          path: "/canva.png",
          link: "https://github.com/muhammad-ali-bright/canva-next",
        },
        {
          title: "title",
          path: "/coinnow.png",
          link: "https://github.com/muhammad-ali-bright/coinnow",
        },
        {
          title: "title",
          path: "/full-stack-pro.jpeg",
          link: "https://github.com/muhammad-ali-bright/fullstack-pro-",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/hotel-admin.jpeg",
          link: "https://github.com/muhammad-ali-bright/hotel-booking-admin",
        },
        {
          title: "title",
          path: "/rapido.png",
          link: "https://github.com/muhammad-ali-bright/Rapido-main",
        },
        {
          title: "title",
          path: "/react-landing-page-template.jpg",
          link: "https://github.com/muhammad-ali-bright/startup-landing",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://github.com/muhammad-ali-bright/tmwsd_challenge",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
