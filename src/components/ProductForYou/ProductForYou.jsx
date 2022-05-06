// import React from "react";
// import Slider from "react-slick";
// import PRODUCT_DATA from "./PRODUCT_DATA";
// import ProductCard from "./ProductCard";
// const ProductForYou = () => {
//   var settings = {
//     infinite: false,
//     speed: 500,
//     slidesToScroll: 1,
//     slidesToShow: 3,
//   };
//   return (
//     <div className="my-10">
//       <h1 className="text-3xl font-semibold my-4">Sản phẩm dành cho bạn</h1>
//       <Slider {...settings}>
//         {PRODUCT_DATA.map((product) => (
//           <ProductCard key={product.id} productData={product} />
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export default ProductForYou;
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import PRODUCT_DATA from "./PRODUCT_DATA";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
const ProductForYou = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
    >
      {PRODUCT_DATA.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard productData={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ProductForYou;
