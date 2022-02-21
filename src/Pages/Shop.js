import React, { useState, useContext } from "react";
import UserContext from "Context";
import "../style/shop.css";
import "../style/product.css";
import NavNew from "../components/NavNew";
import Section from "../components/Section";
import Footer from "components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shop = () => {
  const [cat, setCat] = useState(false);
  const [price, setPrice] = useState(false);
  const [allArtwork, setAllArtwork] = useState(false);

  const showCat = () => setCat(cat);
  const showPrice = () => setPrice(price);
  const showAllArtwork = () => setAllArtwork(!allArtwork);

  const { product, category, fetchProductsByQuery } = useContext(UserContext);
  console.log("cat product", product);

  const QUERY_PRODUCT = ["Sports", "Shirt", "Movies", "Music", "Band"]
  return (
    <>
      <NavNew />
      <Section />
      <div className="shop">
        <div className="shop_overlay">
          <div className="shop_inner">
            <div className="shop_sidebar">
              <aside>
                <h2>filters</h2>
                <div className="items">
                  <ul>
                    <li>
                      <div className="colapse">
                        <button onClick={showCat}>
                          <span className="item_name">categories</span>
                          <span></span>
                        </button>
                        <div
                          className={cat ? "colapse_inner" : "colapse_innerN"}
                        >
                          <ul>
                            <li className="sub_items">
                              <button className="item_name">
                                <span>All categories</span>
                              </button>
                              <ul>
                                {category.map((item) => (
                                  <li>
                                    <button className="inner_items">
                                      <span>{item.name}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="colapse">
                        <button onClick={showPrice}>
                          <span className="item_name">price</span>
                          <span></span>
                        </button>
                        <div
                          className={price ? "colapse_inner" : "colapse_innerN"}
                        >
                          <ul className="items_input">
                            <li>
                              <input type="checkbox" />
                              <span>$</span>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <span>$$</span>
                            </li>
                            <li>
                              <input type="checkbox" />
                              <span>$$$</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="colapse">
                        <button onClick={showAllArtwork}>
                          <span className="item_name">artwork medium</span>
                          <span></span>
                        </button>
                        <div
                          className={
                            allArtwork ? "colapse_inner" : "colapse_innerN"
                          }
                        >
                          <ul className="items_input">
                            <li>
                              <input type="radio" />
                              <span>all medium</span>
                            </li>
                            <li>
                              <input type="radio" />
                              <span>design & illustration</span>
                            </li>
                            <li>
                              <input type="radio" />
                              <span>digital art</span>
                            </li>
                            <li>
                              <input type="radio" />
                              <span>drawing</span>
                            </li>
                            <li>
                              <input type="radio" />
                              <span>painting & mixed media</span>
                            </li>
                            <li>
                              <input type="radio" />
                              <span>photography</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="shop-main">
              <div className="shop-header">
                {QUERY_PRODUCT.map((item) => (
                  <h4 onClick={() => {
                    fetchProductsByQuery(item);
                  }}>{item}</h4>
                ))}
              </div>
              <h2 className="shop-title">
                Shop
                <span>{product.length} Results</span>
              </h2>
              <div className="card-container">
                {product.map((item, index) => (
                  <div className="shop-card">
                    <div className="shop-card-image">
                      <img src={item.image.url || <Skeleton />} alt="" />
                    </div>
                    <p>{item.name || <Skeleton />}</p>
                    <div class="pricing">
                      <p className="price">
                        {item.price.formatted_with_symbol || <Skeleton />}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
