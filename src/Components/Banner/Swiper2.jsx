import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import { newArrival } from "../Data/AllData";
import { Link } from "react-router-dom";

// const SwipeImg = [
//   {
//     id: 1,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa1a24e8-ff57-43b1-ab1a-b929ee5b175b/air-jordan-legacy-312-low-shoes-v3FcRT.png",

//     pTitle: "Air Force 5",
//     lTitle: "Cesual Shoes For Men  (Grey)",
//   },
//   {
//     id: 2,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

//     pTitle: "Air Jorden 3 High",
//     lTitle: "Jordern Shoes For Men  (Black/Red)",
//   },
//   {
//     id: 3,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65a5852e-2b51-4278-8e8a-8a1428e68491/jordan-stay-loyal-2-shoes-sDkgDk.png",

//     pTitle: "Nike Air Run ",
//     lTitle: "Running Shoes For Men  (White)",
//   },
//   {
//     id: 4,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65a5852e-2b51-4278-8e8a-8a1428e68491/jordan-stay-loyal-2-shoes-sDkgDk.png",

//     pTitle: "Nike Air Run ",
//     lTitle: "Running Shoes For Men  (White)",
//   },
//   {
//     id: 5,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa1a24e8-ff57-43b1-ab1a-b929ee5b175b/air-jordan-legacy-312-low-shoes-v3FcRT.png",

//     pTitle: "Air Force 5",
//     lTitle: "Cesual Shoes For Men  (Grey)",
//   },
//   {
//     id: 6,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

//     pTitle: "Air Jorden 3 High",
//     lTitle: "Jordern Shoes For Men  (Black/Red)",
//   },
//   {
//     id: 7,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

//     pTitle: "Air Jorden 3 High",
//     lTitle: "Jordern Shoes For Men  (Black/Red)",
//   },
//   {
//     id: 8,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

//     pTitle: "Air Jorden 3 High",
//     lTitle: "Jordern Shoes For Men  (Black/Red)",
//   },
//   {
//     id: 9,

//     imgUrl:
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

//     pTitle: "Air Jorden 3 High",
//     lTitle: "Jordern Shoes For Men  (Black/Red)",
//   },
// ];

const Swiper2 = () => {
  return (
    <>
      <div className="flex justify-center items-center font-bold text-4xl mt-10 underline underline-offset-[20px] max-md:text-3xl">
        <h1>New Arrivals</h1>
      </div>
      <div className="m-12 max-xl:m-8 max-sm:m-4 max-sm:my-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 1000 }}
          className="mySwiper"
        >
          {newArrival.map((item) => {
            return (
              <>
                <SwiperSlide className="" key={item.id}>
                  <div
                    className="border border-gray-400 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl shadow-gray-300"
                    key={item.id}
                  >
                    <Link to={`/productoverview/${item.id}?type=newArrival`}>
                      <div className="overflow-hidden ">
                        <img
                          className="w-full h-[400px] object-cover hover:scale-105 transition-all duration-500 max-sm:h-[350px]"
                          src={item.imgUrl}
                          alt=""
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col flex-wrap items-center m-1 text-center space-y-3 p-2 ">
                      <h1 className="font-bold text-2xl">{item.Ptitle}</h1>
                      <hr className="h-[2px] bg-gray-300 w-[80%]" />
                      <p className="font-semibold text-md">{item.Pltitle}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Swiper2;
