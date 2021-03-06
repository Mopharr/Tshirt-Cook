/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import UserContext from "Context";
import "../style/product.css";

const Product = () => {
  const { addToCart, product, fetchSingleProduct } = useContext(UserContext);

  console.log(product)

  const navigate = useNavigate();
  return (
    <div className="product">
      <h2 className="haha">Feature Product</h2>
      <div className="proContent">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            530: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {" "}
          <div className="proContentCap">
            {product.map((item) => (
              <SwiperSlide className="swiper-cards">
                <a
                  onClick={() => {
                    fetchSingleProduct(item.id);
                    navigate("/details");
                  }}
                  class="cards"
                >
                  <div class="img-div">
                    <img src={item.image.url} alt="" />
                  </div>
                  <div class="text-container">
                    <h4 class="item-name">{item.name}</h4>
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
