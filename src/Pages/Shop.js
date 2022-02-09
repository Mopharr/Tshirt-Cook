import React, { useState, useContext } from "react";
import UserContext from "Context";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../style/shop.css";
import NavNew from '../components/NavNew'

  const Shop = () => {
    const [category, setCategory] = useState(false)
    const [price, setPrice] = useState(false)
    const [allArtwork, setAllArtwork] = useState(false)
  
    const showCategory = () => setCategory(!category)
    const showPrice = () => setPrice(!price)
    const showAllArtwork = () => setAllArtwork(!allArtwork)
    
    const { addToCart, product } = useContext(UserContext);
  console.log(product)
  
    return (
      <>
        <div className={style.shop}>
          <div className={style.shop_overlay}>
            <div className={style.shop_inner}>
              <div className={style.shop_sidebar}>
                <aside>
                  <h2>filters</h2>
                  <div className={style.items}>
                    <ul>
                      <li>
                        <div className={style.collapse}>
                          <button onClick={showCategory}>
                            <span className={style.item_name}>category</span>
                            <span></span>
                          </button>
                          <div className={category ? style.collapse_inner : style.collapse_innerN}>
                            <ul>
                              <li className={style.sub_items}>
                                <button className={style.item_name}>
                                  <span>All categories</span>
                                </button>
                                <ul>
                                  <li>
                                    <button className={style.inner_items}>
                                      <span>Clothing</span>
                                      <span>Kids and Babies</span>
                                      <span>Stickers</span>
                                      <span>Kids and Babies</span>
                                      <span>Wall Art</span>
                                      <span>Stationery & Office</span>
                                      <span>Accessories</span>
                                      <span>Home & Living</span>
                                    </button>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={style.collapse}>
                          <button onClick={showPrice}>
                            <span className={style.item_name}>price</span>
                            <span></span>
                          </button>
                          <div className={price ? style.collapse_inner : style.collapse_innerN}>
                            <ul className={style.items_input}>
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
                        <div className={style.collapse}>
                          <button onClick={showAllArtwork}>
                            <span className={style.item_name}>artwork medium</span>
                            <span></span>
                          </button>
                          <div className={allArtwork ? style.collapse_inner : style.collapse_innerN}>
                            <ul className={style.items_input}>
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
                <h2 className="">Shop</h2>
                <div className="card-container">
                {product.map((item, index) => (
                  <div key={index} className='shop-card'>
                    <div className='shop-card-image'>
                        <img src={item.image.url} alt="" />
                    </div>
                    <p>{item.name}</p>
                    <div class="pricing">
                    <p className="price">Price: {item.price.formatted_with_symbol}</p>
                  </div>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Shop;
  