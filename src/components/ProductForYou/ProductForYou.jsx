import React, { Fragment } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import PRODUCT_DATA from "./PRODUCT_DATA";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
const ProductForYou = () => {
  return (
    <Fragment>
      <h1 className="text-3xl font-semibold my-4">Sản phẩm dành cho bạn</h1>
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
    </Fragment>
  );
};
export default ProductForYou;
