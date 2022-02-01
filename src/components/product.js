import React, { useState, useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import UserContext from "Context";
import "../style/product.css";

const Product = () => {
  const [index, setIndex] = useState(0);
  const { addToCart, product } = useContext(UserContext);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= product.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="product">
      <h2 className="haha">Feature Product</h2>
      <div className="proContent">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {" "}
          <div className="proContentCap">
            {product.map((item) => (
              <SwiperSlide>
                <a href="/details" class="cards">
                  <div class="img-div">
                    <img src={item.image.url} alt="" />
                  </div>
                  <div class="text-container">
                    <h2 class="item-name">{item.name}</h2>
                    <div class="pricing-and-cart">
                      <div class="pricing">
                        <p className="price">
                          Price: {item.price.formatted_with_symbol}
                        </p>
                      </div>
                      <button
                        style={{ fontSize: "1.4em", cursor: "pointer" }}
                        onClick={() => {
                          addToCart(item.id, 1);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
//  <div className="proContentCap">
//    {product.map((item) => (
//      <a href="/details" class="cards">
//        <div class="img-div">
//          <img src={item.image.url} alt="" />
//        </div>
//        <div class="text-container">
//          <h2 class="item-name">{item.name}</h2>
//          <div class="pricing-and-cart">
//            <div class="pricing">
//              <p className="price">Price: {item.price.formatted_with_symbol}</p>
//            </div>
//            <button
//              style={{ fontSize: "1.4em", cursor: "pointer" }}
//              onClick={() => {
//                addToCart(item.id, 1);
//              }}
//            >
//              Add to cart
//            </button>
//          </div>
//        </div>
//      </a>
//    ))}
//    {product.map((item) => (
//      <a href="/details" class="cards">
//        <div class="img-div">
//          <img src={item.image.url} alt="" />
//        </div>
//        <div class="text-container">
//          <h2 class="item-name">{item.name}</h2>
//          <div class="pricing-and-cart">
//            <div class="pricing">
//              <p className="price">Price: {item.price.formatted_with_symbol}</p>
//            </div>
//            <button
//              style={{ fontSize: "1.4em", cursor: "pointer" }}
//              onClick={() => {
//                addToCart(item.id, 1);
//              }}
//            >
//              Add to cart
//            </button>
//          </div>
//        </div>
//      </a>
//    ))}
//  </div>;