import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="https://i.ibb.co/R41mJPd/Banner1.png" alt="Banner 1" />
            <div className="overlay">
              <p className="text-3xl font-3xl w-64">
                Unlock a world of seamless living - Your
                <span className="text-yellow-400">Dream</span> Apartment Awaits!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="https://i.ibb.co/kH075zN/Banner2.png" alt="Banner 2" />
            <div className="overlay">
              <p className="text-3xl font-3xl w-64">
                Elevate your <span className="text-yellow-400">lifestyle</span> with our hassle-free
                property management solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="https://i.ibb.co/stj4ZLc/Banner3.png" />
            <div className="overlay">
              <p className="text-3xl font-3xl w-64">
                Discover modern living - Where Convenience Meets
                <span className="text-yellow-400"> Comfort</span> !
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="https://i.ibb.co/7tsW9mX/Banner4.png" />
            <div className="overlay">
              <p className="text-3xl font-3xl w-64">
                Your <span className="text-yellow-400"> KEY</span> to effortless living starts here
                - Find, Rent, Thrive!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img src="https://i.ibb.co/ZLQmJ8d/Banner5.png" />
            <div className="overlay">
              <p className="text-3xl font-3xl w-64">
                <span className="text-yellow-400"> Welcome</span> to the future of property
                management - Your space, Your way!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
